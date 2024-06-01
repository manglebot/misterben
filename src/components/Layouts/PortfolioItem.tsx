import React, { useRef } from "react";
import { gsap } from "../../Utilities/gsapUtils";
import "./css/PortfolioItem.css";

interface PortfolioItemProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  to: string;
  content: string;
  onItemClick: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  imgSrc,
  imgAlt,
  to,
  content,
  onItemClick,
}) => {
  const itemRef = useRef(null);

  const handleClick = () => {
    gsap.to(itemRef.current, {
      duration: 0.5,
      scale: 0,
      transformOrigin: "center center",
      borderRadius: "50%",
      onComplete: () => {
        onItemClick();
      },
    });
  };

  return (
    <div className="portfolio__item" ref={itemRef} onClick={handleClick}>
      <div className="portfolio__link">
        <div className="portfolio__title">{title}</div>
        <div className="portfolio__img-container">
          <img className="portfolio__img" src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
