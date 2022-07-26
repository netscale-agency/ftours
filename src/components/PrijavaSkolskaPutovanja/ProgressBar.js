import React from "react";
import "../../styles/components/Progress.css";
import { steps } from "./util/stepsFormater";
export default function ProgressBar({ activeSteps }) {
  return (
    <div className="container-bar">
      {steps.map((item, i) => {
        return (
          <div
            key={i}
            className={`${
              activeSteps.includes(i) ? item.classFilled : "inactiveStep"
            } stepContainer ${i}`}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
