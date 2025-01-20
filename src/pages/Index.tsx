import Header from "@/components/Header";
import VideoArea from "@/components/VideoArea";
import Controls from "@/components/Controls";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-6 py-6">
        <VideoArea />
      </main>
      <Controls />
    </div>
  );
};

export default Index;