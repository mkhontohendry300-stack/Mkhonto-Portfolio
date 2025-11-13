import { Mail, Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2Fe38df59139b04878b604b0bf4d681edc?format=webp&width=100"
            alt="Hendry Mike"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="font-bold text-slate-900">Hendry Mike</h1>
            <p className="text-xs text-slate-600">Data Analyst</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            Projects
          </button>
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mkhontohendry300-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-yellow-500 transition-colors"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hendry-mike-mkhonto-189904220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-yellow-500 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:mkhontohendry300@gmail.com"
            className="text-slate-600 hover:text-yellow-500 transition-colors"
            title="Email"
          >
            <Mail size={20} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-slate-50 px-6 py-4 space-y-3">
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors font-medium py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors font-medium py-2"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors font-medium py-2"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left text-slate-600 hover:text-slate-900 transition-colors font-medium py-2"
          >
            Projects
          </button>
        </nav>
      )}
    </header>
  );
}
