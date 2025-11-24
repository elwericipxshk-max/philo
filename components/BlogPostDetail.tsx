import React from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, User, Calendar, Share2 } from 'lucide-react';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <article className="max-w-3xl mx-auto bg-white shadow-sm border border-stone-100 rounded-xl overflow-hidden">
        <div className="relative h-64 sm:h-96">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
                <button 
                    onClick={onBack}
                    className="bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white text-ink transition-all shadow-md"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
            </div>
        </div>

        <div className="px-6 py-10 sm:px-12">
            <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold tracking-wider uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-sm">
                        {tag}
                    </span>
                ))}
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ink mb-6 leading-tight">
                {post.title}
            </h1>

            <div className="flex items-center justify-between border-b border-stone-100 pb-8 mb-8">
                <div className="flex items-center space-x-6 text-sm text-stone-500">
                    <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span className="font-medium text-stone-800">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                    </div>
                </div>
                <button className="text-stone-400 hover:text-amber-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>

            <div className="prose prose-stone prose-lg max-w-none font-serif text-stone-700 leading-relaxed">
                <p className="font-sans text-xl text-stone-500 font-light mb-8 italic border-l-4 border-amber-500 pl-4">
                    {post.excerpt}
                </p>
                
                {/* Simulating long content */}
                <p className="mb-6">{post.content}</p>
                <p className="mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Derinlemesine Bakış</h3>
                <p className="mb-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote className="p-6 bg-stone-50 rounded-lg italic text-stone-600 mb-8 border-l-2 border-stone-300">
                    "Felsefe, yolda olmaktır." — Karl Jaspers
                </blockquote>
                <p>
                    Sonuç olarak, sorgulama eylemi cevaptan daha değerli olabilir. Yolculuğun kendisi, varış noktasından daha öğreticidir.
                </p>
            </div>
        </div>
      </article>
    </div>
  );
};
