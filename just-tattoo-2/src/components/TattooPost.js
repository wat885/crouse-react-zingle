import "./TattooPost.css";
import React from "react";

function TattooPost(props) {
  const { tattoo, onBgClick } = props;
  return (
    <div>
      <div className="tattoo-post" onClick={onBgClick}>
        <div className="tattoo-post-bg" onClick={onBgClick} />
        <div className="tattoo-post-content">
          <img src={tattoo.fullUrl} alt='TattooPost' />
          <h4>{tattoo.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default TattooPost;
