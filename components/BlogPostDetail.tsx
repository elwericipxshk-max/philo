import React, { useState } from 'react';
import { BlogPost, Comment } from '../types';
import { ArrowLeft, User, Calendar, Share2, MessageCircle, Send } from 'lucide-react';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [newCommentText, setNewCommentText] = useState('');
  const [newAuthorName, setNewAuthorName] = useState('');

  const handlePostComment = () => {
    if (!newCommentText.trim()) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      author: newAuthorName.trim() || 'Misafir Düşünür',
      content: newCommentText,
      date: 'Şimdi'
    };
    setComments([...comments, newComment]);
    setNewCommentText('');
    setNewAuthorName('');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 bg-paper">
      
      <article className="max-w-5xl mx-auto bg-white border border-stone-100 rounded-[2rem] overflow-hidden mb-16 shadow-xl">
        
        {/* Görsel */}
        <div className="relative h-[500px] w-full group">
            <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover" 
            />
            <div className="absolute top-8 left-8">
                <button onClick={onBack} className="bg-white/90 backdrop-blur shadow-lg p-4 rounded-full text-ink hover:text-amber-600 transition-all border border-stone-200">
                    <ArrowLeft className="w-6 h-6" />
                </button>
            </div>
        </div>

        <div className="px-8 py-16 md:px-24">
            <div className="flex flex-wrap gap-3 mb-8">
                {post.tags.map(tag => (
                    <span key={tag} className="text-sm font-bold tracking-widest uppercase text-amber-800 bg-amber-50 px-5 py-2 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink mb-10 leading-[1.1]">
                {post.title}
            </h1>

            <div className="flex items-center justify-between border-b border-stone-100 pb-10 mb-14 text-lg">
                <div className="flex items-center gap-8 text-stone-500">
                    <div className="flex items-center gap-3">
                        <User className="w-6 h-6 text-amber-600" />
                        <span className="font-semibold text-stone-800">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-600" />
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

            {/* Büyük Punto Yazı Alanı */}
            <div className="prose prose-stone prose-2xl max-w-none font-serif text-stone-700 leading-[2]">
                <p className="font-sans text-3xl text-stone-500 font-light mb-12 italic border-l-8 border-amber-500 pl-8 py-4 bg-stone-50 rounded-r-xl">
                    {post.excerpt}
                </p>
                
                <div className="font-sans font-light text-xl md:text-2xl space-y-10 text-stone-800">
                    <p className="whitespace-pre-wrap">{post.content}</p>
                    <blockquote className="my-16 p-10 bg-amber-50 rounded-3xl text-amber-900 border-none font-serif text-3xl md:text-4xl italic text-center shadow-inner">
                        "Felsefe, yolda olmaktır." — Karl Jaspers
                    </blockquote>
                    <p>Sonuç olarak, sorgulama eylemi cevaptan daha değerli olabilir.</p>
                </div>
            </div>
        </div>
      </article>

      {/* Yorum Alanı */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2rem] border border-stone-200 p-10 md:p-14 shadow-lg">
            <h3 className="font-serif font-bold text-4xl text-ink mb-12">Tartışma</h3>

            <div className="space-y-10 mb-16">
                {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-serif font-bold text-2xl border border-stone-200">
                            {comment.author.charAt(0)}
                        </div>
                        <div className="flex-grow">
                             <div className="flex justify-between mb-2">
                                <h4 className="font-bold text-xl">{comment.author}</h4>
                                <span className="text-stone-400 text-sm">{comment.date}</span>
                             </div>
                             <p className="text-stone-600 text-xl leading-relaxed">{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Input Alanı */}
            <div className="bg-stone-50 p-8 rounded-3xl">
                <input 
                    className="w-full bg-white border border-stone-200 rounded-xl px-6 py-5 text-lg mb-4 focus:ring-2 focus:ring-amber-500 outline-none" 
                    placeholder="Adınız..." 
                    value={newAuthorName} 
                    onChange={e => setNewAuthorName(e.target.value)} 
                />
                <textarea 
                    className="w-full bg-white border border-stone-200 rounded-xl px-6 py-5 text-lg mb-6 focus:ring-2 focus:ring-amber-500 outline-none h-40" 
                    placeholder="Fikirlerinizi yazın..." 
                    value={newCommentText} 
                    onChange={e => setNewCommentText(e.target.value)} 
                />
                <button onClick={handlePostComment} className="w-full bg-amber-700 text-white py-4 rounded-xl text-xl font-bold hover:bg-amber-800 transition-colors">
                    Gönder
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
