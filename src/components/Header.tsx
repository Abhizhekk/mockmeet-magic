import { Clock } from "lucide-react";

const Header = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800">Mock<span className="text-meet-blue">.Dev</span></h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm">00:00</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm text-gray-600">👤</span>
        </div>
      </div>
    </div>
  );
};

export default Header;