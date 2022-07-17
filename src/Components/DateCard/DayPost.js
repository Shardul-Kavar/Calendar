import React from "react";
import styled from "styled-components";
import CustomButton from "../../Elements/Interactive/CustomButton";

function DayPost({ dayData }) {
  const StyledSection = styled.section`
    ${dayData?.card_color}
  `;

  return (
    <div className="dayPost_container" style={{ position: "relative" }}>
      <StyledSection className="dayPost_text">
        <h3>{dayData?.card_header}</h3>
        <p>{dayData?.card_body}</p>
        <StyledSection className="dataCard_background" />
      </StyledSection>
      <div className="dayPost_button_card_wrapper">
        <CustomButton
          text="Schedule Post"
          color={
            dayData?.card_color?.includes("background-color: rgba(255, 218, 59, 1)")
              ? "blue"
              : (dayData?.card_color?.includes("color: rgba(255, 255, 255, 1)") ||
                  dayData?.card_color?.includes("color: rgb(255, 255, 255)")) &&
                "white"
          }
        />
        {dayData?.card_image && (
          <div className="dayPost_cardImage">
            <img src={dayData?.card_image} alt="no.jpg" />
          </div>
        )}
      </div>
    </div>
  );
}

export default DayPost;
