import { Home, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-16 left-0 w-full bg-white/80 backdrop-blur-sm border-b z-40">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-12 space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-meet-blue transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 text-gray-600 hover:text-meet-blue transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;