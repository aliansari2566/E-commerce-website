import { useSelector } from "react-redux";


const CartTotal = () => {
  // const cartItems = useSelector((state) => state.cartItems);
  const cartItems = useSelector((state) => state.cartItems);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalCartQty = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      <div>Total Items: {totalCartQty}</div>
      <div>Total: {cartTotal.toFixed(2)}</div>
    </>
  );
};

export default CartTotal;
