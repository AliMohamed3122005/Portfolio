import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
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
]
export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
        Technical Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href="https://ibiimemon.com/lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

