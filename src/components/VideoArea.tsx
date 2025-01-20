import { User, Mic } from "lucide-react";
import { Button } from "./ui/button";

const VideoArea = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full h-[calc(100vh-9rem)]">
      {/* Interviewer Video */}
      <div className="relative rounded-lg overflow-hidden bg-gray-100">
        <div className="absolute top-4 left-4">
          <h2 className="text-lg font-semibold text-gray-800">Interviewer</h2>
        </div>
        <div className="absolute bottom-4 left-4">
          <select className="bg-white border rounded px-2 py-1 text-sm">
            <option>1x</option>
            <option>1.5x</option>
            <option>2x</option>
          </select>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <User className="w-20 h-20 text-gray-400" />
        </div>
      </div>

      {/* Candidate Video */}
      <div className="relative rounded-lg overflow-hidden bg-gray-100">
        <div className="absolute top-4 left-4">
          <h2 className="text-lg font-semibold text-gray-800">Candidate</h2>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-white">
            <Mic className="w-4 h-4 mr-1" />
            Start Recording
          </Button>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <User className="w-20 h-20 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default VideoArea;