import React from "react";
import styled from "styled-components";
import "../../Styles/DataCard.css";

function DayWithDate({ dayOfTheMonth, dayOfTheWeek, monthWeekColor }) {
  const StyledSection = styled.p`
    ${monthWeekColor}
    ${!monthWeekColor && "-webkit-background-clip: unset;-webkit-text-fill-color: #dddddd;"}
  `;

  return (
    <div className="dayWithDate_container">
      <StyledSection className="dayWithDate_dow">{dayOfTheWeek}</StyledSection>
      <StyledSection className="dayWithDate_dom">{dayOfTheMonth}</StyledSection>
    </div>
  );
}

export default DayWithDate;
