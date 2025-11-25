import React from 'react';
import { BlogPost } from '../types';
import { Clock } from 'lucide-react';
import { MOCK_POSTS } from '../constants';

interface BlogFeedProps {
  onReadPost: (post: BlogPost) => void;
  limit?: number;
}

export const BlogFeed: React.FC<BlogFeedProps> = ({ onReadPost, limit }) => {
  // Reverse to show newest posts first
  const allPosts = [...MOCK_POSTS].reverse();
  const displayPosts = limit ? allPosts.slice(0, limit) : allPosts;

  return (
    <div className="bg-stone-50 pt-12 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-12 mb-16">
          <div className="w-full">
             <h2 className="text-3xl font-serif font-bold text-ink mb-2">Son Düşünceler</h2>
             <p className="text-stone-500 mb-8">Zihninizi besleyecek taze perspektifler.</p>
             
             <div className="grid gap-8">
                {displayPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col md:flex-row group min-h-[300px]"
                    onClick={() => onReadPost(post)}
                  >
                    <div className="md:w-2/5 h-64 md:h-auto flex-shrink-0 relative overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex gap-2 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4 group-hover:text-amber-800 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-stone-600 text-lg line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-8 text-sm text-stone-400 font-medium">
                         <span className="text-stone-500 uppercase tracking-wide font-bold">{post.author}</span>
                         <div className="flex items-center space-x-1">
                             <Clock className="w-4 h-4" />
                             <span>{post.readTime} okuma</span>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};