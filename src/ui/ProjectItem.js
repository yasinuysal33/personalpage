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
    <div className="flex flex-col bg-slate-200 rounded-lg border border-sky-200 shadow-lg">
      <img src={image} alt={title} className="rounded-lg" />
      <div className=" flex place-content-center p-2">
        {usedPackages.map((el, i) => (
          <img className="h-6 m-2 " src={el} alt={`package${i}`} />
        ))}
      </div>
      <div className="flex place-content-center p-2">
        <a href={liveLink} target="_blank" rel="noreferrer">
          <img src={chrome} alt="live" className="h-6 m-2" />
        </a>
        <a href={gitLink} target="_blank" rel="noreferrer">
          <img src={git} alt="git" className="h-6 m-2" />
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
