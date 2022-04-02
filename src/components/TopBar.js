import React from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showLoginWidget } from "../redux/ducks/homePageState";

const TopBar = (props) => {
  const dispatch = useDispatch();
  const handleOnCLickLogin = () => {
    dispatch(showLoginWidget());
  };

  console.log(props.LoginWidgetShowed);
  return (
    <div className={"flex flex-col w-full bg-slate-900 p-3 lg:py-0"}>
      {/*mobile div above the search bar*/}
      <div className={"flex flex-row items-center"}>
        <div
          className={"flex flex-row align-items-baseline ml-3 mr-auto lg:mr-0"}
        >
          <h1 className={"font-normal text-amber-50 text-2xl"}>M</h1>
          <h1 className={"hidden shrink lg:flex text-amber-50 text-2xl mr-1"}>
            anagement
          </h1>


          <p className={"text-amber-50"}>Chuwa</p>
        </div>
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
          <Link to={""}>
            <button
              className={"flex flex-row text-amber-50 my-1 mr-4"}
              onClick={handleOnCLickLogin}
            >
              <AiOutlineUser color={"white"} size={26} />
              <div className={"hidden lg:flex"}>Sign in</div>
            </button>
          </Link>

          <button className={"flex flex-row text-amber-50 my-1"}>
            <AiOutlineShoppingCart color={"white"} size={26} />
            <tspan>Amount</tspan>
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
