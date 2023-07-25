import React from "react";

const Card = ({ character }) => {
  const { image } = character;
  return (
    <div className="flex flex-col">
        {/* UPDATE ME  */}
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
