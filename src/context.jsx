import { createContext, useReducer, useContext } from "react";
import initialState from "./Reducer";
import shopReducer from "./Reducer";

export const TabsContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const hotels = () => {
    dispatch({
      type: "HOTELS",
    });
  };

  const restauRants = () => {
    dispatch({
      type: "RESTAURANTS",
    });
  };
  const vacationRentals = () => {
    dispatch({
      type: "VACATION RENTALS",
    });
  };
  // const setGeoId = (geoId) => {
  //   console.log(geoId);
  //   dispatch({
  //     type: "SET_GEO_ID",
  //     data: geoId,
  //   });
  // };

  const value = {
    category: state.category,
    state,
    hotels,

    restauRants,
    vacationRentals,
  };
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

const useShop = () => {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
