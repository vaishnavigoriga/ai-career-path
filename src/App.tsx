import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Define all routes here */}
          <Route path="/" element={<Index />} />

          {/* IMPORTANT: DO NOT place any routes below this. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
