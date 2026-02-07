import React from 'react';
import { motion } from 'framer-motion';
import { HandHeart, Users, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const ways = [
    {
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Share your time and skills to support our projects and make a direct impact in communities.',
      benefits: [
        'Gain hands-on experience in social entrepreneurship',
        'Network with like-minded changemakers',
        'Develop leadership and project management skills',
        'Make a tangible difference in lives'
      ],
      color: 'indigo',
      cta: 'Become a Volunteer'
    },
    {
      icon: Users,
      title: 'Donate',
      description: 'Your financial support helps us scale our impact and reach more beneficiaries.',
      benefits: [
        'Support sustainable livelihood programs',
        'Fund skill development workshops',
        'Enable product development and marketing',
        'Contribute to IoT infrastructure'
      ],
      color: 'purple',
      cta: 'Make a Donation'
    },
    {
      icon: Handshake,
      title: 'Partner with Us',
      description: 'Collaborate with Enactus ESR to create meaningful CSR initiatives and community impact.',
      benefits: [
        'Align with UN Sustainable Development Goals',
        'Enhance corporate social responsibility',
        'Access skilled workforce for projects',
        'Create measurable social impact'
      ],
      color: 'pink',
      cta: 'Explore Partnerships'
    }
  ];

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
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Involved</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us in creating sustainable solutions that transform communities. 
              There are many ways to contribute to our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {ways.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className={`inline-flex p-4 rounded-xl bg-${way.color}-100 mb-4`}>
                      <way.icon className={`text-${way.color}-600`} size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{way.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{way.description}</p>
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-${way.color}-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-${way.color}-700 transition-colors inline-flex items-center space-x-2`}
                      >
                        <span>{way.cta}</span>
                        <ArrowRight size={20} />
                      </motion.button>
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why {way.title}?</h3>
                    <ul className="space-y-3">
                      {way.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`mt-1 w-5 h-5 rounded-full bg-${way.color}-100 flex items-center justify-center flex-shrink-0`}>
                            <div className={`w-2 h-2 rounded-full bg-${way.color}-600`} />
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Support Creates Real Impact
            </h2>
            <p className="text-lg mb-8 text-indigo-100">
              Every contribution, whether time, funds, or partnership, directly translates to 
              transformed lives, sustainable livelihoods, and environmental conservation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-indigo-100">Lives Transformed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">₹6L+</div>
                <div className="text-indigo-100">Income Generated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-indigo-100">Partner Organizations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to learn more about how you can contribute to our mission.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
