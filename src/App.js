import { Routes, Route } from "react-router-dom";
import Character from "./components/Character";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import EpisodeList from "./components/EpisodeList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route strict exact path="/" element={<CharacterList />} />
        <Route path="/episodes" element={<EpisodeList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
