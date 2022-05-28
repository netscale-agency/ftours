import React from "react";

export default function Step3() {
  return (
    <div className="stepContainer">
      <label></label>
      <input type="text" />
      <label></label>
      <input type="text" /> <label></label>
      <input type="tel" /> <label></label>
      <input type="email" /> <label></label>
      <input type="text" /> <label></label>
      <input type="text" /> <label></label>
      <input type="text" /> <label></label>
      <datalist id="browsers">
        <option value="Edge" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>{" "}
      <label></label>
      <input type='text'/> <label></label>
      <input type='date'/>
      <label></label>
      <input type='checkbox'/>
    </div>
  );
}
