import { useState } from 'react';
import Layout from '../components/Layout';
import CareerForm from '../components/CareerForm';
import RoadmapDisplay from '../components/RoadmapDisplay';
import { generateCareerRoadmap } from '../services/careerMentor';
import { CareerRoadmap, UserInput } from '../types/career';

function Index() {
  const [roadmap, setRoadmap] = useState<CareerRoadmap | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<{ grade: string; experience: string } | null>(null);

  const handleFormSubmit = async (input: UserInput) => {
    setIsLoading(true);
    
    // Store user details for display
    setUserDetails({
      grade: input.grade,
      experience: input.experience
    });
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const generatedRoadmap = generateCareerRoadmap(input);
    setRoadmap(generatedRoadmap);
    setIsLoading(false);
  };

  const handleStartOver = () => {
    setRoadmap(null);
    setUserDetails(null);
  };

  return (
    <Layout>
      {!roadmap ? (
        <div>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full mb-8 shadow-2xl animate-pulse">
                <span className="text-4xl">🎯</span>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
                AI Career Mentor
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Get a personalized career roadmap tailored to your unique interests and skills. 
                Our AI mentor will guide you through every step of your journey.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Curated Resources</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Get both free and paid learning resources tailored to your path</p>
            </div>
            <div className="group text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🛤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Structured Path</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Follow a clear progression from beginner to advanced levels</p>
            </div>
            <div className="group text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Career Guidance</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Discover job roles, companies, and interview preparation tips</p>
            </div>
          </div>

          <CareerForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        </div>
      ) : (
        <RoadmapDisplay roadmap={roadmap} onStartOver={handleStartOver} userDetails={userDetails} />
      )}
    </Layout>
  );
}

export default Index;