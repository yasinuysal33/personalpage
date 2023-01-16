import "./App.css";
import Footer from "./ui/Footer";
import MainBody from "./ui/MainBody";
import MainNav from "./ui/MainNav";

function App() {
  return (
    <div className=" items-center flex flex-col text-gray-600">
      <div className="bg-slate-400 min-h-[7vh] w-full flex place-items-center">
        <MainNav />
      </div>
      <div className="text-center w-[90%] lg:w-[90%]   min-h-[86vh] place-content-center place-items-center ">
        <MainBody />
      </div>
      <div className="bg-slate-400 min-h-[7vh] w-full flex place-items-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
