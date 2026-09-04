import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/90 backdrop-blur-sm">
      <nav className="px-6 py-2">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">

          {/* Signature */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors -ml-16"
          >
            <Image
              src="/logo/signature.png"
              alt="Ali signature"
              width={140}
              height={70}
            />
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-4 md:gap-8 list-none m-0 p-0">
            {/* Home */}
            <li className="m-0 p-0">
              <Link
                href="#home"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Home
              </Link>
            </li>

            {/* Lab */}
            <li className="m-0 p-0">
              <Link
                href="#lab"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Lab
              </Link>
            </li>

            {/* Contact */}
            <li className="m-0 p-0">
              <Link
                href="#contact"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Contact
              </Link>
            </li>

            {/* Download CV */}
            <li className="m-0 p-0">
              <a
                href="/cv/Ali-Mohamed-Cv.pdf"
                download
                className="px-3 py-2 md:px-4 rounded-lg bg-purple-600/20 border border-purple-500/50 text-white hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-200 text-xs md:text-sm font-medium whitespace-nowrap"              >
                Download CV
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}