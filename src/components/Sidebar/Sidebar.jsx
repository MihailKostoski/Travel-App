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
        <div className="flex flex-col items-start">
          {fil?.map((item) => (
            <div key={item.title}>
              <button>{item.title}</button>
              <ul>
                <li>
                  {item?.filters?.slice(0, 5).map((i) => (
                    <div key={i.value}>
                      <ul>
                        <li
                          className="flex flex-row justify-start gap-1
                        items-center bg-gradient-to-r from-white via-greenLight"
                        >
                          <input
                            className="form-checkbox h-4 w-4 
                             appearance-none bg-white border-solid 
                             border-black border-[1px] checked:bg-gradient-to-b from-brown"
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
        <div className="w-full h-full  flex flex-col items-center ">
          <div className="w-full h-full ">
            <div>{filterRentals.amenities.parameterName}</div>
            {filterRentals.amenities.list?.slice(0, 5).map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <ul>
                      <li
                        className="flex flex-row justify-start gap-1
                        items-center bg-gradient-to-r from-white via-greenLight"
                      >
                        <input
                          className="form-checkbox h-5 w-5 
                           appearance-none bg-white border-solid 
                           border-black border-[1px] checked:bg-gradient-to-b from-brown"
                          type="checkbox"
                          onClick={() => handleSortClick(item.text)}
                        />

                        <label className="text-lg font-medium font-sans">
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

          <div className="w-full h-full ">
            <div>{filterRentals.suitability.parameterName}</div>
            {filterRentals.suitability.list?.slice(0, 5).map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <ul>
                      <li
                        className="flex flex-row justify-start gap-1 items-center
                       bg-gradient-to-r from-white via-greenLight"
                      >
                        <input
                          className="form-checkbox h-5 w-5 
                          appearance-none bg-white border-solid 
                          border-black border-[1px] checked:bg-gradient-to-b from-brown"
                          type="checkbox"
                          onClick={() => handleSortClick(item.text)}
                        />
                        <label className="text-lg font-medium font-sans">
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
          <div className="w-full h-full ">
            <div>{filterRentals.propertyTypes.parameterName}</div>
            {filterRentals.propertyTypes.list?.slice(0, 5).map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <ul>
                      <li className="flex flex-row justify-start gap-1 items-center bg-gradient-to-r from-white via-greenLight">
                        <input
                          className="form-checkbox h-5 w-5 
                          appearance-none bg-white border-solid 
                          border-black border-[1px] checked:bg-gradient-to-b from-brown"
                          type="checkbox"
                          onClick={() => handleSortClick(item.text)}
                        />
                        <label className="text-lg font-medium font-sans">
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

          <div className="w-full h-full ">
            <div>{filterRentals.distinctiveFeatures.parameterName}</div>
            {filterRentals.distinctiveFeatures.list?.slice(0, 5).map((item) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <ul>
                      <li className="flex flex-row justify-start gap-1 items-center bg-gradient-to-r from-white via-greenLight">
                        <input
                          className="form-checkbox h-5 w-5 
                          appearance-none bg-white border-solid 
                          border-black border-[1px] checked:bg-gradient-to-b from-brown"
                          type="checkbox"
                          onClick={() => handleSortClick(item.text)}
                        />
                        <label className="text-lg font-medium font-sans">
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
