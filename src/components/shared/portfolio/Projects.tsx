
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "../../../types";



export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {

    fetch("https://wonderful-prize-42c492eebe.strapiapp.com/api/projects?populate=*")
      .then((data) => data.json())
      .then(({ data }) => {
        setIsLoading(false)
        setProjects(data)
      });

  }, [])
  console.log(isLoading);



  const animateTransition = useCallback((newIndex: number, direction: "left" | "right") => {
    if (isAnimating) return;
    setSlideDirection(direction);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 150);
  }, [isAnimating]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    animateTransition(newIndex, "left");
  }, [currentIndex, animateTransition]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    animateTransition(newIndex, "right");
  }, [currentIndex, animateTransition]);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return;
    animateTransition(index, index > currentIndex ? "right" : "left");
  }, [currentIndex, animateTransition]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const currentProject = projects[currentIndex];

  const getStrapiMedia = (url: string) => {
    if (!url) return "";

    if (url.startsWith("http")) {
      return url; // cloud provider
    }

    return `http://localhost:1337${url}`; // local dev
  };

  return (
    <main className="min-h-screen w-full flex justify-center px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-5xl mx-auto ">
        {/* Header */}
        <div className="flex w-full justify-between  py-10">
          <div className="flex-1">

            <h1 className="text-4xl  text-center font-semibold text-[#2a2520] mt-2">
              Projects
            </h1>
            <div className="text-sm text-center pt-2 text-[#8a8378] font-light">
              Selected Work
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={goToPrevious}
              className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-200"
              aria-label="Previous project"
              style={{ border: "1px solid var(--primary-color)" }}
            >
              <ArrowLeft className="w-4 h-4" style={{ color: "var(--primary-color)" }} />
            </button>
            <button
              onClick={goToNext}
              className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-200"
              aria-label="Next project"
              style={{ border: "1px solid var(--primary-color)" }}
            >
              <ArrowRight className="w-4 h-4 " style={{ color: "var(--primary-color)" }} />
            </button>
          </div>
        </div>


        <div className="flex justify-center items-center">
          {isLoading && <img className="w-42 xl:w-fit" src="./loading.svg" /> }
        </div>
        {/* Project Card */}
        {projects.length > 0 ? <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-300 ease-out bg-white rounded-2xl ${isAnimating
            ? `opacity-0 ${slideDirection === "right" ? "translate-x-8" : "-translate-x-8"}`
            : "opacity-100 translate-x-0"
            }`}
        >
          {/* Project Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-l-lg shadow-lg">
              {/* Badge */}
              {/* <span className="absolute top-4 left-4 z-10 px-4 py-1.5 bg-[#5a5550]/90 text-white text-xs tracking-wider font-medium rounded">
                {currentProject.badge}
              </span> */}

              {/* Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#e8e4dd] to-[#d4d0c8] overflow-hidden">
                <img
                  src={getStrapiMedia(currentProject.images[0].url)}
                  alt={currentProject.title}
                  className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Slide Counter */}
              {/* <div className="absolute bottom-4 left-4 text-white/80 text-sm font-light">
                <span className="font-medium">{String(currentProject.currentSlide).padStart(2, '0')}</span>
                <span className="mx-1">/</span>
                <span>{String(currentProject.totalSlides).padStart(2, '0')}</span>
              </div> */}
            </div>
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-center py-4 pl-4 xl:pl-0">
            <span className="text-xs text-[#8a8378] font-light mb-3">
              {currentProject.year}
            </span>

            <h2 className="text-xl xl:text-2xl font-semibold text-[#2a2520] mb-5" style={{ color: "var(--primary-color)" }}>
              {currentProject.title}
            </h2>

            <p className="text-[#5a5550] text-sm leading-relaxed mb-8 max-w-md">
              {currentProject.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentProject.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1.5 border border-[#d4d0c8] bg-[var(--body-color)] rounded-full text-xs text-[#5a5550] hover:bg-[#F5F5F5] transition-colors duration-200"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* View Project Link */}
            <a target="_blank"
              href={currentProject.link}
              className="inline-flex items-center text-[#2a2520] font-medium group/link hover:text-[#5a5550] transition-colors duration-200 border-b  pb-1 w-fit"

              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-color)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2a2520")} >
              View Project
              <span className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div> : ""}


        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {projects?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                ? "w-8 bg-[#2a2520]"
                : "w-1.5 bg-[#d4d0c8] hover:bg-[#b0aca4]"
                }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}



