import "./App.css";
import AppHeader from "./components/AppHeader";
import Tatooitem from "./components/Tatooitem";
import TattooPost from "./components/TattooPost";

function App() {
  return (
    <div className="app">
      <AppHeader />

      <div className="app-grid">
        <Tatooitem />
        <Tatooitem />
        <Tatooitem />
        <Tatooitem />
      </div>

      
      {/* <TattooPost /> */}
    </div>
  );
}

export default App;
