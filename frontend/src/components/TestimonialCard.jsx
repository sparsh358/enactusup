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
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 left-6 p-2 bg-indigo-600 rounded-lg">
        <Quote size={20} className="text-white" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-gray-700 italic mb-6 leading-relaxed">
          "{testimonial.quote}"
        </p>

        {/* Profile */}
        <div className="flex items-center space-x-4 pt-4 border-t">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-100"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <p className="text-xs text-indigo-600 mt-1">{testimonial.project}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
