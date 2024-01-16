import React from "react";
import { LIST_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const ResCard = (props) => {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, id } =
    props.card.info;
  return (
    <Link
      to={"/restaurant/" + id}
      className="col-xs-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-decoration-none text-dark card border-0"
    >
      <img src={LIST_IMG + cloudinaryImageId} className="cardimg" />
      <h5 className="my-0">{name}</h5>
      <p className="my-0">{areaName}</p>
      <p className="my-0">⭐ {avgRating}</p>
      <p>{cuisines.join(", ")}</p>
    </Link>
  );
};
export default ResCard;
