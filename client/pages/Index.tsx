import { Download, Github, Linkedin } from "lucide-react";

export default function Index() {
  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement("a");
    link.href =
      "https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2F2a752f12-bec4-4eb6-a0e3-d12da09479b1.png";
    link.download = "Mkhonto_Hendry_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-slate-600 text-base font-medium">Hi, I'm</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-slate-900">Mkhonto</span>
                  <br />
                  <span className="text-emerald-500">Hendry Mike</span>
                </h1>
              </div>
              <p className="text-slate-600 text-lg">
                Digital Associate | Data Analyst | Tech Enthusiast
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-700 text-base leading-relaxed mb-8 max-w-md">
              Detail-oriented Data Analyst passionate about transforming data
              into actionable insights and driving digital innovation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
              >
                <Download size={20} />
                Download CV
              </button>
              <a
                href="https://github.com/mkhontohendry300-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hendry-mike-mkhonto-189904220"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <p className="text-2xl font-bold text-emerald-500">5+</p>
                <p className="text-slate-600 text-sm">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-500">2</p>
                <p className="text-slate-600 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-500">Cape Town</p>
                <p className="text-slate-600 text-sm">Based</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2Fe38df59139b04878b604b0bf4d681edc?format=webp&width=800"
                alt="Hendry Mike Mkhonto"
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
