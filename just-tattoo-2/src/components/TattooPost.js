import './TattooPost.css'
import React from "react";

function TattooPost(props) {
  const {tattoo} = props;
  return (
    <div>
      <div className="tattoo-post">
        <div className="tattoo-post-bg" />
        <div className="tattoo-post-content">
          <img src={tattoo.thumbnailUrl}/>
          <h4>{tattoo.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default TattooPost;
