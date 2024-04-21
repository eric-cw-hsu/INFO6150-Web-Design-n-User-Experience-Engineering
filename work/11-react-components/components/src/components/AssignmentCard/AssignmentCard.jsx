import React from 'react';
import './AssignmentCard.css';
import Button from '../Button/Button';

const AssignmentCard = ({ title, description, image, onClickHandler }) => {
  return (
    <div className="assignment-card">
      <div className="assignment-card-title">
        <Button visual="link" type="button" onClickHandler={onClickHandler}>
          <h3 className="assignment-card-title__h3">{title}</h3>
        </Button>
      </div>

      <div>
        <img className="assignment-card-image__img" src={image} alt={title} />
        <div className="assignment-card-content">
          <p className="assignment-card-content__p">{description}</p>
        </div>
      </div>

      <div className="assignment-card-button">
        <Button
          className="assignment-card-button__btn"
          visual="button" type="button" onClickHandler={onClickHandler}
        >
          <p>Read more</p>
        </Button>
      </div>
    </div>
  );
}

export default AssignmentCard;
