import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItems";

const ResMenu = () => {
  const { resId } = useParams();
  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurantMenuInfo(
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find(
          (y) =>
            y &&
            y.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )?.card?.info || null
    );
    const menuitemData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((y) => y.card?.card)
        ?.filter(
          (z) =>
            z["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        ?.map((z) => z.itemCards)
        .flat()
        .map((z) => z.card?.info) || [];
    setMenuItems(menuitemData);
  };

  return (
    <div>
      <div className="container resmenucontainer">
        <h1>{restaurantMenuInfo?.name}</h1>
        <div className="row">
          <div className="col">
            <div className="border p-3">
              <p className="my-0">
                <strong>⭐{restaurantMenuInfo?.avgRating}</strong>{" "}
                <small>({restaurantMenuInfo?.totalRatingsString})</small>
              </p>
              <p className="my-0">{restaurantMenuInfo?.costForTwoMessage}</p>
              <p className="my-0">
                {restaurantMenuInfo?.cuisines &&
                  restaurantMenuInfo?.cuisines.join(", ")}
              </p>
              <p className="my-0">Outlet - {restaurantMenuInfo?.areaName}</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h5 className="text-center bg-dark text-white p-2">
        Menu ({menuItems.length})
      </h5>
      {menuItems.map((item) => (
        <MenuItems key={item?.id} cuisineItem={item} />
      ))}
    </div>
  );
};
export default ResMenu;
