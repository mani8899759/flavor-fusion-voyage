
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCuisineCategories, getRecipesByCuisine } from "@/utils/recipeData";
import { ChefHat, Utensils } from "lucide-react";

const Categories = () => {
  const { cuisine, subcategory } = useParams();
  const [categories, setCategories] = useState(getCuisineCategories());
  const [selectedCuisine, setSelectedCuisine] = useState(cuisine || "Indian");
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory || "");
  const [recipes, setRecipes] = useState(getRecipesByCuisine(selectedCuisine, selectedSubcategory));

  // Update recipes when cuisine or subcategory changes
  useEffect(() => {
    if (cuisine) {
      setSelectedCuisine(cuisine);
    }
    if (subcategory) {
      setSelectedSubcategory(subcategory);
    }
  }, [cuisine, subcategory]);

  useEffect(() => {
    setRecipes(getRecipesByCuisine(selectedCuisine, selectedSubcategory));
  }, [selectedCuisine, selectedSubcategory]);

  const handleCuisineChange = (newCuisine: string) => {
    setSelectedCuisine(newCuisine);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (newSubcategory: string) => {
    setSelectedSubcategory(newSubcategory);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-navy to-chili text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recipe Categories</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Explore our collection of authentic recipes from India and America, carefully organized by cuisine type and category.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Cuisine Selection Tabs */}
        <Tabs 
          defaultValue={selectedCuisine} 
          value={selectedCuisine}
          onValueChange={handleCuisineChange}
          className="mb-8"
        >
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="Indian" className="text-base py-3">
              <div className="flex items-center gap-2">
                <ChefHat size={18} />
                <span>Indian Cuisine</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="American" className="text-base py-3">
              <div className="flex items-center gap-2">
                <Utensils size={18} />
                <span>American Cuisine</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="Indian" className="mt-6">
            <div className="flex flex-wrap gap-2 mb-8">
              <Button 
                variant={selectedSubcategory === "" ? "default" : "outline"} 
                onClick={() => handleSubcategoryChange("")}
                className={selectedSubcategory === "" ? "bg-chili hover:bg-chili/90" : ""}
              >
                All
              </Button>
              {categories.Indian.map((subcat) => (
                <Button 
                  key={subcat}
                  variant={selectedSubcategory === subcat ? "default" : "outline"}
                  onClick={() => handleSubcategoryChange(subcat)}
                  className={selectedSubcategory === subcat ? "bg-chili hover:bg-chili/90" : ""}
                >
                  {subcat}
                </Button>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="American" className="mt-6">
            <div className="flex flex-wrap gap-2 mb-8">
              <Button 
                variant={selectedSubcategory === "" ? "default" : "outline"} 
                onClick={() => handleSubcategoryChange("")}
                className={selectedSubcategory === "" ? "bg-turmeric hover:bg-turmeric/90 text-navy" : ""}
              >
                All
              </Button>
              {categories.American.map((subcat) => (
                <Button 
                  key={subcat}
                  variant={selectedSubcategory === subcat ? "default" : "outline"}
                  onClick={() => handleSubcategoryChange(subcat)}
                  className={selectedSubcategory === subcat ? "bg-turmeric hover:bg-turmeric/90 text-navy" : ""}
                >
                  {subcat}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Recipe Listing */}
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
          <div className="text-center py-12">
            <h3 className="text-2xl font-medium mb-2">No recipes found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any recipes matching your criteria.
            </p>
            <Button asChild>
              <Link to="/categories">See All Categories</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
