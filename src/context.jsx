import { createContext, useReducer, useContext, useEffect } from "react";

import travelReducer from "./Reducer";

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

export const TravelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(travelReducer, initial);

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
  };
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

const useTravel = () => {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error("useTravl must be used within TravelContext");
  }

  return context;
};

export default useTravel;
