import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // ✅ Use real browser redirection for mailto — avoids SPA interception
  const handleMailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:rizookhan527@gmail.com';
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Portfolio
            </h3>
            <p className="text-white/70 leading-relaxed">
              Creating beautiful and functional digital experiences that make a difference.
              Let's build something amazing together.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Connect With Me</h3>
            <p className="text-white/70 mb-4">Follow me on social media</p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com/Rizwanwaseer11', color: 'from-gray-600 to-gray-800' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rizwan-ahmed-waseer-775142217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'from-blue-500 to-blue-700' },
               
                { Icon: Mail, href: 'mailto:rizookhan527@gmail.com', color: 'from-purple-500 to-pink-500', isMail: true },
              ].map(({ Icon, href, color, isMail }) => (
                <a
                  key={href}
                  href={href}
                  onClick={isMail ? handleMailClick : undefined}
                  target={isMail ? undefined : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-center md:text-left">
              &copy; {currentYear} Rizwan Ahmed. All rights reserved.
            </p>
            <p className="text-white/70 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
