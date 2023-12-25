import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="border border-b">
      <ul className="flex gap-2">
        <li>
          <NavLink to="/" className={pathname === "/" ? "font-bold" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/counter"
            className={pathname === "/counter" ? "font-bold" : ""}
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={pathname === "/posts" ? "font-bold" : ""}
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
