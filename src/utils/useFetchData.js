import { useEffect, useState } from "react";

const useFetchData = (api_url) => {
  const [listRest, setListRes] = useState([]);
  const [allListRes, setAllListRes] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const data = await fetch(api_url);
    const json = await data.json();
    setListRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllListRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return [listRest, allListRes];
};
export default useFetchData;
