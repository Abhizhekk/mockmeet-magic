import { User } from "lucide-react";

const VideoArea = () => {
  return (
    <div className="relative w-full h-[calc(100vh-5rem)] bg-meet-background rounded-lg overflow-hidden">
      {/* AI Interviewer Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-meet-surface">
        <div className="text-center">
          <div className="w-32 h-32 bg-meet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-16 h-16 text-meet-blue" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">AI Interviewer</h2>
          <p className="text-gray-500 mt-2">Getting ready for your interview...</p>
        </div>
      </div>
      
      {/* User Video Preview */}
      <div className="absolute bottom-4 right-4 w-64 h-48 bg-meet-surface rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <User className="w-12 h-12 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default VideoArea;