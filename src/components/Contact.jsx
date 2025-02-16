import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    message: "",
  });

  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd_CMJ7ieR9JiGpQKhw8k-PLMDn0fYurUQMHubNxK0UMvmYQw/formResponse";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your response means a lot to us. We'll get back to you soon. 😊");
    setFormData({ name: "", contact: "", location: "", message: "" });
    const formUrl = `${googleFormLink}?entry.2099662153=${encodeURIComponent(
      formData.name
    )}&entry.1368049646=${encodeURIComponent(
      formData.contact
    )}&entry.515289928=${encodeURIComponent(
      formData.location
    )}&entry.28394181=${encodeURIComponent(formData.message)}`;
    window.open(formUrl, "_blank");
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 px-6 text-white flex flex-col md:flex-row justify-center items-center gap-10">
      <motion.div
        className="max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="lg:text-4xl text-2xl font-bold mb-4 text-gray-300">
          About <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 text-sm lg:text-lg">
          I'm a frontend web developer passionate about crafting visually engaging, responsive, and user-centric web applications.
        </p>
        <div className="mt-6 p-4 w-20 text-center bg-purple-600 rounded-lg">
          <p className="text-white text-2xl font-bold">20+</p>
          <p className="text-purple-300 text-sm">Projects</p>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-md p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-100">Let’s connect!</h3>
        <form onSubmit={handleSubmit}>
          {["name", "contact", "location"].map((id, index) => (
            <motion.div
              key={id}
              className="mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <input
                type="text"
                id={id}
                placeholder={`Your ${id.charAt(0).toUpperCase() + id.slice(1)} ...`}
                value={formData[id]}
                onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </motion.div>
          ))}

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <textarea
              id="message"
              placeholder="Your Message ..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 bg-gray-100 border border-gray-600 rounded-lg text-black h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white cursor-pointer px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
