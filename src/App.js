import "./App.css";
import Footer from "./ui/Footer";
import MainBody from "./ui/MainBody";
import MainNav from "./ui/MainNav";

function App() {
  return (
    <div className=" items-center flex flex-col text-slate-900 bg-slate-800">
      <div className=" min-h-[7vh] w-full flex place-content-center bg-slate-900/50 text-slate-400">
        <MainNav />
      </div>
      <div className="text-center w-[90%] lg:w-[90%] min-h-[86vh] place-content-center place-items-center ">
        <MainBody />
      </div>
      <div className="bg-slate-400 min-h-[10vh] w-full flex place-items-center place-content-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
