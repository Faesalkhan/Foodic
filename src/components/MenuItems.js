import { useDispatch } from "react-redux";
import { LIST_IMG } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const MenuItems = ({ cuisineItem }) => {
  const dispatch = useDispatch();
  const addToCart = (cuisineItem) => {
    dispatch(addItems(cuisineItem));
  };
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-8">
          <h3>{cuisineItem?.name}</h3>
          <h5>
            ₹ {cuisineItem?.price / 100 || cuisineItem?.defaultPrice / 100}
          </h5>
          <h6>
            <strong>⭐{cuisineItem?.ratings?.aggregatedRating?.rating}</strong>
            {"  "}
            <span className="lightweightfont">
              ({cuisineItem?.ratings?.aggregatedRating?.ratingCount})
            </span>
          </h6>
          <p className="lightweightfont">{cuisineItem?.description}</p>
        </div>
        <div className="col p-3">
          <div className="d-flex flex-column align-items-center position-relative">
            <img
              src={LIST_IMG + cuisineItem?.imageId}
              className="rounded img-fluid float-end "
            />
            <button
              type="button"
              className="btn bg-light position-absolute start-50 bottom-50 translate-middle"
              onClick={() => addToCart(cuisineItem)}
            >
              Add+
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default MenuItems;
