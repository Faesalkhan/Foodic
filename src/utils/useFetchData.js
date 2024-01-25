import React, { useEffect, useState } from "react";

const useFetchData = (api_url) => {
  const [list, setList] = useState([]);
  const [allList, setAlllist] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);
  const fetchingData = async () => {
    try {
      const data = await fetch(api_url);
      const json = await data.json();
      setList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setAlllist(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (err) {
      setList([]);
      setAlllist([]);
      console.log("error in useEffect " + err);
    }
  };
  return [list, allList];
};
export default useFetchData;
