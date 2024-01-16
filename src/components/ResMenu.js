import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItems";
import ShimmerCard from "./ShimmerCard";

const ResMenu = () => {
  const { restaurantID } = useParams();
  const [hotel, setHotel] = useState(null);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + restaurantID);
      const json = await data.json();
      setHotel(
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find(
            (x) =>
              x.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )?.card.info || null
      );
      setMenu(
        json?.data?.cards
          ?.find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((x) => x.card)
          ?.filter(
            (x) =>
              x.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
      );
    } catch (err) {
      setHotel([]);
      setMenu([]);
      console.log("error in fetching : " + err);
    }
  };
  if (menu.length === 0) {
    return <ShimmerCard />;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-md-5">
          <h1>{hotel?.name}</h1>
          <p className="my-0">
            {hotel?.cuisines && hotel?.cuisines.join(", ")}
          </p>
          <p>
            {hotel?.areaName}, {hotel?.sla?.lastMileTravelString}
          </p>
        </div>
        <div className="col-xs-6 col-sm-2 col-lg-1 mt-2">
          <div className="row border">
            <div className="col border-bottom">⭐{hotel?.avgRating}</div>
            <p className="col">{hotel?.totalRatingsString}</p>
          </div>
        </div>
        <p className="border-bottom pb-3">
          🚴 {hotel?.expectationNotifiers[0]?.enrichedText}
        </p>
        <div className="d-flex">
          <div className="me-5">
            🕑{hotel?.feeDetails?.fees[0]?.fee / 100} MINS
          </div>
          💰<div>{hotel?.costForTwoMessage}</div>
        </div>
      </div>
      <div className="row my-3 border-top py-3">
        {menu.map((x) => (
          <MenuItems key={x?.card?.title} items={x?.card} />
        ))}
      </div>
    </div>
  );
};
export default ResMenu;
