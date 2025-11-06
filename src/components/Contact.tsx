import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from '@emailjs/browser'; // ✅ EmailJS import

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // ✅ handle form submit with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Thank you for contacting us!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'rizookhan527@gmail.com',
      link: 'mailto:rizookhan527@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
   {
  icon: <MessageCircle className="w-6 h-6" />, // ✅ WhatsApp icon
  title: 'WhatsApp',
  info: '+92 (300) 7477228',
  link: 'https://wa.me/923007477228', // ✅ Opens chat directly
  color: 'from-green-500 to-green-600',
},

    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'Karachi, Pakistan',
      link: null,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-purple-200 mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600">Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can work together to bring your
            ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}
              ></div>
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 mb-1">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-black">{item.info}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-opacity"></div>

          <div className="relative bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="relative p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-black">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-black">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-black">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-black">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-xl h-14 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-[1.02] transition-all"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
