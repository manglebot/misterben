import { Route, Routes } from "react-router-dom";

import MainLayout from "./MainLayout";
import NotFound from "../../Pages/NotFound";
import Work from "../../Pages/Work";
import About from "../../Pages/About";
import PageTemplate from "./PageTemplate";

import workData from "../Data/workData";
import MenuProvider from "../Navigation/MenuContext";

import ScrollToTop from "../Navigation/ScrollToTop";

const Router: React.FC = () => {
  return (
    <MenuProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Work />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />

          {workData.map((item, index) => (
            <Route
              key={index}
              path={item.to}
              element={
                <PageTemplate title={item.title} content={item.content} />
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MenuProvider>
  );
};

export default Router;
