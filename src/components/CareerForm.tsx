import { useState } from 'react';
import { UserInput } from '../types/career';
import { getAllDomains } from '../services/careerMentor';

interface CareerFormProps {
  onSubmit: (input: UserInput) => void;
  isLoading: boolean;
}

function CareerForm({ onSubmit, isLoading }: CareerFormProps) {
  const [interests, setInterests] = useState('');
  const [skills, setSkills] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [grade, setGrade] = useState('');
  const [experience, setExperience] = useState('');

  const domains = getAllDomains();
  const grades = [
    'High School (9th-12th)',
    'College Freshman',
    'College Sophomore', 
    'College Junior',
    'College Senior',
    'Graduate Student',
    'Recent Graduate',
    'Working Professional'
  ];

  const experienceLevels = [
    'Complete Beginner',
    'Some Basic Knowledge',
    'Intermediate',
    'Advanced',
    'Expert'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (interests.trim() && skills.trim() && grade && experience) {
      onSubmit({ 
        interests: interests.trim(), 
        skills: skills.trim(),
        selectedDomain: selectedDomain || undefined,
        grade,
        experience
      });
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full mb-6 shadow-lg">
          <span className="text-2xl">🚀</span>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Discover Your Career Path
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Tell us about yourself, and we'll create a personalized roadmap for your dream career.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Details Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <span className="mr-2 text-lg">🎓</span>
              Current Education Level
            </label>
            <div className="relative">
              <select
                id="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full px-4 py-4 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 appearance-none cursor-pointer hover:border-gray-300 dark:hover:border-gray-500"
                required
              >
                <option value="">Select your level</option>
                {grades.map((gradeOption) => (
                  <option key={gradeOption} value={gradeOption}>
                    {gradeOption}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group">
            <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
              <span className="mr-2 text-lg">📊</span>
              Experience Level
            </label>
            <div className="relative">
              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-4 py-4 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 appearance-none cursor-pointer hover:border-gray-300 dark:hover:border-gray-500"
                required
              >
                <option value="">Select your experience</option>
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Career Domain Selection */}
        <div className="group">
          <label htmlFor="domain" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
            <span className="mr-2 text-lg">🎯</span>
            Interested Career Domain (Optional)
          </label>
          <div className="relative">
            <select
              id="domain"
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full px-4 py-4 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 appearance-none cursor-pointer hover:border-gray-300 dark:hover:border-gray-500"
            >
              <option value="">Let AI choose the best domain for me</option>
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center">
            <span className="mr-1">💡</span>
            Leave blank to let our AI analyze your interests and choose the best domain
          </p>
        </div>

        <div className="group">
          <label htmlFor="interests" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
            <span className="mr-2 text-lg">💡</span>
            What are your interests and passions?
          </label>
          <textarea
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., I love analyzing data, solving problems, working with numbers, creating visualizations, helping businesses make decisions..."
            className="w-full px-4 py-4 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none hover:border-gray-300 dark:hover:border-gray-500"
            rows={4}
            required
          />
        </div>

        <div className="group">
          <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
            <span className="mr-2 text-lg">💪</span>
            What skills do you currently have?
          </label>
          <textarea
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g., Python programming, Excel, basic statistics, communication, problem-solving, teamwork..."
            className="w-full px-4 py-4 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none hover:border-gray-300 dark:hover:border-gray-500"
            rows={4}
            required
          />
        </div>

        <div className="relative group">
          <button
            type="submit"
            disabled={isLoading || !interests.trim() || !skills.trim() || !grade || !experience}
            className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-bold py-5 px-8 rounded-2xl hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            <div className="relative z-10">
              {isLoading ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-lg">Generating your personalized roadmap...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg">Generate My Career Roadmap</span>
                  <span className="text-xl">🚀</span>
                </div>
              )}
            </div>
            
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
          </button>
        </div>
      </form>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-2xl border border-blue-200/50 dark:border-gray-600/50 backdrop-blur-sm">
        <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center text-lg">
          <span className="mr-2">💡</span>
          Tips for better results:
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-blue-500 dark:text-blue-400">✨</span>
            Be specific about what excites and motivates you
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500 dark:text-blue-400">🎯</span>
            Include both technical and soft skills you possess
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500 dark:text-blue-400">📚</span>
            Mention any relevant projects, courses, or experience
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500 dark:text-blue-400">🤖</span>
            Choose a specific domain if you have a preference, or let AI decide
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CareerForm;