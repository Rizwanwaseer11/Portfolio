import { motion } from 'motion/react';
import { Monitor, Smartphone, ShoppingCart, Plug, FileText, Globe, Sparkles } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Custom Web Development',
      description:
        'Tailored web applications built with modern technologies like React, TypeScript, and Node.js. Scalable, maintainable, and performant solutions.',
      color: 'from-blue-500 to-cyan-500',
      shadow: 'shadow-blue-500/50',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Android/iOS Development',
      description:
        'Native and cross-platform mobile applications for Android and iOS. Seamless user experience with cutting-edge features and optimal performance.',
      color: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/50',
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Ecommerce Development',
      description:
        'Complete e-commerce solutions with payment gateway integration, inventory management, and customer analytics. Secure, scalable platforms.',
      color: 'from-orange-500 to-red-500',
      shadow: 'shadow-orange-500/50',
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: 'SaaS Integrations',
      description:
        'Seamless integration of third-party SaaS platforms and APIs. Connect your business tools, automate workflows, and streamline operations.',
      color: 'from-green-500 to-teal-500',
      shadow: 'shadow-green-500/50',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Landing Pages',
      description:
        'High-converting landing pages designed to capture leads and drive conversions. Optimized for performance, SEO, and user engagement.',
      color: 'from-yellow-500 to-orange-500',
      shadow: 'shadow-yellow-500/50',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Static & Dynamic Sites',
      description:
        'From blazing-fast static sites to interactive dynamic web applications. Choose the perfect solution for your project with modern frameworks.',
      color: 'from-indigo-500 to-purple-500',
      shadow: 'shadow-indigo-500/50',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-white/90">What I Offer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Services I Offer
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg sm:text-xl">
            Comprehensive digital solutions tailored to your needs. From concept to deployment,
            transforming ideas into reality.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-all duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 ${service.shadow} shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/70 text-lg mb-6">
            Don't see what you're looking for? Let's discuss your project!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
