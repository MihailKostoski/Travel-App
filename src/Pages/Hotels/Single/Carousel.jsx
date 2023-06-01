import React from "react";

function Carousel({ singleItem, nextPage, previousPage, page }) {
  return (
    <div>
      <div className="relative ">
        <div className="relative w-full overflow-hidden ">
          <div className="relative  float-left -mr-[100%] w-full !transform-none  transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none">
            <img
              src={singleItem?.photos[page]?.urlTemplate
                .replace("{width}", "800")
                .replace("{height}", "400")}
              className="block w-full"
              alt="Motorbike Smoke"
            />
          </div>
        </div>

        <button
          onClick={() => previousPage()}
          className="absolute m-0 bottom-0 left-4 top-0 z-[1] flex w-[8%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        >
          <span className="inline-block h-8 w-8 dark:grayscale">P</span>
        </button>
        {/* <!-- Carousel controls - next item--> */}
        <button
          onClick={() => nextPage()}
          className="absolute bottom-0 right-4 m-0 top-0 z-[1] flex w-[8%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        >
          <span className="inline-block h-8 w-8 dark:grayscale">N</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
