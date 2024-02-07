import PortfolioItem from "../components/Layouts/PortfolioItem";
import "../components/Layouts/css/PortfolioItem.css";
import workData from "../components/Data/workData";

import "./Work.css";

const Work: React.FC = () => {
  const portfolioItems = workData.map((item) => (
    <PortfolioItem key={item.title} {...item} />
  ));

  return (
    <div>
      <h1 className="main_title">WORK</h1>
      {portfolioItems}
    </div>
  );
};

export default Work;
