import React, { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import ResCard from "./ResCard";

const Bodyy = () => {
  const [list, setList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (ch) => {
    setSearch(ch);
    setAllList(
      list.filter((res) =>
        res.info.name.toLowerCase().includes(ch.toLowerCase())
      )
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      setList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      setList([]);
      console.log("error in fetching : " + err);
    }
  };
  if (list.length === 0) {
    return <Shimmer />;
  } else
    return (
      <div className="container bodycontainer">
        <div className="row justify-content-center my-4">
          <div className="col-xs-8 col-sm-6 col-md-4 mx-2">
            <input
              type="text"
              className="form-control border-dark"
              placeholder="search restaurant..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            ></input>
          </div>
          <button
            className="col-1 btn btn-light mx-2 border-dark rounded-5 filterbutton"
            onClick={() => setAllList(list)}
          >
            All
          </button>
          <button
            className="col-1 btn btn-light mx-2 border-dark rounded-5 filterbutton"
            onClick={() =>
              setAllList(list.filter((res) => res.info.avgRating > 4))
            }
          >
            4+
          </button>
          <button
            className="col-1 btn btn-light mx-2 border-dark rounded-5 filterbutton"
            onClick={() =>
              setAllList(list.filter((res) => res.info.avgRating <= 4))
            }
          >
            3+
          </button>
        </div>
        <div className="row">
          {(allList.length !== 0 ? allList : list).map((restaurant) => (
            <ResCard key={restaurant?.info?.id} card={restaurant} />
          ))}
        </div>
      </div>
    );
};
export default Bodyy;
