import React from 'react';
import { BlogPost } from '../types';
import { Clock, ArrowRight } from 'lucide-react';
import { MOCK_POSTS } from '../constants';

interface BlogFeedProps {
  onReadPost: (post: BlogPost) => void;
  limit?: number;
}

export const BlogFeed: React.FC<BlogFeedProps> = ({ onReadPost, limit }) => {
  const allPosts = [...MOCK_POSTS].reverse();
  const displayPosts = limit ? allPosts.slice(0, limit) : allPosts;

  return (
    <div className="pt-12 pb-24 relative z-10 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-16">
             {!limit && (
                <div className="mb-8 text-center">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-ink mb-6">Fikir Atölyesi</h2>
                    <p className="text-stone-500 text-xl md:text-2xl font-light">Zihnin sınırlarında gezinen son yazılar.</p>
                </div>
             )}
             
             <div className="grid gap-16">
                {displayPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer flex flex-col md:flex-row group border border-stone-100"
                    onClick={() => onReadPost(post)}
                  >
                    <div className="md:w-1/2 h-80 md:h-auto flex-shrink-0 relative overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      />
                    </div>
                    
                    <div className="p-10 md:p-14 flex flex-col justify-center flex-grow">
                      <div>
                        <div className="flex gap-3 mb-6">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs font-bold tracking-widest uppercase text-amber-700 bg-amber-50 px-4 py-2 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6 group-hover:text-amber-700 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-stone-600 text-xl md:text-2xl line-clamp-3 leading-relaxed font-light">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-10 pt-10 border-t border-stone-100">
                         <span className="text-stone-800 font-bold uppercase tracking-wide text-sm">{post.author}</span>
                         <div className="flex items-center gap-2 text-stone-400 font-medium">
                            <Clock className="w-5 h-5" />
                            <span>{post.readTime}</span>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
};
