import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

const Topbar = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="hidden sm:block">
        <div className=" gap-2 items-center flex">
          <img src={Logo} alt="logo" className="w-10 rounded-md" />
          <h1>Dimitri Hector Portfolio</h1>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <Link to={"/"}>
          <Button variant={"ghost"}>Home</Button>
        </Link>
        <Link to={"/projects"}>
          <Button variant={"ghost"}>Projects</Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Topbar;
