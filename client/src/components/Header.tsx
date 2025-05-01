import { useState } from 'react';
import { Link, useLocation } from 'wouter';

interface HeaderProps {
  onAboutClick: () => void;
}

export default function Header({ onAboutClick }: HeaderProps) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [, setLocation] = useLocation();

  const handleHomeClick = () => {
    setLocation('/');
    setMobileMenu(false);
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    onAboutClick();
    setMobileMenu(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-primary flex items-center gap-2" onClick={handleHomeClick}>
          <i className="fas fa-tools text-accent"></i>
          <span>UtilityX</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-primary transition" onClick={handleHomeClick}>Home</Link>
          <button onClick={onAboutClick} className="text-gray-600 hover:text-primary transition">About</button>
        </nav>
        <button className="md:hidden text-gray-600 text-xl" onClick={() => setMobileMenu(!mobileMenu)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-2 flex flex-col gap-3">
            <Link href="/" className="text-gray-600 py-2 hover:text-primary transition" onClick={handleHomeClick}>Home</Link>
            <button onClick={handleAboutClick} className="text-gray-600 py-2 hover:text-primary transition text-left">About</button>
          </div>
        </div>
      )}
    </header>
  );
}
