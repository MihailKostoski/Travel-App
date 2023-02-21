import React, { useEffect } from "react";
import { useState } from "react";
//const data = ["Germany", "Austria", "Ausland", "Czech Republic"];

const data = [
  { id: 1, name: "Castoria" },
  { id: 2, name: "Monarca" },
  { id: 3, name: "Tino" },
];
function SearchBar() {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  console.log(data);
  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = data.filter((suggestion) =>
        suggestion.toString().toLowerCase().indexOf(query)
      );
      setIsActive(true);
      setSuggestions(filterSuggestions);
    } else {
      setIsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  console.log(suggestions);
  return (
    <div>
      <div className="absolute top-1/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-96">
        <input
          className="h-12 border-gray rounded-lg border-[1px]  outline-none w-full"
          type="text"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder="Where to?"
        />
        {isActive && (
          <ul
            id="data"
            className="bg-white w-full border-[1px] rounded-lg  shadow-lg p-4 absolute max-h-[200px] overflow-y-auto"
          >
            {suggestions.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={handleClick}
                  className="min-h-10 w-full border-b-[1px] border-solid border-l-grey"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        )}
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
