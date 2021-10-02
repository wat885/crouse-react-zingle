import "./App.css";
import AppHeader from "./components/AppHeader";
import Tatooitem from "./components/Tatooitem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";




function App() {
  const tattooElements = tattoos.map((tattoo, index) => {
    return <Tatooitem key={index} tattoo={tattoo} />;
  });

  return (
    <div className="app">
      <AppHeader />

      <div className="app-grid">{tattooElements}</div>

      {/* <TattooPost /> */}
    </div>
  );
}

export default App;
