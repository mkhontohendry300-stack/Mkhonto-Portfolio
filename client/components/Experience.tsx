import { MapPin, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Digital Associate",
    company: "CAPACITI",
    location: "Cape Town",
    period: "Sept 2025 – Present",
    description: [
      "Assisting in digital innovation and data-driven business solutions.",
      "Supporting project teams with data analysis and technology integration.",
      "Contributing to digital upskilling and automation initiatives.",
    ],
    color: "border-emerald-500",
  },
  {
    title: "Junior Data Analyst",
    company: "Statistics South Africa",
    location: "Cape Town",
    period: "Jul 2024 – Dec 2024",
    description: [
      "Conducted data cleaning, modeling, and visualization on socio-economic projects.",
      "Developed Python models to quantify the informal sector's impact on GDP.",
      "Applied community detection algorithms using NetworkX and Pandas.",
    ],
    color: "border-purple-500",
  },
  {
    title: "Volunteer Peer Helper",
    company: "Cape Peninsula University of Technology",
    location: "Cape Town",
    period: "Feb 2024 – Sep 2025",
    description: [
      "Provided academic and emotional support to students.",
      "Facilitated workshops on mental health and exam preparation.",
      "Maintained confidentiality while supporting diverse student populations.",
    ],
    color: "border-cyan-500",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-20 md:py-28 px-6 bg-slate-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Professional{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative pl-8 pb-8 border-l-4 ${exp.color} last:pb-0`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-12px] top-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full border-4 border-slate-950"></div>

              <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-slate-300 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm whitespace-nowrap">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 mb-4">
                  <MapPin size={16} />
                  {exp.location}
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-emerald-400 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
