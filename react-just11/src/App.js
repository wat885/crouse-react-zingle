import { useRef, useState } from "react";
import "./App.css";
import SelectTextarea from "./SelectTextarea";
import SendFile from "./SendFile";

function App() {
  const textareaRef = useRef(null);
  const fileRef = useRef(null);

  function onAllTextClick() {
    textareaRef.current.focus();
    textareaRef.current.select();
  }

  function onUploadClick() {
    const myFile = fileRef.current.files[0];
    console.log(myFile);
  }

  return (
    <section className="app-section">
      <div className="app-container">
        <h2>texttest</h2>
        <SelectTextarea onAllTextClick={onAllTextClick} ref={textareaRef} />


        <SendFile onUploadClick={onUploadClick} ref={fileRef} />
      </div>
    </section>
  );
}

export default App;
