import { use, useState } from "react";
import Star from "./Star";

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

      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>

      {submitted && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank You</h2>
            <p>You rated us {rating} star</p>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
