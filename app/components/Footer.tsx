import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-10 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">

        {/* Contact */}
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact
          </h2>

          <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            I&apos;m always open to learning, building, and connecting with
            people who share an interest in technology and engineering. Have a
            project in mind? Let&apos;s connect.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mt-12">

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alymohamed220055@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Email"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>

          {/* GitHub */}
          <Link
            href="https://github.com/AliMohamed3122005"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/ali-mohamed-a5a286282/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065-2.063 0-2.063 0-2.063 2.063 0 1.14.925 2.065 2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/201007826151"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="WhatsApp"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.55 0 .27 5.28.27 11.79c0 2.08.54 4.11 1.58 5.9L.2 24l6.46-1.69a11.8 11.8 0 0 0 5.4 1.3h.01c6.5 0 11.79-5.28 11.79-11.79 0-3.16-1.23-6.13-3.34-8.34ZM12.07 21.6h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.22-3.83 1 1.02-3.73-.24-.38a9.8 9.8 0 1 1 8.42 4.7Zm5.38-7.36c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.19.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.49.07-.75.37-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.02c.15.19 2 3.05 4.84 4.27.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
            </svg>
          </Link>

          {/* Telegram */}
          <Link
            href="https://t.me/Ali_pv05"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Telegram"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.9 3.6 18.5 20c-.3 1.2-1 1.5-2 .9l-5.6-4.1-2.7 2.6c-.3.3-.5.5-1 .5l.4-5.7 10.3-9.3c.4-.4-.1-.6-.6-.2L4.6 12.9.1 11.5c-1-.3-1-1 .2-1.4L20.1 2.4c.9-.3 1.9.2 1.8 1.2Z" />
            </svg>
          </Link>

        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Ali Mohamed. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}