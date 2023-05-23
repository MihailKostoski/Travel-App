import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function UFHotels({
  unfilteredList,
  numImg,
  setNumImg,
  currentId,
  setCurrentId,
  arrayConcated,
}) {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/hotelReview/${id}`);
  };
  return (
    <div>
      <div className="flex flex-col h-full gap-10  w-[400px] sm:w-[440px]  md:w-[580px] lg:w-[720px] ">
        {arrayConcated?.map((hotelItem) => (
          <div
            className="flex flex-col items-start gap-5 w-full md:flex-row justify-center"
            key={hotelItem.id}
          >
            <div className="relative w-[800px] md:w-[400px] h-[340px]">
              <div className="col-span-full flex bg-gray-400 rounded  flex-row justify-between  lg:col-start-1 lg:col-end-4">
                <button
                  className="bg-green rounded text-xs px-4 py-1"
                  onClick={() => handleOnClick(hotelItem.id)}
                >
                  View
                </button>
              </div>
              <div className="flex justify-between absolute top left w-[400px] h-[400px] sm:h-[270px] w-[270px] md:w-[340px] md:h-[340px]">
                <button
                  onClick={() => {
                    setNumImg(numImg > 0 ? numImg - 1 : 0);
                  }}
                  className="hover:bg-greenLight/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                >
                  {" "}
                  <AiOutlineLeft />
                </button>
                <button
                  onClick={(e) => {
                    setNumImg(
                      numImg < hotelItem.cardPhotos.length - 1
                        ? numImg + 1
                        : numImg
                    );
                  }}
                  className="hover:bg-greenLight/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                >
                  <AiOutlineRight />
                </button>
              </div>
              <img
                className="self-center cursor-pointer"
                onClick={() => handleOnClick(hotelItem.id)}
                src={hotelItem?.cardPhotos?.[
                  `${currentId === hotelItem.id ? numImg : 0}`
                ].sizes?.urlTemplate
                  .replace("{width}", "400")
                  .replace("{height}", "400")}
                alt=""
              />
            </div>

            <div
              className="w-full md:w-[200px] 
              whitespace-normal flex flex-col mt-5 items-start"
            >
              <span className="">{hotelItem.title}</span>
              <div className="flex flex-row justify-center items-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                >
                  <title>Rating star</title>
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 
                    1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 
                    1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                     1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <p
                  className="ml-2 text-sm font-bold 
                  text-gray-900 dark:text-white"
                >
                  {hotelItem.bubbleRating.rating}/10
                </p>
              </div>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span
                className="text-sm font-medium text-gray-900
                 underline hover:no-underline dark:text-white"
              >
                ({hotelItem.bubbleRating.count}) reviews
              </span>
            </div>

            <div
              className="w-full md:w-[200px]"

              // px-6 pt-4 pb-2
            >
              <div className="flex flex-col mt-5 w-full items-start">
                <span className="">#photography</span>
                <span className="">#travel</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UFHotels;
