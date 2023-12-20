import React from "react";
import ShopCard from "./ShopCard";
import mechkeyboardImage from "./Images/mech-keyboards-image.webp";
import battlestationsImage from "./Images/battlestations-image.webp";
import audiophileimage from "./Images/audiophile-image.webp";

export default function CategoryRow() {
  return (
    <div class="container flex w-screen h-screen">
      <ShopCard
        cardName={"Mechanical Keyboards"}
        cardImage={mechkeyboardImage}
      ></ShopCard>{" "}
      <ShopCard
        cardName={"Audiophile"}
        cardImage={battlestationsImage}
      ></ShopCard>
      <ShopCard
        cardName={"Battlestations"}
        cardImage={audiophileimage}
      ></ShopCard>
    </div>
  );
}
