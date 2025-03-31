"use client";
import "./globals.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChartBar, FaLaptopMedical, FaUsers, FaUserMd, FaArrowUp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  const text = "Welcome to High-end Health Solutions Cosulting PLC";
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div
        className="relative w-full h-[580px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/consult3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <div className="text-white text-center px-6 max-w-3xl">
            <div className="mt-20"></div>
            <motion.h1
              className="text-5xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <p className="mt-6 text-xl">
              We provide expert public health research consulting, data analysis, and training.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 border-2 border-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                Get in Touch
              </a>

              {/* Button to trigger the modal */}
              
            </div>
          </div>

          <motion.div
            className="mt-8 flex flex-col items-center gap-[0.1px]"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <span className="text-gray-800 text-2xl">⌄</span>
            <span className="text-gray-300 text-2xl">⌄</span>
            <span className="text-white text-2xl">⌄</span>
          </motion.div>
        </div>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-sm shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Service Not Available
            </h2>
            <p className="text-gray-600 mb-6">
              The online consulting service is not started yet. Please check back later or get in touch with us for more information.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}


      {/* New Section - "Here Is How We Help" */}
      <div className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900">Here Is How We Help</h2>


<p className="text-gray-700 mt-4 text-md">

          Our specialized services provide healthcare organizations with data-driven insights, digital health solutions, and professional development programs.
        </p>

        {/* Services Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {/* Service 1 - Public Health Data Analysis */}
          <div className="group bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer transition-transform duration-300 hover:scale-95">
            <FaChartBar className="text-blue-600 text-5xl mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold mt-4">Public Health Data Analysis</h3>
            <p className="text-gray-700 mt-4">
              Our team specializes in advanced data analysis techniques, including geospatial mapping, machine learning models, and epidemiological trend analysis.  
              We transform complex data into actionable insights that drive better healthcare decisions.
            </p>
          </div>

          {/* Service 2 - Digital Health Solutions */}
          <div className="group bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer transition-transform duration-300 hover:scale-95">
            <FaLaptopMedical className="text-blue-600 text-5xl mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold mt-4">Digital Health Solutions</h3>
            <p className="text-gray-700 mt-8">
              We provide cutting-edge digital health solutions, including custom-built health informatics platforms and cloud-based data systems 
              to optimize healthcare operations.
            </p>
          </div>

          {/* Service 3 - Professional Training */}
          <div className="group bg-gray-100 p-8 rounded-lg shadow-md text-center cursor-pointer transition-transform duration-300 hover:scale-95">
            <FaUsers className="text-blue-600 text-5xl mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold mt-4">Professional Training</h3>
            <p className="text-gray-700 mt-8">
              Our CPD-accredited training programs empower professionals with hands-on skills in data analytics (SPSS, STATA, R), GIS tools (ArcGIS, QGIS), and healthcare management 
              to enhance their expertise and efficiency in the industry.
            </p>
          </div>
        </div>

        {/* "Read More" Button Below Services */}
        <div className="mt-12">
          <a href="/service"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 inline-block">
            Read More
          </a>
        </div>
      </div>

    {/* Team Section */}
    <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Meet Our Leadership</h2>
        <p className="text-gray-700 mt-4 text-lg">Experts in public health, research, and consulting.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
          {/* Dr. Abebayehu Assefa */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaUserMd className="text-blue-600 text-6xl mx-auto" /> {/* Doctor Icon */}
            <h3 className="text-2xl font-semibold mt-4">Dr. Abebayehu Assefa</h3>
            <p className="text-blue-500 text-lg mt-1 font-medium">MD, MPH</p>
            <p className="text-blue-500 text-lg mt-1 font-medium">General Manager</p>
            <p className="text-gray-600 mt-4">
              A distinguished public health expert with vast experience in epidemiology, research, 
              and healthcare management. Passionate about advancing data-driven healthcare solutions.
            </p>
          </div>

          {/* Dr. Fisseha Shiferie */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaUserMd className="text-blue-600 text-6xl mx-auto" /> {/* Doctor Icon */}
            <h3 className="text-2xl font-semibold mt-4">Dr. Fisseha Shiferie</h3>
            <p className="text-blue-500 text-lg mt-1 font-medium">PhD, MPH</p>
            <p className="text-blue-500 text-lg mt-1 font-medium">Deputy Manager</p>
            <p className="text-gray-600 mt-4">
              A specialist in health informatics and data analysis, dedicated to leveraging technology 
              and research to enhance healthcare delivery and public health policies.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image 
  src="/image/highendlogo.png" 
  alt="Company Logo" 
  className="w-20 mb-3"
  width={80}
  height={80}
/>
            <p className="text-gray-300 text-sm max-w-xs">
              High-end Health Solutions Consulting PLC provides expert public health consulting, research, and professional training.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-300 space-y-1">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="/service" className="hover:text-blue-400">Service</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-300 flex items-center">
              <MapPin className="mr-2 h-4 w-4" /> Kirkos Sub city, Addis Ababa, Ethiopia
            </p>
            <p className="text-gray-300 flex items-center mt-1">
              <Phone className="mr-2 h-4 w-4" /> +251 965 648 973
            </p>
            <p className="text-gray-300 flex items-center mt-1">
              <Mail className="mr-2 h-4 w-4" />
              <a href="mailto:highendconsult11@gmail.com" className="text-blue-400 hover:underline">
                Send us an Email
              </a>
            </p>
          </div>
        </div>
         {/* Go to Top Button */}
         {showGoToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}
         {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} High-end Health Solutions Consulting PLC. All rights reserved.
      </div>
      </footer>
    </div>
  );
}
