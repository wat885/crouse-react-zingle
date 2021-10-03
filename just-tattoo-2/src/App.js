import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Tatooitem from "./components/Tatooitem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);


  function onTattoOpneClick(theTattoo) {
    setSelectedTattoo(theTattoo)
  }
  function onTattoCloseClick() {
    setSelectedTattoo(null)
  }

  const tattooElements = tattoos.map((tattoo, index) => {
    return <Tatooitem key={index} tattoo={tattoo} onTattooClick={onTattoOpneClick} />;
  });

  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattoCloseClick} />;
  }

  return (
    <div className="app">
      <AppHeader />
      {/* <button onClick={()=> {onTattoOpneClick(tattoos[3])}}>สักหน่อย</button> */}

      <div className="app-grid">{tattooElements}</div>

      {tattooPost}
    </div>
  );
}

export default App;
