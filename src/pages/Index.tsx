import Header from "@/components/Header";
import VideoArea from "@/components/VideoArea";
import Controls from "@/components/Controls";

const Index = () => {
  return (
    <div className="min-h-screen bg-meet-background">
      <Header />
      <main className="container mx-auto px-4 py-4">
        <VideoArea />
      </main>
      <Controls />
    </div>
  );
};

export default Index;