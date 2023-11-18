// Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from '../assets/icons/QuoteIcon';
import { Overlay } from './Overlay';

const FaseehAhmed = 'https://i.imgur.com/gAAWHrX.jpg';
const AkshaySharma = 'https://i.imgur.com/FcGMIb0.jpg';

const testimonialData = [
  {
    id: 1,
    name: 'Akshay Sharma',
    role: 'Director and COO of Skill Xperts Academy',
    text: 'Thank you so much Ethan, this is one of the best meetings for digital marketing I\'ve had and the extra steps you and your team took were eye-opening. Let me discuss it with my partners about it and I will get back to you and definitely, I will go with your services. My mind is clear that if I opt for your services then I don\'t even need to take a look at the content!',
    image: AkshaySharma,
  },
  {
    id: 2,
    name: 'Faseeh Ahmed',
    role: 'Managing Director at S2FIMEX LLP | Data Engineer at Dell EMC',
    text: 'It’s one thing that drives any industry: Trust. Fade Media is that company that builds trust. It builds trust because of the integrity they showcase. The young energy and zeal. The commitment and the passion to showcase the work. It’s a brand they are building. Ethan and Aaron at the helm, Mission Impossible feels underrated. Their support staff standing tall behind them and ensuring that a vision is brought to life, it’s just magic. If we say jump, they question “how high?”. We as a company if ever want digital marketing, Fade is where we will sign up.',
    image: FaseehAhmed,
  },
  // Add more testimonials as needed
];

export const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center py-20 text-white">
          Testimonials
        </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          
          {testimonialData.map((testimonial) => (
            <motion.div
      key={testimonial.id}
      className="bg-zinc-200 p-8 rounded-lg text-gray-800 relative mx-5 md:mx-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center flex justify-around sm:justify-around md:flex-col">
        <div className="w-44 md:w-auto md:mb-3 items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 md:w-16 md:h-16 rounded-full mx-auto mb-2 md:mb-0 md:mt-0 md:relative"
            style={{ zIndex: 1 }}
          />
        </div>
        <div className="sm:w-3/4 md:w-auto">
          <h3 className="text-xl font-bold">{testimonial.name}</h3>
          <p className="text-gray-600 mb-4">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-justify text-sm">{testimonial.text}</p>
    </motion.div>
          ))}
        </div> 
      </div>
    </section>
  );
};
