import axios from "axios";
import React, { useEffect, useState } from "react";
import CalanderDates from "../Components/CalanderDates";
import CalendarBanner from "../Components/CalendarBanner";

function Month() {
  const [allMonths, setAllMonths] = useState([]);
  const [monthData, setMonthData] = useState({});
  const [selectedMonth, setSelectedMonth] = useState();
  const [loading, setLoading] = useState(true);

  const handleMonthSelect = (key, currentMonth) => {
    setLoading(true);
    let thisMonthIndex = allMonths.indexOf(currentMonth);
    let month = {};
    // setMonthData();
    if (key === "prev") {
      if (thisMonthIndex !== 0) {
        month = allMonths[thisMonthIndex - 1];
      } else {
        month = allMonths[11];
      }
    } else if (key === "next") {
      if (thisMonthIndex !== 11) {
        month = allMonths[thisMonthIndex + 1];
      } else {
        month = allMonths[0];
      }
    }
    setSelectedMonth(month);
    getMonthData(month?.month);
  };

  const getAllMonths = async () => {
    await axios
      .get("/social_calendar/all_months")
      .then((res) => {
        setAllMonths(res?.data);
        setSelectedMonth(res?.data[0]);
        getMonthData(res?.data[0]?.month);
      })
      .catch((err) => console.log(err));
  };

  const getMonthData = async (month) => {
    await axios
      .get(`/social_calendar/get/${month}`)
      .then((res) => {
        setMonthData(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (allMonths?.length === 0) {
      getAllMonths();
    }
  }, []);

  return (
    <div>
      <CalendarBanner
        selectedMonth={selectedMonth}
        handleMonthSelect={handleMonthSelect}
        monthDataBannerUrl={monthData?.calendar_banner_url}
        monthDataBannerText={monthData?.calendar_banner_text}
        monthDataBannerStyle={monthData?.calendar_banner_style}
        loading={loading}
      />
      <CalanderDates selectedMonth={selectedMonth} monthData={monthData} />
    </div>
  );
}

export default Month;
