import React from "react";

const SendFile = React.forwardRef((props, ref) => {
  return (
    <div>
      <p>
        <input type="file" ref={ref} />
      </p>
      <p>
        <button type="button" onClick={props.onUploadClick}>
          อัพโหลด
        </button>
      </p>
    </div>
  );
});

export default SendFile;
