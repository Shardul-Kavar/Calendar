import React from "react";
import FilterIcon from "../Elements/Icons/FilterIcon";
import PostIcon from "../Elements/Icons/PostIcon";
import '../Styles/ActionButtons.css'

function ActionButtons() {
  return (
    <div className="actionButtons_container">
      <div className="filter_icon">
        <FilterIcon />
      </div>
      <div className="post_icon">
        <PostIcon />
      </div>
    </div>
  );
}

export default ActionButtons;
