import { useDispatch, useSelector } from "react-redux";
import CartItemm from "./CartItemm";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems);
  const dispatch = useDispatch();
  const removeAllItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="container cart-container">
      <div className="row justify-content-center ">
        <button className="btn btn-danger w-25" onClick={removeAllItems}>
          remove All
        </button>
        {cartitems.length === 0 && (
          <h2 className="text-center m-5">Your Cart is Empty</h2>
        )}
      </div>
      <div className="row justify-content-center flex-wrap ">
        {cartitems.map((eachItem) => (
          <CartItemm key={eachItem?.id} cartMenu={eachItem} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
