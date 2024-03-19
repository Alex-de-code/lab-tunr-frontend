import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// const API = import.meta.env.VITE_BASE_URL;

const SongDetail = ({ API }) => {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  let { id } = useParams();
  const navigate = useNavigate();

  const deleteSong = () => {
    fetch(`${API}/${id}`, { method: "DELETE" })
      .then(() => navigate("/songs"))
      .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    deleteSong();
  };

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) => setSong(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <div className="text-4xl text-white text-center p-3 bg-green-950">
        Song Details View
      </div>
      <div className="bg-green-300 mx-10 mt-10 p-3 border-green-500 border-8 w-1/2 shadow">
        <div className="flex flex-col-2">
          <p className="text-2xl pr-2 text-orange-600">
            {song.is_favorite ? <>✬</> : <>∅</>}
          </p>
          <p className="text-3xl font-bold pb-3">{song.name}</p>
        </div>
        <p className="ml-8 pl-2 border-l-2 border-black pb-2">
          By <span className="italic">{song.artist}</span>
        </p>
        <p className="ml-8 pl-2 border-l-2 border-black pb-2">
          Album: {song.album}
        </p>
        {/* <p>{song.is_favorite}</p> */}
        <p className="ml-8 pl-2 border-l-2 border-black ">Time: {song.time}</p>
      </div>
      <div className="ml-10">
        <button
          onClick={() => navigate("/songs")}
          className="bg-blue-400 py-1 px-3 hover:bg-zinc-400"
        >
          Back
        </button>
        <button
          onClick={() => navigate(`/songs/${id}/edit`)}
          className="bg-yellow-400 py-1 px-3 hover:bg-zinc-400"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-400 py-1 px-3 hover:bg-zinc-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SongDetail;
