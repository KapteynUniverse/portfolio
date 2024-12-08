import { useState } from "react";
import HighlightItem from "./Highlights";

function ProjectsSlider({ allProjects }) {
  const projectsArray = Object.values(allProjects).flat();

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsArray.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto text-center">
      <h3 className="text-center text-2xl mb-4">All Projects</h3>
      <div className="mb-8">
        <HighlightItem
          key={`project-${currentIndex}`}
          name={projectsArray[currentIndex].title}
          description={projectsArray[currentIndex].description}
          live={projectsArray[currentIndex].liveURL}
          code={projectsArray[currentIndex].codeURL}
          usedLanguage={projectsArray[currentIndex].usedLanguage}
          src={projectsArray[currentIndex].image.png}
          alt={projectsArray[currentIndex].image.alt}
        />
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={prevProject}
          className="p-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          ❮ Previous
        </button>
        <button
          onClick={nextProject}
          className="p-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          Next ❯
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {projectsArray.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSlider;
