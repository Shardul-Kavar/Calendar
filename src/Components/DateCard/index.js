import React from "react";
import DayWithDate from "../../Elements/DateCard/DayWithDate";
import "../../Styles/DataCard.css";
import DayPost from "./DayPost";

function DateCard({ date }) {

  return (
    <div className="dataCard_container">
      <div className="dataCard_dayWithDate">
        <DayWithDate
          dayOfTheMonth={date?.day_of_the_month}
          dayOfTheWeek={date?.day_of_the_week}
          monthWeekColor={date?.month_week_color}
        />
      </div>
      <div className="dataCard_post">
        <DayPost dayData={date} />
      </div>
    </div>
  );
}

export default DateCard;
