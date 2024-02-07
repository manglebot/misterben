import "./css/PortfolioItem.css";

interface FolioItemProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
}

const FolioItem = ({ title, imgSrc, imgAlt, href }: FolioItemProps) => {
  return (
    <div className="portfolio__item">
      <a href={href} className="portfolio__link">
        <div className="portfolio__title">{title}</div>
        <div className="portfolio__img-container">
          <img className="portfolio__img" src={imgSrc} alt={imgAlt} />
        </div>
      </a>
    </div>
  );
};

export default FolioItem;
