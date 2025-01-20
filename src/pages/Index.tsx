import Header from "@/components/Header";
import VideoArea from "@/components/VideoArea";
import Controls from "@/components/Controls";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-6 py-6 animate-fade-in">
        <VideoArea />
      </main>
      <Controls />
    </div>
  );
};

export default Index;