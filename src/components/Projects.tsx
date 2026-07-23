import {
  FaMobileAlt,
  FaShoppingCart,
  FaUtensils,
  FaRobot,
  FaWallet,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
  title: "Campus Connect",
  category: "IOS App",
  description: "An iOS app for managing campus events and student activities.",
  tech: ["Swift", "UIKit", "Firebase"],
  features: [
    "Student Login",
    "Event Registration",
    "Push Notifications",
    "Firebase Authentication"
  ],
  icon: <FaMobileAlt className="text-cyan-400 text-3xl" />,
  github: "#",
  demo: "#",
},

  {
    title: "Expense Tracker",
    category: "IOS App",
    description: "Track daily expenses with beautiful charts and analytics.",
    tech: ["SwiftUI", "Firebase"],
    features: [
    "Add Income & Expenses",
    "Expense Categories",
    "Monthly Reports",
    "Charts & Analytics",
  ],
    icon: <FaWallet className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },

  {
    title: "Restaurant App",
    category: "IOS App",
    description: "A modern restaurant application with food browsing and ordering UI.",
    tech: ["SwiftUI", "Firebase"],
    features: [
    "Food Menu",
    "Search Restaurants",
    "Online Ordering",
    "User Profile",
  ],
    icon: <FaUtensils className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },

  {
    title: "Cartify",
    category: "IOS App",
    description: "An e-commerce shopping application with authentication and cart management.",
    tech: ["Swift", "Firebase", "REST API"],
    features: [
    "User Authentication",
    "Shopping Cart",
    "Product Search",
    "Secure Checkout",
  ],
    icon: <FaShoppingCart className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },

  {
    title: "Smart Attendance System",
    category: "AIML",
    description: "AI-powered attendance system using face recognition.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    features: [
    "Face Recognition",
    "Automatic Attendance",
    "Student Database",
    "Attendance Reports",
  ],
    icon: <FaRobot className="text-cyan-400 text-3xl" />,
    github: "#",
    demo: "#",
  },
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

const [selectedProject, setSelectedProject] = useState<
  (typeof projects)[0] | null
>(null);

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedProject(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

const categories = ["All", "IOS App", "AIML"];
const filteredProjects =
  selectedCategory === "All"
    ? projects
    : projects.filter(
        (project) => project.category === selectedCategory
      );

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
        <div className="flex justify-center gap-4 flex-wrap mt-10 mb-12">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`px-5 py-2 rounded-full transition ${
        selectedCategory === category
          ? "bg-cyan-500 text-white"
          : "bg-slate-800 text-gray-300 hover:bg-cyan-500"
      }`}
    >
      {category}
    </button>
  ))}
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {filteredProjects.map((project, index) => (

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
              onClick={() => setSelectedProject(project)}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500 cursor-pointer"
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

      
      {selectedProject && (
  <div
  className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
  onClick={() => setSelectedProject(null)}
>
    <div
  className="bg-slate-900 w-[90%] max-w-xl rounded-2xl p-8 border border-cyan-400 relative"
  onClick={(e) => e.stopPropagation()}
>

      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-2xl text-white hover:text-cyan-400"
      >
        ✕
      </button>

      <div className="flex items-center gap-4 mb-6">
        {selectedProject.icon}
        <div>
          <h2 className="text-3xl font-bold">
            {selectedProject.title}
          </h2>
          <p className="text-cyan-400">
            {selectedProject.category}
          </p>
        </div>
      </div>

     <p className="text-gray-300 leading-7">
  {selectedProject.description}
</p>

{/* Tech Stack */}
<div className="flex flex-wrap gap-2 mt-6">
  {selectedProject.tech.map((item) => (
    <span
      key={item}
      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full"
    >
      {item}
    </span>
  ))}
</div>

{/* Features */}
<div className="mt-6">
  <h3 className="text-xl font-semibold text-cyan-400 mb-3">
    Features
  </h3>

  <ul className="space-y-2 text-gray-300">
    {selectedProject.features?.map((feature) => (
      <li key={feature}>✅ {feature}</li>
    ))}
  </ul>
</div>

{/* Buttons */}
<div className="flex gap-4 mt-8">
  <a
    href={selectedProject.github}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-400 transition"
  >
    GitHub
  </a>

  <a
    href={selectedProject.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
  >
    Live Demo
  </a>
</div>

    </div>
  </div>
)}
    </section>
  );
}

export default Projects;