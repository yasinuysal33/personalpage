import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import MyRotatingBox from "../components/Animations";
import { ReactComponent as Menu } from "../img/menu.svg";
import { ReactComponent as Close } from "../img/close.svg";

const MainNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const changeMenuIcon = () => {
    isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <header className="md:px-10 h-[80px] w-[90%] md:w-[60%]">
      <div className="flex flex-col">
        <nav className="flex justify-between place-items-center place-content-between">
          <a href="/" className="h-[80px] w-[80px]">
            <Canvas>
              <MyRotatingBox />
            </Canvas>
          </a>
          <div className="hidden md:flex p-1 font-thin">
            <a href="#aboutme" className="p-2">
              ABOUT ME
            </a>
            <a href="#projects" className="p-2">
              PROJECTS
            </a>
            <a href="#references" className="p-2">
              REFERENCES
            </a>
            <a href="#contactme" className="p-2">
              CONTACT ME
            </a>
          </div>
          <div className="flex md:hidden p-1 font-thin cursor-pointer">
            <div onClick={changeMenuIcon}>
              {isMenuOpen ? <Close /> : <Menu />}
            </div>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute z-10 block h-screen w-[90%]  md:hidden rounded-lg"
        >
          <div className="flex p-6 text-2xl text-slate-900 bg-slate-200 flex-col items-center justify-center space-y-8 rounded-lg">
            <a href="#aboutme" className="p-2">
              ABOUT ME
            </a>
            <a href="#projects" className="p-2">
              PROJECTS
            </a>
            <a href="#references" className="p-2">
              REFERENCES
            </a>
            <a href="#contactme" className="p-2">
              CONTACT ME
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainNav;
