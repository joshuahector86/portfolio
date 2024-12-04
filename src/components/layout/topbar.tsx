import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { ModeToggle } from "./mode-toggle";

const Topbar = () => {
  const location = useLocation();
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  return (
    <div className="flex justify-between p-4 items-center">
      <div className="hidden sm:block">
        <div className=" gap-2 items-center flex">
          <img src={Logo} alt="logo" className="w-10 rounded-md" />
          <h1 className="text-xl">Dimitri Hector Portfolio</h1>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {links.map((link) => (
          <Link
            to={link.href}
            key={link.name}
            className={` p-2 text-lg border-b-4 border-transparent
                hover:text-[#6ea8eb] flex 
                ${isActive(link.href) ? "text-[#6ea8eb]" : ""}`}
          >
            {link.name}
          </Link>
        ))}

        <ModeToggle />
      </div>
    </div>
  );
};

export default Topbar;
