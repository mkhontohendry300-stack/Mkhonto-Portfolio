import { Mail, Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Hendry Mike</h3>
            <p className="text-slate-400">
              Data Analyst & Digital Associate passionate about transforming data into insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-yellow-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-yellow-500 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-yellow-500 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-500 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Data Analysis</li>
              <li>Visualization</li>
              <li>Statistical Modeling</li>
              <li>Digital Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:mkhontohendry300@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors"
              >
                <Mail size={18} />
                <span className="break-all">mkhontohendry300@gmail.com</span>
              </a>
              <p className="text-slate-400 flex items-center gap-2">
                <span>📍 Cape Town, South Africa</span>
              </p>
              <p className="text-slate-400">
                <span>📱 +27 793003577</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://github.com/mkhontohendry300-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-colors"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hendry-mike-mkhonto-189904220"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mkhontohendry300@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-colors"
              title="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={18} className="text-yellow-500" /> by Hendry Mike
            <span className="ml-2">© {currentYear}. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
