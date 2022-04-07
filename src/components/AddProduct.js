import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import { db } from "../firebase";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

function AddProduct(props) {
  const imgRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const desRef = useRef();
  const countRef = useRef();
  const navigate = useNavigate();
  const [imgUrl, setImgURL] = useState();
  const [name, setName] = useState();
  let productExist = false;
  const posts = useSelector((state) => state.allProducts.products);

  const passImgURL = () => {
    setImgURL(imgRef.current.value);
  };

  posts.forEach((post) => {
    if (post.name === name) {
      productExist = true;
    }});

  const handlePostToFireStore = () => {
    if (
      //check empty field
      imgRef.current.value &&
      nameRef.current.value &&
      priceRef.current.value &&
      desRef.current.value
    ) {
      db.collection("products").doc(nameRef.current.value)
        .set({
          img: imgRef.current.value,
          name: nameRef.current.value,
          price: priceRef.current.value,
          des: desRef.current.value,
          count: parseInt(countRef.current.value),
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      alert("info is not complete");
    }
  };

  const handleOnUpdateFireStore = () => {
    var toUpdate = db.collection("products").doc(nameRef.current.value);

// Set the "capital" field of the city 'DC'
    return toUpdate.update({
      img: imgRef.current.value,
      name: nameRef.current.value,
      price: priceRef.current.value,
      des: desRef.current.value,
    })
        .then(() => {
          navigate("/")
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
  }


  const deleteOnFireStore = () => {
    db.collection("products").doc(nameRef.current.value).delete().then(() => {
      console.log("Document successfully deleted!");
     navigate("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  return (
    <div className="flex flex-col gap-3 mx-3 lg:mx-auto mb-3">
      <div className="text-2xl flex justify-center">{props.kind} Product</div>
      <label>Product name</label>
      <label id="nameError" className={`text-red-600 ${productExist ? "visible" : "hidden"}`}>Product already exists, please change to a new one</label>
      <input type="text" value={props.name} className="border-2" ref={nameRef} onChange={()=>setName(nameRef.current.value)}/>
      <label>Product Description</label>
      <textarea
    className="border-2 resize-y "
    ref={desRef} defaultValue={props.des}
    />
      <label>Category</label>
      <DropdownButton title="category1" />
      <label>Price</label>
      <input className="border-2" defaultValue={props.price} ref={priceRef} type="number"/>
      <label>count</label>
      <input className="border-2" ref={countRef} value={1} type="number"/>
      <label>Add Image Link</label>
      <input className="border-2" defaultValue={props.img} ref={imgRef} onChange={passImgURL}/>
      <div className="flex justify-center border-dashed border-2 p-2">
        <img src={imgUrl} alt="preview"/>
      </div>
      <button
        className="bg-indigo-600 text-white rounded p-2"
        onClick={props.kind ==="Update" ? handleOnUpdateFireStore : handlePostToFireStore}
      >
        {props.kind === "Update" ? "Update" : "Add"} Product
      </button>
      <button
          className="bg-red-600 text-white rounded p-2"
          onClick={deleteOnFireStore}
      >
        Delete Product
      </button>
    </div>
  );
}

export default AddProduct;
