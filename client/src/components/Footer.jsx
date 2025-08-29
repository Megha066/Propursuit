import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-white text-sm">
          © {new Date().getFullYear()} Career Guidance. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-gray-900">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:info@example.com" className="text-white hover:text-gray-900">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
