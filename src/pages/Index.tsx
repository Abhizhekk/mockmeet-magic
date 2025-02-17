import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import VideoArea from "@/components/VideoArea";
import Controls from "@/components/Controls";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <Navigation />
      <main className="container mx-auto px-6 py-6 animate-fade-in pt-32">
        <VideoArea />
      </main>
      <Controls />
    </div>
  );
};

export default Index;