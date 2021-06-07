import './App.css';
import DrumPads from "./components/DrumPads";
import Controls from "./components/Controls";
function App() {


  return (


    <main className="App" id="drum-machine">
        <div id={"container"}>
            <DrumPads/>
            <Controls/>
        </div>

    </main>
  );
}

export default App;
