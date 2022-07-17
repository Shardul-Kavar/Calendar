import React from "react";
import DateCard from "./DateCard/index.js";
import "../Styles/CalendarDates.css";

function CalanderDates(props) {
  const { selectedMonth, monthData } = props;

  return (
    <div className="calendar_dates_container">
      {monthData?.days &&
        monthData?.days?.length > 0 &&
        monthData?.days?.map((date, index) => <DateCard key={index} date={date} />)}
    </div>
  );
}

export default CalanderDates;
