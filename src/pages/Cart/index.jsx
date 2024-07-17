import { useSelector } from "react-redux";
import CartItem from "../../components/cartItems";
import CartTotal from "../../components/cartTotal";

const Cart = () => {
  // console.log(CartItem );
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);

  return (
    <>
      <div className="w-full lg:mx-28 mt-8 flex gap-4">
        <div className="w-2/3 shadow-sm p-4">
          <h1>Shopping Cart</h1>

          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <CartItem
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <li>Your Cart is Empty</li>
          )}
        </div>
        <div className="w-1/3 shadow-sm">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
