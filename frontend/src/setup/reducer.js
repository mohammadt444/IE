export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SELECTED_CATEGORIES":
      return {
        ...state,
        selected_categories: [...state.selected_categories, action.payload],
      };

    case "DELETE_SELECTED_CATEGORIES":
      return {
        ...state,
        selected_categories: state.selected_categories.filter(
          (category) => category !== action.payload
        ),
      };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SET_SORT":
      return { ...state, sort: action.payload };

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
