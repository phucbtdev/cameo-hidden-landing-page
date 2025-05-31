import React from 'react';
import { CoffeeIcon, LeafIcon, HeartIcon, WifiIcon } from 'lucide-react';
const features = [{
  icon: <CoffeeIcon size={40} className="text-amber-600" />,
  title: 'Freshly Roasted',
  description: 'We roast our beans in small batches to ensure the freshest coffee possible.'
}, {
  icon: <LeafIcon size={40} className="text-amber-600" />,
  title: 'Ethically Sourced',
  description: 'All our coffee is sourced from sustainable farms with fair trade practices.'
}, {
  icon: <HeartIcon size={40} className="text-amber-600" />,
  title: 'Made with Love',
  description: 'Every cup is crafted with attention to detail by our skilled baristas.'
}, {
  icon: <WifiIcon size={40} className="text-amber-600" />,
  title: 'Cozy Workspace',
  description: 'Free high-speed WiFi and plenty of outlets for remote workers.'
}];
const FeaturesSection = () => {
  return <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At Brew Haven, we're committed to providing more than just great
            coffee. Here's what sets us apart.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-amber-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;