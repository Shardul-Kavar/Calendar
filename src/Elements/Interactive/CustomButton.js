import React from "react";

function CustomButton({ text, color, handleClick, loading }) {
  return (
    <div
      className="button_container"
      onClick={(e) => {
        loading ? e.preventDefault() : handleClick();
      }}
      style={{ border: `1px solid ${!color ? "#7272f7" : color}` }}
    >
      <p style={{ color: !color ? "#7272f7" : color }}>{text}</p>
    </div>
  );
}

export default CustomButton;
