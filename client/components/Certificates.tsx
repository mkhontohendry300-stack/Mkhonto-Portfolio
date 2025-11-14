import { useState } from "react";
import { X, Download, ExternalLink } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  pdfUrl: string;
  verifyUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: "ai-for-everyone",
    title: "AI For Everyone",
    issuer: "DeepLearning.AI & Coursera",
    date: "September 22, 2025",
    description:
      "Completed an online non-credit course on AI fundamentals authorized by DeepLearning.AI and offered through Coursera. This course provided comprehensive insights into AI concepts, applications, and impact across various industries.",
    skills: ["AI Fundamentals", "Machine Learning Basics", "AI Strategy"],
    pdfUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2F497338a484174555a18912544ac25498?format=webp&width=800",
    verifyUrl: "https://coursera.org/verify/Z4IIJQW4T1LE",
  },
  {
    id: "fnb-app-academy",
    title: "Certificate in Full Stack Development",
    issuer: "FNB App Academy 2025",
    date: "July 14, 2025",
    description:
      "Earned a comprehensive Full Stack Development certificate (32 credits) covering app strategies, GitHub collaboration, HTML/SDLC, UX design, API development, data processing, and business development. This certification demonstrates proficiency in building complete web applications from frontend to backend.",
    skills: [
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "API Development",
      "UX Design",
      "GitHub",
    ],
    pdfUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2F497338a484174555a18912544ac25498?format=webp&width=800",
  },
  {
    id: "ai-ml-fundamentals",
    title: "AI & Machine Learning Fundamentals",
    issuer: "Capaciti",
    date: "November 7, 2025",
    description:
      "Achieved a certificate of achievement in AI & Machine Learning Fundamentals with an excellent score of 46/50 (92%). This course covered foundational concepts in artificial intelligence and machine learning, building strong analytical and problem-solving capabilities.",
    skills: ["Machine Learning", "AI Fundamentals", "Data Analysis", "Python"],
    pdfUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2F497338a484174555a18912544ac25498?format=webp&width=800",
  },
  {
    id: "supervised-ml",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    date: "October 13, 2025",
    description:
      "Successfully completed an online non-credit course authorized by DeepLearning.AI and Stanford University on supervised machine learning techniques. This course provided in-depth knowledge of regression and classification algorithms, essential for data science and machine learning applications.",
    skills: [
      "Supervised Learning",
      "Regression",
      "Classification",
      "Machine Learning Algorithms",
      "Data Science",
    ],
    pdfUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2F497338a484174555a18912544ac25498?format=webp&width=800",
    verifyUrl: "https://coursera.org/verify/SYAW7Q40JKRH",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="w-full py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Professional <span className="text-yellow-500">Certifications</span>
        </h2>
        <p className="text-slate-600 mb-12 text-lg">
          Continuous learning and skill development through recognized certifications
          from industry leaders and online platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer border-2 border-slate-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 bg-white hover:scale-105 transform"
            >
              {/* Certificate Header */}
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>

              <div className="p-6">
                {/* Issuer */}
                <p className="text-sm font-semibold text-yellow-600 mb-2">
                  {cert.issuer}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-500 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-slate-500 mb-4">📅 {cert.date}</p>

                {/* Description */}
                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-slate-900 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm w-full justify-center">
                  <ExternalLink size={16} />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-96 overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {selectedCert.issuer}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Date */}
              <div>
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  Issue Date
                </p>
                <p className="text-lg text-slate-900">{selectedCert.date}</p>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm font-semibold text-slate-600 mb-2">
                  About This Certification
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Skills Gained */}
              <div>
                <p className="text-sm font-semibold text-slate-600 mb-3">
                  Skills & Knowledge
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-slate-900 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                >
                  <Download size={18} />
                  Download Certificate
                </a>
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-yellow-500 text-yellow-500 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Verify Online
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
