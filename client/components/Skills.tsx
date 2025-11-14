import { Code2, Database, Brain, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "R", "MATLAB", "SQL", "JavaScript", "HTML", "CSS"],
    color: "bg-slate-800 border-emerald-500/30",
  },
  {
    title: "Statistical Tools",
    icon: Database,
    skills: ["SAS", "GitHub", "Vercel", "Excel"],
    color: "bg-slate-800 border-purple-500/30",
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: ["Problem Solving", "Teamwork", "Communication", "Adaptability"],
    color: "bg-slate-800 border-cyan-500/30",
  },
  {
    title: "Specializations",
    icon: Zap,
    skills: [
      "Data Visualization",
      "Statistical Modeling",
      "Machine Learning",
      "Digital Transformation",
    ],
    color: "bg-slate-800 border-emerald-500/30",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-28 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Skills &amp; <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-8 rounded-xl border-2 ${category.color} hover:shadow-lg transition-all hover:border-emerald-500/50 bg-opacity-50`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-700/50 rounded-full text-sm font-medium text-slate-200 border border-slate-600 hover:border-emerald-500 hover:text-emerald-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Data Visualization Stats */}
        <div className="mt-16 p-8 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-emerald-50">Programming Languages</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-emerald-50">Statistical Tools</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <p className="text-emerald-50">Specializations</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-emerald-50">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
