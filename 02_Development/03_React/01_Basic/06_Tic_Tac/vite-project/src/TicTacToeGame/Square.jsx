import PropTypes from "prop-types";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid black",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Square;
