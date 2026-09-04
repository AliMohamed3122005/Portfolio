import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "JALL – Soccer Robot",
    description:
      "Led a team in designing and building a soccer robot for a robotics championship. Worked on system integration, electronics, motor control, and power management. Our team reached the final and secured 3rd place in the championship.",
    image: "/projects/jall.png",
  },
  {
    id: 2,
    title: "Coral Changes – Computer Vision",
    description:
      "A computer vision project focused on detecting and visualizing changes between coral images captured at different times. The project uses image alignment and visual difference detection to identify changed regions between yearly observations.",
    image: "/projects/coral-changes2.png",
  },
  {
    id: 3,
    title: "Titanic Survival Analysis – Data Science",
    description:
      "A data science project analyzing the Titanic dataset to explore survival patterns and relationships between passenger characteristics. Used data analysis and visualization to identify trends across fare groups and embarkation locations.",
    image: "/projects/titanic.png",
  },
  {
    id: 4,
    title: "Circuit Analysis Calculator",
    description:
      "An ongoing project focused on developing a system that can analyze circuit diagrams and assist in solving circuit problems. The current stage focuses on detecting and recognizing circuit components from images as a foundation for automated circuit analysis.",
    image: "/projects/circuit-calculator.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section
      id="lab"
      className="py-16 px-4 overflow-hidden sm:px-6 lg:py-20"
    >
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={project.id}
              className="mb-20 last:mb-0"
            >
              <div
                className={`relative grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-12 ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* ================= TEXT CONTENT ================= */}
                <div
                  className={`w-full ${
                    isEven
                      ? "lg:col-start-2 lg:ml-5"
                      : "lg:-ml-5"
                  }`}
                >
                  {/* Project Type */}
                  <p className="text-purple-400 text-lg sm:text-xl mb-2 font-medium">
                    {project.id === 4
                      ? "Ongoing Project"
                      : "Featured Project"}
                  </p>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10 shadow-lg ${
                        isEven
                          ? "lg:ml-0"
                          : "lg:w-[calc(100%+20%)] lg:-ml-20"
                      }`}
                    >
                      <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Project Link */}
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line
                            x1="2"
                            y1="12"
                            x2="22"
                            y2="12"
                          />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* ================= IMAGE CONTENT ================= */}
                <div
                  className={`w-full ${
                    isEven
                      ? "lg:col-start-1 lg:row-start-1"
                      : ""
                  }`}
                >
                  <div
                    className="
                      relative
                      w-full
                      aspect-[4/3]
                      sm:aspect-[5/4]
                      lg:aspect-[11/12]
                      rounded-2xl
                      overflow-hidden
                      bg-[#110720]
                      p-2
                      sm:p-3
                      shadow-2xl
                    "
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}