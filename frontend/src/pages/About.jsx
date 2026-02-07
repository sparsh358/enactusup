import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, TrendingUp, Target, Heart } from 'lucide-react';
import { timeline } from '../data/mockData';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Enactus ESR</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A student-led social entrepreneurship cell creating sustainable impact since 2017
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Enactus Shaheed Rajguru (ESR) is a dynamic, non-profit organization established in 2017 
                  by students of Shaheed Rajguru College of Applied Sciences for Women, University of Delhi.
                </p>
                <p>
                  Operating under the global Enactus umbrella, we drive social and environmental impact 
                  through entrepreneurial action. Our work focuses on uplifting marginalized groups, 
                  generating sustainable livelihoods, and promoting environmental conservation.
                </p>
                <p>
                  From a small team to a leading social entrepreneurship cell, we've gained national 
                  recognition and international representation, including at the Enactus World Cup.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl">
                <Globe className="text-indigo-600 mb-3" size={32} />
                <div className="text-2xl font-bold text-gray-900 mb-1">33+</div>
                <div className="text-sm text-gray-600">Countries Worldwide</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <Users className="text-purple-600 mb-3" size={32} />
                <div className="text-2xl font-bold text-gray-900 mb-1">300+</div>
                <div className="text-sm text-gray-600">Lives Transformed</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl">
                <Award className="text-pink-600 mb-3" size={32} />
                <div className="text-2xl font-bold text-gray-900 mb-1">6</div>
                <div className="text-sm text-gray-600">Impact Projects</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl">
                <TrendingUp className="text-amber-600 mb-3" size={32} />
                <div className="text-2xl font-bold text-gray-900 mb-1">₹6L+</div>
                <div className="text-sm text-gray-600">Income Generated</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To unite students, academic leaders, and business professionals in creating sustainable, entrepreneurial solutions for pressing social and environmental challenges.',
                color: 'indigo'
              },
              {
                icon: Heart,
                title: 'Our Philosophy',
                description: 'Entrepreneurial Action – we believe in equipping individuals with skills and resources to turn innovative ideas into scalable, measurable impact.',
                color: 'purple'
              },
              {
                icon: Award,
                title: 'Our Values',
                description: 'Innovation, sustainability, inclusivity, and community empowerment drive everything we do. We measure success through transformed lives.',
                color: 'pink'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-4 rounded-xl bg-${item.color}-100 mb-6`}>
                  <item.icon className={`text-${item.color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a small team in 2017 to a nationally recognized social entrepreneurship cell
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Enactus */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Globe className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Part of Global Enactus Network
            </h2>
            <p className="text-lg mb-8 text-indigo-100">
              Enactus is a global community of student, academic, and business leaders committed 
              to using the power of entrepreneurial action to transform lives and shape a better, 
              more sustainable world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">33+</div>
                <div className="text-indigo-100">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">1,700+</div>
                <div className="text-indigo-100">Universities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">72,000+</div>
                <div className="text-indigo-100">Students</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
