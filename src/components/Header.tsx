import { Clock } from "lucide-react";

const Header = () => {
  return (
    <div className="h-16 bg-white border-b shadow-sm backdrop-blur-sm bg-white/80 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-meet-blue bg-clip-text text-transparent">
          Mock<span className="text-meet-blue">.Dev</span>
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">00:00</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-sm">
          <span className="text-sm text-gray-600">👤</span>
        </div>
      </div>
    </div>
  );
};

export default Header;