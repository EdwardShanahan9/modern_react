import { useState } from "react";
import Star from "./Star";
import Model from "./Model";
import Button from "./Button";

const Rating = ({ heading }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  const feedback = ["Terrible", "Poor", "Fair", "Good", "Excellent"];
  const color = "gold";

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>

      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => null}
          />
        ))}
      </div>

      {rating > 0 && <p className="feedback">{feedback[rating - 1]}</p>}

      <Button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </Button>

      <Model isOpen={submitted} onClose={handleClose} rating={rating} />
    </div>
  );
};

export default Rating;
