import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

const Topbar = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="logo" className="w-10 rounded-md" />
        <h1>Dimitri Hector Portfolio</h1>
      </div>

      <div className="flex gap-4 items-center">
        <ModeToggle />
        <Link to={"/"}>
          <Button variant={"ghost"}>Home</Button>
        </Link>
        <Link to={"/projects"}>
          <Button variant={"ghost"}>Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
