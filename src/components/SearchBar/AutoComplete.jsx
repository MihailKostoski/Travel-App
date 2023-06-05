import { ReactSearchAutocomplete } from "react-search-autocomplete";
import axios from "axios";
import FormatResults from "./FormatResults";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTravel from "../../context";
import { baseUrl, headers } from "../../api/api";
const options = {
  headers,
};
function AutoComplete() {
  const [restaurantsD, setRestaurantsD] = useState();
  const [hotelsD, setHotelsD] = useState();
  const [vacationD, setVacationD] = useState();
  const navigate = useNavigate();

  const { category } = useTravel();
  console.log(category);

  const handleOnSearch = (string) => {
    if (string !== "") {
      axios
        .get(
          `${baseUrl}/${
            category === undefined ? undefined : category
          }/searchLocation?query=${string}`,
          options
        )
        .then(function (response) {
          if (category === "hotels") {
            setHotelsD(response.data.data);
          } else if (category !== "hotels") {
            setHotelsD([]);
          }
          if (category === "restaurant") {
            setRestaurantsD(response.data.data);
          } else if (category !== "restaurant") {
            setRestaurantsD([]);
          }
          if (category === "rentals") {
            setVacationD(response.data.data);
          } else if (category !== "rentals") {
            setVacationD([]);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

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
  let vr = vacationD?.map((item) => ({
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
    if (category === "rentals") {
      navigate(`/vacationRentals/${item?.id}`);
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
      <div className="w-screen">
        <div className="flex flex-row items-center justify-center ">
          <div className="w-[40%] z-50 ">
            <ReactSearchAutocomplete
              items={
                hotelsD?.length > 0
                  ? hot
                  : undefined || restaurantsD?.length > 0
                  ? rw
                  : undefined || vacationD?.length > 0
                  ? vr
                  : undefined
              }
              inputDebounce={400}
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
              styling={{
                iconColor: "#ff9f1c",
                height: "45px",
                border: "1px solid #2ec4b6",
              }}
              placeholder={`Search for ${category}`}
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
    </div>
  );
}

export default AutoComplete;
