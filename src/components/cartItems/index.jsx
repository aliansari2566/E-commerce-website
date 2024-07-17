import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartQty } from "../../cart/ActionCreater"; 

const CartItem = ({ id, title, image, price, quantity }) => {
  const [newQty, setNewQty] = useState(quantity);
  const dispatch = useDispatch();

  const qtyChangeHandler = (e) => {
    setNewQty(Number(e.target.value));
  };

  useEffect(() => {
    if (newQty !== undefined) { // Check if newQty is defined
      dispatch(updateCartQty(id, newQty));
      if (newQty === 0) {
        dispatch(removeCartItem(id));
      }
    }
  }, [newQty, dispatch, id]);

  return (
    <>
      <div className="flex gap-6 mt-5 w-96">
        <img src={image} alt="" className="w-24 object-cover rounded border" />
        <div>
          <p>{title}</p>
          <p>$ {price}</p>
          <div>
            <input
              type="number"
              min={0}
              value={newQty}
              onChange={qtyChangeHandler}
              className="border"
            />
          </div>
        </div>
        <div>{newQty * price}</div>
      </div>
    </>
  );
};

export default CartItem;
