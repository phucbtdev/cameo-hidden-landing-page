import { useState } from "react";
import { CoffeeIcon, MenuIcon, XIcon } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-amber-900 text-amber-50 py-4 px-6 md:px-10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <img
            src="../public/images/logo-cameo.jpg"
            alt="Coffee shop atmosphere"
            className="w-10 h-10 object-cover rounded-full"
          /> */}
          <CoffeeIcon className="h-8 w-8" />
          <span className="text-2xl font-semibold">CAMEO</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-amber-200 transition-colors">
            Trang chủ
          </a>
          <a href="#about" className="hover:text-amber-200 transition-colors">
            Giới thiệu
          </a>
          <a href="#menu" className="hover:text-amber-200 transition-colors">
            Menu
          </a>
          <a
            href="#features"
            className="hover:text-amber-200 transition-colors"
          >
            Nổi bật
          </a>
          {/* <a
            href="#testimonials"
            className="hover:text-amber-200 transition-colors"
          >
            Testimonials
          </a> */}
          <a href="#contact" className="hover:text-amber-200 transition-colors">
            Liên hệ
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-900 mt-2 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#menu"
              className="hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#features"
              className="hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
