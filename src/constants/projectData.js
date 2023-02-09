import taskManager from "../img/TaskManager.jpg";
import weatherApp from "../img/weatherApp.jpg";
import findingHouse from "../img/FindingHouse.jpg";
import carShow from "../img/CarShow.jpg";
import react from "../img/react.png";
import ts from "../img/type-script.png";
import tailwind from "../img/tailwind-css-icon.svg";
import googleCloud from "../img/google-cloud-platform.svg";
import next from "../img/nextjs.svg";
import three from "../img/three.png";
import nodejs from "../img/nodejs.svg";
import firebase from "../img/firebase.svg";

const projectData = [
  {
    title: "Task Manager",
    image: taskManager,
    usedPackages: [react, nodejs, firebase, googleCloud],
    liveLink: "https://adf-task-manager.herokuapp.com",
    gitLink: "https://github.com/yasinuysal33/task-monitoring",
    description:
      "An app for distributing tasks to defined departments. Departments' managers get emails once the task is given. They get notifications each day for the task still not completed before the deadline. Manager and responsible stuff receive email reports every Friday.",
  },
  {
    title: "Weather App",
    image: weatherApp,
    usedPackages: [react, ts, tailwind, googleCloud],
    liveLink: "https://weather-app.yasin-uysal.com",
    gitLink: "https://github.com/yasinuysal33/weather-app",
    description:
      "An app for getting the forecast for upcoming 7 days for Turkey by default. Also, you can search wherever you desire in the world or you can right click on the map to gather weather forecast for a specific location.",
  },
  {
    title: "Finding House Close To Office",
    image: findingHouse,
    usedPackages: [next, ts, googleCloud],
    liveLink: "https://closest-house-to-office.netlify.app",
    gitLink: "https://github.com/yasinuysal33/finding-house-close-to-office",
    description:
      "An app for finding random 100 houses around your office. You can search your office address or you can just right click on the map to locate an office or house. You can find the closest or most economic route to your office.",
  },
  {
    title: "Car Show",
    image: carShow,
    usedPackages: [react, three],
    liveLink: "https://car-show.yasin-uysal.com/",
    gitLink: "https://github.com/yasinuysal33/carshow-with-react-three-fiber",
    description:
      "A car show with a realistic 3D model of a moving car, with beautiful light and shadow effects harmonized with post-processing.",
  },
];

export default projectData;
