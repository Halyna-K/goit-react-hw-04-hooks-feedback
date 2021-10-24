import s from "./FeedbackOptions.module.css";
import { v4 as uuid } from "uuid";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.option}>
      {options.map((option) => (
        <Button
          key={uuid(option)}
          name={option}
          type="button"
          variant="outline-dark"
          size="lg"
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
