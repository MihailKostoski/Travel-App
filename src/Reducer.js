export const travelReducer = (state, action) => {
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

    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
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
export default travelReducer;
