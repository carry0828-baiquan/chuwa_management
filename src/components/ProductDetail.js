import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, selectedProduct} from "../redux/productsAction";
import {useNavigate} from "react-router-dom";
function ProductDetail() {
  const posts = useSelector((state) => state.allProducts.products);
  const product = useSelector((state) => state.product.select);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cartItemsCnt.cart);
  let foundDup = false;
  let data;
  posts.forEach((post) => {
    if (post.name === product) {
      data = post;
    }
  });
  const handleOnClickEdit = () => {
    dispatch(selectedProduct(data.name));
    navigate("/EditProduct");
    console.log(product.name);
  };


  function handleOnAddPrice() {

    posts.forEach((e) => {
      if(e.name === data.name) {
        for(let i = 0; i < cart.length; i++) {
          if (e.key === cart[i].key) {
            cart[i].count ++;
            console.log("count + 1")
            foundDup = true
            break
          }
        }
        console.log("add")
        if (!foundDup) {
          dispatch(addToCart(e))
        }
      }
    })

  }
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold flex mx-3 my-3 justify-center lg:justify-start lg:mx-auto lg:mt-3 mb-3">
        Products Detail
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 lg:mx-3">
        <img
          src={data.img}
          alt=""
          className="object-cover rounded-lg mx-auto mb-3 box-content h-80 w-80 lg:w-fit lg:h-fit "
        />
        <div className="flex flex-col mb-3 lg:gap-10">
          <div className="text-gray font-bold text-2xl mx-3">{data.name}</div>
          <div className="text-gray-500 mx-3">{data.des}</div>
          <div className="text-2xl font-bold mx-3">{"$" + data.price}</div>
          <div className="flex flex-row mx-3">
            <button className="mr-2 bg-indigo-600 le p-1 rounded text-white w-1/2" onClick={handleOnAddPrice}>
              Add To Cart
            </button>
            <button className="border-2 border-gray-400 p-1 rounded w-1/2" onClick={handleOnClickEdit}>
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
