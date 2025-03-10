"use client"
import { motion } from "framer-motion"
import { FaHandPointDown } from "react-icons/fa" // Import pointing finger icon
import Footer from "../component/Footer";
import { BookOpen, Users } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image Below Navbar with Reduced Height */}
      <div
        className="relative w-full h-[485px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/about-image.jpg')" }}
      >
        {/* Black Overlay for Readability */}
        <div className="absolute inset-0 h-[485px] bg-black bg-opacity-70 flex flex-col items-center justify-center text-white">
          {/* Animated Header */}
          <motion.div
            className="relative inline-block text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold border-b-4 border-blue-500 pb-2">About Us</h1>
          </motion.div>

          {/* Animated Pointer for More Description */}
          <motion.div
            className="mt-6 text-4xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "easeInOut" }}
          >
            <FaHandPointDown />
          </motion.div>
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-6xl mx-auto py-12 px-6 text-gray-900">
        {/* Who We Are Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-blue-800">Who We Are ?</h2>
          <p className="mt-4 text-lg text-justify max-w-2xl mx-auto">
            High-end Health Solutions Consulting PLC is a team of specialists in healthcare data, digital health
            solutions, and professional training. We help organizations enhance their impact through innovative public
            health strategies.
          </p>
        </div>

        {/* Sections with Alternating Image/Text */}
        <div className="mt-16 space-y-20">
          {/* Background History */}
          <div className="flex flex-col md:flex-row items-center md:space-x-20">
            {/* Image */}
            <img
              src="/image/history.jpg"
              alt="Background History"
              className="w-96 h-96 object-cover rounded-full border-4 shadow-lg"
            />
            {/* Text */}
            <div className="mt-6 md:mt-0 text-justify flex-1 max-w-lg">
              <h3 className="text-2xl font-semibold text-blue-800">Background History</h3>
              <p className="mt-3 text-lg">
                Established in 2017, High-end Health Solutions Consulting PLC is a private limited company initiated by
                highly qualified health professionals through integrating individual expertise to address public health
                issues. Founded by experienced healthcare professionals, our company started with a vision to integrate
                data-driven solutions into public health. Over the years, we have partnered with top healthcare
                organizations to enhance decision-making, efficiency, and impact.
              </p>
            </div>
          </div>

          {/* Our Expertise & Experience */}
          <div className="flex flex-col md:flex-row-reverse items-center md:gap-20">
            {/* Image */}
            <img
              src="/image/download.jpg"
              alt="Our Expertise & Experience"
              className="w-96 h-96 object-cover rounded-full border-4 shadow-lg"
            />

            {/* Text */}
            <div className="mt-6 md:mt-0 text-justify flex-1 max-w-lg">
              <h3 className="text-2xl font-semibold text-blue-800">Our Expertise & Experience</h3>
              <p className="mt-3 text-lg">
                High-end Health Solutions Consulting PLC is founded by seasoned professionals with over 15 years of
                experience in governmental and non-governmental organizations across Ethiopia and internationally. Our
                team has extensive expertise in:
              </p>
              <ul className="mt-3 text-lg list-disc pl-5">
                <li>Public health, medicine, and epidemiology</li>
                <li>Qualitative & quantitative research</li>
                <li>Complex data analysis & geospatial analytics</li>
                <li>Health informatics, database development & business intelligence</li>
                <li>Monitoring, evaluation, and strategic planning</li>
              </ul>
              <p className="mt-3 text-lg">
                By combining these diverse skills, we deliver data-driven healthcare solutions that enhance efficiency,
                decision-making, and public health impact.
              </p>
            </div>
          </div>

          {/* Our Healthcare Impact */}
          <div className="flex flex-col md:flex-row items-center md:space-x-20">
            {/* Image */}
            <img
              src="/image/impact.jpg"
              alt="Our Commitment to Healthcare Transformation"
              className="w-96 h-96 object-cover rounded-full border-4 shadow-lg"
            />
            {/* Text */}
            <div className="mt-6 md:mt-0 text-justify flex-1 max-w-lg">
              <h3 className="text-2xl font-semibold text-blue-800">Our Healthcare Impact</h3>
              <p className="mt-3 text-lg">
                At High-end Health Solutions, we are committed to strengthening national and global healthcare systems.
                Our work aligns with WHO's core objectives, focusing on:
              </p>
              <ul className="mt-3 text-lg list-disc pl-5">
                <li>Developing multi-sectoral health policies that address key public health challenges</li>
                <li>Integrating gender-sensitive & community-based approaches for equitable healthcare access</li>
                <li>Promoting self-care, health protection, and sustainable healthcare solutions</li>
              </ul>
              <p className="mt-3 text-lg">
                Through research, innovation, and strategic implementation, we contribute to improving healthcare
                services, empowering communities, and achieving sustainable health outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
       {/* Vision & Mission Section */}
       <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-blue-800 p-8 rounded-lg shadow-lg border border-blue-700"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <BookOpen className="mr-3 h-6 w-6" /> Our Vision
              </h3>
              <p className="text-lg">
                Contributing its part in producing a transformed and productive society with increased quality of life
                through sustainable public health development.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-800 p-8 rounded-lg shadow-lg border border-blue-700"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="mr-3 h-6 w-6" /> Our Mission
              </h3>
              <p className="text-lg">Providing support through partnership in the health sector.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer moved outside of the content container */}
      <Footer />
    </div>
  )
}

