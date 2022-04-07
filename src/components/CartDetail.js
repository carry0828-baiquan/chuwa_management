import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import CartItemDetail from "./CartItemDetail";
import {setShowCartDetail} from "../redux/productsAction";

function CartDetail(props) {
  const carts = useSelector((state) => state.cartItemsCnt.cart);
  // console.log("cartdetail window showing",props.showing);
    let totalAmount = 0;
    carts.forEach((e) => {
        totalAmount += e.price * e.count;
    });
    console.log("cart total amount", totalAmount)

    let cartCnt = 0;
  carts.forEach(() => {
    cartCnt++;
  });

  const dispatch = useDispatch();

  const closeWindow = () => {
      dispatch(setShowCartDetail(false));
  }

  return props.showing ? (
    <div >
      <div id="top-bar" className={"bg-indigo-600 flex flex-row gap-1 items-center py-2"}>
          <div className={"text-white text-2xl ml-3"}>Cart</div>
          <div className={"text-white"}>({cartCnt})</div>
          <div className={"flex-grow"}/>
          <button className={"mr-3"}><AiOutlineClose color={"white"} size={36} onClick={closeWindow}/></button>
      </div>
        {carts.map((e) => (
            <CartItemDetail key={e.key} img={e.img} name={e.name} price={e.price} count={e.count}/>
        ))}
        <div className={"flex flex-row mx-5 font-bold my-3"}>
            <div>Subtotal</div>
            <div className={"flex-grow"}/>
            <div>${totalAmount}</div>
        </div>
        <div className={"flex flex-row mx-5  font-bold my-3"}>
            <div>Tax</div>
            <div className={"flex-grow"}/>
            <div>${Math.round(totalAmount * 0.11 * 100) / 100 }</div>
        </div>
        <div className={"flex flex-row mx-5  font-bold my-3"}>
            <div>Discount</div>
            <div className={"flex-grow"}/>
            <div>next time ?</div>
        </div>
        <div className={"flex flex-row mx-5 font-bold my-3"}>
            <div>Estimated total</div>
            <div className={"flex-grow"}/>
            <div>${Math.round(totalAmount * 1.11 * 100) / 100 }</div>
        </div>
        <div className={"flex flex-row justify-center"}>
            <button className={"bg-indigo-600 text-white text-2xl p-2 rounded"}>continue to check out</button>
        </div>

    </div>
  ) : (
    ""
  );
}

export default CartDetail;
