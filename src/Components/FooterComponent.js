import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10" style={{ backgroundImage: 'url(/path-to-footer-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">PoolC.S</h2>
          <p className="text-gray-300 mt-2">Providing top-tier pool cleaning and maintenance services to keep your pool crystal clear.</p>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            {/* <li className="flex items-center justify-center md:justify-start"><FaPhone className="mr-2" /> (123) 456-7890</li>
            <li className="flex items-center justify-center md:justify-start"><FaEnvelope className="mr-2" /> info@clearwater.com</li>
            <li className="flex items-center justify-center md:justify-start"><FaMapMarkerAlt className="mr-2" /> 123 Pool St, Miami, FL</li> */}
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold">Our Services</h3>
          <ul className="mt-2 space-y-2">
            {/* <li><a href="#" className="text-gray-300 hover:text-white">Pool Cleaning</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Water Testing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Chemical Balancing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Equipment Repair</a></li> */}
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            {/* <a href="#" className="text-gray-300 hover:text-white text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaLinkedin /></a> */}
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} ClearWater Pool Services. All rights reserved.
      </div>
    </footer>
  );
};
