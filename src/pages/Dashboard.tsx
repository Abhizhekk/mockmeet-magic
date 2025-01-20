import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <Navigation />
      <main className="container mx-auto px-6 py-6 animate-fade-in pt-32">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-4 text-gray-600">Welcome to your interview dashboard!</p>
      </main>
    </div>
  );
};

export default Dashboard;