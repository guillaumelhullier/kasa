import React, { useState } from "react";
import CssCollapse from "./Collapse.module.css";
import Arrow from "../../assets/arrowIcon.svg";

function Collapse({ title, text }) {
  const [arrowUp, setArrowUp] = useState(false);

  return arrowUp ? ( //Développement d'une ternaire
    <div className={CssCollapse.collapseContainer}>
      <div className={CssCollapse.title} onClick={() => setArrowUp(false)}>
        {title}
        <img
          src={Arrow}
          className={CssCollapse.iconUp}
          alt="arrow up"
          role="button"
        />
      </div>
      <div className={CssCollapse.text}>{text}</div>
    </div>
  ) : (
    <div className={CssCollapse.collapseContainer}>
      <div className={CssCollapse.title} onClick={() => setArrowUp(true)}>
        {title}
        <img
          src={Arrow}
          className={CssCollapse.iconDown}
          alt="arrow down"
          role="button"
        />
      </div>
    </div>
  );
}

export default Collapse;
