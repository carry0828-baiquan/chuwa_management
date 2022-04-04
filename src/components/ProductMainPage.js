import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { setProducts } from "../redux/productsAction";
import ProductThumbNail from "./ProductThumbNail";
import LoadingSpinner from "./LoadingSpinner";
function ProductMainPage() {
  const [loading, setLoading] = useState(true);
  const posts = useSelector((state) => state.allProducts.products);
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator
          key: doc.id, // `id` given to us by Firebase
        });
      });
      dispatch(setProducts(getPostsFromFirebase));
      setLoading(false);
    });

    // return cleanup function
    return () => subscriber();
  }, [dispatch, loading]); // empty dependencies array => useEffect only called once
  console.log(posts);
  if (loading) {
    return <LoadingSpinner />;
  }

  const handleOnAddProduct = () => {
    naviagte("/addProduct");
  };

  return (
    <div>
      <div className="flex flex-col my-3 lg:flex-row  items-center lg:mb-6 lg:mt-3 lg:mx-6">
        <div className="text-3xl font-extrabold mx-auto my-3 lg:flex-none ">
          Products
        </div>
        <div className="lg:mx-auto lg:flex-grow"></div>
        <div className="mx-auto lg:flex-none">
          <button className=" bg-indigo-600 p-2 rounded text-white">
            drop down
          </button>
          <button
            className="bg-indigo-600 ml-3 p-2 text-white rounded"
            onClick={handleOnAddProduct}
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 mx-3 lg:grid-cols-5 lg: grid-rows-2">
        {posts.length > 0 ? (
          posts.map((post) => (
            <ProductThumbNail
              key={post.key}
              name={post.name}
              image={post.img}
              price={post.price}
              des={post.des}
            ></ProductThumbNail>
          ))
        ) : (
          <h1 className="flex justify-center">
            no products yet, sign up and add one!
          </h1>
        )}
      </div>
    </div>
  );
}

export default ProductMainPage;
