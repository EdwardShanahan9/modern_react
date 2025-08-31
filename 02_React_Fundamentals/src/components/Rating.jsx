import { useState } from "react";

const Rating = ({ heading }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  const feedback = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  return (
    <div className="rating-container">
      <h2>{heading}</h2>

      <div className="stars">
        {stars.map((star) => (
          <span
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
            key={star}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
          >
            {`\u2605`}
          </span>
        ))}
      </div>

      {rating > 0 && <p className="feedback">{feedback[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
