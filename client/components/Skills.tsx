import { Code2, Database, Brain, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "R", "MATLAB", "SQL", "JavaScript", "HTML", "CSS"],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Statistical Tools",
    icon: Database,
    skills: ["SAS", "GitHub", "Vercel", "Excel"],
    color: "bg-purple-50 border-purple-200"
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: ["Problem Solving", "Teamwork", "Communication", "Adaptability"],
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Specializations",
    icon: Zap,
    skills: ["Data Visualization", "Statistical Modeling", "Machine Learning", "Digital Transformation"],
    color: "bg-yellow-50 border-yellow-200"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
          Skills &amp; <span className="text-yellow-500">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-8 rounded-xl border-2 ${category.color} hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-500 rounded-lg">
                    <Icon size={24} className="text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-900 border border-slate-300 hover:border-yellow-500 hover:text-yellow-500 transition-colors cursor-default"
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
        <div className="mt-16 p-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-yellow-50">Programming Languages</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-yellow-50">Statistical Tools</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <p className="text-yellow-50">Specializations</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-yellow-50">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
