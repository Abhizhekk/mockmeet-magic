import { Button } from "./ui/button";

const Controls = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t flex items-center justify-end px-6 space-x-4 animate-slide-in">
      <Button variant="outline">Previous Question</Button>
      <Button variant="outline" className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700">
        End Interview
      </Button>
      <Button variant="outline" className="bg-gray-900 text-white hover:bg-gray-800">
        Leave Interview
      </Button>
    </div>
  );
};

export default Controls;