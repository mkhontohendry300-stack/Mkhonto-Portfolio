import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, ExternalLink, Code2, BarChart3, Brain, Zap } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
      
      {/* Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <iframe 
          src="https://share.chatling.ai/s/p9ACa8o9Ze9kPVg" 
          title="Portfolio Assistant"
          style={{
            width: "400px",
            height: "500px",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)"
          }}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
