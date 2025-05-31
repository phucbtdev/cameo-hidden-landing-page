const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img
        src="/images/banner-cameo.jpg"
        alt="Coffee shop atmosphere"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Where Every <span className="text-amber-300">Cup</span> Tells a Story
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Nơi trú ẩn an yên cho dân hướng nội
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#menu"
            className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 transition-colors"
          >
            Menu
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white/10 transition-colors"
          >
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
