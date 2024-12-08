import List from "./List";
import prev from "/assets/images/icons/previous-button.png";
import next from "/assets/images/icons/next-button.png";

function HighlightItem(props) {
  return (
    <li
      className="text-center relative rounded-2xl overflow-hidden group shadow-custom-shadow"
      aria-label={`Details for project: ${props.name}`}
    >
      <img
        src={props.src}
        alt={props.alt}
        className="object-cover"
        loading="lazy"
      />

      <div className="absolute bg-black w-full h-full top-0 left-0 opacity-0 text-white flex flex-col items-center justify-evenly gap-2 group-hover:opacity-100 group-hover:bg-opacity-70 group-focus:opacity-100 group-focus:bg-opacity-70 focus-within:opacity-100 focus-within:bg-opacity-70 transition duration-300">
        <h4>{props.name}</h4>
        <p className="bg-bgHighlight text-textHighlight p-2 rounded-md opacity-100 max-w-prose text-sm sm:text-base md:text-lg">
          {props.description}
        </p>
        <div className="flex gap-4">
          <a
            href={props.live}
            className="border px-2 py-1 hover:bg-bgFooter focus:bg-bgFooter hover:text-textBlack focus:text-textBlack transition duration-300 rounded-md text-sm xs:text-base sm:text-lg"
            target="_blank"
          >
            <span className="sr-only">Click to go to the</span> Live Preview
          </a>
          <a
            href={props.code}
            className="border px-2 py-1 hover:bg-bgFooter focus:bg-bgFooter hover:text-textBlack focus:text-textBlack transition duration-300 rounded-md text-sm xs:text-base sm:text-lg"
            target="_blank"
          >
            <span className="sr-only">Click to go to the</span> Code Preview
          </a>
        </div>
        <List
          items={props.usedLanguage}
          style={"flex gap-2 text-sm sm:text-base md:text-lg"}
        />
      </div>
      {props.slider && (
        <div>
          <button
            className="absolute top-1/2 left-0 xs:left-4 z-50 hover:animate-pulse"
            onClick={props.handlePrevious}
            aria-label="Click for the previous project"
          >
            <img src={prev} alt="" className="scale-50 xs:scale-75" />
          </button>
          <button
            className="absolute top-1/2 right-0 xs:right-4 z-50 hover:animate-pulse "
            onClick={props.handleNext}
            aria-label="Click for the next project"
          >
            <img src={next} alt="" className="scale-50 xs:scale-75" />
          </button>
        </div>
      )}
    </li>
  );
}

export default HighlightItem;
