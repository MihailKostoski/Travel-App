import React, { useCallback, useEffect, useMemo } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import axios from "axios";
import FormatResults from "./FormatResults";
import { useState } from "react";
import useShop from "../../context";
import { useNavigate } from "react-router-dom";
// import { data } from "./object";
import { restaurant } from "../../restuarant";
import { hotels } from "./hotels";
// const options = {
//   headers: {
//     "X-RapidAPI-Key": "33cd884451msh63e77e0b0e4e5eep1e2adbjsnd4f06e3df30c",
//     "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
//   },
// };
function AutoComplete() {
  const navigate = useNavigate();

  const [restaurantsD, setRestaurantsD] = useState([]);

  const [hotelsD, setHotelsD] = useState();
  const { category } = useShop();
  console.log(category);

  const handleOnSearch = (string) => {
    if (string !== "") {
      // axios
      //   .get(
      //     `https://tripadvisor16.p.rapidapi.com/api/v1/${
      //       category === undefined ? undefined : category
      //     }/searchLocation?query=${string}`,
      //     options
      //   )
      //   .then(function (response) {
      if (category === "hotels") {
        setHotelsD(hotels);
      } else if (category !== "hotels") {
        setHotelsD([]);
      }
      if (category === "restaurant") {
        setRestaurantsD(restaurant);
      } else if (category !== "restaurant") {
        setRestaurantsD([]);
      }
      // })
      // .catch(function (error) {
      //   console.error(error);
      // });
    }
  };
  console.log(hotelsD, "hotls");
  console.log(restaurantsD, "restar");

  let hot = hotelsD?.map((item) => ({
    id: parseFloat(item?.documentId),
    name: item?.title?.replace(/<\/?b>/g, ""),
    secondaryName: item.secondaryText,
    trackingItems: item.trackingItems,
  }));

  let rw = restaurantsD?.map((item) => ({
    id: item?.locationId,
    name: item?.localizedName,
    secondaryName: item?.locationV2?.names?.longOnlyHierarchyTypeaheadV2,
    placeType: item?.placeType,
  }));

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnFocus = () => {};

  const handleOnSelect = (item) => {
    if (category === "hotels") {
      navigate(`/hotels/${item?.id}`);
    }
    if (category === "restaurant") {
      navigate(`/restaurants/${item?.id}`);
    }
    console.log(item.route);
  };

  const formatResult = (item) => {
    return (
      <>
        <FormatResults item={item} />
      </>
    );
  };

  return (
    <div>
      <div className="absolute top-1/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-96">
        <div style={{ width: 600 }}>
          <ReactSearchAutocomplete
            items={
              hotelsD?.length > 0
                ? hot
                : undefined || restaurantsD?.length > 0
                ? rw
                : undefined
            }
            inputDebounce={100}
            includeMatches
            minMatchCharLength={2}
            fuseOptions={{
              isCaseSensitive: false,
              includeScore: false,
              shouldSort: true,
              includeMatches: false,
              findAllMatches: false,
              minMatchCharLength: 1,
              location: 0,
              threshold: 0.6,
              distance: 100,
              useExtendedSearch: false,
              ignoreLocation: false,
              ignoreFieldNorm: false,
              fieldNormWeight: 1,
              keys: ["name"],
            }}
            resultStringKeyName="name"
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            autoFocus
            onFocus={handleOnFocus}
            formatResult={formatResult}
          />
        </div>
      </div>
    </div>
  );
}

export default AutoComplete;
