import React from 'react';
import { BookOpen, Feather, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Ana Sayfa', icon: Feather },
    { id: 'blog', label: 'Makaleler', icon: BookOpen },
  ];

  return (
    // Sticky yerine absolute kullanıldı, böylece sayfa kayınca yukarıda kalmaz.
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <span className="font-serif text-3xl font-bold text-stone-100 tracking-tight group-hover:text-amber-500 transition-colors">
              Agora.
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                // Arka plan renkleri (bg-*) kaldırıldı. Sadece text renkleri var.
                // focus:outline-none ile tıklanınca çıkan çerçeve engellendi.
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none ${
                  activeTab === item.id
                    ? 'text-amber-500' 
                    : 'text-stone-300 hover:text-amber-400'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-stone-900/95 backdrop-blur-md border-b border-stone-800 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center space-x-3 px-3 py-4 text-base font-medium focus:outline-none ${
                  activeTab === item.id
                    ? 'text-amber-500'
                    : 'text-stone-300 hover:text-amber-400'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
