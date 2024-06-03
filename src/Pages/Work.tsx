import React, { useState, useRef } from "react";
import PortfolioItem from "../components/Layouts/PortfolioItem";
import "../components/Layouts/css/PortfolioItem.css";
import workData from "../components/Data/workData";
import PageTemplate from "../components/Layouts/PageTemplate";
import { useMenuContext } from "../components/Navigation/MenuContext";
import "./css/Work.css";

const Work: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const portfolioItemRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    workData.map(() => React.createRef<HTMLDivElement>())
  );

  const { setIsMenuOpen } = useMenuContext();

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
    setIsMenuOpen(false);
  };

  const handleCloseClick = () => {
    setSelectedItemIndex(null);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <h1 className="main__title">PORTFOLIO</h1>
      {workData.map((item, index) =>
        selectedItemIndex === index ? (
          <PageTemplate
            key={index}
            title={item.title}
            content={item.content}
            borderColor={item.borderColor}
            onClose={handleCloseClick}
            previousContentRef={portfolioItemRefs.current[index] || null} // Wrap the value in a ref object
          />
        ) : (
          <PortfolioItem
            key={index}
            ref={portfolioItemRefs.current[index]}
            title={item.title}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            borderColor={item.borderColor}
            onItemClick={() => handleItemClick(index)}
          />
        )
      )}
    </div>
  );
};

export default Work;
