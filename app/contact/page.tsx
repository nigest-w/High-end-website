"use client";
import { useState } from "react";
import Footer from "../component/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string | null }>({ type: null, message: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: null });

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: "Thank you! We'll contact you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: 'error', message: data.error || "Failed to send message" });
      }
    } catch (error) {
      setStatus({ type: 'error', message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Contact Us
          </h2>

          {status.message && (
            <div className={`mb-4 p-3 rounded-lg text-center ${
              status.type === 'success' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              disabled={loading}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              disabled={loading}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={5}
              required
              disabled={loading}
            />
            <button
              type="submit"
              className={`w-full p-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
