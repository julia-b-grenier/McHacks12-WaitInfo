import React from "react";
import { Divider } from "@mui/material";
import "./WaitTime.css";

interface PeopleAheadProps {
  peopleAhead: string; // Time string, e.g., "45 minutes"
}

const PeopleAhead: React.FC<PeopleAheadProps> = ({ peopleAhead }) => {
  return (
    <div className="wait-time-container">
      <svg
        width="50px"
        height="30px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#05204A"
          d="M13.9 2.999A1.9 1.9 0 1 1 12 1.1a1.9 1.9 0 0 1 1.9 1.899zM13.544 6h-3.088a1.855 1.855 0 0 0-1.8 1.405l-1.662 6.652a.667.667 0 0 0 .14.573.873.873 0 0 0 .665.33.718.718 0 0 0 .653-.445L10 9.1V13l-.922 9.219a.71.71 0 0 0 .707.781h.074a.69.69 0 0 0 .678-.563L12 14.583l1.463 7.854a.69.69 0 0 0 .678.563h.074a.71.71 0 0 0 .707-.781L14 13V9.1l1.548 5.415a.718.718 0 0 0 .653.444.873.873 0 0 0 .665-.329.667.667 0 0 0 .14-.573l-1.662-6.652A1.855 1.855 0 0 0 13.544 6z"
        />
        <path fill="none" d="M0 0h24v24H0z" />
      </svg>
      <Divider orientation="vertical" flexItem />
      <span className="wait-time-value">{peopleAhead} people ahead of you</span>
    </div>
  );
};

export default PeopleAhead;
