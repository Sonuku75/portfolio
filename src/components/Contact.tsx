import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
  alert("Please fill all fields.");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(formData.email)) {
  alert("Please enter a valid email address.");
  return;
}

  setLoading(true);

  try {
    await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

    setSuccess(true);
    toast.success("Message sent successfully!");

setTimeout(() => {
  setSuccess(false);
}, 3000);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    toast.error("Failed to send message!");
    console.error(error);
  }

  setLoading(false);
};

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

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
  type="text"
  name="name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  placeholder="Your Name"
  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-400"
/>

            <input
  type="email"
  name="email"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  placeholder="Your Email"
  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-400"
/>

            <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
  placeholder="Your Message"
  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-400"
/>
{success && (
  <div className="bg-green-500/20 border border-green-500 text-green-400 rounded-xl p-4">
    ✅ Message Sent Successfully!
  </div>
)}

            <button
  type="submit"
  disabled={loading}
  className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl transition disabled:opacity-50"
>
  {loading ? "Sending..." : "Send Message"}
</button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;