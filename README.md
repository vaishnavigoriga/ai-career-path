
AI CAREER MENTOR-

An AI-assisted career roadmap generator that builds a personalized learning path from your interests, skills, education, and experience level. It recommends skills to learn, curated free/paid resources, and starter projects across domains like Web Development, Data Science, Mobile, Cybersecurity, and more.

### Problem statement
- Many learners don’t know where to start, which skills to prioritize, or how to progress from beginner to advanced in a chosen domain.
- Most roadmaps are generic and not tailored to a person’s background, goals, or experience.

### Solution
- A simple form collects interests, skills, grade/education, experience level, and optional domain preference.
- The app matches the best-fitting domain and generates a three-phase roadmap (Beginner → Intermediate → Advanced) with:
  - Skills to learn per phase
  - Curated free and paid resources (docs, courses, platforms)
  - Project ideas to build a portfolio
- Roadmaps are immediately viewable and shareable.

### How it works
1. User inputs are captured in `src/components/CareerForm.tsx` and passed to the generator service.
2. Core logic in `src/services/careerMentor.ts`:
   - Scores domains using keyword matching of interests/skills.
   - Adapts the roadmap based on education and experience (adds foundations for beginners, emphasizes advanced topics for pros).
3. The roadmap is rendered by `src/components/RoadmapDisplay.tsx` with a clean UI (Tailwind CSS + Framer Motion).
4. Client-side only; no server required.

### Role of open APIs
- Current version does not call external Open APIs. Matching and recommendations are local, from curated templates in `src/services/careerMentor.ts`.
- Future integrations (optional):
  - LLM APIs for conversational guidance and dynamic resource suggestions.
  - Job/skills APIs to align roadmaps with market demand.
  - Learning platform APIs to fetch up-to-date courses.

### Live demo
👉 [Click here to view](https://careernavi-ai.netlify.app)

### GitHub repository
👉 [Click here for the repo](https://github.com/vaishnavigoriga/ai-career-path)

### Tech stack
- React 19, TypeScript, Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Router DOM for routing
- Lucide React / React Icons for icons

### Project structure
```
src/
├── components/
│   ├── CareerForm.tsx
│   ├── Layout.tsx
│   └── RoadmapDisplay.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── services/
│   └── careerMentor.ts
├── types/
│   └── career.ts
└── App.tsx


### Local development
npm install
npm run dev

### Build & deploy
npm run build

# Netlify
# Build command: npm run build
# Publish directory: dist
