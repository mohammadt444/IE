export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, { title: action.title, author: action.author }];

    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
