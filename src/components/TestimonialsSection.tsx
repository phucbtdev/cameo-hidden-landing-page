import React from 'react';
import { StarIcon } from 'lucide-react';
const testimonials = [{
  name: 'Sarah Johnson',
  role: 'Regular Customer',
  image: 'https://randomuser.me/api/portraits/women/12.jpg',
  quote: 'Brew Haven is my go-to spot for morning coffee. The atmosphere is perfect for both casual meetups and focused work sessions.'
}, {
  name: 'Michael Chen',
  role: 'Coffee Enthusiast',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
  quote: "As someone who's tried coffee shops worldwide, I can confidently say Brew Haven serves some of the best lattes I've ever tasted."
}, {
  name: 'Emily Rodriguez',
  role: 'Local Artist',
  image: 'https://randomuser.me/api/portraits/women/65.jpg',
  quote: 'I love sketching in this cozy environment. The staff remembers my usual order and always makes me feel welcome.'
}];
const TestimonialsSection = () => {
  return <section id="testimonials" className="py-20 px-6 bg-amber-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-medium text-amber-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;