import up from "/assets/images/icons/up-arrow.png";

function Up() {
  return (
    <a
      href="#"
      aria-label="Click to go to the top of the page"
      className="absolute right-8 bottom-4 hover:animate-pulse"
    >
      <img src={up} alt="" />
    </a>
  );
}

export default Up;
