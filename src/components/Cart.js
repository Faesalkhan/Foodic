import React from "react";
import { LIST_IMG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, increaseItem, decreaseItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleIncrease = (y) => {
    dispatch(increaseItem(y));
  };
  const handleDecrease = (y) => {
    dispatch(decreaseItem(y));
  };
  const removeAllFromCart = () => {
    dispatch(removeAll());
  };
  const cartItem = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.sum);
  return (
    <div className="container">
      <h1 className="text-center py-2">My Order</h1>
      {cartItem.length === 0 ? (
        <h1 className="text-center">Your cart is Empty!</h1>
      ) : (
        <button className="btn btn-danger my-2" onClick={removeAllFromCart}>
          Clear Cart
        </button>
      )}
      <div className="row align-items-start justify-content-between  ">
        <div className="col-7">
          {cartItem.map((x) => (
            <div className="row border-0 py-2 bg-light">
              <div className="col-6">
                <h5>{x.name}</h5>
                <p className="my-0">
                  ₹ {x.price / 100 || x.defaultPrice / 100}
                </p>
                <div className="row align-items-center justify-content-start text-center  px-2">
                  <button
                    className="col-2 btn  border"
                    onClick={() => handleDecrease(x)}
                  >
                    {x.quantity === 1 ? "🗑️" : "➖"}
                  </button>
                  <div className="col-2">{x.quantity}</div>
                  <button
                    className="col-2 btn border ms-2 "
                    onClick={() => handleIncrease(x)}
                  >
                    ➕
                  </button>
                </div>
              </div>
              <div className="col-6">
                <img src={LIST_IMG + x.imageId} className="cardimg" />
              </div>
            </div>
          ))}
        </div>
        {cartItem.length > 0 && (
          <div className="col-4 border-0 bg-light py-3">
            <h2 className="text-center">Order Summary</h2>
            <div className="d-flex justify-content-between   ">
              <p>Subtotal</p>
              <p>₹ {totalPrice / 100}</p>
            </div>
            <div className="d-flex justify-content-between   ">
              <p>Promo Code</p>
              <p className="bg-dark text-white p-2">WELCOME100</p>
            </div>
            <div className="d-flex justify-content-between border-bottom">
              <p>Delivery Fee</p>
              <p>₹ 50</p>
            </div>
            <div className="d-flex justify-content-between  ">
              <p>Total :</p>
              <p>₹ {totalPrice / 100 + 50}</p>
            </div>
            <div className="text-center">
              <button
                className="btn btn-success text-white w-50"
                onClick={() =>
                  alert("Your order has been placed successfully. Thank You!")
                }
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
