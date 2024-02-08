import { NavLink } from "react-router-dom";
import "./css/PortfolioItem.css";

interface FolioItemProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  to: string;
}

const FolioItem = ({ title, imgSrc, imgAlt, to }: FolioItemProps) => {
  return (
    <div className="portfolio__item">
      <NavLink to={to} className="portfolio__link">
        <div className="portfolio__title">{title}</div>
        <div className="portfolio__img-container">
          <img className="portfolio__img" src={imgSrc} alt={imgAlt} />
        </div>
      </NavLink>
    </div>
  );
};

export default FolioItem;
