import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
const options = {
  // method: "GET",
  //url: "https://travel-advisor.p.rapidapi.com/locations/search",
  params: {
    //query: "munich",
    limit: "4",
    /* offset: "0",
    units: "km",
    location_id: "1",
    currency: "USD",
    sort: "relevance",
    lang: "en_US",*/
  },
  headers: {
    "X-RapidAPI-Key": "33cd884451msh63e77e0b0e4e5eep1e2adbjsnd4f06e3df30c",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);

  const handleOnSearch = (string) => {
    if (string !== "") {
      axios
        .get(
          `https://travel-advisor.p.rapidapi.com/locations/search?query=${string}`,
          options
        )
        .then(function (response) {
          setSearchResults(response);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setSearchResults([]);
    }
  };

  const Items = [
    {
      id: parseInt(searchResults.data?.data[0].result_object?.location_id),
      name: searchResults.data?.data[0].result_object?.name.toString(),
    },
  ];

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    if (item.name !== undefined) {
      return (
        <>
          <span style={{ display: "block", textAlign: "left" }}>
            {item.name}
          </span>
        </>
      );
    }

    /* return (
        <>
          <span style={{ display: "block", textAlign: "left" }}>
            {item.name}
          </span>
        </>
      );
    } else if (item.title) {
      return (
        <>
          <span style={{ display: "block", textAlign: "left" }}>
            {item.title}
          </span>
        </>
      );
    }*/
  };

  return (
    <div>
      <div className="absolute top-1/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-96">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={Items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </div>
    </div>
    /* <div className="absolute top-1/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-96">
      <input
        className="border-2 border-grey  h-10 px-5 pr-16  w-full rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-5 mr-4"
      ></button>
    </div>*/
  );
}

export default SearchBar;
