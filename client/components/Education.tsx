import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educations = [
  {
    degree: "Diploma in Mathematical Sciences",
    institution: "Cape Peninsula University of Technology",
    location: "Cape Town",
    year: "2024",
    status: "Completed",
    color: "border-yellow-500"
  },
  {
    degree: "Full Stack Development",
    institution: "FNB App Academy",
    location: "Cape Town",
    year: "2024",
    status: "Completed",
    color: "border-blue-500"
  },
  {
    degree: "Electrical Engineering (N1–N3)",
    institution: "Gert Sibanda College",
    location: "Mpumalanga",
    year: "2020",
    status: "Completed",
    color: "border-purple-500"
  },
  {
    degree: "National Senior Certificate Grade 12",
    institution: "Mbambiso Secondary School",
    location: "South Africa",
    year: "2018",
    status: "Completed",
    color: "border-green-500"
  }
];

export default function Education() {
  return (
    <section id="education" className="w-full py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
          Education &amp; <span className="text-yellow-500">Qualifications</span>
        </h2>

        <div className="space-y-6">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className={`border-l-4 ${edu.color} pl-8 py-6 hover:shadow-lg transition-shadow rounded-r-xl bg-white border-r border-t border-b border-slate-200`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-yellow-500 rounded-lg mt-1">
                  <GraduationCap size={24} className="text-slate-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-lg text-slate-700 font-semibold">{edu.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-slate-600 ml-16">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{edu.year}</span>
                </div>
                <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                  {edu.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Box */}
        <div className="mt-12 p-8 bg-white rounded-xl border-2 border-yellow-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications &amp; Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-slate-900">Academic Excellence Award</p>
              <p className="text-sm text-slate-600 mt-2">October 2023 - October 2024</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-slate-900">Peer Helper Leadership Skill</p>
              <p className="text-sm text-slate-600 mt-2">July 2024</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-slate-900">Certificate of Recognition</p>
              <p className="text-sm text-slate-600 mt-2">September 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
