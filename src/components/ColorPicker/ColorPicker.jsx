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
        <div
          className={style.selected}
          data-default="All"
          data-one="option-1"
          data-two="option-2"
          data-three="option-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className={style.arrow}
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
        <div className={style.options}>
          <div title="Default">
            <input id="red" name="option" type="radio" onClick={handleColorChange}  value={'rgb(255,77,97)'}/>
            <label className={style.option} htmlFor="red"  data-txt="Default" />
          </div>
          <div title="Red">
            <input id="red" name="option" type="radio" onClick={handleColorChange}  value={'rgb(255,77,97)'}/>
            <label className={style.option} htmlFor="red"  data-txt="Red" />
          </div>
          <div title="Green">
            <input id="green" name="option" type="radio" onClick={handleColorChange}  value={'rgb(77, 255, 138)'}/>
            <label className={style.option} htmlFor="green" data-txt="Green" />
          </div>
          <div title="Blue">
            <input id="blue" name="option" type="radio" onClick={handleColorChange}  value={'rgb(77, 138, 255)'} />
            <label className={style.option} htmlFor="blue" data-txt="Blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
