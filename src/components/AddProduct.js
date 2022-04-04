import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import { db } from "../firebase";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const imgRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const desRef = useRef();
  const navigate = useNavigate();
  const [imgUrl, setImgURL] = useState();

  const passImgURL = () => {
    setImgURL(imgRef.current.value);
  };

  const handlePostToFireStore = () => {
    if (
      //check empty field
      imgRef.current.value &&
      nameRef.current.value &&
      priceRef.current.value &&
      desRef.current.value
    ) {
      db.collection("products")
        .add({
          img: imgRef.current.value,
          name: nameRef.current.value,
          price: priceRef.current.value,
          des: desRef.current.value,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      alert("info is not coomplete");
    }
  };

  return (
    <div className="flex flex-col gap-3 mx-3 lg:mx-auto mb-3">
      <div className="text-2xl flex justify-center">Create Product</div>
      <label>Product name</label>
      <input type="text" className="border-2" ref={nameRef}></input>
      <label>Product Description</label>
      <textarea
        type="text"
        className="border-2 resize-y "
        ref={desRef}
      ></textarea>
      <label>Category</label>
      <DropdownButton title="category1" />
      <label>Price</label>
      <input className="border-2" ref={priceRef}></input>
      <label>In Stock Quantity</label>
      <input className="border-2"></input>
      <label>Add Image Link</label>
      <input className="border-2" ref={imgRef} onChange={passImgURL}></input>
      <div className="flex justify-center border-dashed border-2 p-2">
        <img src={imgUrl} alt="preview"></img>
      </div>
      <button
        className="bg-indigo-600 text-white rounded p-2"
        onClick={handlePostToFireStore}
      >
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
