import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.jpg";

const Topbar = () => {
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="flex justify-between p-4 items-center">
      <div className="hidden sm:block">
        <Link to="/" className="">
          <div className="gap-2 items-center flex transform scale-105 hover:scale-110 transition-transform hover:text-[#6ea8eb]">
            <img src={Logo} alt="logo" className="w-10 rounded-md" />
            <h1 className="text-xl">Dimitri Hector Portfolio</h1>
          </div>
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        {links.map((link) => (
          <Link
            to={link.href}
            key={link.name}
            className={`relative p-2 pb-1 text-lg flex flex-col items-center hover:text-[#6ea8eb] transition-colors ${
              isActive(link.href) ? "text-[#6ea8eb]" : ""
            }`}
          >
            <span>{link.name}</span>
            {isActive(link.href) && (
              <motion.div
                layoutId="nav-underline"
                className="absolute bottom-0 left-2 right-2 h-[3px] bg-blue-400 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
