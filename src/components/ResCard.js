import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />

      <h3>{name}</h3>
      <h4>{avgRating} * </h4>
      <h4>{areaName}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};
export default ResCard;
