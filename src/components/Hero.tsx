import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../assets/image.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-900 text-white flex items-center px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 w-full">

        {/* Left Side */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-xl">
            Hello 👋, I'm
          </p>

          <h1 className="text-7xl font-extrabold mt-4 bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            Sonu Kumar
          </h1>

          <h2 className="text-3xl text-gray-300 mt-4">
            iOS Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            I build modern iOS applications using Swift, UIKit and SwiftUI.
            I enjoy creating clean, responsive and user-friendly apps.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 px-7 py-3 rounded-xl shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-500 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all duration-300 px-7 py-3 rounded-xl"
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8">

            <a
              href="https://github.com/Sonuku75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl hover:text-cyan-400 hover:scale-110 transition-all duration-300" />
            </a>

            <a
              href="https://linkedin.com/in/sonu-kumar-b7a757343/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-cyan-400 hover:scale-110 transition-all duration-300" />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
        >
          <img
            src={image}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.35)]"
          />
        </motion.div>

      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400"
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <FaArrowDown size={24} />
      </motion.div>

    </section>
  );
}

export default Hero;