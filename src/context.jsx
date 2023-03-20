import { createContext, useReducer, useContext, useEffect } from "react";

import shopReducer from "./Reducer";

const initial = {
  category: "hotels",
  date: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
  //geoId: undefined,
};

export const TabsContext = createContext(initial);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initial);

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
      type: "VACATION_RENTALS",
    });
  };
  const setDate = (date) => {
    dispatch({
      type: "SET_DATE",
      payload: date,
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
    date: state.date,
    setDate,
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
