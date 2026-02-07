import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, ShoppingBag, Heart, Award, Calendar, Handshake } from 'lucide-react';

export const ImpactCounter = ({ stats }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impactItems = [
    {
      icon: Users,
      value: stats.beneficiariesTrained,
      label: 'Beneficiaries Trained',
      suffix: '+',
      color: 'indigo'
    },
    {
      icon: Heart,
      value: stats.womenEmpowered,
      label: 'Women Empowered',
      suffix: '+',
      color: 'pink'
    },
    {
      icon: ShoppingBag,
      value: stats.productsSold,
      label: 'Products Sold',
      suffix: '+',
      color: 'amber'
    },
    {
      icon: Award,
      value: stats.revenueGenerated,
      label: 'Revenue Generated',
      prefix: '₹',
      suffix: '+',
      decimals: 0,
      color: 'green'
    },
    {
      icon: Calendar,
      value: stats.eventsWorkshops,
      label: 'Events & Workshops',
      suffix: '+',
      color: 'purple'
    },
    {
      icon: Handshake,
      value: stats.ngoPartnerships,
      label: 'NGO Partnerships',
      suffix: '+',
      color: 'blue'
    }
  ];

  const colorClasses = {
    indigo: 'bg-indigo-100 text-indigo-600',
    pink: 'bg-pink-100 text-pink-600',
    amber: 'bg-amber-100 text-amber-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    blue: 'bg-blue-100 text-blue-600'
  };

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming lives through entrepreneurial action and sustainable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${colorClasses[item.color]}`}>
                  <item.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-900">
                    {isInView && (
                      <CountUp
                        start={0}
                        end={item.value}
                        duration={2.5}
                        separator=","
                        prefix={item.prefix}
                        suffix={item.suffix}
                        decimals={item.decimals}
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">
              {isInView && <CountUp end={stats.carbonFootprintReduction} duration={2.5} />}kg
            </div>
            <p className="text-xs text-gray-600 mt-1">Carbon Reduced</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">
              {isInView && <CountUp end={stats.waterSaved} duration={2.5} separator="," />}L
            </div>
            <p className="text-xs text-gray-600 mt-1">Water Saved</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-purple-600">
              {isInView && <CountUp end={stats.volunteeredHours} duration={2.5} separator="," />}+
            </div>
            <p className="text-xs text-gray-600 mt-1">Volunteer Hours</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-2xl font-bold text-indigo-600">
              {isInView && <CountUp end={stats.awarenessCreated} duration={2.5} separator="," />}+
            </div>
            <p className="text-xs text-gray-600 mt-1">Awareness Created</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
