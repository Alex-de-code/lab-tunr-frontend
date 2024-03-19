import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SongNewForm = ({ API }) => {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const addSong = () => {
    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/songs`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="Edit">
      <div className="text-4xl text-white text-center p-3 bg-green-950 ">
        New Song Form View
      </div>
      <div className="mx-10  mt-10 bg-zinc-200 p-7 shadow">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="pr-2">
            Name:
          </label>
          <input
            className="bg-green-300 border-solid border-green-500 border-2 hover:bg-green-100 w-1/2 mb-4"
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Song"
            required
          />
          <br />
          <label htmlFor="artist" className="pr-2">
            Artist:
          </label>
          <input
            className="bg-green-300 border-solid border-green-500 border-2 hover:bg-green-100 w-1/2 mb-4"
            id="artist"
            value={song.artist}
            type="text"
            placeholder="Name of Artist/s"
            onChange={handleTextChange}
            required
          />
          <br />
          <label htmlFor="album" className="pr-2">
            Album:
          </label>
          <input
            className="bg-green-300 border-solid border-green-500 border-2 hover:bg-green-100 w-1/2 mb-4"
            id="album"
            type="text"
            name="album"
            value={song.album}
            placeholder="Name of Album"
            onChange={handleTextChange}
          />
          <br />
          <label htmlFor="time" className="pr-2">
            Time:
          </label>
          <input
            className="bg-green-300 border-solid border-green-500 border-2 hover:bg-green-100 w-1/2 mb-4"
            id="time"
            type="text"
            name="time"
            value={song.time}
            placeholder="Duration of Song"
            onChange={handleTextChange}
          />
          <br />
          <label htmlFor="is_favorite" className="pr-2">
            Favorite:
          </label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
          <br />
          <input
            type="submit"
            className="bg-orange-400 shadow px-2 py-1 hover:bg-orange-300"
          />
          <button
            onClick={() => navigate("/songs")}
            className="bg-zinc-400 shadow px-2 py-1 hover:bg-zinc-300 ml-36"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SongNewForm;
