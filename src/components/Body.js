import projectData from "../constants/projectData";
import ProjectItem from "../ui/ProjectItem";
import classes from "./Body.module.css";

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
      <div className={classes.wrapper}>
        <div className={classes.bg}> PROJECTS </div>
        <div className={classes.fg}> PROJECTS </div>
        {/* <div className="text-2xl">PROJECTS</div> */}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-20 p-10 ">
        {projects}
      </div>
    </>
  );
};

export default Body;
