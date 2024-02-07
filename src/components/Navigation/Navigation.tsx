import Navbar from "./Navbar";
import "./css/Navigation.css";
import { useMenuContext } from "./MenuContext"; // Import the context

// interface NavigationProps {
//   isMenuOpen: boolean;
//   setIsMenuOpen: (open: boolean) => void;
// }

const Navigation: React.FC = ({}) => {
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();

  return (
    <aside className="main__aside">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </aside>
  );
};

export default Navigation;
