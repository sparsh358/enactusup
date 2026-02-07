import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, TrendingUp, Target } from 'lucide-react';
import { projects, testimonials } from '../data/mockData';
import { TestimonialCard } from '../components/TestimonialCard';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-indigo-600 hover:text-indigo-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedTestimonials = testimonials.filter(t => 
    t.project.toLowerCase().includes(project.id) || 
    t.project.toLowerCase().includes(project.title.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link to="/projects" className="inline-flex items-center space-x-2 text-white mb-6 hover:text-gray-200 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                  Since {project.year}
                </span>
                {project.sdgs && project.sdgs.slice(0, 3).map((sdg) => (
                  <span
                    key={sdg}
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: project.color }}
                  >
                    SDG {sdg}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-xl text-gray-200">{project.tagline}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                
                {project.subProjects && project.subProjects.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sub-Projects</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.subProjects.map((sub) => (
                        <span
                          key={sub}
                          className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.products && project.products.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Products</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {project.products.map((product, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.features && project.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-indigo-600" />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>

              {/* SDG Alignment */}
              {project.sdgs && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="text-indigo-600" size={28} />
                    <h2 className="text-2xl font-bold text-gray-900">UN SDG Alignment</h2>
                  </div>
                  <p className="text-gray-600 mb-4">This project contributes to the following Sustainable Development Goals:</p>
                  <div className="flex flex-wrap gap-4">
                    {project.sdgs.map((sdg) => (
                      <div
                        key={sdg}
                        className="flex items-center justify-center w-16 h-16 rounded-xl font-bold text-xl text-white shadow-lg"
                        style={{ backgroundColor: project.color }}
                      >
                        {sdg}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Testimonials */}
              {relatedTestimonials.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
                  <div className="space-y-6">
                    {relatedTestimonials.map((testimonial, index) => (
                      <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Impact Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                    <div className="p-3 bg-white rounded-lg shadow">
                      <Calendar className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Launched</div>
                      <div className="text-lg font-bold text-gray-900">{project.year}</div>
                    </div>
                  </div>

                  {project.impact && Object.entries(project.impact).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="p-3 bg-white rounded-lg shadow">
                        {key.includes('beneficiaries') || key.includes('women') || key.includes('artisans') || key.includes('training') ? (
                          <Users className="text-purple-600" size={24} />
                        ) : (
                          <TrendingUp className="text-green-600" size={24} />
                        )}
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {typeof value === 'number' ? (
                            value >= 1000 ? `${(value / 1000).toFixed(1)}k+` : `${value}+`
                          ) : value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/get-involved">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Support This Project
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
