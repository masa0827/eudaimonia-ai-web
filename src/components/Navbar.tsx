
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-end">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                eud<span className="text-secondary">AI</span>monia
              </h1>
              <span className="hidden md:block text-sm ml-3 mb-0.5 text-neutral-800">株式会社ユーダイモニア</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-neutral-800 hover:text-primary transition-colors duration-200">サービス</a>
            <a href="#about" className="text-neutral-800 hover:text-primary transition-colors duration-200">私たちについて</a>
            <a href="#cases" className="text-neutral-800 hover:text-primary transition-colors duration-200">導入事例</a>
            <a href="#plans" className="text-neutral-800 hover:text-primary transition-colors duration-200">プラン</a>
            <Button className="bg-primary text-white hover:bg-primary-100">
              <a href="#contact">お問い合わせ</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white">
            <div className="flex flex-col space-y-3">
              <a 
                href="#services" 
                className="px-4 py-2 text-neutral-800 hover:bg-neutral-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                サービス
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 text-neutral-800 hover:bg-neutral-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                私たちについて
              </a>
              <a 
                href="#cases" 
                className="px-4 py-2 text-neutral-800 hover:bg-neutral-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                導入事例
              </a>
              <a 
                href="#plans" 
                className="px-4 py-2 text-neutral-800 hover:bg-neutral-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                プラン
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 bg-primary text-white rounded-md text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                お問い合わせ
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
