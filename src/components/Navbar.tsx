import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-black dark:text-white z-50 border-b border-gray-300 dark:border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 cursor-pointer">
          Sonu
        </h1>

        {/* Menu */}

        <div className="flex items-center gap-8">

  <ul className="flex gap-10 text-lg">

          <li
          onClick={() => scrollToSection("about")}
  className={`cursor-pointer transition duration-300 ${
    activeSection === "about"
      ? "text-cyan-400"
      : "hover:text-cyan-400"
  }`}
>
  About
</li>

          <li
          onClick={() => scrollToSection("skills")}
  className={`cursor-pointer transition duration-300 ${
    activeSection === "skills"
      ? "text-cyan-400"
      : "hover:text-cyan-400"
  }`}
>
  Skills
</li>

          <li
          onClick={() => scrollToSection("projects")}
          className={`cursor-pointer transition duration-300 ${
    activeSection === "projects"
      ? "text-cyan-400"
      : "hover:text-cyan-400"
  }`}
>
  Projects
</li>

          <li
          onClick={() => scrollToSection("contact")}
          className={`cursor-pointer transition duration-300 ${
    activeSection === "contact"
      ? "text-cyan-400"
      : "hover:text-cyan-400"
  }`}
>
  Contact
</li>

        </ul>
        <button
  onClick={toggleTheme}
  className="text-2xl text-cyan-400 hover:scale-110 transition"
>
  {theme === "dark" ? <FaSun /> : <FaMoon />}
</button>
</div>

      </div>

    </nav>
  );
}

export default Navbar;