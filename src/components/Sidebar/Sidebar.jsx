import React from "react";

function Sidebar({ sort, setSort, filterHotels, filterRentals }) {
  let dataFilterHotels = filterHotels?.data.filters;

  let fil = dataFilterHotels?.filter((v, i) => {
    return i > 3 ? i : null;
  });

  function handleSortClick(name) {
    setSort(name === sort ? "" : name);
  }
  return (
    <div className="w-full h-full ">
      {fil ? (
        <div className="flex flex-col items-start bg-gray-100   px-2 mr-2">
          {fil?.map((item) => (
            <div key={item.title}>
              <button className="text-[rgb(45,167,144)] my-2">
                {item.title}
              </button>

              <ul>
                <li>
                  {item?.filters?.slice(0, 5).map((i) => (
                    <div key={i.value}>
                      <ul>
                        <li
                          className="flex flex-row justify-start gap-1
                        items-center "
                        >
                          <input
                            className="form-checkbox h-4 w-4 
                             appearance-none bg-white border-solid 
                             border-black border-[1px] checked:bg-[rgb(45,167,144)]"
                            type="checkbox"
                            onClick={() => handleSortClick(i.name)}
                          />
                          <label className="text-sm font-medium font-sans">
                            {i.name}
                          </label>
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
      ) : filterRentals ? (
        <div className="w-full h-full  flex flex-col items-start bg-gray-200 px-2 mr-2">
          <div className="w-full">
            <div className="text-[rgb(45,167,144)] my-2">
              {filterRentals.amenities.parameterName.charAt(0).toUpperCase() +
                filterRentals.amenities.parameterName.slice(1)}
            </div>
            {filterRentals.amenities.list?.slice(0, 5).map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <ul>
                      <li
                        className="flex flex-row justify-start gap-1
                        items-center"
                      >
                        <input
                          className="form-checkbox h-4 w-4 
                          appearance-none bg-white border-solid 
                          border-black border-[1px] checked:bg-[rgb(45,167,144)]"
                          type="checkbox"
                          onClick={() => handleSortClick(item.text)}
                        />

                        <label className="text-sm font-medium font-sans">
                          {item.text}
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
                <hr />
              </div>
            ))}
          </div>

          <div className="w-full">
            <div className="text-[rgb(45,167,144)] my-2">
              {filterRentals.suitability.parameterName.charAt(0).toUpperCase() +
                filterRentals.suitability.parameterName.slice(1)}
            </div>
            {filterRentals.suitability.list?.slice(0, 5).map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <ul>
                      <li
                        className="flex flex-row justify-start gap-1
                        items-center"
                      >
                        <input
                          className="form-checkbox h-4 w-4 
                          appearance-none bg-white border-solid 
                          border-black border-[1px] checked:bg-[rgb(45,167,144)]"
                          type="checkbox"
                          onClick={() => handleSortClick(item.text)}
                        />
                        <label className="text-sm font-medium font-sans">
                          {" "}
                          {item.text}
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
                <hr />
              </div>
            ))}
          </div>
          <div className="w-full">
            <div className="text-[rgb(45,167,144)] my-2">
              {filterRentals.propertyTypes.parameterName
                .charAt(0)
                .toUpperCase() +
                filterRentals.propertyTypes.parameterName.slice(1)}
            </div>
            {filterRentals.propertyTypes.list?.slice(0, 5).map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <ul>
                      <li
                        className="flex flex-row justify-start gap-1
                        items-center"
                      >
                        <input
                          className="form-checkbox h-4 w-4 
                          appearance-none bg-white border-solid 
                          border-black border-[1px] checked:bg-[rgb(45,167,144)]"
                          type="checkbox"
                          onClick={() => handleSortClick(item.text)}
                        />
                        <label className="text-sm font-medium font-sans">
                          {" "}
                          {item.text}
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
                <hr />
              </div>
            ))}
          </div>

          <div className="w-full">
            <div className="text-[rgb(45,167,144)] my-2">
              {filterRentals.distinctiveFeatures.parameterName
                .charAt(0)
                .toUpperCase() +
                filterRentals.distinctiveFeatures.parameterName.slice(1)}
            </div>
            {filterRentals.distinctiveFeatures.list?.slice(0, 5).map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <ul>
                      <li
                        className="flex flex-row justify-start gap-1
                        items-center"
                      >
                        <input
                          className="form-checkbox h-4 w-4 
                          appearance-none bg-white border-solid 
                          border-black border-[1px] checked:bg-[rgb(45,167,144)]"
                          type="checkbox"
                          onClick={() => handleSortClick(item.text)}
                        />
                        <label className="text-sm font-medium font-sans">
                          {" "}
                          {item.text}
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
                <hr />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
