import { User, Mic, Video } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const VideoArea = () => {
  const [isRecording, setIsRecording] = useState(false);

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
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <User className="w-20 h-20 text-gray-400 animate-pulse mb-8" />
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsRecording(!isRecording)}
            className={`
              ${isRecording 
                ? 'bg-red-500 hover:bg-red-600 text-white border-red-400' 
                : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-none'
              }
              transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
              flex items-center gap-3 px-8 py-4 rounded-full animate-fade-in
            `}
          >
            {isRecording ? (
              <>
                <Video className="w-5 h-5 animate-pulse" />
                <span>Stop Recording</span>
              </>
            ) : (
              <>
                <Mic className="w-5 h-5" />
                <span>Start Recording</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoArea;