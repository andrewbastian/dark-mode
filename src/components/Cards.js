import React from "react";

const Cards = ({ coinData }) => {
  return (
    <div>
      {coinData.map(coin => (
        <div  key={coin.name}>
          <h2 >{coin.name}</h2>
          <h4 >{coin.symbol}</h4>
          <div >
            <img src={coin.image} alt={coin.name} />
          </div>
          <p>{coin.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Cards;
