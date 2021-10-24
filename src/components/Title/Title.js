import PropTypes from "prop-types";
import s from "./Title.module.css";

export const Title = ({ title, children }) => {
  return (
    <>
      <h2 className={s.text}> {title} </h2>
      {children}
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};
