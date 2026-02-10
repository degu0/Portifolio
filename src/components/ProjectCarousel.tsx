import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";
import { Modal } from "./Modal";
import { X } from "lucide-react";

type SkillType = {
  src: string;
  alt: string;
  name?: string;
};

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  languages: SkillType[];
};

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div
            className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-[97%] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] shrink-0"
              >
                <div
                  onClick={() => openModal(project)}
                  className="bg-zinc-800 rounded-lg overflow-hidden border-2 border-zinc-700 hover:border-green-500 transition-colors cursor-pointer h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white text-base sm:text-lg font-semibold line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-zinc-800/90 hover:bg-zinc-700 text-white p-2 rounded-full transition-colors cursor-pointer z-10 shadow-lg"
          aria-label="Projeto anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-zinc-800/90 hover:bg-zinc-700 text-white p-2 rounded-full transition-colors cursor-pointer z-10 shadow-lg"
          aria-label="Próximo projeto"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-2 rounded-full transition-all
                ${index === currentIndex ? "bg-green-500 w-8" : "bg-zinc-600 w-2"}
              `}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={closeModal} size="lg">
          <div className="flex flex-col space-y-6 p-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h2 className="text-xl sm:text-2xl font-semibold text-white pr-8">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-zinc-400 hover:text-white transition-colors rounded-lg p-1 hover:bg-zinc-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
            />
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-sm font-semibold mb-2">
                  Descrição
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h3 className="text-white text-sm font-semibold mb-3">
                  Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {selectedProject.languages.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-zinc-800 rounded-full p-3 flex items-center justify-center border border-zinc-700"
                    >
                      <img
                        src={skill.src}
                        alt={skill.alt}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-4 border-t border-zinc-800">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                Fechar
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
