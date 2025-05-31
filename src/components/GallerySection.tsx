const galleryImages = [
  {
    src: "../public/images/gallery01.jpg",
    alt: "Coffee shop interior",
    caption: "Our Cozy Space",
  },
  {
    src: "../public/images/gallery02.jpg",
    alt: "Barista making coffee",
    caption: "Crafting Perfection",
  },
  {
    src: "../public/images/gallery03.jpg",
    alt: "Coffee beans",
    caption: "Premium Beans",
  },
  {
    src: "../public/images/gallery04.jpg",
    alt: "Latte art",
    caption: "Artisanal Touch",
  },
  {
    src: "../public/images/gallery05.jpg",
    alt: "Coffee and pastries",
    caption: "Fresh Delights",
  },
  {
    src: "../public/images/gallery06.jpg",
    alt: "Coffee shop atmosphere",
    caption: "Warm Ambiance",
  },
];
const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-6 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            𝐂𝐀𝐌𝐄𝐎 𝟎𝟐 's Gallery
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Step into our world of coffee craftsmanship and cozy moments. Each
            image tells a story of passion, quality, and the joy of sharing
            great coffee.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-medium tracking-wide">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GallerySection;
