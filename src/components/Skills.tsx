import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiSwift,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "Swift", level: 90, icon: <SiSwift className="text-orange-400 text-3xl" /> },
  { name: "React", level: 80, icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "Python", level: 85, icon: <FaPython className="text-blue-400 text-3xl" /> },
  { name: "SQL", level: 75, icon: <FaDatabase className="text-green-400 text-3xl" /> },
  { name: "Firebase", level: 80, icon: <SiFirebase className="text-orange-500 text-3xl" /> },
  { name: "Git", level: 85, icon: <FaGitAlt className="text-red-500 text-3xl" /> },
];

function Skills() {
  return (
    <section
  id="skills"
  className="relative overflow-hidden bg-slate-900 py-28 px-8 text-white"
>
    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

<div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {skills.map((skill, index) => (

            <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
    delay: index * 0.15,
  }}
  whileHover={{
    scale: 1.03,
    y: -5,
  }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500"
            >

              <div className="flex justify-between items-center mb-4">

  <div className="flex items-center gap-3">

    {skill.icon}

    <h3 className="text-xl font-semibold">
      {skill.name}
    </h3>

  </div>

  <span className="text-cyan-400 font-bold">
    {skill.level}%
  </span>

</div>

              <div className="w-full bg-slate-700 rounded-full h-3">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
  duration: 1.5,
  ease: "easeOut",
}}
                  className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 h-3 rounded-full"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;