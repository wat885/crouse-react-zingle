import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppSearch from "./components/AppSearch";
import Tatooitem from "./components/Tatooitem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onTattoOpneClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }
  function onTattoCloseClick() {
    setSelectedTattoo(null);
  }

  const tattooElements = tattoos
    .filter((tattoo) => {
      return tattoo.title.includes(searchText); // มีอยู่ไหม
    })
    .map((tattoo, index) => {
      return (
        <Tatooitem
          key={index}
          tattoo={tattoo}
          onTattooClick={onTattoOpneClick}
        />
      );
    });

  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = (
      <TattooPost tattoo={selectedTattoo} onBgClick={onTattoCloseClick} />
    );
  }

  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />

          <div className="app-grid">{tattooElements}</div>
        </div>
      </section>

      {tattooPost}
      {/* <button onClick={()=> {onTattoOpneClick(tattoos[3])}}>สักหน่อย</button> */}
    </div>
  );
}

export default App;
