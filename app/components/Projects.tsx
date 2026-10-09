import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: "Robotics" | "Data Science" | "Computer Vision";
  description: string;
  image: string;
  link?: string;
  role?: string;
  tools?: string[];
  metrics?: { value: string; label: string }[];
  video?: string;
  videoPoster?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "JALL – Soccer Robot",
    category: "Robotics",
    description:
      "Led a team in designing and building a soccer robot for a robotics championship. Worked on system integration, electronics, motor control, and power management. Our team reached the final and secured 3rd place in the championship.",
    image: "/projects/jall.png",
    role: "Team leadership, robot integration, electronics, and motor control.",
    tools: ["System Integration", "Electronics", "Motor Control", "Power Management"],
    metrics: [{ value: "3rd", label: "place at the championship" }],
  },
  {
    id: 3,
    title: "Titanic Survival Analysis – Data Science",
    category: "Data Science",
    description:
      "A data science project analyzing the Titanic dataset to explore survival patterns and relationships between passenger characteristics. Used data analysis and visualization to identify trends across fare groups and embarkation locations.",
    image: "/projects/titanic.png",
    role: "Exploratory analysis and visualization of passenger survival patterns.",
    tools: ["Data Analysis", "Survival Trends", "Data Visualization"],
  },
  {
    id: 5,
    title: "Uber Fare Analysis – Data Science",
    category: "Data Science",
    description:
      "Analyzed New York City taxi trips to understand how fare amounts relate to trip distance, pickup time, and passenger count. Built a reproducible preprocessing workflow and visual analysis to make the findings easier to explore.",
    image: "/projects/uber-fare-analysis.png",
    role: "Data cleaning, feature engineering, and exploratory data analysis.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib"],
    metrics: [
      { value: "200K", label: "trips analyzed" },
      { value: "175K", label: "trips after cleaning" },
    ],
  },
  {
    id: 2,
    title: "Coral Changes – Computer Vision",
    category: "Computer Vision",
    description:
      "A computer vision project focused on detecting and visualizing changes between coral images captured at different times. The project uses image alignment and visual difference detection to identify changed regions between yearly observations.",
    image: "/projects/coral-changes2.png",
    role: "Image alignment and visual change detection across yearly coral observations.",
    tools: ["Computer Vision", "Image Alignment", "Change Detection"],
  },
  {
    id: 6,
    title: "Red Circle & Blue Square Counting – Computer Vision",
    category: "Computer Vision",
    description:
      "A video analysis project that detects red circles and blue squares, tracks objects across frames, and keeps a running count using color segmentation and shape features.",
    image: "/projects/counting-red-circles-poster.png",
    video: "/projects/counting-red-circles-demo.webm",
    videoPoster: "/projects/counting-red-circles-poster.png",
    role: "Built HSV color masks, contour-based shape checks, and object tracking for video counts.",
    tools: ["Python", "OpenCV", "NumPy", "Object Tracking"],
  },
  {
    id: 7,
    title: "Face Denoising & Edge Detection – Computer Vision",
    category: "Computer Vision",
    description:
      "Compared average, median, and Gaussian filters on a noisy portrait, then applied Canny edge detection to see how each denoising method preserves facial details.",
    image: "/projects/face-denoising-edges.png",
    role: "Created the noisy image, compared smoothing filters, and extracted facial edges.",
    tools: ["Python", "OpenCV", "NumPy", "Canny Edge Detection"],
  },
  {
    id: 8,
    title: "Vehicle Speed Detection – Computer Vision",
    category: "Computer Vision",
    description:
      "Tracked vehicles with a YOLO model and estimated speed from the time each vehicle crossed two reference lines. The measured results are also saved to a CSV file.",
    image: "/projects/speed-detection-poster.png",
    video: "/projects/speed-detection-demo.webm",
    videoPoster: "/projects/speed-detection-poster.png",
    role: "Integrated vehicle detection and tracking with line-crossing timing and speed calculation.",
    tools: ["Python", "YOLO", "OpenCV", "ByteTrack"],
  },
  {
    id: 4,
    title: "Circuit Analysis Calculator",
    category: "Computer Vision",
    description:
      "An ongoing project focused on developing a system that can analyze circuit diagrams and assist in solving circuit problems. The current stage focuses on detecting and recognizing circuit components from images as a foundation for automated circuit analysis.",
    image: "/projects/circuit-calculator.png",
    role: "Circuit component detection and image recognition for automated analysis.",
    tools: ["Computer Vision", "Component Recognition", "Circuit Analysis"],
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
          const isNewCategory =
            index === 0 || featuredProjects[index - 1].category !== project.category;

          return (
            <div
              key={project.id}
              className="mb-20 last:mb-0"
            >
              {isNewCategory && (
                <div className="mb-8 flex items-center gap-5">
                  <h2 className="shrink-0 text-sm font-semibold uppercase tracking-[0.22em] text-purple-300 sm:text-base">
                    {project.category}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-400/40 to-transparent" />
                </div>
              )}
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
                      {project.role && (
                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-purple-200">
                          <span className="font-semibold text-white">My role</span>
                          {": "}{project.role}
                        </p>
                      )}
                      {project.metrics && (
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          {project.metrics.map((metric) => (
                            <div key={metric.label} className="rounded-xl border border-white/10 bg-black/15 px-4 py-3">
                              <p className="text-xl font-bold text-white">{metric.value}</p>
                              <p className="text-xs text-white/60">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {project.tools && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span key={tool} className="rounded-full border border-purple-300/20 bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-200">
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
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
                    className={`relative w-full ${
                      project.id === 5
                        ? "aspect-[3/1]"
                        : project.video
                        ? "aspect-video"
                        : project.id === 7
                        ? "aspect-[4/3]"
                        : "aspect-[4/3] sm:aspect-[5/4] lg:aspect-[11/12]"
                    } rounded-2xl overflow-hidden bg-[#110720] p-2 sm:p-3 shadow-2xl`}
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      {project.video ? (
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          poster={project.videoPoster}
                          aria-label={`${project.title} demo video`}
                          className="h-full w-full bg-black object-contain"
                        >
                          <source src={project.video} type="video/webm" />
                          Your browser does not support embedded videos.
                        </video>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className={`object-contain ${
                            project.id === 1
                              ? "scale-[0.95]"
                              : project.id === 2
                              ? "scale-[0.8]"
                              : ""
                          }`}
                        />
                      )}
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
