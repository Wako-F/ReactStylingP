//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
var message = "Good Morning";
const customStyle = {
  color: ""
};
if (time > 12 && time < 18) {
  customStyle.color = "green";
  message = "Good Afternoon";
} else if (time > 18 && time === 23) {
  message = "Good Night";
  customStyle.color = "blue";
} else if (time > 0 && time < 12) {
  customStyle.color = "red";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {" "}
      {message}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
