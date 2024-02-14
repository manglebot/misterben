import { HashRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./MainLayout";
import NotFound from "../../Pages/NotFound";
import Home from "../../Pages/Home";
import Work from "../../Pages/Work";
import Play from "../../Pages/Play";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";

import workData from "../Data/workData";
import playData from "../Data/playData";
import MenuProvider from "../Navigation/MenuContext";

const Router: React.FC = () => {
  return (
    <HashRouter>
      <MenuProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="play" element={<Play />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            {workData.map((item, index) => (
              <Route key={index} path={item.to} element={<item.element />} />
            ))}
            {playData.map((item, index) => (
              <Route key={index} path={item.to} element={<item.element />} />
            ))}

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MenuProvider>
    </HashRouter>
  );
};

export default Router;
