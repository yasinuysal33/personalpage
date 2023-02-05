import projectData from "../constants/projectData";
import ProjectItem from "../ui/ProjectItem";
import References from "./references/References";
import external from "../img/external.svg";

const Body = () => {
  const projects = [];
  projectData.map((el) =>
    projects.push(
      <ProjectItem
        image={el.image}
        key={el.title}
        title={el.title}
        usedPackages={el.usedPackages}
        liveLink={el.liveLink}
        gitLink={el.gitLink}
        description={el.description}
      />
    )
  );

  return (
    <>
      <div
        id="projects"
        className="wrapper flex place-content-start place-items-start text-start"
      >
        <div className="bg"> PROJECTS </div>
        <div className="fg"> PROJECTS </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10 md:p-10">
        {projects}
        <div className="bg-gradient-to-b from-slate-200 via-slate-50 to-slate-400 rounded-lg border border-sky-100 shadow-2xl text-2xl p-4">
          For More Projects{" "}
          <a href="https://github.com/yasinuysal33">
            <img className="inline" src={external} alt="external" />
          </a>
        </div>
      </div>

      <References />
    </>
  );
};

export default Body;
