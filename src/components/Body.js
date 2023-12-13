import { useState } from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";

const Body = () => {
  // const [listofres, setListofres] = useState([]);
  const [fillistofres, setFilListofres] = useState(null);
  const [searchText, setText] = useState("");
  const [allResList, filResList] = useFetchData(SWIGGY_API_URL);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(SWIGGY_API_URL);
  //   const json = await data.json();

  //   async function checkJsonData(jsonData) {
  //     for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  //       let chkData =
  //         json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
  //           ?.restaurants;
  //       if (chkData != undefined) {
  //         return chkData;
  //       }
  //     }
  //   }
  //   const restaurantData = await checkJsonData(json);
  //   setListofres(restaurantData);
  //   setFilListofres(restaurantData);

  // console.log(json);
  console.log(allResList);
  console.log(filResList);
  // setListofres(
  //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  // );
  // setFilListofres(
  //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  // );

  const onlinestat = useOnlineStatus();
  if (onlinestat === false) {
    return <h1>oops! plz check your internet connection</h1>;
  }

  return (
    <div className="body">
      <div className="d-flex m-4 align-items-center ">
        <input
          className="w-25 m-3"
          type="text"
          value={searchText}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button
          type="button"
          className="btn btn-outline-danger "
          onClick={() => {
            const filteredlist = allResList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilListofres(filteredlist);
          }}
        >
          Search
        </button>
      </div>
      <div className="d-flex flex-wrap ">
        {(fillistofres === null ? filResList : fillistofres).map(
          (restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant?.info?.id}
              >
                <ResCard resData={restaurant} />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Body;
