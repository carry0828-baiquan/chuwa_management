import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeCart, showCartItemAmount} from "../redux/productsAction";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import {useState} from "react";


const CartItemDetail = (props) => {
    const cart = useSelector((state) => state.cartItemsCnt.cart);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.allProducts.products);
    const [itemCount, setItemCount] = useState(props.count);
    let foundDup = false;
    let data;
    let totalAmount = 0;
    cart.forEach((e) => {
        totalAmount += e.price * e.count;
    });
    posts.forEach((post) => {
        if (post.name === props.name) {
            data = post;
        }
    });

    const removeItem = () => {
        //find the curr index in the posts

        cart.forEach((e) => {
            if(e.name === props.name) {
                console.log(e)
                dispatch(removeCart(e))
                e.count = 1;
                console.log("remove", e)
            }
        })
    }
    console.log(cart)

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
                // console.log("add")
                if (!foundDup) {
                    dispatch(addToCart(e))
                }
            }
        })
        cart.forEach((e) => {
            totalAmount += e.price * e.count;
        });
        dispatch(showCartItemAmount(totalAmount))
        setItemCount(data.count)
        // console.log("current cart", cart)
    }

    const minusPrice = () => {
        cart.forEach((e) => {
            if (e.name === props.name) {
                e.count --;
            }
            if (e.count === 0) {
                removeItem();
            }
        })
        cart.forEach((e) => {
            totalAmount += e.price * e.count;
        });
        dispatch(showCartItemAmount(totalAmount))
        setItemCount(data.count)
    }
    return (
        <div className={"flex flex-row gap-3 mx-3 mt-3"}>
            <img className={"w-40 h-40 object-cover rounded-2xl"} src={props.img} alt={""}/>
            <div className={"flex flex-col gap-2"}>
                <div className={"text-xl font-bold"}>{props.name}</div>
                <div className={"text-purple-700 font-bold"}>${props.price}</div>
                <div className={"flex flex-row gap-1"}>
                    <div>count</div>
                    <div>{itemCount}</div>
                </div>
                <div className={"flex flex-row gap-3"}>
                    <button className={"bg-indigo-600 text-white p-2 rounded"} onClick={handleOnAddPrice}><AiOutlinePlus/></button>
                    <button className={"bg-indigo-600 text-white p-2 rounded"} onClick={minusPrice}><AiOutlineMinus/></button>
                    <button onClick={removeItem} className={"bg-indigo-600 text-white p-2 rounded"}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItemDetail;
