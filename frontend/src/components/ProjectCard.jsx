import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Users, Heart, Leaf, Sprout, Sparkles, Factory } from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap = {
    pehchaan: Users,
    sehej: Heart,
    kashida: Sparkles,
    ishnakari: Sparkles,
    sugavya: Leaf,
    greenhaven: Sprout
  };

  const Icon = iconMap[project.id] || Factory;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="absolute top-4 right-4 p-3 rounded-xl backdrop-blur-md"
              style={{ backgroundColor: `${project.color}20`, border: `2px solid ${project.color}` }}
            >
              <Icon size={24} style={{ color: project.color }} />
            </motion.div>

            {/* Year Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
              Since {project.year}
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-gray-200">{project.tagline}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Impact Highlights */}
            {project.impact && (
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(project.impact).slice(0, 3).map(([key, value]) => (
                  <div key={key} className="px-3 py-1 bg-gray-50 rounded-lg text-xs">
                    <span className="font-semibold" style={{ color: project.color }}>
                      {typeof value === 'number' ? `${value}+` : value}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* SDG Badges */}
            {project.sdgs && (
              <div className="flex flex-wrap gap-1 mb-4">
                {project.sdgs.slice(0, 4).map((sdg) => (
                  <div
                    key={sdg}
                    className="px-2 py-1 rounded text-xs font-medium text-white"
                    style={{ backgroundColor: project.color }}
                  >
                    SDG {sdg}
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="flex items-center text-sm font-semibold group-hover:gap-2 transition-all duration-300" style={{ color: project.color }}>
              <span>Learn More</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
