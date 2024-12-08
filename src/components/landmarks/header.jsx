import logo from "/assets/images/icons/headerLogo.png";
import Navigation from "../Navigation";
import ThemeSwitcher from "../ThemeSwitcher";

function Header() {
  return (
    <header className="flex justify-center items-center sm:fixed w-full z-10 bg-bgHeader font-serif p-4 text-textBlack border-b-4 border-b-bgFooter">
      <div className="max-w-screen-2xl w-full flex sm:justify-between justify-center">
        <div className="flex gap-2 items-center">
          <ThemeSwitcher />
          <p aria-label="Made by">Asilcan Toper</p>
          <img
            src={logo}
            alt="Logo"
            aria-hidden="true"
            width={32}
            height={32}
          />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
