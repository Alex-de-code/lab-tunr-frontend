import { useNavigate } from "react-router-dom";

const Song = ({ song }) => {
  const navigate = useNavigate();
  return (
    <tr
      className="bg-green-200 border border-green-950 hover:bg-green-50 shadow"
      //remember to add the id to use navigate once set up
      onClick={() => navigate(`/songs/${song.id}`)}
    >
      <td className="px-6 py-2">{song.is_favorite ? <>✬</> : <>∅</>}</td>
      <td className="px-4 py-2">{song.name}</td>
      <td className="px-4 py-2">{song.artist}</td>
      <td className="px-4 py-2">{song.time}</td>
    </tr>
  );
};

export default Song;
