import React, { useEffect } from "react";
import "./Popup.css";

function Popup(props) {
  useEffect(() => {
    console.log("popup start");
    document.documentElement.style.overflowY = "hidden";
    return () => {
      console.log("pop up end");
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  return <div onClick={props.onPopupClose} className="popup"></div>;
}

export default Popup;
