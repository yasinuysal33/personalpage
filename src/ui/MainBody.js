import Body from "../components/Body";
import Sidebar from "./Sidebar";

const MainBody = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-6 gap-4 ">
      <div className="col-span-1 rounded-lg mt-4 h-fit shadow-2xl">
        <Sidebar />
      </div>
      <div className="col-span-1 md:col-span-4">
        <Body />
      </div>
      <div className="col-span-1"></div>
    </main>
  );
};

export default MainBody;
