import Button from "./Button";

const Model = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You</h2>
        <p>You rated us {rating} star</p>

        <Button className="close-btn" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Model;
