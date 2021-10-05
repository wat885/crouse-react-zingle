import React, { useEffect } from "react";
import "./Popup.css";

function Popup(props) {
  useEffect(() => {
    console.log("popup start");
    return () => {
      console.log("pop up end");
    };
  }, []);

  return <div onClick={props.onPopupClose} className="popup"></div>;
}

export default Popup;
