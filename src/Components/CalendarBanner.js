import React from "react";
import Arrow from "../Elements/Interactive/Arrow";
import "../Styles/CalendarBanner.css";
import ReactLoading from "react-loading";

function CalendarBanner(props) {
  const {
    monthDataBannerUrl,
    monthDataBannerText,
    monthDataBannerStyle,
    selectedMonth,
    handleMonthSelect,
    loading,
  } = props;

  return (
    <div
      className="calendar_banner_container"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
      }}
    >
      <img
        className="banner_img"
        src={loading ? "" : monthDataBannerUrl}
        alt={loading ? "" : monthDataBannerText}
      />
      <div className="calendar_banner">
        {loading && (
          <div
            style={{
              zIndex: "9999999",
              position: "absolute",
              boxSizing: "content-box",
            }}
          >
            <ReactLoading type="spokes" color="black" height="64px" width="64px" />
          </div>
        )}
        <div className="banner_items">
          <div
            onClick={(e) => {
              loading ? e.preventDefault() : handleMonthSelect("prev", selectedMonth);
            }}
            className="arrow_container"
          >
            <Arrow direction="left" />
          </div>
          <span className="banner_heading">{selectedMonth?.calendar_banner_text}</span>
          <div
            onClick={(e) => {
              loading ? e.preventDefault() : handleMonthSelect("next", selectedMonth);
            }}
            className="arrow_container"
          >
            <Arrow direction="right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarBanner;
