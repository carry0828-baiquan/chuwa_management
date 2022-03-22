import React from "react";
// import "./BottomBar.css"
import {AiOutlineYoutube, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'


const BottomBar = () => {
  return (
      <div className={"bottom-bar"}>
          <text className={"bottom-bar-rights"}>@2022 All Rights Reserved.</text>
          <div className={"socia-media-btns"}>
              <AiOutlineYoutube className={"bottom-youtube-icon"} size={23}/>
              <AiOutlineTwitter className={"bottom-twitter-icon"}size={23}/>
              <AiOutlineFacebook className={"bottom-facebook-icon"} size={23}/>
          </div>
          <div className={"bottom-contact-btns"}>
              <button className={"contact-us"}>Contact Us</button>
              <button className={"privacy-policies"}>Privacy Policies</button>
              <button className={"help"}>Help</button>
          </div>
      </div>
  )
}


export default BottomBar;