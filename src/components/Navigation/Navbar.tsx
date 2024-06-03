import { NavLink } from "react-router-dom";
import { gsap, useGSAP } from "../../Utilities/gsapUtils";
import Logo from "../Logo/Logo";
import "./css/Navbar.css";
import { useRef } from "react";

const activeLink = "nav__link--active";
const normalLink = "nav__link";

const navLinks = [
  { to: "/work", label: "Portfolio" },
  { to: "/about", label: "About" },
];

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsMenuOpen }) => {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    console.log("navRef.current", navRef.current);
    if (navRef.current) {
      gsap.to(navRef.current, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "15rem",
        duration: 0,
        ease: "none",
        scrollTrigger: {
          trigger: navRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

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
