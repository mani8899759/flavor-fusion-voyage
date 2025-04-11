import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Clock, 
  ChefHat, 
  ThumbsUp, 
  Bookmark, 
  Share2, 
  Download, 
  Check, 
  AlertTriangle,
  Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  getRecipeById, 
  getRelatedRecipes, 
  type Recipe 
} from "@/utils/recipeData";
import RecipeCard from "@/components/RecipeCard";
import { useToast } from "@/components/ui/use-toast";
import { ChefBot } from "@/components/ChefBot";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [relatedRecipes, setRelatedRecipes] = useState<Recipe[]>([]);
  const [activeTab, setActiveTab] = useState("ingredients");
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const recipeData = getRecipeById(id);
      if (recipeData) {
        setRecipe(recipeData);
        setRelatedRecipes(getRelatedRecipes(recipeData));
        window.scrollTo(0, 0);
      }
    }
  }, [id]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userRating) {
      toast({
        variant: "destructive",
        title: "Rating required",
        description: "Please select a rating before submitting your review."
      });
      return;
    }

    const newComment = {
      id: Date.now(),
      name: userName || "Anonymous",
      rating: userRating,
      text: userComment,
      date: new Date().toLocaleDateString()
    };

    setComments([newComment, ...comments]);
    setUserComment("");
    setUserName("");
    setUserRating(0);

    toast({
      title: "Review submitted!",
      description: "Thank you for sharing your feedback.",
    });
  };

  const handleDownloadPDF = () => {
    toast({
      title: "Recipe card downloading...",
      description: "Your recipe PDF will download shortly.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Recipe shared!",
      description: "A link to this recipe has been copied to your clipboard.",
    });
  };

  const handleSave = () => {
    toast({
      title: "Recipe saved!",
      description: "This recipe has been added to your favorites.",
    });
  };

  if (!recipe) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="mb-4">
          <AlertTriangle className="h-16 w-16 text-chili mx-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The recipe you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/categories">Browse Recipes</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[40vh] lg:h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full container-custom flex flex-col justify-end pb-8">
          <div className="max-w-3xl mb-6">
            <div className="flex gap-2 mb-2">
              <span className="inline-block px-3 py-1 bg-turmeric text-navy text-sm font-medium rounded-full">
                {recipe.cuisine}
              </span>
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                {recipe.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {recipe.title}
            </h1>
            
            <p className="text-lg text-white/90 max-w-2xl">
              {recipe.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-white">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <div>
                <div className="text-sm text-white/70">Total Time</div>
                <div className="font-medium">{recipe.totalTime} mins</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5" />
              <div>
                <div className="text-sm text-white/70">Difficulty</div>
                <div className="font-medium">{recipe.difficulty}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5" />
              <div>
                <div className="text-sm text-white/70">Spice Level</div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < recipe.spiceLevel ? "text-chili" : "text-white/30"}>
                      🌶️
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Details Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <div className="flex border-b">
                <button
                  className={`flex-1 py-4 font-medium text-center transition-colors ${
                    activeTab === "ingredients"
                      ? "border-b-2 border-chili text-chili"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("ingredients")}
                >
                  Ingredients
                </button>
                <button
                  className={`flex-1 py-4 font-medium text-center transition-colors ${
                    activeTab === "directions"
                      ? "border-b-2 border-chili text-chili"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("directions")}
                >
                  Directions
                </button>
                <button
                  className={`flex-1 py-4 font-medium text-center transition-colors ${
                    activeTab === "nutrition"
                      ? "border-b-2 border-chili text-chili"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("nutrition")}
                >
                  Nutrition
                </button>
              </div>
              
              <div className="p-6">
                {activeTab === "ingredients" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                    <p className="text-sm text-gray-500 mb-4">Servings: {recipe.servings}</p>
                    <ul className="space-y-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center">
                            <Check className="h-4 w-4 text-gray-400" />
                          </div>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === "directions" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Directions</h3>
                    <ol className="space-y-6">
                      {recipe.instructions.map((step, index) => (
                        <li key={index} className="flex gap-4">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-chili/10 text-chili flex items-center justify-center font-semibold">
                            {index + 1}
                          </div>
                          <div className="pt-1">
                            <p>{step}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {activeTab === "nutrition" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Nutrition Facts</h3>
                    <p className="text-sm text-gray-500 mb-4">Per serving</p>
                    
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <div className="flex justify-between items-center font-semibold">
                          <span>Calories</span>
                          <span>{recipe.nutritionFacts.calories}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Protein</span>
                          <span>{recipe.nutritionFacts.protein}g</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Carbohydrates</span>
                          <span>{recipe.nutritionFacts.carbs}g</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Fat</span>
                          <span>{recipe.nutritionFacts.fat}g</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Fiber</span>
                          <span>{recipe.nutritionFacts.fiber}g</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 text-sm text-gray-500">
                        <p>*Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Reviews & Comments</h3>
              
              {/* Review Form */}
              <form onSubmit={handleSubmitReview} className="mb-8">
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-sm font-medium mb-2">
                    Rate this recipe
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setUserRating(rating)}
                        className={`h-10 w-10 flex items-center justify-center rounded-full ${
                          userRating >= rating ? "bg-turmeric text-navy" : "bg-gray-100"
                        }`}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name (optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chili/50"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-sm font-medium mb-2">
                    Your Comment
                  </label>
                  <textarea
                    id="comment"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    placeholder="Share your experience with this recipe..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chili/50"
                  />
                </div>
                
                <Button type="submit" className="bg-chili hover:bg-chili/90">
                  Submit Review
                </Button>
              </form>
              
              {/* Comment List */}
              <div className="space-y-6">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{comment.name}</h4>
                          <div className="flex text-turmeric">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <ThumbsUp
                                key={i}
                                size={16}
                                className={i < comment.rating ? "fill-turmeric" : "text-gray-300"}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">
                    No reviews yet. Be the first to review this recipe!
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Action Buttons */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex gap-2 mb-4">
                <Button onClick={handleSave} variant="outline" className="flex-1">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleShare} variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <Button onClick={handleDownloadPDF} className="w-full bg-navy hover:bg-navy/90">
                <Download className="h-4 w-4 mr-2" />
                Download Recipe Card
              </Button>
            </div>
            
            {/* Taste Profile */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Taste Profile</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Spicy 🌶️</span>
                    <span>{recipe.taste.spicy}/5</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-chili rounded-full"
                      style={{ width: `${(recipe.taste.spicy / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Sweet 🍭</span>
                    <span>{recipe.taste.sweet}/5</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-turmeric rounded-full"
                      style={{ width: `${(recipe.taste.sweet / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Savory 🧂</span>
                    <span>{recipe.taste.savory}/5</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-navy rounded-full"
                      style={{ width: `${(recipe.taste.savory / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Tangy 🍋</span>
                    <span>{recipe.taste.tangy}/5</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-mint rounded-full"
                      style={{ width: `${(recipe.taste.tangy / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Recipes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">You Might Also Like</h3>
              
              <div className="space-y-4">
                {relatedRecipes.map((relatedRecipe) => (
                  <Link
                    key={relatedRecipe.id}
                    to={`/recipe/${relatedRecipe.id}`}
                    className="flex gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors"
                  >
                    <img
                      src={relatedRecipe.image}
                      alt={relatedRecipe.title}
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-medium line-clamp-2">{relatedRecipe.title}</h4>
                      <p className="text-sm text-gray-500">{relatedRecipe.cuisine}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add ChefBot */}
      <ChefBot />
    </div>
  );
};

export default RecipeDetails;
