import React from "react";
import "./Tatooitem.css";

function Tatooitem(props) {
  const { tattoo } = props;
  return (
    <div>
      <div className="tattoo-item">
        <img src={tattoo.thumbnailUrl} />
        <h4>{tattoo.title}</h4>
      </div>
    </div>
  );
}

export default Tatooitem;
