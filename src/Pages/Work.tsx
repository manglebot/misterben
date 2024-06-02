import React, { useState, useRef } from "react";
import PortfolioItem from "../components/Layouts/PortfolioItem";
import "../components/Layouts/css/PortfolioItem.css";
import workData from "../components/Data/workData";
import PageTemplate from "../components/Layouts/PageTemplate";
import "./css/Work.css";

const Work: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const portfolioItemRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    workData.map(() => React.createRef<HTMLDivElement>())
  );

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleCloseClick = () => {
    setSelectedItemIndex(null);
  };

  return (
    <div>
      <h1 className="main__title">WORK</h1>
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
