import s from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={s.text}>Good: {good} </li>
      <li className={s.text}>Neutral: {neutral} </li>
      <li className={s.text}>Bad: {bad} </li>
      <li className={s.text}>Total: {total} </li>
      <li className={s.text}>Positive feedback: {positivePercentage} % </li>
    </ul>
  );
};

Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
