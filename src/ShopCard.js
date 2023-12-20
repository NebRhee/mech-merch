import React from "react";
import Itemheading from "./ItemHeading";
import ShopCardImg from "./ShopCardImg";

export default function ShopCard(props) {
  // Shop Category Cards
  return (
    <div class="relative max-w-80 h-96 rounded overflow-hidden shadow-lg border-solid border-2 ">
      <Itemheading cardName={props.cardName}></Itemheading>
      <ShopCardImg cardImage={props.cardImage}></ShopCardImg>
    </div>
  );
}
