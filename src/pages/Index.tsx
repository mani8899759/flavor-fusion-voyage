
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import { getFeaturedRecipes, getRecipesByCuisine } from "@/utils/recipeData";

const Index = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState(getFeaturedRecipes());
  const [activeSlide, setActiveSlide] = useState(0);
  const [indianSpecials, setIndianSpecials] = useState(getRecipesByCuisine("Indian").slice(0, 4));
  const [americanSpecials, setAmericanSpecials] = useState(getRecipesByCuisine("American").slice(0, 4));

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredRecipes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredRecipes.length]);

  // Handle manual navigation
  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? featuredRecipes.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredRecipes.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy via-chili to-turmeric overflow-hidden">
        <div className="absolute inset-0 bg-navy bg-opacity-50"></div>
        <div className="relative container-custom min-h-[90vh] flex flex-col items-center justify-center text-white text-center px-4 py-20">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Savor Every Bite – From India to America
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Embark on a culinary journey that bridges cultures and tantalizes taste buds.
              Discover authentic recipes that tell stories across continents.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-chili hover:bg-chili/90">
                <Link to="/categories/indian">Explore Indian Dishes</Link>
              </Button>
              <Button asChild size="lg" className="bg-turmeric hover:bg-turmeric/90 text-navy">
                <Link to="/categories/american">Explore American Dishes</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/mood">Explore by Mood</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <ArrowRight className="h-6 w-6 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Carousel */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="section-title">Featured Recipes</h2>
            <p className="section-subtitle max-w-3xl">
              Our top-rated culinary creations that showcase the best of both worlds
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {featuredRecipes.map((recipe) => (
                <div key={recipe.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-chili hover:bg-chili/90">{recipe.cuisine}</Badge>
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-3">{recipe.title}</h3>
                        <p className="text-gray-600 mb-4">{recipe.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500">Prep Time</div>
                            <div className="font-medium">{recipe.prepTime} mins</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Cook Time</div>
                            <div className="font-medium">{recipe.cookTime} mins</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Difficulty</div>
                            <div className="font-medium">{recipe.difficulty}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Spice Level</div>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className={i < recipe.spiceLevel ? "text-chili" : "text-gray-300"}>
                                  🌶️
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <Button asChild className="w-full bg-navy hover:bg-navy/90">
                          <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0 bg-white/80 hover:bg-white"
              onClick={handlePrevSlide}
            >
              <ChevronLeft />
            </Button>
            
            <Button 
              variant="outline" 
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0 bg-white/80 hover:bg-white"
              onClick={handleNextSlide}
            >
              <ChevronRight />
            </Button>
            
            <div className="flex justify-center mt-6 gap-2">
              {featuredRecipes.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    index === activeSlide ? "bg-chili" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indian Cuisine Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="section-title">Indian Delicacies</h2>
              <p className="section-subtitle max-w-2xl">
                Rich, flavorful, and aromatic dishes from the land of spices
              </p>
            </div>
            <Link to="/categories/indian" className="text-chili hover:text-chili/90 flex items-center gap-1 font-medium">
              See All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {indianSpecials.map((recipe) => (
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
        </div>
      </section>

      {/* American Cuisine Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="section-title">American Classics</h2>
              <p className="section-subtitle max-w-2xl">
                Hearty, comforting, and iconic dishes from across the United States
              </p>
            </div>
            <Link to="/categories/american" className="text-chili hover:text-chili/90 flex items-center gap-1 font-medium">
              See All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {americanSpecials.map((recipe) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Cooking?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover hundreds of recipes, cooking tips, and culinary inspiration for every mood and occasion.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-chili hover:bg-chili/90">
              <Link to="/categories">Browse Recipes</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/mood">Find by Mood</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

// Badge component used in the featured recipe slider
const Badge = ({ children, className = "" }) => {
  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${className}`}>
      {children}
    </span>
  );
};
