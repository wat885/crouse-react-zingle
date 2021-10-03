import "./TattooPost.css";
import React from "react";

function TattooPost(props) {
  const { tattoo, onBgClick } = props;
  return (
    <div>
      <div className="tattoo-post">
        <div className="tattoo-post-bg" onClick={onBgClick} />
        <div className="tattoo-post-content">
          <img src={tattoo.fullUrl} />
          <h4>{tattoo.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default TattooPost;
