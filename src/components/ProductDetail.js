import React from "react";
import { useSelector } from "react-redux";
function ProductDetail() {
  const posts = useSelector((state) => state.allProducts.products);
  const product = useSelector((state) => state.product.select);
  let data;
  posts.forEach((post) => {
    if (post.name === product) {
      data = post;
    }
  });
  console.log(data);
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
            <button className="mr-2 bg-indigo-600 le p-1 rounded text-white w-1/2">
              Add To Cart
            </button>
            <button className="border-2 border-gray-400 p-1 rounded w-1/2">
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
