import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export const TestimonialCard = ({ testimonial, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all relative backdrop-blur-sm"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 left-6 p-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg shadow-lg">
        <Quote size={20} className="text-black" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-gray-300 italic mb-6 leading-relaxed">
          "{testimonial.quote}"
        </p>

        {/* Profile */}
        <div className="flex items-center space-x-4 pt-4 border-t border-amber-500/20">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/30"
          />
          <div>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
            <p className="text-xs text-amber-400 mt-1">{testimonial.project}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
