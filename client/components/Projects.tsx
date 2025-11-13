import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Chatling AI Assistant",
    description: "An interactive AI-powered chatbot designed to assist with customer support and information retrieval using natural language processing.",
    tools: ["AI/ML", "Chatbot Framework", "Natural Language Processing"],
    challenges: "Implementing context-aware responses and handling multiple user queries efficiently",
    link: "https://share.chatling.ai/s/p9ACa8o9Ze9kPVg",
    type: "Live Demo"
  },
  {
    title: "Portfolio Project Builder",
    description: "A comprehensive web application built on Lovable platform showcasing project management and portfolio creation capabilities.",
    tools: ["React", "Lovable", "Web Development", "UI/UX"],
    challenges: "Creating a scalable platform while maintaining intuitive user experience for non-technical users",
    link: "https://lovable.dev/projects/40956923-14d3-481a-975b-3532ec1b5ebc",
    type: "Live Demo"
  },
  {
    title: "Career Craft",
    description: "An intelligent career guidance platform that helps users plan their professional development path and identify growth opportunities.",
    tools: ["Data Analysis", "Machine Learning", "Career Development", "Base44"],
    challenges: "Developing algorithms to match user skills with suitable career paths and growth opportunities",
    link: "https://career-craft-9fb33b22.base44.app",
    type: "Live Demo"
  },
  {
    title: "MindPulse AI",
    description: "A mental health and wellness application powered by AI, providing personalized insights and support recommendations.",
    tools: ["AI/ML", "Health Tech", "Data Visualization", "Analytics"],
    challenges: "Ensuring data privacy while providing meaningful health insights and maintaining user trust",
    link: "https://mind-pulse-ai-a1bd00d7.base44.app/",
    type: "Live Demo"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Featured <span className="text-yellow-500">Projects</span>
        </h2>
        <p className="text-slate-600 mb-12 text-lg">
          A selection of my recent work showcasing data analysis, visualization, and digital innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group border-2 border-slate-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 bg-slate-50"
            >
              {/* Project Header */}
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>

              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Tools &amp; Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-6 p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">🎯 Challenges Solved:</p>
                  <p className="text-sm text-slate-600">{project.challenges}</p>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-900 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                >
                  <ExternalLink size={20} />
                  View {project.type}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Interested in my work?</h3>
          <p className="text-slate-100 text-lg mb-6">
            Let's collaborate on your next data-driven project or digital transformation initiative.
          </p>
          <a
            href="mailto:mkhontohendry300@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-900 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
