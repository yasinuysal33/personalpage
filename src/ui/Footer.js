import git from "../img/github.svg";
import mail from "../img/mail.svg";
import linkedin from "../img/linkedin.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contactme"
      className="md:px-10 w-[90%] md:w-[50%] flex flex-col place-items-center place-content-center gap-1"
    >
      <div className="flex place-content-center gap-4">
        <a
          href="https://github.com/yasinuysal33"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={git}
            alt="github"
            className="h-6 m-2   transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-150 duration-300"
          />
        </a>
        <a
          href="mailto:uysal.e.yasin@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={mail}
            alt="email"
            className="h-6 m-2 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-150 duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/e-yasin-uysal/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="h-6 m-2 transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-150 duration-300"
          />
        </a>
      </div>
      <div>©{year} E. Yasin UYSAL</div>
    </footer>
  );
};

export default Footer;
