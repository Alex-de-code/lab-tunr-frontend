import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={`/`}>
        <div>Tuner</div>
      </Link>
      <Link to={`/songs`}>
        <div>Songs</div>
      </Link>
    </div>
  );
};

export default NavBar;
