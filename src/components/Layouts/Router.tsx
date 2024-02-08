import { Route, Routes } from "react-router-dom";

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
import Developer from "../../Pages/Developer";

const Router: React.FC = () => {
  return (
    <MenuProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="play" element={<Play />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="developer" element={<Developer />} />

          {workData.map((item, index) => (
            <Route key={index} path={item.href} element={<item.element />} />
          ))}
          {playData.map((item, index) => (
            <Route key={index} path={item.href} element={<item.element />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MenuProvider>
  );
};

export default Router;
