import React from "react";

export default function Itemheading(props) {
  return (
    <div>
      <p class="text-2xl text-base absolute bottom-0 font-sans">
        {props.cardName}
      </p>
    </div>
  );
}
