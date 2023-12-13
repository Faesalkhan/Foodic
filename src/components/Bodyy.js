import { useState } from "react";
import ResCard from "./ResCard";
import { SWIGGY_API_URL } from "../utils/constants";
import useFetchData from "../utils/useFetchData";
import Shimmer from "./Shimmer";

const Bodyy = () => {
  const [text, setText] = useState("");
  const [filteringList, setFilteringList] = useState(null);

  const [listRest, allListRest] = useFetchData(SWIGGY_API_URL);

  if (allListRest.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container bodycontainer">
      <div className="row mb-3 justify-content-center p-2">
        <input
          type="text"
          className="col-4 me-3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="button"
          className="col-2 p-1 btn btn-outline-primary"
          onClick={() => {
            const btnfilter = listRest.filter((ress) =>
              ress.info.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteringList(btnfilter);
          }}
        >
          Search
        </button>

        <button
          type="button"
          className="col-3 btn btn-outline-primary ms-2 topresbtn"
          onClick={() => {
            const filteredlist = listRest.filter(
              (res) => res?.info?.avgRating >= 4
            );
            setFilteringList(filteredlist);
          }}
        >
          Ratings 4+
        </button>
      </div>
      <div className="row justify-content-center flex-wrap">
        {(filteringList === null ? allListRest : filteringList).map(
          (restaurant) => (
            <ResCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};
export default Bodyy;
