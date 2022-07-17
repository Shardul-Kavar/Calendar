import React from "react";
import "../../Styles/Elements.css";

function Arrow(props) {
  return (
    <div
      className="arrow"
      style={{
        transform: `rotate(${
          !props?.direction || props?.direction === "right"
            ? "0"
            : props?.direction === "down"
            ? "90"
            : props?.direction === "left"
            ? "180"
            : props?.direction === "up"
            ? "270"
            : "0"
        }deg)`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

export default Arrow;
