import { CareerRoadmap } from '../types/career';

interface RoadmapDisplayProps {
  roadmap: CareerRoadmap;
  onStartOver: () => void;
  userDetails?: {
    grade: string;
    experience: string;
  };
}

function RoadmapDisplay({ roadmap, onStartOver, userDetails }: RoadmapDisplayProps) {
  const phaseColors = {
    'Beginner': 'from-green-500 to-emerald-600',
    'Intermediate': 'from-yellow-500 to-orange-600',
    'Advanced': 'from-purple-500 to-indigo-600'
  };

  const downloadRoadmap = () => {
    const roadmapText = `
AI CAREER MENTOR - PERSONALIZED ROADMAP
=======================================

Domain: ${roadmap.domain}
${userDetails ? `Education Level: ${userDetails.grade}` : ''}
${userDetails ? `Experience Level: ${userDetails.experience}` : ''}

LEARNING ROADMAP
================

${roadmap.roadmap.map((phase, index) => `
${index + 1}. ${phase.phase.toUpperCase()} PHASE
${'='.repeat(phase.phase.length + 10)}

Skills to Learn:
${phase.skills.map(skill => `• ${skill}`).join('\n')}

Free Resources:
${phase.free_resources.map(resource => {
  const [url, name] = resource.includes('|') ? resource.split('|') : [resource, resource];
  return `• ${name}: ${url}`;
}).join('\n')}

Paid Resources:
${phase.paid_resources.map(resource => {
  const [url, name] = resource.includes('|') ? resource.split('|') : [resource, resource];
  return `• ${name}: ${url}`;
}).join('\n')}

Project Ideas:
${phase.projects.map(project => `• ${project}`).join('\n')}
`).join('\n')}

CAREER INFORMATION
==================

Possible Job Roles:
${roadmap.career_paths.map(path => `• ${path}`).join('\n')}

Top Companies:
${roadmap.companies.map(company => `• ${company}`).join('\n')}

Interview Preparation:
${roadmap.interview_prep.map(prep => `• ${prep}`).join('\n')}
    `.trim();

    const blob = new Blob([roadmapText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${roadmap.domain.replace(/\s+/g, '_')}_Career_Roadmap.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  const parseResource = (resource: string) => {
    if (resource.includes('|')) {
      const [url, name] = resource.split('|');
      return { url, name };
    }
    return { url: '#', name: resource };
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
          <span className="text-2xl">🎯</span>
          <span className="text-xl font-bold text-gray-900">{roadmap.domain}</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Career Roadmap</h2>
        
        {/* User Details Summary */}
        {userDetails && (
          <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mb-6">
            <div className="flex justify-center space-x-6 text-sm">
              <div className="text-center">
                <span className="block text-gray-500">Education Level</span>
                <span className="font-medium text-gray-900">{userDetails.grade}</span>
              </div>
              <div className="text-center">
                <span className="block text-gray-500">Experience</span>
                <span className="font-medium text-gray-900">{userDetails.experience}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={onStartOver}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            ← Start Over
          </button>
          <button
            onClick={downloadRoadmap}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <span>📄</span>
            <span>Download Roadmap</span>
          </button>
        </div>
      </div>

      {/* Roadmap Phases */}
      <div className="space-y-8 mb-12">
        {roadmap.roadmap.map((phase, index) => (
          <div key={phase.phase} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className={`bg-gradient-to-r ${phaseColors[phase.phase as keyof typeof phaseColors]} px-6 py-4`}>
              <h3 className="text-xl font-bold text-white flex items-center">
                <span className="bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                  {index + 1}
                </span>
                {phase.phase} Phase
              </h3>
            </div>
            
            <div className="p-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Skills */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🎓</span>
                  Skills to Learn
                </h4>
                <ul className="space-y-2">
                  {phase.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded-full">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Free Resources */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🆓</span>
                  Free Resources
                </h4>
                <ul className="space-y-2">
                  {phase.free_resources.map((resource, i) => {
                    const { url, name } = parseResource(resource);
                    return (
                      <li key={i}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-full block transition-colors underline"
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Paid Resources */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">💎</span>
                  Paid Resources
                </h4>
                <ul className="space-y-2">
                  {phase.paid_resources.map((resource, i) => {
                    const { url, name } = parseResource(resource);
                    return (
                      <li key={i}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full block transition-colors underline"
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🚀</span>
                  Project Ideas
                </h4>
                <ul className="space-y-2">
                  {phase.projects.map((project, i) => (
                    <li key={i} className="text-sm text-gray-700 bg-purple-50 px-3 py-1 rounded-full">
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Career Information */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Career Paths */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">💼</span>
            Career Paths
          </h3>
          <div className="space-y-2">
            {roadmap.career_paths.map((path, i) => (
              <div key={i} className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-lg">
                <span className="font-medium text-gray-900">{path}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Companies */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">🏢</span>
            Top Companies
          </h3>
          <div className="space-y-2">
            {roadmap.companies.map((company, i) => (
              <div key={i} className="bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-lg">
                <span className="font-medium text-gray-900">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Prep */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">📝</span>
            Interview Prep
          </h3>
          <div className="space-y-2">
            {roadmap.interview_prep.map((prep, i) => (
              <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-lg">
                <span className="font-medium text-gray-900">{prep}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default RoadmapDisplay;