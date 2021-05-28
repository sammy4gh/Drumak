import './App.css';
import DrumPads from "./components/DrumPads";
import Controls from "./components/Controls";
function App() {


  return (
    <section className="App" id="drum-machine">
        <div id={"display"}>
            <DrumPads/>
            <Controls/>
        </div>

    </section>
  );
}

export default App;
