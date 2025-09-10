import { CareerRoadmap, UserInput } from '../types/career';

// Career domains and their keywords for matching
const careerDomains = {
  'Data Science': ['data', 'analytics', 'statistics', 'machine learning', 'ai', 'python', 'research', 'analysis'],
  'Web Development': ['web', 'frontend', 'backend', 'javascript', 'react', 'html', 'css', 'fullstack'],
  'Mobile Development': ['mobile', 'app', 'android', 'ios', 'react native', 'flutter', 'swift', 'kotlin'],
  'Cybersecurity': ['security', 'cyber', 'hacking', 'network', 'penetration', 'ethical hacking', 'firewall'],
  'Game Development': ['game', 'gaming', 'unity', 'unreal', 'c#', 'c++', 'graphics', 'animation'],
  'DevOps': ['devops', 'cloud', 'aws', 'docker', 'kubernetes', 'deployment', 'infrastructure', 'automation'],
  'UI/UX Design': ['design', 'ui', 'ux', 'user experience', 'figma', 'adobe', 'creative', 'visual'],
  'Digital Marketing': ['marketing', 'seo', 'social media', 'content', 'advertising', 'analytics', 'campaigns'],
  'Product Management': ['product', 'management', 'strategy', 'roadmap', 'agile', 'scrum', 'business'],
  'Blockchain': ['blockchain', 'crypto', 'ethereum', 'smart contracts', 'web3', 'defi', 'solidity']
};

// Roadmap templates with actual links
const roadmapTemplates: Record<string, CareerRoadmap> = {
  'Data Science': {
    domain: 'Data Science',
    roadmap: [
      {
        phase: 'Beginner',
        skills: ['Python basics', 'Statistics fundamentals', 'Pandas', 'NumPy', 'Data visualization'],
        free_resources: [
          'https://www.kaggle.com/learn|Kaggle Learn',
          'https://www.freecodecamp.org/learn/scientific-computing-with-python/|freeCodeCamp Python',
          'https://www.khanacademy.org/math/statistics-probability|Khan Academy Statistics',
          'https://docs.python.org/3/tutorial/|Python.org Tutorial'
        ],
        paid_resources: [
          'https://www.udemy.com/topic/python/|Udemy - Python for Data Science',
          'https://www.coursera.org/professional-certificates/ibm-data-science|Coursera - IBM Data Science',
          'https://www.datacamp.com/|DataCamp Subscription'
        ],
        projects: ['Analyze a public dataset from Kaggle', 'Create data visualizations with matplotlib', 'Clean and process messy data']
      },
      {
        phase: 'Intermediate',
        skills: ['Machine Learning', 'Scikit-learn', 'SQL', 'Jupyter Notebooks', 'Statistical modeling'],
        free_resources: [
          'https://course.fast.ai/|Fast.ai Course',
          'https://www.coursera.org/learn/machine-learning|Coursera ML Course (Audit)',
          'https://sqlbolt.com/|SQLBolt',
          'https://towardsdatascience.com/|Towards Data Science'
        ],
        paid_resources: [
          'https://www.coursera.org/specializations/machine-learning-introduction|Coursera ML Specialization',
          'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t|Udacity ML Nanodegree',
          'https://www.oreilly.com/|O\'Reilly Learning Platform'
        ],
        projects: ['Build ML prediction model', 'Create interactive dashboard with Plotly', 'SQL database analysis project']
      },
      {
        phase: 'Advanced',
        skills: ['Deep Learning', 'TensorFlow/PyTorch', 'Big Data tools', 'MLOps', 'Advanced statistics'],
        free_resources: [
          'https://www.deeplearning.ai/|Deep Learning.ai',
          'https://pytorch.org/tutorials/|PyTorch Tutorials',
          'https://spark.apache.org/docs/latest/|Apache Spark Docs',
          'https://paperswithcode.com/|Papers with Code'
        ],
        paid_resources: [
          'https://www.coursera.org/specializations/deep-learning|Coursera Deep Learning Specialization',
          'https://www.udacity.com/course/deep-learning-nanodegree--nd101|Udacity Deep Learning',
          'https://www.amazon.com/s?k=machine+learning+books|Advanced ML Books'
        ],
        projects: ['Neural network from scratch', 'Deploy ML model to production', 'Big data pipeline with Spark']
      }
    ],
    career_paths: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Research Scientist'],
    companies: ['Google', 'Microsoft', 'Netflix', 'Spotify', 'Airbnb', 'Meta'],
    interview_prep: ['LeetCode SQL problems', 'Kaggle competitions', 'Statistics review', 'Case study practice']
  },
  'Web Development': {
    domain: 'Web Development',
    roadmap: [
      {
        phase: 'Beginner',
        skills: ['HTML', 'CSS', 'JavaScript basics', 'Git/GitHub', 'Responsive design'],
        free_resources: [
          'https://www.freecodecamp.org/learn/responsive-web-design/|freeCodeCamp',
          'https://developer.mozilla.org/en-US/|MDN Web Docs',
          'https://www.w3schools.com/|W3Schools',
          'https://css-tricks.com/|CSS-Tricks',
          'https://javascript.info/|JavaScript.info'
        ],
        paid_resources: [
          'https://www.udemy.com/course/the-web-developer-bootcamp/|Udemy Web Development Bootcamp',
          'https://www.pluralsight.com/|Pluralsight',
          'https://frontendmasters.com/|Frontend Masters'
        ],
        projects: ['Personal portfolio website', 'Responsive landing page', 'JavaScript calculator', 'Interactive to-do list']
      },
      {
        phase: 'Intermediate',
        skills: ['React/Vue/Angular', 'Node.js', 'APIs', 'Databases', 'Testing'],
        free_resources: [
          'https://react.dev/|React Documentation',
          'https://nodejs.org/en/docs/|Node.js Documentation',
          'https://www.youtube.com/results?search_query=web+development|YouTube Tutorials',
          'https://dev.to/|Dev.to Articles'
        ],
        paid_resources: [
          'https://www.udemy.com/topic/react/|React Courses on Udemy',
          'https://www.udemy.com/topic/nodejs/|Node.js Bootcamp',
          'https://testingjavascript.com/|Testing JavaScript Course'
        ],
        projects: ['Full-stack web application', 'REST API with database', 'E-commerce website', 'Blog platform with CMS']
      },
      {
        phase: 'Advanced',
        skills: ['System design', 'Performance optimization', 'DevOps', 'Microservices', 'Security'],
        free_resources: [
          'https://github.com/donnemartin/system-design-primer|System Design Primer',
          'https://web.dev/|Web.dev',
          'https://aws.amazon.com/free/|AWS Free Tier',
          'https://owasp.org/|OWASP Guidelines'
        ],
        paid_resources: [
          'https://www.educative.io/courses/grokking-the-system-design-interview|System Design Course',
          'https://aws.amazon.com/certification/|AWS Certification',
          'https://epicreact.dev/|Advanced React Patterns'
        ],
        projects: ['Scalable web application', 'Microservices architecture', 'Performance optimization project']
      }
    ],
    career_paths: ['Frontend Developer', 'Backend Developer', 'Full-stack Developer', 'DevOps Engineer'],
    companies: ['Google', 'Meta', 'Amazon', 'Netflix', 'Shopify', 'Stripe'],
    interview_prep: ['LeetCode algorithms', 'System design questions', 'Behavioral interviews', 'Code reviews']
  },
  'Mobile Development': {
    domain: 'Mobile Development',
    roadmap: [
      {
        phase: 'Beginner',
        skills: ['Programming fundamentals', 'Mobile UI/UX', 'Platform basics', 'Version control'],
        free_resources: [
          'https://developer.android.com/|Android Developer Docs',
          'https://developer.apple.com/|iOS Developer Docs',
          'https://docs.flutter.dev/|Flutter Documentation',
          'https://www.youtube.com/results?search_query=mobile+development|YouTube Tutorials'
        ],
        paid_resources: [
          'https://www.udemy.com/topic/mobile-development/|Udemy Mobile Courses',
          'https://www.kodeco.com/|Kodeco Tutorials',
          'https://www.pluralsight.com/browse/mobile|Pluralsight Mobile'
        ],
        projects: ['Simple calculator app', 'Weather app with API', 'Note-taking app']
      },
      {
        phase: 'Intermediate',
        skills: ['Native development', 'Cross-platform frameworks', 'APIs integration', 'Local storage'],
        free_resources: [
          'https://reactnative.dev/|React Native Docs',
          'https://docs.flutter.dev/cookbook|Flutter Cookbook',
          'https://firebase.google.com/docs|Firebase Documentation',
          'https://stackoverflow.com/questions/tagged/mobile|Stack Overflow Mobile'
        ],
        paid_resources: [
          'https://www.udemy.com/topic/react-native/|Advanced Mobile Courses',
          'https://www.udemy.com/topic/mobile-design/|Mobile Design Courses',
          'https://developer.apple.com/support/compare-memberships/|Platform Certifications'
        ],
        projects: ['Social media app', 'E-commerce mobile app', 'Fitness tracker with sensors']
      },
      {
        phase: 'Advanced',
        skills: ['Performance optimization', 'Security', 'App store optimization', 'Analytics'],
        free_resources: [
          'https://developer.android.com/topic/performance|Performance Best Practices',
          'https://developer.apple.com/security/|Security Guidelines',
          'https://firebase.google.com/docs/analytics|Analytics Documentation'
        ],
        paid_resources: [
          'https://www.udemy.com/topic/mobile-app-development/|Advanced Architecture Courses',
          'https://www.sans.org/cyber-security-courses/|Security Certifications',
          'https://www.coursera.org/browse/business|Business Courses'
        ],
        projects: ['Enterprise mobile application', 'Real-time chat app', 'AR/VR mobile application']
      }
    ],
    career_paths: ['iOS Developer', 'Android Developer', 'React Native Developer', 'Flutter Developer'],
    companies: ['Apple', 'Google', 'Uber', 'Airbnb', 'Instagram', 'WhatsApp'],
    interview_prep: ['Mobile-specific algorithms', 'System design for mobile', 'Platform knowledge', 'Portfolio apps']
  },
  'Cybersecurity': {
    domain: 'Cybersecurity',
    roadmap: [
      {
        phase: 'Beginner',
        skills: ['Network fundamentals', 'Operating systems', 'Security basics', 'Linux command line'],
        free_resources: [
          'https://www.cybrary.it/|Cybrary',
          'https://www.sans.org/white-papers/|SANS Free Resources',
          'https://linuxjourney.com/|Linux Journey',
          'https://www.professormesser.com/network-plus/|Network+ Study Guides'
        ],
        paid_resources: [
          'https://www.comptia.org/certifications/security|CompTIA Security+',
          'https://www.udemy.com/topic/ethical-hacking/|Udemy Ethical Hacking',
          'https://www.sans.org/cyber-security-courses/|SANS Courses'
        ],
        projects: ['Set up home security lab', 'Network scanning with Nmap', 'Basic penetration testing']
      },
      {
        phase: 'Intermediate',
        skills: ['Penetration testing', 'Incident response', 'Risk assessment', 'Security tools'],
        free_resources: [
          'https://owasp.org/|OWASP Resources',
          'https://www.metasploit.com/|Metasploit Tutorials',
          'https://www.wireshark.org/docs/|Wireshark Documentation',
          'https://krebsonsecurity.com/|Security Blogs'
        ],
        paid_resources: [
          'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/|CEH Certification',
          'https://www.isc2.org/Certifications/CISSP|CISSP Study Materials',
          'https://www.sans.org/cyber-security-courses/|Advanced SANS Courses'
        ],
        projects: ['Vulnerability assessment report', 'Security audit of web application', 'Incident response plan']
      },
      {
        phase: 'Advanced',
        skills: ['Advanced threat hunting', 'Malware analysis', 'Security architecture', 'Compliance'],
        free_resources: [
          'https://www.sans.org/white-papers/|Threat Hunting Guides',
          'https://malware.news/|Malware Analysis Blogs',
          'https://www.nist.gov/cyberframework|Compliance Frameworks'
        ],
        paid_resources: [
          'https://www.isc2.org/Certifications/CISSP|CISSP Certification',
          'https://www.sans.org/cyber-security-courses/|Advanced Malware Courses',
          'https://www.sans.org/cyber-security-courses/|Security Leadership Training'
        ],
        projects: ['Threat hunting program implementation', 'Security framework design', 'Advanced digital forensics']
      }
    ],
    career_paths: ['Security Analyst', 'Penetration Tester', 'Security Engineer', 'CISO'],
    companies: ['CrowdStrike', 'Palo Alto Networks', 'FireEye', 'IBM Security', 'Cisco'],
    interview_prep: ['Security scenarios', 'Technical demonstrations', 'Compliance knowledge', 'Incident response']
  }
};

function findBestDomain(interests: string, skills: string): string {
  const input = `${interests} ${skills}`.toLowerCase();
  let bestMatch = 'Web Development'; // default
  let maxScore = 0;

  for (const [domain, keywords] of Object.entries(careerDomains)) {
    const score = keywords.reduce((acc, keyword) => {
      return acc + (input.includes(keyword.toLowerCase()) ? 1 : 0);
    }, 0);

    if (score > maxScore) {
      maxScore = score;
      bestMatch = domain;
    }
  }

  return bestMatch;
}

export function generateCareerRoadmap(userInput: UserInput): CareerRoadmap {
  // If user selected a specific domain, use that; otherwise, find best match
  const bestDomain = userInput.selectedDomain || findBestDomain(userInput.interests, userInput.skills);
  const template = roadmapTemplates[bestDomain] || roadmapTemplates['Web Development'];
  
  // Customize the roadmap based on user's grade and experience
  const customizedRoadmap = JSON.parse(JSON.stringify(template));
  
  // Adjust roadmap based on experience level
  if (userInput.experience === 'Complete Beginner') {
    // Add more foundational skills to beginner phase
    customizedRoadmap.roadmap[0].skills.unshift('Computer basics', 'Problem-solving fundamentals');
  } else if (userInput.experience === 'Advanced' || userInput.experience === 'Expert') {
    // Skip some beginner content, focus more on advanced topics
    customizedRoadmap.roadmap[0].skills = customizedRoadmap.roadmap[0].skills.slice(2);
  }
  
  // Adjust based on education level
  if (userInput.grade.includes('High School')) {
    // Add college prep and foundational learning
    customizedRoadmap.roadmap[0].free_resources.unshift('Khan Academy', 'Codecademy free tier');
  } else if (userInput.grade.includes('Graduate') || userInput.grade === 'Working Professional') {
    // Add more advanced and professional resources
    customizedRoadmap.roadmap[2].paid_resources.push('Professional certifications', 'Executive education');
  }
  
  return customizedRoadmap;
}

export function getAllDomains(): string[] {
  return Object.keys(careerDomains);
}