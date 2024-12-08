function Navigation() {
  return (
    <nav className="hidden sm:flex items-center" aria-label="Main Navigation">
      <ul className="flex gap-1 nav:gap-4">
        <li>
          <a href="#" className="tracking-widest nav-hover-effect relative">
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="tracking-widest nav-hover-effect relative"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="tracking-widest nav-hover-effect relative"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="tracking-widest nav-hover-effect relative"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Connect"
            className="tracking-widest nav-hover-effect relative"
          >
            Let's Connect
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
