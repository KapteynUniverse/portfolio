import GithubLogo from "/assets/images/icons/github.png";
import LinkedInLogo from "/assets/images/icons/linkedin.png";
import MailLogo from "/assets/images/icons/email.png";
import List from "../List";

function Footer() {
  var currentYear = new Date().getFullYear();
  const items = [
    <a
      href="https://github.com/KapteynUniverse"
      key="github"
      aria-label="Link leading to Asilcan Toper's GitHub Profile"
      target="_blank"
    >
      <img
        src={GithubLogo}
        width={64}
        height={64}
        alt="Github Logo"
        aria-hidden="true"
        className="hover:animate-pulse"
      />
    </a>,
    <a
      href="https://www.linkedin.com/in/asilcan-toper-46a437207/"
      key="linkedin"
      aria-label="Link leading to Asilcan Toper's LinkedIn Profile"
      target="_blank"
    >
      <img
        src={LinkedInLogo}
        width={64}
        height={64}
        alt="Linkedin Logo"
        aria-hidden="true"
        className="hover:animate-pulse"
      />
    </a>,
    <a
      href="mailto:asilcantoper@gmail.com"
      key="email"
      aria-label="Click to send an email to Asilcan Toper"
      target="_blank"
    >
      <img
        src={MailLogo}
        width={64}
        height={64}
        alt="Mail Logo"
        aria-hidden="true"
        className="hover:animate-pulse"
      />
    </a>,
  ];
  return (
    <footer
      id="Connect"
      className="relative text-center pt-16 pb-8 w-full flex flex-col items-center bg-bgFooter target:animate-pulse-once"
    >
      <div className="max-w-screen-2xl mx-4">
        <div className="cloud-pattern"></div>
        <h2 className=" font-serif text-4xl tracking-widest text-textBlack">
          Let's Connect
        </h2>
        <List items={items} style="flex justify-center gap-4 my-4" />
        <p id="copyright" className="text-textBlack text-sm">
          Copyright © Asilcan Toper {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
