import SelfIntroduction from "../constants/SelfIntroduction";
import yasin from "../img/Yasin_Uysal.jpg";

const Sidebar = () => {
  return (
    <div className="flex flex-col place-items-center p-4">
      <img src={yasin} alt="Yasin" className="rounded-full w-36 " />
      <div className="text-justify">
        <SelfIntroduction />
      </div>
    </div>
  );
};

export default Sidebar;
