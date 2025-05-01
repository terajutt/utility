import { Link } from 'wouter';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  path: string;
  delay?: number;
}

export default function ToolCard({ title, description, icon, path, delay = 0 }: ToolCardProps) {
  const animationDelay = delay ? { animationDelay: `${delay}ms` } : {};
  
  return (
    <div className="tool-card-wrapper">
      <Link href={path}>
        <div className="tool-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg cursor-pointer animate-slide-up" style={animationDelay}>
          <div className="h-3 bg-primary"></div>
          <div className="p-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <i className={`fas ${icon} text-xl`}></i>
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
