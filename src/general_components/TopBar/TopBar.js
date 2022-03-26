import React from "react";
import {AiOutlineUser, AiOutlineShoppingCart} from "react-icons/ai"

const TopBar = () => {


  return (
            <div className={"flex lg:block flex-col " +
                "w-full bg-slate-900 px-3 py-3 lg: items-center"}>
                <div className={"flex flex-row items-center"}>
                    <div className={"flex flex-row align-items-baseline ml-3 mr-auto"}>
                        <h1 className={"font-bold lg: font-normal text-amber-50 text-2xl"}>M</h1>
                        <h1 className={"hidden shrink lg:flex text-amber-50 text-2xl mr-1"}>anagement</h1>
                        <p className={"text-amber-50"}>Chuwa</p>
                    </div>
                    <div id={"search-bar"} className={"hidden lg:flex pt-2 align-self-center w-full ml-auto lg:ml-10 lg:mr-30"}>
                        <input className={"w-full border-2"}/>
                        <button className={"-ml-10"}>find</button>
                    </div>

                    <div className={"flex flex-row items-center lg: gap-5" +
                        " my-1 mr-2  lg: ml-10 lg: lr-10"}>
                        <button className={"flex flex-row -mr-9 lg:mr-0 lg:gap-3 text-amber-50 my-1 items-center"
                          }>
                            <AiOutlineUser color={"white"} size={26} className={"lg:shrink-0"}/>
                            <tspan className={"hidden lg:block lg:shrink-0"}>Sign in</tspan>
                        </button>

                        <button className={"flex flex-row text-amber-50 my-1" +
                            "items-center lg:gap-1"}>
                            <AiOutlineShoppingCart className={"whitespace-nowrap"} color={"white"} size={26}/>
                            <tspan className={"whitespace-nowrap"}>Amount</tspan>
                        </button>

                    </div>
                </div>
                <div className={"lg:hidden pt-2 align-self-center w-full"}>
                    <input className={"w-full border-2"}/>
                    <button className={"-ml-10"}>find</button>
                </div>
            </div>
  )
}

export default TopBar;