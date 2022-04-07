import React from "react";
import AddProduct from "./AddProduct";
import {useSelector} from "react-redux";


const EditProduct = () => {
    const posts = useSelector((state) => state.allProducts.products);
    const product = useSelector((state) => state.product.select);
    console.log(product)
    const cart = useSelector((state) => state.cartItemsCnt.cart);
    let foundDup = false;
    let data;
    posts.forEach((post) => {
        if (post.name === product) {
            data = post;
        }
    });
    console.log(data)
    return (
            <AddProduct kind={"Update"} name={data.name} des = {data.des} price = {data.price} img={data.img}/>
        )
}

export default EditProduct;