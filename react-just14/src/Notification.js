import React from "react";
import style from "./Notification.module.css";

function Notification(props) {
  return (
    <div className={style.box}>
      <h3 className={style.title}>{props.title}</h3>
      <p>{props.description}</p>
      <p>
        <a href="closed">ปิดการแจ้งเตือน</a>
      </p>
    </div>
  );
}

export default Notification;
