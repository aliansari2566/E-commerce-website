const addToCart = (product, quantity, userID) => {

  return {
    type: ADD_TO_CART,
    payLoad: {
      product,
      quantity,
      userID,
    },
  };
};

const updateCartQty = (itemID, quantity) => {
  return {
    type: UPDATE_CART_QTY,
    payLoad: {
      itemID,
      quantity,
    },
  };
};

const removeCartItem = (itemID) => {
  return {
    type: REMOVE_ITEM,
    payLoad: {
      itemID,
    },
  };
};
export const ADD_TO_CART = "ADD_TO_CARt";
export const REMOVE_ITEM = "REMOVE_ITEMS";
export const UPDATE_CART_QTY = "UPDATE_CART_QTY";

export { addToCart, updateCartQty, removeCartItem };
