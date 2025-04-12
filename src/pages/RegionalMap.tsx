import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RecipeCard from "@/components/RecipeCard";
import { getRecipesByRegion } from "@/utils/recipeData";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegionalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<any[]>([]);
  const { toast } = useToast();

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

  const handleRecipeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const recipeName = formData.get('recipeName') as string;
    const region = formData.get('region') as string;
    
    // Form validation
    if (!recipeName || !region) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Show success message
    toast({
      title: "Recipe Submitted!",
      description: "Thank you for sharing your recipe with us!",
      variant: "default"
    });
    
    // Reset form
    e.currentTarget.reset();
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

      {/* Interactive Map Section - REDESIGNED */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">
            Explore India's Culinary Regions
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Click on a region to discover regional specialties and recipes from across India.
          </p>

          {/* Smaller, More Attractive Map Container */}
          <div className="relative w-full max-w-xl mx-auto aspect-square mb-12">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-orange-50 to-yellow-100 rounded-xl shadow-lg overflow-hidden">
              {/* Decorative patterns */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 opacity-30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 opacity-30 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Subtle grid lines */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="border border-gray-200 opacity-20"></div>
                ))}
              </div>
            </div>

            {/* Main Map Container */}
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-lg border-4 border-orange-300 shadow-inner flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-lg border-2 border-gray-300 relative">
                  {/* Region Quadrants - Now with more style */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
                    {/* North Region */}
                    <div 
                      onClick={() => handleRegionSelect("North")} 
                      className="bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 transition-colors cursor-pointer flex items-center justify-center rounded-tl-md"
                    >
                      <div className="text-center p-2">
                        <div className="font-bold text-orange-800">NORTH</div>
                        <div className="text-xs mt-1 text-orange-700">Butter Chicken</div>
                      </div>
                    </div>
                    
                    {/* East Region */}
                    <div 
                      onClick={() => handleRegionSelect("East")} 
                      className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 transition-colors cursor-pointer flex items-center justify-center rounded-tr-md"
                    >
                      <div className="text-center p-2">
                        <div className="font-bold text-purple-800">EAST</div>
                        <div className="text-xs mt-1 text-purple-700">Rasgulla</div>
                      </div>
                    </div>
                    
                    {/* West Region */}
                    <div 
                      onClick={() => handleRegionSelect("West")} 
                      className="bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-colors cursor-pointer flex items-center justify-center rounded-bl-md"
                    >
                      <div className="text-center p-2">
                        <div className="font-bold text-blue-800">WEST</div>
                        <div className="text-xs mt-1 text-blue-700">Vada Pav</div>
                      </div>
                    </div>
                    
                    {/* South Region */}
                    <div 
                      onClick={() => handleRegionSelect("South")} 
                      className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-colors cursor-pointer flex items-center justify-center rounded-br-md"
                    >
                      <div className="text-center p-2">
                        <div className="font-bold text-green-800">SOUTH</div>
                        <div className="text-xs mt-1 text-green-700">Dosa</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Emblem */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center z-10 shadow-md">
                    <span className="text-white text-xs font-bold">INDIA</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cardinal Direction Markers - More stylish */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                N
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                S
              </div>
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                W
              </div>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                E
              </div>
            </div>
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

      {/* Recipe Results Section */}
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

      {/* Share Recipe Section - IMPROVED */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">
            Share Your Regional Recipe
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Have a delicious regional recipe you'd like to share with our community? Fill out the form below!
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <form className="space-y-6" onSubmit={handleRecipeSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="recipeName" className="block font-medium">Recipe Name *</label>
                  <Input
                    id="recipeName"
                    name="recipeName"
                    type="text"
                    placeholder="Enter recipe name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="region" className="block font-medium">Region *</label>
                  <select 
                    id="region" 
                    name="region"
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Select a region</option>
                    <option value="North">North India</option>
                    <option value="South">South India</option>
                    <option value="East">East India</option>
                    <option value="West">West India</option>
                    <option value="Northeast">Northeast India</option>
                    <option value="Central">Central India</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="prepTime" className="block font-medium">Preparation Time</label>
                  <Input
                    id="prepTime"
                    name="prepTime"
                    type="text"
                    placeholder="e.g., 30 minutes"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="cookTime" className="block font-medium">Cooking Time</label>
                  <Input
                    id="cookTime"
                    name="cookTime"
                    type="text"
                    placeholder="e.g., 45 minutes"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="ingredients" className="block font-medium">Ingredients *</label>
                <Textarea
                  id="ingredients"
                  name="ingredients"
                  className="min-h-[100px]"
                  placeholder="Enter ingredients, one per line"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="directions" className="block font-medium">Directions *</label>
                <Textarea
                  id="directions"
                  name="directions"
                  className="min-h-[150px]"
                  placeholder="Enter step-by-step instructions"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="spiceLevel" className="block font-medium">Spice Level</label>
                  <select 
                    id="spiceLevel" 
                    name="spiceLevel"
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select spice level</option>
                    <option value="Mild">Mild</option>
                    <option value="Medium">Medium</option>
                    <option value="Spicy">Spicy</option>
                    <option value="Very Spicy">Very Spicy</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="difficulty" className="block font-medium">Difficulty</label>
                  <select 
                    id="difficulty" 
                    name="difficulty"
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="nutrition" className="block font-medium">Nutrition Information</label>
                <Textarea
                  id="nutrition"
                  name="nutrition"
                  placeholder="Enter nutrition information (calories, protein, carbs, etc.)"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="story" className="block font-medium">Recipe Story/History</label>
                <Textarea
                  id="story"
                  name="story"
                  placeholder="Share the story behind your recipe (optional)"
                />
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit"
                  className="bg-chili hover:bg-chili/90 px-8"
                >
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
