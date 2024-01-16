import React from "react";
import { LIST_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const EachMenuItem = ({ eachMenu }) => {
  const dispatch = useDispatch();
  const addToCart = (y) => {
    dispatch(addItem(y));
  };

  return (
    <div>
      {eachMenu.map((x) => (
        <div
          key={x.card.info.id}
          className="row p-4 border-bottom justify-content-center align-items-center "
        >
          <div className="col-xs-6 col-sm-8 col-md-8 ">
            <h6>{x.card.info.name}</h6>
            <p className="my-0">
              ₹ {x.card.info.defaultPrice / 100 || x.card.info.price / 100}
            </p>
            <p className="my-0">
              ⭐ {x.card.info.ratings.aggregatedRating.rating} (
              {x.card.info.ratings.aggregatedRating.ratingCount})
            </p>
            <p className="my-0">
              {x.card.info.description || x.card.info.category}
            </p>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 position-relative ">
            <img src={LIST_IMG + x.card.info.imageId} className="cardimg" />
            <button
              className="btn btn-dark text-white position-absolute start-50 top-100 translate-middle px-5"
              onClick={() => addToCart(x.card.info)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EachMenuItem;
