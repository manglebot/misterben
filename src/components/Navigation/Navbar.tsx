import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./css/Navbar.css";

// ClassNames
const activeLink = "nav__link--active";
const normalLink = "nav__link";

const navLinks = [
  { to: "/work", label: "Work" },
  { to: "/play", label: "Play" },
  { to: "/contact", label: "Contact" },
];

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navMenu = navLinks.map((link) => (
    <li key={link.label} className="nav__item">
      <label htmlFor="nav-item" className="nav__label">
        <NavLink
          to={link.to}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {link.label}
        </NavLink>
      </label>
    </li>
  ));

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={normalLink}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Logo />
      </NavLink>
      <ul className="nav">{navMenu}</ul>
    </nav>
  );
};

export default Navbar;
