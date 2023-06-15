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
    id: parseInt(
      item?.documentId
        ?.replace(/(g|loc)/g, "")
        .replace(/\b\d+\b/, "")
        .replace(/;/g, "")
    ),
    name: item?.title?.replace(/<\/?b>/g, ""),
    secondaryName: item.secondaryText,
    trackingItems: item.trackingItems,
  }));

  let rw = restaurantsD?.map((item) => ({
    id: parseInt(
      item?.documentId
        ?.replace(/(g|loc)/g, "")
        .replace(/\b\d+\b/, "")
        .replace(/;/g, "")
    ),
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
      navigate(`/hotels/${item.id}/${encodeURIComponent(item.name)}`);
    }
    if (category === "restaurant") {
      navigate(`/restaurants/${item?.id}/${encodeURIComponent(item.name)}`);
    }
  };

  const formatResult = (item) => {
    return (
      <>
        <FormatResults item={item} />
      </>
    );
  };
  const pathName = window.location.pathname;
  return (
    <div>
      <div className="w-screen">
        <div
          className={`${
            pathName !== "/"
              ? "flex flex-row items-center justify-center mr-[170px]"
              : "flex flex-row items-center justify-center "
          }`}
        >
          <div className="w-[80%] sm:w-[60%] md:w-[50%] z-50 ">
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
