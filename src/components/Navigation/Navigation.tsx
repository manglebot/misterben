import Navbar from "./Navbar";
import "./css/Navigation.css";
import { useMenuContext } from "./MenuContext";

const Navigation: React.FC = ({}) => {
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();

  return (
    <aside className="main__aside">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </aside>
  );
};

export default Navigation;
