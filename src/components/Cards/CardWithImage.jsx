import React from "react";
import Button from "../Button/Button";

const CardWithImage = ({
  cardImage,
  cardTitle,
  cardText,
  carTextClassName,
}) => {
  return (
    <div className="card h-100">
      <img src={cardImage} className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className={`card-text ${carTextClassName}`}>{cardText}</p>
      </div>
      <div className="card-footer border-0">
        <Button
          className="btn btn-primary  w-100 sign-up-buttons"
          title="Sign up"
          buttonType="button"
        />
      </div>
    </div>
  );
};

export default CardWithImage;
