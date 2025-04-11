
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
      position: { top: "15%", left: "30%" }
    },
    {
      id: "South",
      name: "South India",
      description: "Lighter, tangier flavors with coconut, curry leaves, tamarind, and rice-based specialties.",
      highlights: ["Masala Dosa", "Idli Sambar", "Hyderabadi Biryani"],
      color: "from-turmeric to-turmeric/70",
      position: { bottom: "25%", left: "30%" }
    },
    {
      id: "East",
      name: "East India",
      description: "Fish-forward cuisine with mustard oil, panch phoron (five-spice blend), and sweet desserts.",
      highlights: ["Rasgulla", "Machher Jhol", "Litti Chokha"],
      color: "from-mint to-mint/70",
      position: { top: "35%", right: "30%" }
    },
    {
      id: "West",
      name: "West India",
      description: "Varied flavors from coastal seafood to spicy street food with jaggery, kokum, and fenugreek.",
      highlights: ["Vada Pav", "Dhokla", "Goan Fish Curry"],
      color: "from-navy to-navy/70",
      position: { bottom: "45%", right: "30%" }
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

          {/* Map Container */}
          <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] bg-white rounded-lg shadow-lg mb-12">
            {/* India Map Outline (simplified SVG) */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full p-4"
            >
              <path
                d="M200,50 C300,75 350,200 300,300 C250,350 150,350 100,300 C50,200 100,75 200,50 Z"
                fill="#f3f4f6"
                stroke="#ccc"
                strokeWidth="2"
              />
            </svg>

            {/* Region Markers */}
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => handleRegionSelect(region.id)}
                className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${
                  region.color
                } flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform ${
                  selectedRegion === region.id ? "ring-4 ring-white" : ""
                }`}
                style={{
                  ...region.position,
                }}
              >
                <MapPin className="h-6 w-6 text-white" />
              </button>
            ))}

            {/* Region Name Overlay */}
            {selectedRegion && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl font-bold text-navy opacity-20">
                  {regions.find((r) => r.id === selectedRegion)?.name}
                </div>
              </div>
            )}
          </div>

          {/* Compass Navigation */}
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
    </div>
  );
};

export default RegionalMap;
