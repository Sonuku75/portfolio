import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-28 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Have a project in mind? Let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <FaEnvelope className="text-cyan-400 text-2xl"/>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  mrsonuku75225@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 mb-8">

              <FaPhone className="text-cyan-400 text-2xl"/>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +91 9110036860
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <FaMapMarkerAlt className="text-cyan-400 text-2xl"/>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Jaipur, Rajasthan
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-400"
            />

            <button
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;