const menuItems = [
  {
    category: "Signature Coffees",
    items: [
      {
        name: "Combo Hidden",
        description_1: " 1 phần nước tự pha",
        description_2: "4 tiếng ngồi lại học tập và làm việc",
        price: "25 cá",
      },
      {
        name: "Combo Ngồi thêm xíu",
        description_1: "2 tiếng ngồi học tập và làm việc",
        description_2: "Điều kiện: Áp dụng sau khi dùng hết comno Hidden",
        price: "15 cá",
      },
      {
        name: "Combo Uống thêm xíu",
        description_1: " 1 phần nước tự pha",
        description_2: "Điều kiện: Áp dụng khi đang dùng combo Hidden",
        price: "15 cá",
      },
      {
        name: "Combo Ăn thêm xíu",
        description_1: " 1 phần nước tự pha",
        description_2: "Điều kiện: Áp dụng khi đang dùng combo Hidden",
        price: "15 cá",
      },
    ],
  },
  {
    category: "Pastries & Snacks",
    items: [
      {
        name: "Almond Croissant",
        description_1: "Buttery croissant with almond filling",
        description_2: "Smooth espresso with vanilla and steamed milk",
        price: "$3.75",
      },
      {
        name: "Blueberry Muffin",
        description_1: "Fresh baked with organic blueberries",
        description_2: "Smooth espresso with vanilla and steamed milk",
        price: "$3.25",
      },
      {
        name: "Avocado Toast",
        description_1: "Sourdough with avocado and microgreens",
        description_2: "Smooth espresso with vanilla and steamed milk",
        price: "$6.50",
      },
      {
        name: "Chocolate Chip Cookie",
        description_1: "Freshly baked with Belgian chocolate",
        description_2: "Smooth espresso with vanilla and steamed milk",
        price: "$2.50",
      },
    ],
  },
];
const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-6 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Menu
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our menu features carefully crafted coffee beverages and freshly
            baked goods. We use locally sourced ingredients whenever possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-amber-800 mb-6 pb-2 border-b-2 border-amber-200">
                {category.category}
              </h3>
              <ul className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-amber-900">
                        {item.name}
                      </h4>
                      <p className="text-gray-600">{item.description_1}</p>
                      <p className="text-gray-600">{item.description_2}</p>
                    </div>
                    <span className="text-amber-700 font-medium">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-800 transition-colors"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
};
export default MenuSection;
