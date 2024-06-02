import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { gsap } from "../../Utilities/gsapUtils";
import "./css/PortfolioItem.css";

interface PortfolioItemProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  borderColor: string;
  onItemClick: () => void;
}

const PortfolioItem = forwardRef<HTMLDivElement, PortfolioItemProps>(
  ({ title, imgSrc, imgAlt, borderColor, onItemClick }, ref) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => itemRef.current!);

    const handleClick = () => {
      if (itemRef.current) {
        gsap.to(itemRef.current, {
          duration: 0.4,
          scale: 0,
          transformOrigin: "top left",
          onComplete: () => {
            onItemClick();
          },
        });
      }
    };

    useEffect(() => {
      if (itemRef.current) {
        itemRef.current.style.borderTopColor = borderColor;
      }
    }, [borderColor]);

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
