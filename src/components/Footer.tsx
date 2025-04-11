
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Flavor Fusion Voyage</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Bridging the world through flavor – From Indian kitchens to American diners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/mood" className="text-gray-300 hover:text-white transition-colors">By Mood</Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-300 hover:text-white transition-colors">Regional Map</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/indian" className="text-gray-300 hover:text-white transition-colors">Indian Cuisine</Link>
              </li>
              <li>
                <Link to="/categories/american" className="text-gray-300 hover:text-white transition-colors">American Cuisine</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-white transition-colors">Leave Feedback</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-2">
              Subscribe to get the latest recipes and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full text-black rounded-l-md focus:outline-none"
              />
              <button className="bg-chili px-4 py-2 rounded-r-md hover:bg-chili/80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-chili" /> by Flavor Fusion Voyage &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
