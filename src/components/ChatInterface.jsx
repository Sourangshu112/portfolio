import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const QUICK_PROMPTS = [
  'Tell me about the Presence app',
  'How does the Timetable Generator work?',
  'What is your robotics experience?',
  'What tech stack do you use?'
];

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi! I'm Sourangshu's portfolio assistant. Ask me about his projects, tech stack, or engineering background."
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Replace this local responder with your fetch('/api/chat') call when ready
  const getSimulatedReply = (query) => {
    const q = query.toLowerCase();
    if (q.includes('presence') || q.includes('attendance') || q.includes('mobile')) {
      return 'Presence is a React Native & Django REST mobile platform hosted on AWS EC2. It prevents proxy attendance by combining Bluetooth Low Energy (BLE) proximity checks with facial liveness verification.';
    }
    if (q.includes('timetable') || q.includes('cp-sat') || q.includes('schedule')) {
      return 'The College Timetable Generator pairs a Next.js tabular & Excel ingestion interface with a Python Google OR-Tools CP-SAT constraint solver and PostgreSQL backend.';
    }
    if (q.includes('pos') || q.includes('desktop') || q.includes('inventory')) {
      return 'The Desktop POS & Inventory System uses Electron, React, Python (Flask), and SQLite in a local client-server architecture for zero-downtime offline retail billing.';
    }
    if (q.includes('robot') || q.includes('amr') || q.includes('sih') || q.includes('isro')) {
      return 'In robotics and AI, Sourangshu built a decentralized multi-AMR collision avoidance system with ROS 2 and Flask Socket.IO telemetry for SIH 2026, plus a YOLO lunar boulder detector for the ISRO Hackathon.';
    }
    return 'Chatbot API placeholder active: You can wire this component to your /api/chat backend route to answer live custom questions!';
  };

  const handleSend = (textToSend) => {
    const trimmed = (textToSend ?? input).trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: getSimulatedReply(trimmed)
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 550);
  };

  return (
    <div className="h-full min-h-[430px] flex flex-col justify-between rounded-2xl bg-[#6c5a49]/25 border border-[#6c5a49] overflow-hidden">
      {/* Chat Header */}
      <div className="px-5 py-3.5 bg-[#271f30]/90 border-b border-[#6c5a49] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#c8ad55]/20 border border-[#c8ad55] flex items-center justify-center text-[#c8ad55]">
            <Bot size={18} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-[#d0fcb3]">Portfolio Assistant</h2>
            <p className="text-[11px] text-[#9bc59d]">Interactive Chat Interface (Ready for API integration)</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#271f30] text-[#c8ad55] border border-[#c8ad55]/40">
          <Sparkles size={11} /> Online
        </span>
      </div>

      {/* Message List */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[270px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                msg.sender === 'user'
                  ? 'bg-[#c8ad55] text-[#271f30]'
                  : 'bg-[#271f30] text-[#c8ad55] border border-[#6c5a49]'
              }`}
            >
              {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div
              className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#c8ad55] text-[#271f30] font-medium'
                  : 'bg-[#271f30]/90 text-[#d0fcb3] border border-[#6c5a49]/70'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="text-xs font-mono text-[#9bc59d] pl-9">
            Assistant is typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts & Input Bar */}
      <div className="p-3.5 bg-[#271f30]/80 border-t border-[#6c5a49]/60 space-y-2.5">
        <div className="flex flex-wrap gap-1.5">
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => handleSend(prompt)}
              className="text-[11px] px-2.5 py-1 rounded-md bg-[#6c5a49]/35 text-[#9bc59d] hover:text-[#d0fcb3] hover:border-[#c8ad55] border border-transparent transition"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about my projects or skills..."
            className="flex-1 px-3.5 py-2 rounded-lg bg-[#271f30] border border-[#6c5a49] text-sm text-[#d0fcb3] placeholder-[#9bc59d]/60 focus:outline-none focus:border-[#c8ad55]"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#c8ad55] text-[#271f30] font-semibold text-sm hover:opacity-90 transition flex items-center gap-1.5"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}