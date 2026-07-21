import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sonu Kumar
            </h2>

            <p className="text-gray-400 mt-2">
              iOS Developer • Swift • SwiftUI • UIKit
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/Sonuku75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/sonu-kumar-b7a757343/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:mrsonuku75225@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>

            <a
              href="#home"
              className="bg-cyan-500 p-3 rounded-full hover:bg-cyan-400 transition duration-300"
            >
              <FaArrowUp className="text-white" />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Sonu Kumar. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with ❤️ using React + Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;