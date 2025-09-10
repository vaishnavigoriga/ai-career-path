import { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <header className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">🎯</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  AI Career Mentor
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your personalized career roadmap generator</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; 2024 AI Career Mentor. Empowering your career journey with personalized guidance.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <span className="text-sm text-gray-500 dark:text-gray-500">🚀 Built with React & Vite</span>
              <span className="text-sm text-gray-500 dark:text-gray-500">🎨 Styled with Tailwind CSS</span>
              <span className="text-sm text-gray-500 dark:text-gray-500">🤖 Powered by AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;