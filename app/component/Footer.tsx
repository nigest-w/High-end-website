import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/image/highendlogo.png" alt="Company Logo" className="w-20 mb-3" />
          <p>
            High-end Health Solutions Consulting PLC provides expert public health consulting, research, and
            professional training.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-gray-300 space-y-1">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li> 
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-blue-400">
                Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
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

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} High-end Health Solutions Consulting PLC. All rights reserved.
      </div>
    </footer>
  )
}

