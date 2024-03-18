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
  let navigate = useNavigate();

  console.log(`${API}/songs/${id}`);
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((response) => response.json())
      .then((data) => setSong(data))
      .catch((error) => console.error(error));
  }, [id]);

  console.log(song);
  return (
    <div>
      <div>SongDetail</div>
      <div>
        <h6>{song.name}</h6>
        <h6></h6>
        <h6></h6>
        <h6></h6>
      </div>
    </div>
  );
};

export default SongDetail;
