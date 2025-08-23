import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="rating-container">
      <h2>Rate your experience</h2>

      <div className="stars">
        {stars.map((star) => (
          <span
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
            key={star}
            className="star"
          >
            {`\u2605`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
