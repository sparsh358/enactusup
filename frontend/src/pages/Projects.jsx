import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/mockData';
import { Sparkles } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Sparkles className="text-indigo-600" size={20} />
              <span className="text-sm font-medium text-indigo-600">6 Impact-Driven Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each project is designed to address specific social and environmental challenges, 
              creating sustainable solutions that empower communities and transform lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our projects contribute to multiple SDGs, creating holistic impact across communities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 17].map((sdg) => (
                <motion.div
                  key={sdg}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center font-bold text-2xl text-indigo-600 hover:scale-110 transition-transform"
                >
                  {sdg}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
