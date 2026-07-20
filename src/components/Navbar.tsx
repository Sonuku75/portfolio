function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md text-white z-50 border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
          Sonu
        </h1>

        {/* Menu */}

        <ul className="flex gap-10 text-lg">

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Skills
          </li>

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Contact
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;