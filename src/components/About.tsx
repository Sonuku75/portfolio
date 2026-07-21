import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaBullseye } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-28 px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-center mt-6 max-w-3xl mx-auto text-lg leading-8"
        >
          I am an iOS Developer passionate about creating beautiful,
          responsive and user-friendly applications using Swift,
          UIKit and SwiftUI.
        </motion.p>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Education */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500"
          >

            <FaGraduationCap className="text-cyan-400 text-4xl mb-5"/>

            <h3 className="text-2xl font-semibold">
              Education
            </h3>

            <p className="text-gray-400 mt-4">
              B.Tech CSE
            </p>

            <p className="text-gray-500">
              Suresh Gyan Vihar University
            </p>

          </motion.div>

          {/* Internship */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500"
          >

            <FaBriefcase className="text-cyan-400 text-4xl mb-5"/>

            <h3 className="text-2xl font-semibold">
              Internship
            </h3>

            <p className="text-gray-400 mt-4">
              Data Analyst Intern
            </p>

            <p className="text-gray-500">
              Learning Python, SQL and Power BI
            </p>

          </motion.div>

          {/* Goal */}

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500"
          >

            <FaBullseye className="text-cyan-400 text-4xl mb-5"/>

            <h3 className="text-2xl font-semibold">
              Goal
            </h3>

            <p className="text-gray-400 mt-4">
              Become an iOS Developer
            </p>

            <p className="text-gray-500">
              Build modern applications used by millions.
            </p>

          </motion.div>

        </div>

        {/* Statistics */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">

  <div className="text-center">
    <h2 className="text-5xl font-bold text-cyan-400">15+</h2>
    <p className="text-gray-400 mt-2">Projects</p>
  </div>

  <div className="text-center">
    <h2 className="text-5xl font-bold text-cyan-400">2+</h2>
    <p className="text-gray-400 mt-2">Years Learning</p>
  </div>

  <div className="text-center">
    <h2 className="text-5xl font-bold text-cyan-400">5+</h2>
    <p className="text-gray-400 mt-2">Certificates</p>
  </div>

  <div className="text-center">
    <h2 className="text-5xl font-bold text-cyan-400">100%</h2>
    <p className="text-gray-400 mt-2">Passion</p>
  </div>

</div>

{/* Call To Action */}

<div className="mt-24 text-center">

  <h2 className="text-4xl font-bold">
    Let's Build Something
    <span className="text-cyan-400"> Amazing</span>
  </h2>

  <p className="text-gray-400 mt-5 text-lg">
    I'm always excited to work on innovative iOS applications
    and modern software solutions.
  </p>

  <button className="mt-10 bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/30">
    Contact Me
  </button>

</div>

      </div>
    </section>
  );
}

export default About;