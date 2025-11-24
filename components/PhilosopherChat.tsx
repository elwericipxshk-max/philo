import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles, AlertCircle } from 'lucide-react';
import { PhilosopherPersona, ChatMessage } from '../types';
import { chatWithPhilosopher } from '../services/geminiService';

export const PhilosopherChat: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<PhilosopherPersona>(PhilosopherPersona.SOCRATES);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'model',
      text: 'Hoş geldin, arayıcı. Zihnindeki bulanıklığı gidermek için ne sormak istersin?',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Convert internal message format to Gemini history format
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await chatWithPhilosopher(input, selectedPersona, history);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        // Error handling visual
    } finally {
      setIsLoading(false);
    }
  };

  const personas = [
    { id: PhilosopherPersona.SOCRATES, name: 'Sokrates', desc: 'Sorgulayıcı Üstat' },
    { id: PhilosopherPersona.NIETZSCHE, name: 'Nietzsche', desc: 'Güç ve Yıkım' },
    { id: PhilosopherPersona.SIMONE_DE_BEAUVOIR, name: 'Beauvoir', desc: 'Varoluş ve Özgürlük' },
    { id: PhilosopherPersona.MARCUS_AURELIUS, name: 'Aurelius', desc: 'Stoacı İmparator' },
  ];

  return (
    <div className="bg-stone-50 min-h-[calc(100vh-80px)] p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-[80vh]">
        
        {/* Sidebar - Persona Selection */}
        <div className="w-full md:w-64 bg-stone-900 p-6 flex flex-col border-r border-stone-800">
          <h2 className="text-stone-100 font-serif font-bold text-xl mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Agora AI
          </h2>
          <p className="text-stone-400 text-xs mb-4 uppercase tracking-widest font-bold">Bir Mentor Seç</p>
          <div className="flex flex-col space-y-2 overflow-y-auto flex-grow">
            {personas.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPersona(p.id);
                  setMessages([{
                    id: Date.now().toString(),
                    role: 'model',
                    text: `Ben ${p.name}. Seninle konuşmak için buradayım.`,
                    timestamp: new Date()
                  }]);
                }}
                className={`text-left p-3 rounded-lg transition-all border border-transparent ${
                  selectedPersona === p.id
                    ? 'bg-stone-800 border-amber-900/50 text-amber-50'
                    : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                <div className="font-bold font-serif">{p.name}</div>
                <div className="text-xs opacity-70">{p.desc}</div>
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-stone-800">
             <div className="flex items-center gap-2 text-stone-500 text-xs p-2 bg-stone-950/50 rounded">
                <AlertCircle className="w-3 h-3" />
                Yapay zeka hatalar yapabilir.
             </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-stone-50 relative">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-stone-200 flex justify-between items-center shadow-sm z-10">
            <div>
                <h3 className="font-serif font-bold text-ink text-lg">
                    {personas.find(p => p.id === selectedPersona)?.name} ile Sohbet
                </h3>
                <p className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Çevrimiçi
                </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex max-w-[85%] md:max-w-[70%] ${
                    msg.role === 'user' 
                        ? 'bg-ink text-white rounded-t-2xl rounded-bl-2xl' 
                        : 'bg-white border border-stone-200 text-stone-800 rounded-t-2xl rounded-br-2xl shadow-sm'
                  } p-5`}
                >
                    <div className="mr-4 mt-1 flex-shrink-0">
                        {msg.role === 'user' ? <User className="w-5 h-5 opacity-70" /> : <Bot className="w-5 h-5 text-amber-600" />}
                    </div>
                    <div className="prose prose-sm max-w-none leading-relaxed">
                        {msg.text}
                    </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-4 rounded-2xl shadow-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white p-4 border-t border-stone-200">
            <div className="flex space-x-2 max-w-4xl mx-auto">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Felsefi bir soru sorun..."
                className="flex-1 px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all font-sans"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md flex items-center gap-2 font-medium"
              >
                <span>Gönder</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
