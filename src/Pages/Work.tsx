import React, { useState } from "react";
import PortfolioItem from "../components/Layouts/PortfolioItem";
import "../components/Layouts/css/PortfolioItem.css";
import workData from "../components/Data/workData";
import PageTemplate from "../components/Layouts/PageTemplate";
import "./css/Work.css";

const Work: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  return (
    <div>
      <h1 className="main__title">WORK</h1>
      {workData.map((item, index) =>
        selectedItemIndex === index ? (
          <PageTemplate key={index} title={item.title} content={item.content} />
        ) : (
          <PortfolioItem
            key={index}
            {...item}
            onItemClick={() => handleItemClick(index)}
          />
        )
      )}
    </div>
  );
};

export default Work;
