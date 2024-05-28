import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./css/MainLayout.css";
import Navigation from "../Navigation/Navigation";
import HamburgerMenu from "./HamburgerMenu";
import "./css/HamburgerMenu.css";
import { useMenuContext } from "../Navigation/MenuContext";
import BackToTopButton from "../Navigation/BackToTopButton";

function MainLayout() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    isHamburgerMenuVisible,
    setIsHamburgerMenuVisible,
    closeMenu,
  } = useMenuContext();

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setIsHamburgerMenuVisible(newWidth <= 1333);

      // If the menu is open and beyond 1333, close menu
      if (isMenuOpen && newWidth > 1333) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, setIsHamburgerMenuVisible, closeMenu]);

  return (
    <>
      <BackToTopButton />
      <div
        className={`main__layout ${
          isMenuOpen && isHamburgerMenuVisible ? "main__layout--open" : ""
        }`}
      >
        <Navigation />
        <main className="main__content">
          {isHamburgerMenuVisible && (
            <HamburgerMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
