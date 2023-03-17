import React from "react";

function Sidebar({ sort, setSort, filterHotels }) {
  let dataFilterHotels = filterHotels?.data.filters;

  let fil = dataFilterHotels?.filter((v, i) => {
    return i > 3 ? i : null;
  });

  function handleSortClick(name) {
    setSort(name === sort ? "" : name);
  }
  return (
    <>
      <div className="w-full h-full ">
        {fil?.map((item) => (
          <div key={item.title}>
            <button>{item.title}</button>
            <ul>
              <li>
                {item?.filters?.slice(0, 5).map((i) => (
                  <div key={i.value}>
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          onClick={() => handleSortClick(i.name)}
                        />
                        <label> {i.name}</label>
                      </li>
                    </ul>
                  </div>
                ))}
              </li>
            </ul>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
