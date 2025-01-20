import { Clock } from "lucide-react";

const Header = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-gray-800">AI Mock Interview</h1>
        <span className="text-sm text-gray-500">Frontend Developer Position</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-600">
        <Clock className="w-4 h-4" />
        <span className="text-sm">00:00</span>
      </div>
    </div>
  );
};

export default Header;