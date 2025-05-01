interface FooterProps {
  onAboutClick: () => void;
}

export default function Footer({ onAboutClick }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} UtilityX. Made by Haiwan</p>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={onAboutClick}
              className="text-gray-500 hover:text-primary transition"
            >
              <i className="fas fa-info-circle mr-1"></i> About
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
