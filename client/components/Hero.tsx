import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { generateResumePDF } from "../lib/resume";

function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 30;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
        {count}+
      </div>
      <p className="text-slate-600 text-sm md:text-base">{label}</p>
    </div>
  );
}

export default function Hero() {

  return (
    <section className="w-full py-16 md:py-24 px-6 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <p className="text-slate-600 text-base font-medium">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-slate-900">Mkhonto</span>
              <br />
              <span className="text-yellow-500">Hendry Mike</span>
            </h1>
            <p className="text-lg text-slate-700">
              Digital Associate | Data Analyst | Tech Enthusiast
            </p>
          </div>

          <p className="text-slate-600 text-base leading-relaxed max-w-lg">
            Transforming raw data into actionable insights through statistical
            analysis, visualization, and strategic problem-solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:mkhontohendry300@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image & Stats */}
        <div className="flex flex-col gap-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-slate-100 rounded-3xl transform -rotate-6"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa80f79bc5ff34336ac1496ec1a885787%2Fe38df59139b04878b604b0bf4d681edc?format=webp&width=800"
                alt="Hendry Mike Mkhonto"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl relative z-10 shadow-2xl"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <Counter target={5} label="Projects" />
            <Counter target={2} label="Years Experience" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                CT
              </div>
              <p className="text-slate-600 text-sm md:text-base">Cape Town</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
