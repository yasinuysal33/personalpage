import SelfIntroduction from "../constants/SelfIntroduction";
import yasin from "../img/Yasin_Uysal.jpg";
import down from "../img/down.svg";
import cx from "classnames";
import { useState } from "react";

const Sidebar = () => {
  const [aboutMe, setAboutMe] = useState("max-h-0");
  const [changeArrowStyle, setChangeArrowStyle] = useState("");
  const [changeBg, setChangeBg] = useState("");
  const [changeBounce, setChangeBounce] = useState("animate-bounce");

  const toggleAboutMe = () => {
    setAboutMe((prev) => (prev === "max-h-0" ? "max-h-[1000px]" : "max-h-0"));
    setChangeArrowStyle((prev) => (prev === "" ? "rotate-180" : ""));
    setChangeBg((prev) => (prev === "" ? "bg-slate-900" : ""));
    setChangeBounce((prev) =>
      prev === "animate-bounce" ? "" : "animate-bounce"
    );
  };

  return (
    <div
      className={cx(
        changeBg,
        "flex flex-col place-items-center p-4  rounded-lg text-slate-400 transition-all duration-[1500ms]"
      )}
    >
      <div className="flex items-end">
        <img src={yasin} alt="Yasin" className="rounded-full w-36" />
        <div className={changeBounce}>
          <img
            onClick={toggleAboutMe}
            src={down}
            alt="About Me"
            className={cx(
              changeArrowStyle,
              "cursor-pointer w-4 transition-all duration-1000"
            )}
          />
        </div>
      </div>
      <div>
        <div className="pt-1 font-bold">E. Yasin UYSAL</div>
        <div>Frontend Developer</div>
        <div className="italic text-sm">Industrial Engineer</div>
      </div>
      <div
        className={cx(
          aboutMe,
          "transition-all duration-1000 text-justify overflow-hidden font-thin"
        )}
      >
        <SelfIntroduction />
      </div>
    </div>
  );
};

export default Sidebar;
