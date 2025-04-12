import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import { getRecipesByRegion } from "@/utils/recipeData";
import { ArrowRight, MapPin, Compass } from "lucide-react";

const RegionalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<any[]>([]);

  const regions = [
    {
      id: "North",
      name: "North India",
      description: "Rich, creamy curries, bread varieties, and meat dishes with aromatic spices like cardamom, cloves, and cinnamon.",
      highlights: ["Butter Chicken", "Chole Bhature", "Tandoori Chicken"],
      color: "from-chili to-chili/70",
      position: { top: "0", left: "50%" }
    },
    {
      id: "South",
      name: "South India",
      description: "Lighter, tangier flavors with coconut, curry leaves, tamarind, and rice-based specialties.",
      highlights: ["Masala Dosa", "Idli Sambar", "Hyderabadi Biryani"],
      color: "from-turmeric to-turmeric/70",
      position: { bottom: "0", left: "50%" }
    },
    {
      id: "East",
      name: "East India",
      description: "Fish-forward cuisine with mustard oil, panch phoron (five-spice blend), and sweet desserts.",
      highlights: ["Rasgulla", "Machher Jhol", "Litti Chokha"],
      color: "from-mint to-mint/70",
      position: { left: "0", top: "50%" }
    },
    {
      id: "West",
      name: "West India",
      description: "Varied flavors from coastal seafood to spicy street food with jaggery, kokum, and fenugreek.",
      highlights: ["Vada Pav", "Dhokla", "Goan Fish Curry"],
      color: "from-navy to-navy/70",
      position: { right: "0", top: "50%" }
    }
  ];

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setRecipes(getRecipesByRegion(region));
    
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Indian Regional Cuisine Explorer
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the diverse culinary traditions across India's regions,
            each with its unique flavors, ingredients, and cooking techniques.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">
            Explore India's Culinary Regions
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Click on a region or use the compass buttons below to discover
            regional specialties and recipes from across India.
          </p>

          {/* Map Container - As per the provided image design */}
          <div className="relative w-full max-w-3xl mx-auto aspect-square bg-white rounded-lg shadow-lg mb-12">
            {/* Map Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-pink-200 flex flex-col relative">
                {/* North-South divider */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600"></div>
                
                {/* East-West divider */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-600"></div>
                
                {/* Region Labels */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl">
                  North
                </div>
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 font-bold text-xl">
                  South
                </div>
                <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl">
                  West
                </div>
                <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 font-bold text-xl">
                  East
                </div>
              </div>
            </div>

            {/* Cardinal Direction Markers */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                N
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                S
              </div>
            </div>
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                W
              </div>
            </div>
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                E
              </div>
            </div>

            {/* Information Markers */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => handleRegionSelect("North")}
                className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center border border-orange-400"
              >
                ?
              </button>
            </div>
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => handleRegionSelect("South")}
                className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center border border-orange-400"
              >
                ?
              </button>
            </div>
            <div className="absolute left-24 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={() => handleRegionSelect("West")}
                className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center border border-orange-400"
              >
                ?
              </button>
            </div>
            <div className="absolute right-24 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={() => handleRegionSelect("East")}
                className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center border border-orange-400"
              >
                ?
              </button>
            </div>
            
            {/* Map Caption */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Interactive political map of India
            </div>
          </div>

          {/* Compass Navigation - Keep this for mobile users */}
          <div className="flex justify-center gap-4 mb-12">
            {regions.map((region) => (
              <Button
                key={region.id}
                onClick={() => handleRegionSelect(region.id)}
                className={`gap-2 ${
                  selectedRegion === region.id
                    ? "bg-chili hover:bg-chili/90"
                    : "bg-white text-navy hover:bg-gray-100"
                }`}
                variant={selectedRegion === region.id ? "default" : "outline"}
              >
                <Compass className="h-4 w-4" />
                {region.id}
              </Button>
            ))}
          </div>

          {/* Selected Region Info */}
          {selectedRegion && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {regions.find((r) => r.id === selectedRegion)?.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {regions.find((r) => r.id === selectedRegion)?.description}
                  </p>
                  <h4 className="font-semibold mb-2">Signature Dishes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {regions
                      .find((r) => r.id === selectedRegion)
                      ?.highlights.map((dish, index) => (
                        <li key={index}>{dish}</li>
                      ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${
                      regions.find((r) => r.id === selectedRegion)?.color
                    } flex items-center justify-center`}
                  >
                    <span className="text-white text-xl font-bold">
                      {selectedRegion}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recipe Results */}
      <section id="recipes-section" className="py-16">
        <div className="container-custom">
          {selectedRegion ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="section-title mb-0">
                  {regions.find((r) => r.id === selectedRegion)?.name} Recipes
                </h2>
                <Link
                  to="/categories/indian"
                  className="text-chili hover:text-chili/90 flex items-center gap-1"
                >
                  All Indian Recipes <ArrowRight size={16} />
                </Link>
              </div>

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
                  <h3 className="text-xl font-medium mb-2">
                    No recipes found for this region
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We're still adding more regional recipes. Please check back later!
                  </p>
                  <Button asChild>
                    <Link to="/categories/indian">Browse All Indian Recipes</Link>
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">
                Select a region to view recipes
              </h3>
              <p className="text-muted-foreground">
                Click on any region on the map or use the compass buttons to explore
                regional Indian cuisine.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Did You Know?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                Regional Climate Influence
              </h3>
              <p>
                India's diverse climate affects its regional cuisines. Hot southern
                regions use cooling ingredients like coconut and tamarind, while
                northern areas feature warming spices like garam masala.
              </p>
            </div>

            <div className="bg-navy/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                22 Official Languages
              </h3>
              <p>
                With 22 official languages and hundreds of dialects, India's
                linguistic diversity mirrors its culinary variety, with each
                language region having unique food traditions.
              </p>
            </div>

            <div className="bg-navy/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">
                Historical Trade Routes
              </h3>
              <p>
                Ancient trade routes brought new ingredients to different parts of
                India. Portuguese traders introduced chili peppers to Goa, now a
                staple in Indian cooking nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Recipe Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">
            Share Your Recipe
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Have a delicious regional recipe you'd like to share? Fill out the form below!
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="recipeName" className="block font-medium">Recipe Name</label>
                  <input
                    id="recipeName"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter recipe name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="region" className="block font-medium">Region</label>
                  <select id="region" className="w-full p-2 border rounded-md">
                    <option value="">Select a region</option>
                    <option value="North">North India</option>
                    <option value="South">South India</option>
                    <option value="East">East India</option>
                    <option value="West">West India</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="ingredients" className="block font-medium">Ingredients</label>
                <textarea
                  id="ingredients"
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Enter ingredients, one per line"
                ></textarea>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="directions" className="block font-medium">Directions</label>
                <textarea
                  id="directions"
                  className="w-full p-2 border rounded-md min-h-[150px]"
                  placeholder="Enter step-by-step instructions"
                ></textarea>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="nutrition" className="block font-medium">Nutrition Information</label>
                <textarea
                  id="nutrition"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter nutrition information (calories, protein, carbs, etc.)"
                ></textarea>
              </div>
              
              <div className="flex justify-center pt-4">
                <Button className="bg-chili hover:bg-chili/90 px-8">
                  Submit Recipe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegionalMap;
