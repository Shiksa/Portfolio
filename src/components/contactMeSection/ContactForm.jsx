import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div>
      {status && (
        <p className="text-center mt-3 text-white font-medium">{status}</p>
      )}
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="h-12 rounded-lg bg-lightBrown px-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="h-12 rounded-lg bg-lightBrown px-2"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="9"
          cols="50"
          className="rounded-lg bg-lightBrown p-2"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl transition-all duration-500 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-cyan hover:bg-darkCyan"
            }`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
