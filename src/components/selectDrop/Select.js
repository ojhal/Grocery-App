import React, { useState } from "react";
import "../selectDrop/Select.css";

const Select = () => {
  const [openSelect, setOpenSelect] = useState(false);

  const openHandle = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <div className="selectDrop">
      <span className="openSelect" onClick={openHandle}>
        All Categories
      </span>
      {openSelect === true && (
        <div className="select">
          <div className="searchField">
            <input type="text" />
          </div>

          <ul className="searchResults">
            <li onClick={() => setOpenSelect(false)}>Milk and Dairies</li>
            <li onClick={() => setOpenSelect(false)}>Wines & Drinks</li>
            <li onClick={() => setOpenSelect(false)}>Clothing & beauty</li>
            <li onClick={() => setOpenSelect(false)}>Fresh SeaFood</li>
            <li onClick={() => setOpenSelect(false)}>pet Foods & Toys</li>
            <li onClick={() => setOpenSelect(false)}>Fast food</li>
            <li onClick={() => setOpenSelect(false)}>Fresh Fruits</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
