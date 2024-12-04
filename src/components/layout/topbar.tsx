import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

const Topbar = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="logo" className="w-10 rounded-md" />
        <h1>Dimitri Hector Portfolio</h1>
      </div>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
      </div>
    </div>
  );
};

export default Topbar;
