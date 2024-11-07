import React, { useEffect, useState } from "react";
import style from "./ColorPicker.module.css";

const ColorPicker = () => {
  const [color, setColor] = useState("rgb(255,77,97)"); // Default color
  const [colorShadow, setColorShadow] = useState("rgba(255,77,97, 0.5)");

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    setColorShadow(colorShadow);
    document.documentElement.style.setProperty("--first-color", newColor);
    document.documentElement.style.setProperty("--first-color-rgb", newColor);
  };

  useEffect(() => {
    setColor(color);
    setColorShadow(colorShadow);
  }, []);

  return (
    <div>
      <div className={style.select}>
        <div className={style.radioInput}>
          <input
            type="radio"
            id="red"
            name="value-radio"
            onClick={handleColorChange}
            value={"rgb(255,77,97)"}
            defaultChecked
          />
          <div className={style.circle}></div>
          <input
            defaultChecked=""
            type="radio"
            id="value-2"
            name="value-radio"
            onClick={handleColorChange}
            value={"rgb(34, 139, 73)"}
          />
          <div className={style.circle}></div>
          <input
            type="radio"
            id="value-3"
            name="value-radio"
            onClick={handleColorChange}
            value={"rgb(77, 138, 255)"}
          />
          <div className={style.circle}></div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
