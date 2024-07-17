import { ADD_TO_CART, UPDATE_CART_QTY, REMOVE_ITEM } from "../ActionCreater";

const initialState = {
  // cartItems: getCartItemsFromLocalStorage(),
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, quantity } = action.payLoad;
        
      // const existingItemIndex = state.cartItems.findIndex(
      //   (cartItem) => cartItem.id === product.id
      // );
      const existingItemIndex = state.cartItems.length > 0 ? (state.cartItems.findIndex(
        (cartItem) => cartItem.id === product.id
      )) : -1


        console.log('existingItemIndex', existingItemIndex)
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cartItems];
        console.log('updatedCart')
        updatedCart[existingItemIndex].quantity += quantity;
        // You can save to local storage here if needed.
        return {
          ...state,
          cartItems: updatedCart,
        };
      } else {
        const cartItem = {
          ...product,
          quantity,
        };
        // You can save to local storage here if needed.
        return {
          ...state,
          cartItems: [...state.cartItems, cartItem],
        };
      }
    }

    case UPDATE_CART_QTY: {
      const { itemID, quantity } = action.payLoad;
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === itemID ? { ...item, quantity } : item
      );
      // You can save to local storage here if needed.
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case REMOVE_ITEM: {
      const { itemID } = action.payLoad;
      const updatedCartItems = state.cartItems.filter((item) => item.id !== itemID);
      // You can save to local storage here if needed.
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
