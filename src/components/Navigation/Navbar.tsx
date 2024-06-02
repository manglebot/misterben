import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./css/Navbar.css";

const activeLink = "nav__link--active";
const normalLink = "nav__link";

const navLinks = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navMenu = navLinks.map((link) => (
    <li key={link.label} className="nav__item">
      <label htmlFor="nav-item" className="nav__label">
        <NavLink
          to={link.to}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          onClick={handleLinkClick}
        >
          {link.label}
        </NavLink>
      </label>
    </li>
  ));

  return (
    <nav className="navbar">
      <NavLink to="/" className={normalLink} onClick={handleLinkClick}>
        <Logo />
      </NavLink>
      <ul className="nav">{navMenu}</ul>
    </nav>
  );
};

export default Navbar;
