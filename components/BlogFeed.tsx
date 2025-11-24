import React from 'react';
import { BlogPost } from '../types';
import { Clock, Tag } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { MOCK_POSTS } from '../constants';

// Aesthetic chart data simulating "Philosophical Balance"
const chartData = [
  { subject: 'Mantık', A: 120, fullMark: 150 },
  { subject: 'Etik', A: 98, fullMark: 150 },
  { subject: 'Metafizik', A: 86, fullMark: 150 },
  { subject: 'Epistemoloji', A: 99, fullMark: 150 },
  { subject: 'Estetik', A: 85, fullMark: 150 },
  { subject: 'Politika', A: 65, fullMark: 150 },
];

interface BlogFeedProps {
  onReadPost: (post: BlogPost) => void;
}

export const BlogFeed: React.FC<BlogFeedProps> = ({ onReadPost }) => {
  return (
    <div className="bg-stone-50 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-2/3">
             <h2 className="text-3xl font-serif font-bold text-ink mb-2">Son Düşünceler</h2>
             <p className="text-stone-500 mb-8">Zihninizi besleyecek taze perspektifler.</p>
             
             <div className="grid gap-8">
                {MOCK_POSTS.map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col sm:flex-row group"
                    onClick={() => onReadPost(post)}
                  >
                    <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 relative overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex gap-2 mb-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-ink mb-2 group-hover:text-amber-800 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-stone-600 text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4 text-xs text-stone-400 font-medium">
                         <span>{post.author}</span>
                         <div className="flex items-center space-x-1">
                             <Clock className="w-3 h-3" />
                             <span>{post.readTime} okuma</span>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-xl border border-stone-100 sticky top-24">
                <h3 className="font-serif font-bold text-lg mb-4 text-ink">Felsefi Dengemiz</h3>
                <p className="text-xs text-stone-500 mb-4">Blogumuzdaki içeriklerin konulara göre dağılımı.</p>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                        <PolarGrid stroke="#e5e5e4" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#78716c', fontSize: 10 }} />
                        <Radar
                            name="Mike"
                            dataKey="A"
                            stroke="#d97706"
                            strokeWidth={2}
                            fill="#d97706"
                            fillOpacity={0.2}
                        />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="mt-8 border-t border-stone-100 pt-6">
                    <h4 className="font-bold text-sm mb-3 text-ink">Popüler Etiketler</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Etik', 'Varoluşçuluk', 'Antik Yunan', 'Modernite', 'Zihin', 'Sanat'].map(tag => (
                            <button key={tag} className="text-xs border border-stone-200 px-3 py-1 rounded-full text-stone-600 hover:border-amber-500 hover:text-amber-700 transition-colors">
                                #{tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
