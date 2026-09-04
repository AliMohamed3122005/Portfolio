"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
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
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
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
      className="min-h-screen flex items-center justify-center pt-16 px-6"
      style={{ scrollMarginTop: "110px" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">

          {/* ================= LEFT SIDE - IMAGE ================= */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">

              {/* Mobile: Hello text */}
              <div className="lg:hidden -top-150 z-10">
                <div className="relative inline-block">

                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />

                  <div className="relative">
                    <p className="text-white text-xl whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400">
                        Ali Mohamed
                      </span>
                    </p>
                  </div>

                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>

              {/* =====================================================
                  IMAGE CONTAINER
                  The image size is controlled independently.
                 ===================================================== */}
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

                {/* =====================================================
                    FRAME
                    CHANGE ONLY THIS SECTION TO RESIZE / MOVE THE FRAME

                    width / height -> frame size
                    top -> move frame up/down
                    left -> move frame left/right
                   ===================================================== */}
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

                {/* =====================================================
                    ALI IMAGE
                    THIS SIZE IS INDEPENDENT FROM THE FRAME
                   ===================================================== */}
                <Image
                  src="/assets/ali.png"
                  alt="Ali Mohamed"
                  width={450}
                  height={600}
                  className="
                    absolute
                    top-17 left-0 right -2
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
          <div className="flex-1 space-y-6 text-center lg:text-left">

            {/* Desktop: Hello text */}
            <div className="hidden lg:inline-block relative">

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

            {/* Main heading */}
            <div>
              <p className="text-2xl">
                An Engineer who
              </p>

              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
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
        <div className="space-y-3 pt-5 text-center lg:text-left">

          {/* Animated title */}
          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* University */}
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
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

          {/* About me */}
          <p className="text-xl text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            I like turning ideas into things you can actually see, test, and
            interact with. I enjoy solving problems, experimenting with new
            technologies, and bringing concepts to life through practical
            projects. For me, the best part of building something is watching
            it come to life and work exactly as intended.
          </p>
        </div>

      </div>
    </section>
  );
}