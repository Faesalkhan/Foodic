import React, { useState } from "react";
import EachMenuItem from "./EachMenuItem";

const MenuItems = ({ items }) => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("🔽");

  const handleClick = () => {
    setShow(!show);
    icon === "🔽" ? setIcon("🔼") : setIcon("🔽");
  };
  return (
    <div className="col-10">
      <div className="row hovering-pointer" onClick={handleClick}>
        <h5 className="col-6">
          {items.title}({items.itemCards.length})
        </h5>
        <div className="col-6 text-end">{icon}</div>
      </div>
      {show && <EachMenuItem eachMenu={items.itemCards} />}
    </div>
  );
};
export default MenuItems;
