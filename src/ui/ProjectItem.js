import chrome from "../img/chrome.svg";
import git from "../img/github.svg";

const ProjectItem = ({
  image,
  title,
  usedPackages,
  liveLink,
  gitLink,
  description,
}) => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-slate-50 via-amber-100 to-amber-400 rounded-lg border border-sky-100 shadow-2xl">
      <img src={image} alt={title} className="rounded-lg" />
      <div className=" flex place-content-center pt-2 ">
        {usedPackages.map((el, i) => (
          <img
            className="h-6 m-2 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-150 duration-300"
            src={el}
            alt={`package${i}`}
          />
        ))}
      </div>
      <div className="flex place-content-center ">
        <a href={liveLink} target="_blank" rel="noreferrer">
          <img
            src={chrome}
            alt="live"
            className="h-6 m-2 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-150 duration-300"
          />
        </a>
        <a href={gitLink} target="_blank" rel="noreferrer">
          <img
            src={git}
            alt="git"
            className="h-6 m-2 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-150 duration-300"
          />
        </a>
      </div>
      <div className="h-15 m-2 text-xs">
        <p className="font-bold text-lg">{title}</p>
        {description}
      </div>
    </div>
  );
};

export default ProjectItem;
