import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center pb-10 gap-10 text-xl text-zinc-500 tracking-widest mt-10 ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  );
};

export default Navbar;
