import {
  FaMobileAlt,
  FaShoppingCart,
  FaUtensils,
  FaRobot,
  FaWallet,
} from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Campus Connect",
    category: "IOS App",
    description: "An iOS app for managing campus events and student activities.",
    tech: ["Swift", "UIKit", "Firebase"],
    icon: <FaMobileAlt className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },

  {
    title: "Expense Tracker",
    category: "IOS App",
    description: "Track daily expenses with beautiful charts and analytics.",
    tech: ["SwiftUI", "Firebase"],
    icon: <FaWallet className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },

  {
    title: "Restaurant App",
    category: "IOS App",
    description: "A modern restaurant application with food browsing and ordering UI.",
    tech: ["SwiftUI", "Firebase"],
    icon: <FaUtensils className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },

  {
    title: "Cartify",
    category: "IOS App",
    description: "An e-commerce shopping application with authentication and cart management.",
    tech: ["Swift", "Firebase", "REST API"],
    icon: <FaShoppingCart className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },

  {
    title: "Smart Attendance System",
    category: "AI/ML Project",
    description: "AI-powered attendance system using face recognition.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    icon: <FaRobot className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  {project.icon}
                </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>
              <p className="text-cyan-400 text-sm mt-2 font-medium">
  {project.category}
</p>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((item) => (

                  <span
                    key={item}
                    className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>

                ))}
                </div>

              <div className="flex gap-4 mt-8">

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-lg transition"
  >
    GitHub
  </a>

  <a
    href={project.demo}
    className="border border-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
  >
    View Details
  </a>

</div>

            </motion.div>

          ))}

          </div>

      </div>
    </section>
  );
}

export default Projects;