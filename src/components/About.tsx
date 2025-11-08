import { motion } from 'motion/react';
import { Code, Palette, Rocket, Award, Zap, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development',
      description: 'Expert in modern web technologies and frameworks',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design',
      description: 'Creating beautiful and functional user interfaces',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimized solutions for the best user experience',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'Delivering high-quality work that exceeds expectations',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const techStack = [
    'React',
    'React Native',
    'TypeScript',
    'Node.js',
    'Express.js',
    'Bootstrap',
    'Tailwind CSS',
    'UI/UX Design',
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-purple-200 mb-4">
            <Star className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-white p-2 rounded-3xl">
              <ImageWithFallback
              loading="lazy"
                src="/profile.jpg"
                alt="E-commerce developer Rizwan Ahmed professional Mernstack developer"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl text-black">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl sm:text-4xl text-black">
              I'm a passionate developer who loves creating{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">
                amazing digital experiences
              </span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              With several years of experience in web and mobile development, I specialize
              in building modern, responsive, and user-friendly applications. My approach
              combines technical expertise with creative problem-solving to deliver
              exceptional results.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm constantly learning and adapting to new technologies to stay at the
              forefront of development. Whether it's a complex web application, mobile app,
              or a simple landing page, I bring the same level of dedication and attention to
              detail to every project.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-6">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500 hover:to-purple-600 hover:text-white text-purple-700 rounded-full border border-purple-200 hover:border-transparent transition-all cursor-pointer hover:scale-105"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500`}></div>
              <div className="relative text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">{skill.icon}</div>
                </div>
                <h4 className="text-xl text-black mb-2">{skill.title}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
