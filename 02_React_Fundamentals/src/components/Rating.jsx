import { useState } from "react";
import Star from "./Star";

const Rating = ({ heading }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  const feedback = ["Terrible", "Poor", "Fair", "Good", "Excellent"];
  const color = "gold";

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
    </div>
  );
};

export default Rating;
