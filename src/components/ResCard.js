import { Link } from "react-router-dom";
import { LIST_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, areaName, cloudinaryImageId, avgRating, sla } =
    resData?.info;
  return (
    <Link
      data-testid="rescard"
      to={"/restaurant/" + resData?.info?.id}
      className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-2 m-2 text-decoration-none "
    >
      <div className="card border-0 ">
        <img
          src={LIST_IMG + cloudinaryImageId}
          className="rounded cardimgg"
          alt=""
        />
        <h5 className="my-0">{name}</h5>
        <p className="my-0">{areaName}</p>
        <p className="my-0">
          ⭐ {avgRating}
          {" ◾ "}
          <span>{sla.deliveryTime}mins</span>{" "}
        </p>
        <p className="my-0">{cuisines.join(", ")}</p>
      </div>
    </Link>
  );
};
export default ResCard;
