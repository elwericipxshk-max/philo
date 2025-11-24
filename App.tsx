import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BlogFeed } from './components/BlogFeed';
import { BlogPostDetail } from './components/BlogPostDetail';
import { PhilosopherChat } from './components/PhilosopherChat';
import { BlogPost } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
    setActiveTab('post_detail');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onStartReading={() => setActiveTab('blog')} />
            <div className="bg-stone-50 py-12 px-4 text-center">
                <p className="text-xl font-serif text-stone-600 italic">"Bilgi, şüpheyle başlar."</p>
            </div>
            <BlogFeed onReadPost={handleReadPost} />
          </>
        );
      case 'blog':
        return <BlogFeed onReadPost={handleReadPost} />;
      case 'post_detail':
        return selectedPost ? (
          <BlogPostDetail post={selectedPost} onBack={() => setActiveTab('blog')} />
        ) : (
          <BlogFeed onReadPost={handleReadPost} />
        );
      case 'chat':
        return <PhilosopherChat />;
      default:
        return <Hero onStartReading={() => setActiveTab('blog')} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-ink selection:bg-amber-200 selection:text-amber-900">
      <Navbar activeTab={activeTab === 'post_detail' ? 'blog' : activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                <h4 className="text-stone-100 font-serif font-bold text-2xl mb-4">Agora.</h4>
                <p className="text-sm leading-relaxed">
                    Modern çağın karmaşasında zihin açıklığı arayanlar için dijital bir sığınak.
                </p>
            </div>
            <div>
                <h5 className="text-stone-100 font-bold mb-4">Bağlantılar</h5>
                <ul className="space-y-2 text-sm">
                    <li><button onClick={() => setActiveTab('home')} className="hover:text-amber-500 transition-colors">Ana Sayfa</button></li>
                    <li><button onClick={() => setActiveTab('blog')} className="hover:text-amber-500 transition-colors">Okuma Listesi</button></li>
                    <li><button onClick={() => setActiveTab('chat')} className="hover:text-amber-500 transition-colors">Yapay Zeka Filozof</button></li>
                </ul>
            </div>
            <div>
                 <h5 className="text-stone-100 font-bold mb-4">Bülten</h5>
                 <p className="text-xs mb-4">Haftalık felsefi dozunuzu alın.</p>
                 <div className="flex">
                     <input type="email" placeholder="E-posta" className="bg-stone-800 border-none rounded-l-md px-3 py-2 w-full text-sm text-white focus:ring-1 focus:ring-amber-600 outline-none" />
                     <button className="bg-amber-700 text-white px-4 rounded-r-md hover:bg-amber-600 transition-colors text-sm">Abone Ol</button>
                 </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
            &copy; 2024 Agora Philosophy Blog. All rights reserved. Built with React & Gemini.
        </div>
      </footer>
    </div>
  );
}

export default App;
