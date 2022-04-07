import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addPriceToCart,
    addToCart,
    removeSelectedProduct,
    selectedProduct, showCartItemAmount,
} from "../redux/productsAction";
import { addCartReducer } from "../redux/reducers/productsReducer";

function ProductThumbNail(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.select);
  const cart = useSelector((state) => state.cartItemsCnt.cart);
  const posts = useSelector((state) => state.allProducts.products);
  let foundDup = false;
    let totalAmount = 0

    const handleOnClickImg = () => {
    dispatch(selectedProduct(props.name));
    navigate("/productDetail");
    console.log(product.name);
  };
    const handleOnClickEdit = () => {
        dispatch(selectedProduct(props.name));
        navigate("/EditProduct");
        console.log(product.name);
    };

 function handleOnAddPrice() {
      posts.forEach((e) => {
          if(e.name === props.name) {
              for(let i = 0; i < cart.length; i++) {
                  if (e.key === cart[i].key) {
                      cart[i].count ++;
                      console.log("count + 1")
                      foundDup = true
                  }
              }
              if (!foundDup) {
                 dispatch(addToCart(e))
              }
          }
      })
     cart.forEach((e) => {
         totalAmount += e.price * e.count;
     });



     dispatch(showCartItemAmount(totalAmount))
      console.log("after add price",totalAmount)
  }

  return (
    <div className="border-2 border-gray-200 m-1 p-2 rounded-lg h-fit">
      <img
        src={props.image}
        alt=""
        className="object-cover rounded-lg mx-auto h-80 mb-3 w-full"
        onClick={handleOnClickImg}
      />
      <div className="text-gray text-xl">{props.name}</div>
      <div className="text-2xl font-bold">{"$" + props.price}</div>
      <div className="flex flex-row">
        <button
          className="mr-2 bg-indigo-600 p-1 rounded text-white w-1/2"
          onClick={handleOnAddPrice}
        >
          add
        </button>
        <button className="border-2 border-gray-400 p-1 rounded w-1/2" onClick={handleOnClickEdit}>
          edit
        </button>
      </div>
    </div>
  );
}
export default ProductThumbNail;
