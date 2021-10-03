import React from "react";
import "./Tatooitem.css";

function Tatooitem(props) {
  const { tattoo, onTattooClick} = props;
  return (
    <div>
      <div className="tattoo-item">
        <img src={tattoo.thumbnailUrl} onClick={()=> {onTattooClick(tattoo)}} alt='Tatooitem'/>
        <h4>{tattoo.title}</h4>
      </div>
    </div>
  );
}

export default Tatooitem;
