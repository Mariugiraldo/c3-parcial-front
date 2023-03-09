import React from "react";

const Card = ({ nombre, preferencia }) => {
  return (
    <div>
      <h3>
        {nombre} {preferencia}
      </h3>
    </div>
  );
};

export default Card;
