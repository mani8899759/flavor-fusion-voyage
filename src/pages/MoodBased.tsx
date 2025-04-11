
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Moon,
  Heart,
  PartyPopper,
  Coffee
} from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import { getRecipesByMood } from "@/utils/recipeData";

interface MoodCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const MoodBased = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<any[]>([]);

  const moodCategories: MoodCategory[] = [
    {
      id: "lazy-day",
      name: "Lazy Day Snacks",
      description: "Easy, comforting recipes that require minimal effort but deliver maximum satisfaction.",
      icon: <Coffee className="h-8 w-8" />,
      bgColor: "bg-mint",
      textColor: "text-white",
    },
    {
      id: "impress-date",
      name: "Impress Your Date",
      description: "Elegant, show-stopping dishes that will make a lasting impression on your special someone.",
      icon: <Heart className="h-8 w-8" />,
      bgColor: "bg-chili",
      textColor: "text-white",
    },
    {
      id: "festival-vibes",
      name: "Festival Vibes",
      description: "Celebratory recipes perfect for holidays, cultural gatherings, and special occasions.",
      icon: <PartyPopper className="h-8 w-8" />,
      bgColor: "bg-turmeric",
      textColor: "text-navy",
    },
    {
      id: "midnight-cravings",
      name: "Midnight Cravings",
      description: "Quick, satisfying dishes to tackle those late-night hunger pangs.",
      icon: <Moon className="h-8 w-8" />,
      bgColor: "bg-navy",
      textColor: "text-white",
    },
  ];

  const handleMoodSelect = (moodId: string) => {
    const mood = moodId === "lazy-day" 
      ? "Lazy Day" 
      : moodId === "impress-date" 
        ? "Impress Your Date" 
        : moodId === "festival-vibes" 
          ? "Festival Vibes" 
          : "Midnight Cravings";
    
    setSelectedMood(moodId);
    setRecipes(getRecipesByMood(mood));
    
    // Scroll to recipes section
    setTimeout(() => {
      document.getElementById("recipes-section")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-navy via-chili to-turmeric text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What Are You In The Mood For?
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Select your current mood and discover recipes that perfectly match your cravings and energy level.
          </p>
        </div>
      </section>

      {/* Mood Selection Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Choose Your Cooking Mood</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moodCategories.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleMoodSelect(mood.id)}
                className={`relative overflow-hidden rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl ${
                  selectedMood === mood.id
                    ? "ring-4 ring-offset-2 ring-opacity-50 ring-chili"
                    : ""
                }`}
              >
                <div
                  className={`absolute inset-0 ${mood.bgColor} opacity-90`}
                ></div>
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/20 ${mood.textColor}`}
                  >
                    {mood.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${mood.textColor}`}>
                    {mood.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      mood.textColor === "text-navy" ? "text-navy/80" : "text-white/80"
                    }`}
                  >
                    {mood.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Results Section */}
      <section id="recipes-section" className="py-16">
        <div className="container-custom">
          {selectedMood ? (
            <>
              <h2 className="section-title mb-8">
                {moodCategories.find((m) => m.id === selectedMood)?.name || "Recipes"} ({recipes.length})
              </h2>
              
              {recipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {recipes.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      id={recipe.id}
                      title={recipe.title}
                      image={recipe.image}
                      cuisine={recipe.cuisine}
                      category={recipe.category}
                      prepTime={recipe.prepTime}
                      difficulty={recipe.difficulty}
                      spiceLevel={recipe.spiceLevel}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-2">No recipes found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any recipes matching this mood. Try another one!
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">Select a mood above</h3>
              <p className="text-muted-foreground">
                Choose from one of our mood categories to discover recipes that match your current vibe.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Mood Explanation Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Why Cook By Mood?</h2>
            <p className="text-lg mb-8">
              Food has a profound effect on our emotions, and our emotions often guide what we crave. 
              Our mood-based approach helps you find recipes that align with how you're feeling 
              and what your body and soul need right now.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Food Psychology</h3>
                <p>
                  Research shows that certain foods can help boost your mood, energy levels, and 
                  overall sense of wellbeing. Our mood categories are designed with this in mind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Cultural Connections</h3>
                <p>
                  Both Indian and American cuisines feature dishes traditionally associated with 
                  different moods, celebrations, and occasions. Experience these cultural connections 
                  through food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoodBased;
