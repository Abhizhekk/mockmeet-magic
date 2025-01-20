import { Mic, Video, PhoneOff } from "lucide-react";

const Controls = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t flex items-center justify-center space-x-4 animate-slide-in">
      <button className="w-12 h-12 bg-meet-surface hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors">
        <Mic className="w-6 h-6 text-gray-700" />
      </button>
      <button className="w-12 h-12 bg-meet-surface hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors">
        <Video className="w-6 h-6 text-gray-700" />
      </button>
      <button className="w-12 h-12 bg-meet-red hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
        <PhoneOff className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Controls;