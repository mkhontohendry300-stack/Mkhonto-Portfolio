import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi! I'm Hendry's portfolio assistant. Ask me anything about his skills, experience, projects, or contact information!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Skills queries
    if (lowerMessage.includes("skill") || lowerMessage.includes("expertise")) {
      return "Hendry is skilled in Python, R, MATLAB, SQL, JavaScript, HTML, CSS, and statistical tools like SAS, GitHub, and Excel. He specializes in data visualization, statistical modeling, machine learning, and digital transformation.";
    }

    // Experience queries
    if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
      return "Hendry currently works as a Digital Associate at CAPACITI. Previously, he was a Junior Data Analyst at Statistics South Africa and a Volunteer Peer Helper at Cape Peninsula University of Technology.";
    }

    // Education queries
    if (lowerMessage.includes("education") || lowerMessage.includes("diploma") || lowerMessage.includes("degree")) {
      return "Hendry holds a Diploma in Mathematical Sciences from Cape Peninsula University of Technology, completed in 2024, and has Full Stack Development training from FNB App Academy.";
    }

    // Projects queries
    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio")) {
      return "Hendry has completed 5+ projects including: Chatling AI Assistant, Portfolio Project Builder, Career Craft, and MindPulse AI. Each demonstrates his expertise in data analysis, visualization, and digital innovation.";
    }

    // Contact queries
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return "You can contact Hendry at:\n📧 Email: mkhontohendry300@gmail.com\n📱 Phone: +27 793003577\nOr connect on LinkedIn: linkedin.com/in/hendry-mike-mkhonto-189904220";
    }

    // CV/Resume queries
    if (lowerMessage.includes("cv") || lowerMessage.includes("resume")) {
      return "You can download Hendry's CV directly from the portfolio. There's a 'Download CV' button in the Contact section and throughout the site.";
    }

    // Location queries
    if (lowerMessage.includes("location") || lowerMessage.includes("cape town")) {
      return "Hendry is based in Cape Town, South Africa. He's available for remote work and local opportunities.";
    }

    // About queries
    if (lowerMessage.includes("about") || lowerMessage.includes("who are you") || lowerMessage.includes("tell me")) {
      return "Hendry Mike Mkhonto is a Digital Associate and Data Analyst passionate about transforming data into actionable insights. He combines analytical precision with modern technology to solve real-world challenges.";
    }

    // Tools/Technologies queries
    if (lowerMessage.includes("tool") || lowerMessage.includes("technology") || lowerMessage.includes("tech")) {
      return "Hendry works with Python, R, MATLAB, SQL, GitHub, Vercel, Excel, and specialized tools for data visualization and statistical modeling. He's also skilled in full-stack development.";
    }

    // Machine Learning queries
    if (lowerMessage.includes("machine learning") || lowerMessage.includes("ml") || lowerMessage.includes("algorithm")) {
      return "Hendry has experience with machine learning, including community detection algorithms using NetworkX and statistical modeling. He applies ML techniques to data analysis projects.";
    }

    // Help/Default response
    return "I can help you learn about Hendry's skills, experience, projects, education, or how to contact him. Try asking about any of these topics!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: getBotResponse(inputValue)
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-yellow-500 text-slate-900 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-110"
        title="Chat with portfolio assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-96 md:w-96 md:h-[500px] bg-white rounded-xl shadow-2xl border-2 border-yellow-500 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-4">
            <h3 className="font-bold text-lg">Hendry's Portfolio Assistant</h3>
            <p className="text-sm text-slate-300">Ask me anything!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-yellow-500 text-slate-900 rounded-br-none"
                      : "bg-slate-300 text-slate-900 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-300 text-slate-900 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-slate-900 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me something..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-yellow-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="p-2 bg-yellow-500 text-slate-900 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
