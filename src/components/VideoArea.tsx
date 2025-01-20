import { User, Mic } from "lucide-react";
import { Button } from "./ui/button";

const VideoArea = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full h-[calc(100vh-9rem)]">
      {/* Interviewer Video */}
      <div className="relative rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
        <div className="absolute top-4 left-4 z-10">
          <h2 className="text-lg font-semibold text-gray-800 bg-white/80 px-3 py-1 rounded-full">Interviewer</h2>
        </div>
        <div className="absolute bottom-4 left-4 z-10">
          <select className="bg-white/90 backdrop-blur-sm border rounded-lg px-3 py-1.5 text-sm transition-all hover:bg-white">
            <option>1x</option>
            <option>1.5x</option>
            <option>2x</option>
          </select>
        </div>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <User className="w-20 h-20 text-gray-400 animate-pulse" />
        </div>
      </div>

      {/* Candidate Video */}
      <div className="relative rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
        <div className="absolute top-4 left-4 z-10">
          <h2 className="text-lg font-semibold text-gray-800 bg-white/80 px-3 py-1 rounded-full">Candidate</h2>
        </div>
        <div className="absolute bottom-4 right-4 z-10 flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all">
            <Mic className="w-4 h-4 mr-1" />
            Start Recording
          </Button>
        </div>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <User className="w-20 h-20 text-gray-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default VideoArea;