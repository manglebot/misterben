import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { gsap } from "../../Utilities/gsapUtils";
import "./css/PortfolioItem.css";

interface PortfolioItemProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  onItemClick: () => void;
}

const PortfolioItem = forwardRef<HTMLDivElement, PortfolioItemProps>(
  ({ title, imgSrc, imgAlt, onItemClick }, ref) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => itemRef.current!);

    const handleClick = () => {
      if (itemRef.current) {
        console.log("handleClick if");
        gsap.to(itemRef.current, {
          duration: 0.5,
          scale: 0,
          transformOrigin: "top left",
          borderRadius: "50%",
          onComplete: () => {
            onItemClick();
          },
        });
      }
    };

    return (
      <div className="portfolio__item" ref={itemRef} onClick={handleClick}>
        <a className="portfolio__link">
          <div className="portfolio__title">{title}</div>
          <div className="portfolio__img-container">
            <img className="portfolio__img" src={imgSrc} alt={imgAlt} />
          </div>
        </a>
      </div>
    );
  }
);

export default PortfolioItem;
