import Image from "next/image";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface WorkExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string[];
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Exploring intelligent systems and machine learning approaches through practical projects, experimentation, and real-world problem solving.",
    icon: "/cards/ai2.png",
  },
  {
    id: 2,
    title: "Computer Vision",
    description:
      "Working with image processing, object detection, image analysis, and computer vision techniques to build practical visual solutions.",
    icon: "/cards/cv2.png",
  },
  {
    id: 3,
    title: "Data Science",
    description:
      "Analyzing data, discovering patterns, creating visualizations, and turning raw data into meaningful insights.",
    icon: "/cards/ds.png",
  },
  {
    id: 4,
    title: "Robotics & Embedded Systems",
    description:
      "Building robotic and embedded systems by integrating microcontrollers, sensors, motors, electronics, and control logic.",
    icon: "/cards/re.png",
  },
];

const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    role: "AI Trainee",
    company: "IEEE SSCS AUSC",
    date: "Feb 2026 - Present",
    description: [
      "Training in Artificial Intelligence, Machine Learning, and software concepts.",
      "Gaining hands-on experience in AI fundamentals and practical applications.",
    ],
  },
  {
    id: 2,
    role: "Data Science Trainee",
    company: "Digital Egypt Pioneers Initiative",
    date: "Jul 2026 - Present",
    description: [
      "Currently participating in a Data Science training program focused on developing practical and analytical skills.",
      "Building knowledge in data handling, data analysis, and data-driven problem solving.",
      "Developing technical skills relevant to Data Science and real-world applications.",
    ],
  },
  {
    id: 3,
    role: "Industrial Trainee",
    company: "Abu Qir Fertilizers and Chemical Industries",
    date: "Aug 2 - Aug 13, 2026",
    description: [
      "Observed factory control systems and server infrastructure used to support industrial operations.",
      "Learned how machines, control systems, and engineers communicate and interact within the production environment.",
      "Gained exposure to industrial equipment, monitoring systems, and engineering workflows inside the factory.",
    ],
  },
  {
    id: 4,
    role: "Volunteer",
    company: "Bibliotheca Alexandria",
    date: "Jan 2024 - Jan 2025",
    description: [
      "Assisted in organizing activities for children.",
      "Supported event coordination and teamwork tasks.",
    ],
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:py-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">

        {/* ================= WORK EXPERIENCE ================= */}
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Work Experience
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {workExperience.map((experience) => (
              <div
                key={experience.id}
                className="
                  bg-gradient-to-r
                  from-slate-950
                  via-purple-950
                  to-slate-950
                  backdrop-blur-sm
                  rounded-xl
                  p-5
                  sm:p-6
                  border-t-3
                  border-purple-700
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-purple-400
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
                "
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <span className="text-sm text-purple-300 whitespace-nowrap">
                    {experience.date}
                  </span>
                </div>

                <p className="text-purple-400 font-medium mb-4">
                  {experience.company}
                </p>

                <div className="space-y-2">
                  {experience.description.map((item, index) => (
                    <p
                      key={index}
                      className="text-white/70 text-sm leading-relaxed"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TECHNICAL FOCUS ================= */}
        <div
          id="technical-focus"
          className="scroll-mt-24"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Technical Focus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceCards.map((card) => (
              <div
                key={card.id}
                className="
                  bg-gradient-to-r
                  from-slate-950
                  via-purple-950
                  to-slate-950
                  backdrop-blur-sm
                  rounded-xl
                  p-5
                  sm:p-6
                  border-t-3
                  border-purple-700
                  flex
                  items-center
                  gap-4
                  sm:gap-5
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-purple-400
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]
                "
              >
                <div className="shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="
                      object-contain
                      w-16
                      h-16
                      sm:w-20
                      sm:h-20
                      lg:w-[100px]
                      lg:h-[100px]
                    "
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}