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

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recipient: "wnigest@gmail.com" }),
      });

      if (response.ok) {
        alert("Thank you for contacting us! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending your message. Please try again.");
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

          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email", "phone"].map((field, index) => (
              <input
                key={index}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required={field !== "phone"}
                disabled={loading}
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={5}
              required
              disabled={loading}
            ></textarea>

            <button
              type="submit"
              className={`w-full p-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-500"
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