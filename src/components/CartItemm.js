import { useDispatch } from "react-redux";
import { LIST_IMG } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartItemm = ({ cartMenu }) => {
  const dispatch = useDispatch();
  const removeFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };
  return (
    <div className="col-sm-12 col-lg-8 m-2" data-testid="cartItems">
      <div className="row border p-2">
        <div className="col-6">
          <h5>{cartMenu?.name}</h5>
          <h4>₹ {cartMenu?.defaultPrice / 100 || cartMenu?.price / 100}</h4>
          <p>{cartMenu?.category}</p>
          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(cartMenu?.id)}
          >
            Delete
          </button>
        </div>
        <div className="col-6">
          <img
            src={LIST_IMG + cartMenu?.imageId}
            className="img-fluid float-end "
          />
        </div>
      </div>
    </div>
  );
};
export default CartItemm;
