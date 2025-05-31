import { CoffeeIcon } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <CoffeeIcon className="h-8 w-8" />
            <span className="text-2xl font-semibold">CAMEO</span>
          </div>
          {/* <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-amber-200 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-amber-200 transition-colors">
              About
            </a>
            <a href="#menu" className="hover:text-amber-200 transition-colors">
              Menu
            </a>
            <a
              href="#features"
              className="hover:text-amber-200 transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-amber-200 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:text-amber-200 transition-colors"
            >
              Contact
            </a>
          </div> */}
        </div>
        <div className="border-t border-amber-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} CAMEO</p>
          <p className="mt-2 md:mt-0">Designed with ❤️ for coffee lovers</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
