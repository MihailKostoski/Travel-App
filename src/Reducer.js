export const initialState = {
  category: "hotels",
  //geoId: undefined,
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case "HOTELS":
      return {
        ...state,
        category: "hotels",
      };

    case "RESTAURANTS":
      return {
        ...state,
        category: "restaurant",
      };
    case "VACATION RENTALS":
      return {
        ...state,
        category: "rentals",
      };
    // case "SET_GEO_ID":
    //   return {
    //     ...state,
    //     geoId: action.data,
    //   };

    default:
      return state;
  }
};
export default shopReducer;
