import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Globe, TrendingUp, Award, Users, Zap } from 'lucide-react';
import { ImpactCounter } from '../components/ImpactCounter';
import { ProjectCard } from '../components/ProjectCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { impactStats, projects, testimonials } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-4000" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="text-amber-400" size={16} />
                <span className="text-sm font-medium text-amber-400">Part of Global Enactus Network</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Empowering Communities Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                  Entrepreneurial Action
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Enactus Shaheed Rajguru creates sustainable, entrepreneurial solutions for social and environmental challenges. 
                Join us in transforming lives through innovation, skill development, and community empowerment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:from-amber-400 hover:to-yellow-400 transition-all shadow-lg shadow-amber-500/30"
                  >
                    <span>Explore Our Projects</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link to="/get-involved">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-transparent text-amber-400 px-8 py-4 rounded-xl font-bold border-2 border-amber-500 hover:bg-amber-500/10 transition-colors"
                  >
                    Get Involved
                  </motion.button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center p-4 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-amber-400">300+</div>
                  <div className="text-xs text-gray-400 mt-1">Beneficiaries</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-yellow-400">6</div>
                  <div className="text-xs text-gray-400 mt-1">Projects</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center p-4 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-orange-400">₹6L+</div>
                  <div className="text-xs text-gray-400 mt-1">Impact Value</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20 border-2 border-amber-500/20">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Enactus Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium mb-2 text-amber-400">Since 2017</p>
                  <h3 className="text-2xl font-bold">Transforming Lives, Building Futures</h3>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gray-900 to-black border-2 border-amber-500/30 p-4 rounded-xl shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <TrendingUp className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-400">₹1.35L+</div>
                    <div className="text-xs text-gray-400">Revenue Generated</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 p-4 rounded-xl shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Globe className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">33+</div>
                    <div className="text-xs text-gray-400">Countries</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Are</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-6" />
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Enactus Shaheed Rajguru is a student-led social entrepreneurship cell established in 2017 at 
              Shaheed Rajguru College of Applied Sciences for Women, University of Delhi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'Unite students, academic leaders, and business professionals to create sustainable entrepreneurial solutions.',
                color: 'amber',
                gradient: 'from-amber-500/20 to-yellow-500/20'
              },
              {
                icon: Zap,
                title: 'Our Philosophy',
                description: 'Entrepreneurial Action – equipping students to turn ideas into scalable, measurable impact.',
                color: 'yellow',
                gradient: 'from-yellow-500/20 to-orange-500/20'
              },
              {
                icon: Award,
                title: 'Our Impact',
                description: 'From a small team to a leading cell known for innovation, sustainability, and tangible results.',
                color: 'orange',
                gradient: 'from-orange-500/20 to-amber-500/20'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-${item.color}-500/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-${item.color}-500/20 transition-all`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-${item.color}-500/20 mb-4 border border-${item.color}-500/30`}>
                  <item.icon className={`text-${item.color}-400`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-black relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(234,179,8,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-6" />
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transforming lives through innovative, sustainable solutions across diverse communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:from-amber-400 hover:to-yellow-400 transition-all inline-flex items-center space-x-2 shadow-lg shadow-amber-500/30"
              >
                <span>View All Projects</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Counter */}
      <ImpactCounter stats={impactStats} />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Voices, Real Transformations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from the individuals whose lives have been transformed through our programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/impact">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors inline-flex items-center space-x-2">
                <span>Read More Stories</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of the Change
            </h2>
            <p className="text-lg mb-8 text-indigo-100">
              Join us in creating sustainable solutions that transform communities. 
              Whether you want to volunteer, partner, or support our cause – we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Involved
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
