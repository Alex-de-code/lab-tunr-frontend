import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Songs from "./Components/Songs";
import Index from "./Components/Index";
import SongDetail from "./Components/SongDetail";
import SongEdit from "./Components/SongEdit";
import SongNewForm from "./Components/SongNewForm";

const App = () => {
  //define api url
  const API = import.meta.env.VITE_API_URL;
  // usestate for list of all songs in db
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, [songs]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/songs" element={<Songs songs={songs} />} />
        <Route path="/songs/:id" element={<SongDetail API={API} />} />
        <Route path="/songs/:id/edit" element={<SongEdit API={API} />} />
        <Route path="/songs/new" element={<SongNewForm API={API} />} />
      </Routes>
    </div>
  );
};

export default App;
