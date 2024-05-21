import PortfolioItem from "../components/Layouts/PortfolioItem";
import "../components/Layouts/css/PortfolioItem.css";
import playData from "../components/Data/playData";

const Play: React.FC = () => {
  const portfolioItems = playData.map((item) => (
    <PortfolioItem key={item.title} {...item} />
  ));

  return (
    <div>
      <h1 className="main__title">PLAY</h1>
      {portfolioItems}
    </div>
  );
};

export default Play;
