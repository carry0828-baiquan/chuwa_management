import React from "react";

import {AiOutlineYoutube, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'


const BottomBar = () => {
  return (
      <div className={"flex flex-col lg:flex-row items-center lg: justify-between bg-slate-900 p-3 gap-3 mt-auto lg: w-full"}>
          <text className={"order-last lg:order-first text-amber-50"}>@2022 All Rights Reserved.</text>
          <div className={"order-first lg:order-none flex flex-row gap-3"}>
              <AiOutlineYoutube  color={"white"} size={23}/>
              <AiOutlineTwitter color={"white"} size={23}/>
              <AiOutlineFacebook color={"white"} size={23}/>
          </div>

          <div className={"flex order-2 lg:order-last flex-row gap-3 "}>
              <button className={"text-amber-50"}>Contact Us</button>
              <button className={"text-amber-50"}>Privacy Policies</button>
              <button className={"text-amber-50"}>Help</button>
          </div>
      </div>
  )
}


export default BottomBar;