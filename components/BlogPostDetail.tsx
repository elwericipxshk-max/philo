import React, { useState } from 'react';
import { BlogPost, Comment } from '../types';
import { ArrowLeft, User, Calendar, Share2, MessageCircle, Send } from 'lucide-react';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  // Local state for comments to simulate interactivity
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [newCommentText, setNewCommentText] = useState('');
  const [newAuthorName, setNewAuthorName] = useState('');

  const handlePostComment = () => {
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: newAuthorName.trim() || 'Anonim Filozof', // Default to Anonymous if empty
      content: newCommentText,
      date: 'Az önce'
    };

    setComments([...comments, newComment]);
    setNewCommentText('');
    setNewAuthorName('');
  };

  return (
    <div className="bg-stone-50 min-h-screen pt-12 pb-12">
      {/* Main Content Container expanded to max-w-5xl */}
      <article className="max-w-5xl mx-auto bg-white shadow-sm border border-stone-100 rounded-xl overflow-hidden mb-12">
        <div className="relative h-[400px] sm:h-[500px]">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6">
                <button 
                    onClick={onBack}
                    className="bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white text-ink transition-all shadow-lg group border border-stone-200"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
        </div>

        <div className="px-8 py-12 sm:px-16 md:px-24">
            <div className="flex flex-wrap gap-3 mb-8">
                {post.tags.map(tag => (
                    <span key={tag} className="text-sm font-bold tracking-wider uppercase text-amber-800 bg-amber-50 px-4 py-1.5 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-ink mb-8 leading-tight">
                {post.title}
            </h1>

            <div className="flex items-center justify-between border-b border-stone-200 pb-8 mb-10">
                <div className="flex items-center space-x-8 text-base text-stone-500">
                    <div className="flex items-center space-x-2">
                        <User className="w-5 h-5" />
                        <span className="font-semibold text-stone-800">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>{post.date}</span>
                    </div>
                </div>
                <button className="text-stone-400 hover:text-amber-600 transition-colors p-2 hover:bg-stone-50 rounded-full">
                    <Share2 className="w-6 h-6" />
                </button>
            </div>

            {/* Readability Improvements: Larger text, looser leading, darker color */}
            <div className="prose prose-xl prose-stone max-w-none font-serif text-stone-800 leading-loose">
                <p className="font-sans text-2xl text-stone-600 font-light mb-10 italic border-l-4 border-amber-500 pl-6 py-2">
                    {post.excerpt}
                </p>
                
                {/* Content Area */}
                <div className="space-y-8 text-xl md:text-2xl font-light font-sans text-stone-800">
                    <p className="whitespace-pre-wrap">{post.content}</p>
                    
                    <p>
                        Felsefi düşünce, sadece akademik salonlarda yankılanan bir ses değil, günlük hayatımızın tam kalbinde atan bir nabızdır. 
                        Bu konuyu irdelerken, kendi deneyimlerimizden yola çıkmak, teorik bilgiyi pratik bilgeliğe dönüştürmenin en etkili yoludur.
                    </p>
                    
                    <blockquote className="my-10 p-8 bg-stone-50 rounded-xl italic text-stone-700 border-l-4 border-amber-700 font-serif text-2xl">
                        "Felsefe, yolda olmaktır." — Karl Jaspers
                    </blockquote>
                    
                    <p>
                        Sonuç olarak, sorgulama eylemi cevaptan daha değerli olabilir. Yolculuğun kendisi, varış noktasından daha öğreticidir.
                    </p>
                </div>
            </div>
        </div>
      </article>

      {/* Comments Section expanded to match article width */}
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="bg-white rounded-xl border border-stone-100 p-8 sm:p-12 shadow-sm">
            <h3 className="font-serif font-bold text-3xl text-ink mb-10 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-amber-600" />
                Tartışma ({comments.length})
            </h3>

            {/* Existing Comments List */}
            <div className="space-y-8 mb-12">
                {comments.length === 0 ? (
                    <p className="text-stone-400 italic text-center py-8 text-lg">Henüz yorum yapılmamış. İlk görüşü sen belirt.</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-6 group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-serif font-bold text-xl border border-stone-200">
                                {comment.author.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-baseline justify-between mb-2">
                                    <h4 className="font-bold text-ink text-lg">{comment.author}</h4>
                                    <span className="text-sm text-stone-400">{comment.date}</span>
                                </div>
                                <p className="text-stone-700 text-lg leading-relaxed bg-stone-50 p-5 rounded-br-2xl rounded-bl-2xl rounded-tr-2xl border border-stone-100/50">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* New Comment Form */}
            <div className="bg-stone-50 rounded-xl p-8 border border-stone-200">
                <h4 className="font-bold text-stone-800 mb-6 text-base uppercase tracking-wide">Düşüncelerini Paylaş</h4>
                <div className="space-y-6">
                    <div>
                        <input 
                            type="text" 
                            placeholder="İsim (İsteğe bağlı - Boş bırakılırsa Anonim)"
                            value={newAuthorName}
                            onChange={(e) => setNewAuthorName(e.target.value)}
                            className="w-full bg-white border border-stone-300 rounded-lg px-6 py-4 text-base focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-stone-400"
                        />
                    </div>
                    <div>
                        <textarea 
                            placeholder="Felsefi görüşlerinizi buraya yazın..."
                            rows={4}
                            value={newCommentText}
                            onChange={(e) => setNewCommentText(e.target.value)}
                            className="w-full bg-white border border-stone-300 rounded-lg px-6 py-4 text-base focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-stone-400 resize-none"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button 
                            onClick={handlePostComment}
                            disabled={!newCommentText.trim()}
                            className="bg-amber-800 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-amber-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg transform active:scale-95 duration-200"
                        >
                            <span>Yorumu Gönder</span>
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};