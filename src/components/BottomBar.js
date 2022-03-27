import React from "react";

import {AiOutlineYoutube, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'

const BottomBar = () => {
  return (
      <div className={"flex flex-col lg:flex-row items-center lg: justify-between bg-slate-900 p-3 gap-3 mt-auto"}>

          <div className={" lg:order-2 flex flex-row gap-3"}>
              <AiOutlineYoutube  color={"white"} size={23}/>
              <AiOutlineTwitter color={"white"} size={23}/>
              <AiOutlineFacebook color={"white"} size={23}/>
          </div>
          <div className={"flex lg:order-last flex-row gap-3 "}>
              <button className={"text-amber-50"}>Contact Us</button>
              <button className={"text-amber-50"}>Privacy Policies</button>
              <button className={"text-amber-50"}>Help</button>
          </div>
          <p className={"lg:order-1 text-amber-50"}>@2022 All Rights Reserved.</p>
      </div>
  )
}

export default BottomBar;