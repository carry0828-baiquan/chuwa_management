import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/productsAction";
function ProductThumbNail(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.select);
  const handleOnClickImg = () => {
    navigate("/productDetail");
    dispatch(selectedProduct(props.name));
    console.log(product);
  };

  return (
    <div className="border-2 border-gray-400 m-1 p-2 rounded-lg h-fit">
      <img
        src={props.image}
        alt=""
        className="object-cover rounded-lg mx-auto h-80 mb-3 w-full"
        onClick={handleOnClickImg}
      />
      <div className="text-gray text-xl">{props.name}</div>
      <div className="text-2xl font-bold">{"$" + props.price}</div>
      <div className="flex flex-row">
        <button className="mr-2 bg-indigo-600 p-1 rounded text-white w-1/2">
          add
        </button>
        <button className="border-2 border-gray-400 p-1 rounded w-1/2">
          edit
        </button>
      </div>
    </div>
  );
}
export default ProductThumbNail;
