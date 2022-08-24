import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  
  return (
    <span>
      {day} {{hours} < 10 ? `0${hours}` : `${hours}`}:{{minutes} < 10 ? `0${minutes}` : `${minutes}`}
    </span>
  );
}
