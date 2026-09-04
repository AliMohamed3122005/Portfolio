"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const texts = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Computer Vision Engineer",
];

export default function Banner(): React.JSX.Element {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(
            currentText.slice(0, displayedText.length + 1)
          );
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);

        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(
            currentText.slice(0, displayedText.length - 1)
          );
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen px-4 overflow-hidden pt-24 lg:px-6 lg:pt-16"
      style={{ scrollMarginTop: "110px" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* =========================================================
            MOBILE VERSION
           ========================================================= */}
        <div className="lg:hidden flex flex-col items-center text-center">

          {/* Hello */}
          <div className="relative z-20 mb-5">
            <div className="relative inline-block">

              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={70}
                height={70}
                className="absolute -left-14 top-1 rotate-[280deg]"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />

              <p className="text-lg text-white whitespace-nowrap">
                Hello! I Am{" "}
                <span className="text-purple-400">
                  Ali Mohamed
                </span>
              </p>

            </div>
          </div>

          {/* Image + Frame */}
          <div className="relative w-[280px] h-[430px] mb-6">

            {/* Purple Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[230px]
                h-[350px]
                rounded-full
                bg-purple-700/40
                blur-[90px]
              "
            />

            {/* Frame */}
            <Image
              src="/assets/frame.png"
              alt=""
              fill
              className="object-contain z-0"
            />

            {/* Ali */}
            <Image
              src="/assets/ali.png"
              alt="Ali Mohamed"
              fill
              className="object-contain z-10"
              priority
            />

          </div>

          {/* Main Heading */}
          <div className="max-w-[370px]">

            <p className="text-xl text-white mb-2">
              An Engineer who
            </p>

            <h1 className="text-4xl font-semibold text-white leading-tight tracking-tight">
              Turns ideas into
              <br />
              intelligent solutions...
            </h1>

            <p className="text-sm text-white/80 mt-3">
              Engineering ideas into real-world solutions.
            </p>

          </div>

          {/* Animated Title + About */}
          <div className="mt-10 w-full">

            <p className="text-4xl text-white font-bold leading-tight">
              I&apos;m a{" "}
              <span className="text-white">
                {displayedText}
              </span>
              <span className="animate-pulse">|</span>
            </p>

            {/* University */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-base text-white/90 leading-relaxed">

              <span>
                Computer &amp; Communications Engineering student at
              </span>

              <span className="text-blue-400 font-semibold">
                Faculty of Engineering, Alexandria University
              </span>

              <Image
                src="/assets/engineering-logo.png"
                alt="Faculty of Engineering"
                width={22}
                height={22}
                className="w-5 h-5 object-contain"
              />

            </div>

            {/* About Card */}
            <div className="mt-7 max-w-[360px] mx-auto bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-lg text-left">
              <p className="text-base text-white/80 leading-relaxed">
                Have an idea? I can help turn it into a working solution.
                I build practical technology solutions using AI, Machine
                Learning, Computer Vision, Data Science, and Robotics.
                From intelligent applications and data-driven insights
                to computer vision systems and robotic prototypes, I enjoy
                solving problems and turning concepts into something real.
                Whether you want to automate a process, analyze data,
                build an intelligent system, or bring a new idea to life,
                I&apos;m ready to work on it.
              </p>
            </div>

          </div>
        </div>

        {/* =========================================================
            DESKTOP VERSION
           ========================================================= */}
        <div className="hidden lg:block">

          <div className="flex flex-row items-center">

            {/* ================= LEFT SIDE - IMAGE ================= */}
            <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
              <div className="relative top-10">

                <div className="relative w-[450px] h-[600px]">

                  {/* Purple Glow */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-[320px]
                      h-[450px]
                      rounded-full
                      bg-purple-700/40
                      blur-[100px]
                    "
                  />

                  {/* Frame */}
                  <Image
                    src="/assets/frame.png"
                    alt=""
                    width={300}
                    height={200}
                    className="
                      absolute
                      top-15
                      left-1/2
                      -translate-x-1/2
                      object-contain
                    "
                  />

                  {/* Ali Image */}
                  <Image
                    src="/assets/ali.png"
                    alt="Ali Mohamed"
                    width={450}
                    height={600}
                    className="
                      absolute
                      top-17
                      left-0
                      right-2
                      w-full
                      h-full
                      object-contain
                      z-10
                    "
                    priority
                  />

                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE - TEXT ================= */}
            <div className="flex-1 space-y-6 text-left">

              {/* Hello */}
              <div className="inline-block relative">

                <Image
                  src="/assets/arrow.png"
                  alt="Arrow pointer"
                  width={100}
                  height={100}
                  className="absolute"
                  style={{
                    left: "-100px",
                    top: "-50px",
                    width: "auto",
                    height: "auto",
                  }}
                />

                <div
                  style={{
                    bottom: 30,
                    left: 10,
                    position: "relative",
                  }}
                >
                  <p className="text-white text-xl">
                    Hello! I Am{" "}
                    <span className="text-purple-400">
                      Ali Mohamed
                    </span>
                  </p>
                </div>

                <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>

              </div>

              {/* Main Heading */}
              <div>

                <p className="text-2xl text-white">
                  An Engineer who
                </p>

                <h1 className="text-7xl tracking-tight font-semibold text-white leading-tight">
                  Turns ideas into
                  <br />
                  intelligent solutions...
                </h1>

                <p className="text-md text-white/80">
                  Engineering ideas into real-world solutions.
                </p>

              </div>
            </div>
          </div>

          {/* ================= BOTTOM SECTION ================= */}
          <div className="space-y-3 pt-5 text-left">

            {/* Animated title */}
            <p className="text-5xl text-white font-bold">
              I&apos;m a {displayedText}
              <span className="animate-pulse">|</span>
            </p>

            {/* University */}
            <p className="text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-start gap-2">

              <span>
                Computer &amp; Communications Engineering student at
              </span>

              <span className="text-blue-400 font-semibold">
                Faculty of Engineering, Alexandria University
              </span>

              <Image
                src="/assets/engineering-logo.png"
                alt="Faculty of Engineering"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />

            </p>

            {/* About Card */}
            <div className="mt-15 max-w-6xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg">

              <p className="text-xl text-white/80 leading-relaxed">
                Have an idea? I can help turn it into a working solution.
                I build practical technology solutions using AI, Machine
                Learning, Computer Vision, Data Science, and Robotics.
                From intelligent applications and data-driven insights
                to computer vision systems and robotic prototypes, I enjoy
                solving problems and turning concepts into something real.
                Whether you want to automate a process, analyze data,
                build an intelligent system, or bring a new idea to life,
                I&apos;m ready to work on it.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}