import { ReactComponent as Left } from "../../img/left.svg";
import { ReactComponent as Quote } from "../../img/quote.svg";
import referenceData from "../../constants/referenceData";
import { useEffect, useState } from "react";
import cx from "classnames";

const References = () => {
  const [shownIndex, setShownIndex] = useState(0);

  useEffect(() => {
    const height = document.getElementById("selectedSlider").offsetHeight;
    document.getElementById("sliderWrapper").style.height = `${height}px`;
  }, []);

  const referenceSlider = (
    <>
      {referenceData.map((el, i) => (
        <div
          key={i}
          id="selectedSlider"
          className={
            i === shownIndex
              ? "absolute duration-700"
              : i < shownIndex
              ? "absolute duration-700 opacity-0 translate-x-full"
              : "absolute duration-700 opacity-0 -translate-x-full"
          }
        >
          <div className="inline-block">
            <Quote />
          </div>
          <span className="font-thin">{el.note}</span>
          <div className="inline-block">
            <Quote />
          </div>
          <span className="font-bold">
            {el.name}, {el.title}
          </span>
        </div>
      ))}
    </>
  );

  const rightReference = () => {
    setShownIndex((prev) => (prev === 0 ? referenceData.length - 1 : prev - 1));
  };

  const leftReference = () => {
    setShownIndex((prev) => (prev === referenceData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="references">
      <div className="wrapper flex  place-content-start place-items-start text-start">
        <div className="bg"> REFERENCES </div>
        <div className="fg"> REFERENCES </div>
      </div>
      <div className="flex flex-nowrap place-content-between p-4 gap-4 bg-slate-900 text-slate-400 items-center rounded-lg md:m-10 relative">
        <div
          onClick={leftReference}
          className="cursor-pointer hover:text-cyan-300"
        >
          <Left />
        </div>
        <div
          id="sliderWrapper"
          className={cx("relative w-full duration-700 overflow-hidden top-0")}
        >
          {referenceSlider}
        </div>
        <div
          onClick={rightReference}
          className="rotate-180 cursor-pointer hover:text-cyan-300"
        >
          <Left />
        </div>
      </div>
    </section>
  );
};

export default References;
