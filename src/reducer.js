export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => amount + item.price * item.qty, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
    case "Add_To_Basket":
      // Logic add item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove_From_Basket":
      // Logic Remove item from basket
      // Copying the basket
      let newBasket = [...state.basket];
      // Check if product exists,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exist in basket, remove it....
        newBasket.splice(index, 1);
      } else {
        console.warn(`
            Can't remove product (id: ${action.id})
          `);
      }
      return { ...state, basket: newBasket };

    case "Increase_qty":
      let incBasket = state.basket.map((item) => {
        if (item.id === action.id) {
          item = { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      return { ...state, basket: incBasket };

    case "Decrease_qty":
      let decBasket = [];
      if (action.amount === 1) {
        decBasket = state.basket.filter(
          (basketItem) => basketItem.id === action.id
        );
      } else {
        decBasket = state.basket.map((item) => {
          if (item.id === action.id) {
            item = { ...item, qty: item.qty - 1 };
          }
          return item;
        });
      }
      return { ...state, basket: decBasket };

    case "clear_checkout":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
/*
 */
