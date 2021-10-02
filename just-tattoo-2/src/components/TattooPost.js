import './TattooPost.css'
import React from "react";

function TattooPost() {
  return (
    <div>
      <div className="tattoo-post">
        <div className="tattoo-post-bg" />
        <div className="tattoo-post-content">
          <img src="/images/tattoo-01-large.jpg" />
          <h4>ต่ายน้อย 1</h4>
        </div>
      </div>
    </div>
  );
}

export default TattooPost;
