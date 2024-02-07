import { useEffect } from "react";
import "./css/HamburgerMenu.css";

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  useEffect(() => {
    const checkbox = document.getElementById(
      "hamburger-menu-checkbox"
    ) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = isMenuOpen;
    }
  }, [isMenuOpen]);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <label className="hamburger-menu" htmlFor="hamburger-menu-checkbox">
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={isMenuOpen}
        id="hamburger-menu-checkbox"
      />
    </label>
  );
};

export default HamburgerMenu;
