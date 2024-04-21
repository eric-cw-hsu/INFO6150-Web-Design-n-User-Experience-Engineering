import "./Card.css";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeProvider";

const Card = ({ title, description, image, link, position = "left" }) => {

  const { theme } = useContext(ThemeContext);
  return (
    <div className="card">
      <div className={`card-body card-body--${position}`}>
        <div className="card-title">
          <Button visual="link" type="button" onClickHandler={() => {
            if (link) {
              window.open(link, "_blank");
            }

          }} >
            <h3>{title}</h3>
          </Button>
        </div>

        <a href={link} target="_blank">
          <div className={`card-image ${!image && `card-image--empty card-image--empty--${theme}`}`}>
            {image
              ? <img className="card-image__img" src={image} alt={title} />
              : <p>TBA</p>
            }
          </div>
        </a>
      </div>

      <div className={`card-description card-description--${position}`}>{description}</div>
    </div>
  );
};

Card.protoTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  position: PropTypes.string,
};

export default Card;
