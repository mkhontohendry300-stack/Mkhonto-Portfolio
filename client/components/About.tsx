export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          About <span className="text-yellow-500">Me</span>
        </h2>

        <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
          <p>
            I am a detail-oriented and analytical professional passionate about data-driven insights and innovation. 
            I hold a Diploma in Mathematical Sciences from Cape Peninsula University of Technology. 
          </p>

          <p>
            I have worked as an intern specializing in Data Analysis at Statistics South Africa, where I focused on 
            analyzing statistical data, creating insightful visualizations, and developing interactive dashboards to 
            support data-driven decision-making.
          </p>

          <p>
            Currently working at CAPACITI as a Digital Associate, I excel in data visualization and digital 
            transformation projects. I am driven to combine analytical precision with modern technology to solve 
            real-world challenges.
          </p>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">🎯 Focus</h3>
              <p className="text-slate-600">Data-driven insights, visualization, and digital transformation</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">💡 Approach</h3>
              <p className="text-slate-600">Combining analytical precision with modern technology</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">🚀 Goal</h3>
              <p className="text-slate-600">Solving real-world challenges through data analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
