import React from "react";
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
    <div className="flex flex-col gap={3}">
      <div className="text-2xl flex justify-center">Create Product</div>
      <label>Product name</label>
      <input type="text" className="border-2" ref={nameRef}></input>
      <label>Product Description</label>
      <input className="border-2" ref={desRef}></input>
      <label>Category</label>
      <DropdownButton title="category1" />
      <label>price</label>
      <input className="border-2" ref={priceRef}></input>
      <label>In Stock Quantity</label>
      <input className="border-2"></input>
      <label>Add Image Link</label>
      <input className="border-2" ref={imgRef}></input>
      <div className="flex justify-center bg-slate-200">
        <div>Image preview!</div>
      </div>
      <button className="" onClick={handlePostToFireStore}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
