import React from "react";

const Cards = () => {
  return <div>Cards</div>;
};

export default Cards;

/*import Card from "../Card/Card";
import CssCard from "./Cards.module.css";

function Cards({ data }) {
  return (
    <div className={CssCard.cardBackground}>
      {data.map(({ id, cover, title, rating }) => (
        <Card key={id} id={id} cover={cover} title={title} rating={rating} />
      ))}
    </div>
  );
}

export default Cards;*/
