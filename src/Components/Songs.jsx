import { Link, useNavigate } from "react-router-dom";
import Song from "./Song";

const Songs = ({ songs }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl text-white text-center p-3 bg-green-950">
        All Songs View
      </h1>
      <div className="mx-10 mt-10">
        <button className="bg-orange-500 hover:bg-orange-300">New Song</button>
        <table className="table-auto rounded-lg border-collapse ">
          <thead>
            <tr className="bg-green-900 text-white  border border-green-950">
              <th className="px-2 py-1">Favorite</th>
              <th className="px-4 py-2">Song</th>
              <th className="px-4 py-2">Artist</th>
              <th className="px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody className="">
            {songs.map((song) => (
              <Song
                // onClick={() => navigate(`/song/${song.id}`)}
                key={song.id}
                song={song}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Songs;
