import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission (in production, this would send to your backend/email service)
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement("a");
    link.href = "https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2Fe38df59139b04878b604b0bf4d681edc";
    link.download = "Mkhonto_Hendry_Mike_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-yellow-500">Connect</span>
        </h2>
        <p className="text-slate-300 text-lg mb-16 max-w-2xl">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
          Reach out through the form below or contact me directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-yellow-500 text-slate-900 rounded-lg font-bold hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
                  ✓ Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Email */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-yellow-500 rounded-lg">
                  <Mail size={24} className="text-slate-900" />
                </div>
                <h3 className="text-lg font-bold">Email</h3>
              </div>
              <a
                href="mailto:mkhontohendry300@gmail.com"
                className="text-slate-300 hover:text-yellow-500 transition-colors block break-all"
              >
                mkhontohendry300@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-yellow-500 rounded-lg">
                  <Phone size={24} className="text-slate-900" />
                </div>
                <h3 className="text-lg font-bold">Phone</h3>
              </div>
              <a
                href="tel:+27793003577"
                className="text-slate-300 hover:text-yellow-500 transition-colors"
              >
                +27 793003577
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mkhontohendry300-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-yellow-500 hover:text-slate-900 transition-colors"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hendry-mike-mkhonto-189904220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-yellow-500 hover:text-slate-900 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="w-full px-6 py-3 bg-yellow-500 text-slate-900 rounded-lg font-bold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
