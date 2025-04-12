
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Upload, ThumbsUp } from "lucide-react";

const ShareRecipe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    
    // Set submitted state to show thank you message
    setIsSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      e.currentTarget.reset();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-navy via-chili to-turmeric text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Share Your Recipe
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Share your favorite recipes with our community! We'd love to feature your culinary creations.
          </p>
        </div>
      </section>

      {/* Recipe Sharing Form Section */}
      <section className="py-16">
        <div className="container-custom">
          {isSubmitted ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You for Your Recipe!</h2>
              <p className="text-lg mb-6">
                We appreciate you sharing your culinary creation with our community. Our team will review your submission!
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                className="bg-navy hover:bg-navy/90"
              >
                Share Another Recipe
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Recipe Submission Form</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                    <label htmlFor="prepTime" className="block font-medium">Preparation Time *</label>
                    <Input
                      id="prepTime"
                      name="prepTime"
                      type="text"
                      placeholder="e.g., 30 minutes"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="cookTime" className="block font-medium">Cooking Time *</label>
                    <Input
                      id="cookTime"
                      name="cookTime"
                      type="text"
                      placeholder="e.g., 45 minutes"
                      required
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
                
                <div className="mb-6">
                  <label className="block font-medium mb-2">
                    Upload a Photo (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-4">
                    <div className="flex flex-col items-center">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 mb-2">
                        Drag and drop an image here, or click to select
                      </p>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("image")?.click()}
                        className="mt-2"
                      >
                        Select Image
                      </Button>
                    </div>
                  </div>
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
          )}
        </div>
      </section>

      {/* Community Recipes Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">
            Community Recipes
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Check out these amazing recipes submitted by our community members.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* This would be populated with actual community recipes */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">Homestyle Butter Chicken</h3>
              <p className="text-gray-600 mb-3">By Priya Sharma from Delhi</p>
              <p className="italic mb-4">
                "My grandmother's secret recipe with a perfect balance of spices."
              </p>
              <Button variant="outline" className="w-full">View Recipe</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">South Indian Coconut Curry</h3>
              <p className="text-gray-600 mb-3">By Anand Krishnan from Kerala</p>
              <p className="italic mb-4">
                "A family recipe perfected over generations using fresh coconut."
              </p>
              <Button variant="outline" className="w-full">View Recipe</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2">Bengali Fish Curry</h3>
              <p className="text-gray-600 mb-3">By Ritu Banerjee from Kolkata</p>
              <p className="italic mb-4">
                "The authentic mustard-based curry that I learned from my mother."
              </p>
              <Button variant="outline" className="w-full">View Recipe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareRecipe;
