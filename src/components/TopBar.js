import React, {useState} from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "firebase";
import { useAuth } from "../contexts/AuthContext";
import { loading } from "../redux/reducers/homePageState";
import { showLoginWidget } from "../redux/reducers/homePageState";
import { setShowCartDetail } from "../redux/productsAction";

const TopBar = (props) => {
  const cart = useSelector((state) => state.cartItemsCnt.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  let userLoggedIn = null;
  userLoggedIn = !!auth().currentUser;
  const cartTotalAmount = useSelector((state) => state.showCartAmount.cartTotalAmount);
  let totalAmount = 0
  cart.forEach((e) => {
    totalAmount += e.price * e.count;
  });

  const setLoading = () => {
    dispatch(loading());
  };


  const doShowLoginWidget = () => {
    console.log("show login");
    dispatch(showLoginWidget());
  };

  async function handleOnSignOut(e) {
    console.log("sign out called");
    e.preventDefault();
    try {
      setLoading();
      await signOut();
      console.log("signed out");
      navigate("/login");
    } catch {}
    setLoading();
  }

  console.log(userLoggedIn);

  // console.log(auth().currentUser);
  const handleLogInOnClick = (e) => {
    console.log("log clicked");
    if (userLoggedIn) {
      handleOnSignOut(e);
    } else {
      doShowLoginWidget();
    }
  };

  const handleOnClickTitle = () => {
    if (userLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const showCartDetail = () => {
    console.log("cart detail toggled");
    dispatch(setShowCartDetail(true));
  };


  return (
    <div className={"flex flex-col w-full bg-slate-900 p-3 lg:py-0"}>
      {/*mobile div above the search bar*/}
      <div className={"flex flex-row items-center"}>
        <button onClick={handleOnClickTitle}>
          <div
            className={
              "flex flex-row align-items-baseline ml-3 mr-auto lg:mr-0"
            }
          >
            <h1 className={"font-normal text-amber-50 text-2xl"}>M</h1>
            <h1 className={"hidden shrink lg:flex text-amber-50 text-2xl mr-1"}>
              anagement
            </h1>
            <p className={"text-amber-50"}>Chuwa</p>
          </div>
        </button>

        <div id={"search-bar"} className={"hidden lg:block lg:ml-10"}>
          <input className={"w-full border-2"} />
          <button className={"-ml-5"}>
            <AiOutlineSearch />
          </button>
        </div>

        <div
          className={
            "flex flex-row items-center mr-3  lg:mr-3 lg: ml-auto lg:gap-4"
          }
        >
          <button
            className={"flex flex-row text-amber-50 my-1 mr-4"}
            onClick={handleLogInOnClick}
          >
            <AiOutlineUser color={"white"} size={26} />
            <div className={"hidden lg:flex"}>
              {userLoggedIn ? "Log Out" : "Sign in"}
            </div>
          </button>
          <button
            className={"flex flex-row text-amber-50 my-1"}
            onClick={showCartDetail}
          >
            <AiOutlineShoppingCart color={"white"} size={26} />
            <div>${totalAmount }</div>
          </button>
        </div>
      </div>

      {/*mobile search bar*/}
      <div className={"lg:hidden pt-2 w-full"}>
        <input className={"w-full border-2"} />
        <button className={"-ml-5"}>
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
