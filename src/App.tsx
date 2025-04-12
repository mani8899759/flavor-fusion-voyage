
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import RecipeDetails from "./pages/RecipeDetails";
import MoodBased from "./pages/MoodBased";
import RegionalMap from "./pages/RegionalMap";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import ShareRecipe from "./pages/ShareRecipe";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/categories" element={<Layout><Categories /></Layout>} />
          <Route path="/categories/:cuisine" element={<Layout><Categories /></Layout>} />
          <Route path="/categories/:cuisine/:subcategory" element={<Layout><Categories /></Layout>} />
          <Route path="/recipe/:id" element={<Layout><RecipeDetails /></Layout>} />
          <Route path="/mood" element={<Layout><MoodBased /></Layout>} />
          <Route path="/map" element={<Layout><RegionalMap /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
          <Route path="/share-recipe" element={<Layout><ShareRecipe /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
