import { createContext, useContext, useState } from "react";
import ScrollToTopOnMount from "../Layouts/ScrollToTopOnMount";

interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  closeMenu: () => void;
  isHamburgerMenuVisible: boolean;
  setIsHamburgerMenuVisible: (visible: boolean) => void;
}

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  closeMenu: () => {},
  isHamburgerMenuVisible: false,
  setIsHamburgerMenuVisible: () => {},
});

const useMenuContext = () => {
  return useContext(MenuContext);
};

interface MenuProviderProps {
  children: React.ReactNode;
}

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <ScrollToTopOnMount>
      <MenuContext.Provider
        value={{
          isMenuOpen,
          setIsMenuOpen,
          closeMenu,
          isHamburgerMenuVisible,
          setIsHamburgerMenuVisible,
        }}
      >
        {children}
      </MenuContext.Provider>
    </ScrollToTopOnMount>
  );
};

export default MenuProvider;
export { useMenuContext, MenuContext };
