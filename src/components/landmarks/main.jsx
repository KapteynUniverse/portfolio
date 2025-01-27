import Image from "../Image";
import SkillSection from "../SkillSection";
import HighlightItem from "../Highlights";
import highlightProjects from "/src/data/highlightProjects.json";
import allProjects from "/src/data/allProjects.json";
import { useState } from "react";

function Main() {
  const lists = {
    languages: ["HTML", "CSS", "JavaScript", "TypeScript", "EJS", "SQL"],
    frameworks: ["Next.js", "Express", "Tailwind", "Bootstrap"],
    databases: ["PostgreSQL", "Supabase", "Firebase"],
    libraries: ["React", "JQuery"],
    tools: ["Git/GitHub", "VSCode", "Figma", "Node", "Postman", "Vite"],
  };

  // Handle all projects slider

  const projectList = Object.keys(allProjects).flatMap(
    (projectKey) => allProjects[projectKey]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectList.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectList.length) % projectList.length
    );
  };

  return (
    <main className="flex justify-center items-center bg-bgMain text-textBlack">
      <div className="max-w-screen-2xl w-full p-4">
        <h1 className="sr-only">Asilcan Toper's Portfolio</h1>

        <article
          id="About"
          className="flex flex-col items-center justify-center my-14 scroll-mt-20 target:animate-pulse-once"
        >
          <h2 className="font-serif text-4xl mb-4 tracking-widest">About Me</h2>
          <div className="flex flex-col items-center text-center xs:block xs:text-left">
            <Image
              src="/assets/images/Profile.png"
              alt="Asilcan Toper's profile image: a man in his mid-20s with long hair and a goatee, wearing a blue t-shirt."
              style="h-64 aspect-auto rounded-full xs:float-left xs:shape-outside-circle xs:mr-4"
              loading="lazy"
            />
            <p className="max-w-prose mt-4">
              Hi, my name is Asilcan. I am self taught fullstack web developer.
              My frontend knowledge heavier than backend thought. I received my
              Bachelor's degree in Astronomy from Ege University. I've always
              had an enthusiasm for programming. I tried some C++ and Python
              years ago, and for the past year, I am interested in Full Stack
              Web Development technologies. Currently working on accessibility
              and React based projects.
            </p>
          </div>
        </article>

        <article
          id="Skills"
          className="flex flex-col items-center justify-center bg-bgArticle rounded-2xl max-w-fit mx-auto p-4 my-8 scroll-mt-20 target:animate-pulse-once text-textBlack"
        >
          <h2 className="font-serif text-4xl mb-4 tracking-widest">Skills</h2>

          <div className="flex justify-center gap-2 flex-wrap">
            {Object.entries(lists).map(([key, items]) => (
              <SkillSection
                key={key}
                src={`/assets/images/icons/${key}.png`}
                title={key}
                items={items}
              />
            ))}
          </div>
        </article>

        <article
          id="Projects"
          className="mb-8 scroll-mt-20 target:animate-pulse-once"
        >
          <h2 className="text-center font-serif text-4xl mb-4 tracking-widest">
            Projects
          </h2>
          <section>
            <h3 className="text-center font-serif text-2xl tracking-wide">
              Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(600px,1fr))] gap-4 my-4">
              {Object.keys(highlightProjects).map((projectKey) =>
                highlightProjects[projectKey].map((highlight, index) => (
                  <HighlightItem
                    key={`${projectKey}-${index}`}
                    name={highlight.title}
                    description={highlight.description}
                    live={highlight.liveURL}
                    code={highlight.codeURL}
                    usedLanguage={highlight.usedLanguage}
                    src={highlight.image.png}
                    alt={highlight.image.alt}
                    slider={false}
                  />
                ))
              )}
            </ul>
          </section>
          <section>
            <h3 className="text-center font-serif text-2xl mb-4 tracking-wide">
              All Projects
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              <HighlightItem
                name={projectList[currentIndex].title}
                description={projectList[currentIndex].description}
                live={projectList[currentIndex].liveURL}
                code={projectList[currentIndex].codeURL}
                usedLanguage={projectList[currentIndex].usedLanguage}
                src={projectList[currentIndex].image.png}
                alt={projectList[currentIndex].image.alt}
                slider={true}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
              />
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Main;
