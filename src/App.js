import "./App.css";
import Achievement from "./components/Achievement";
import Biography from "./components/Biography";
import Cocurricular from "./components/Cocurricular";
import First from "./components/First";
import Last from "./components/Footer";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Second from "./components/Second";

function App() {
  return (
    <div className="App">
      <First></First>
      <Second></Second>
      <Biography></Biography>
      <Achievement></Achievement>
      <Cocurricular></Cocurricular>
      <Project></Project>
      <Resume></Resume>
      <Last></Last>
    </div>
  );
}

export default App;
