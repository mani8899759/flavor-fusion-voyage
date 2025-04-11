
import { Link } from "react-router-dom";
import { Clock, ChefHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string; // We'll keep this in the props but won't use it
  cuisine: string;
  category: string;
  prepTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
  spiceLevel: number;
  featured?: boolean;
}

const RecipeCard = ({
  id,
  title,
  image,
  cuisine,
  category,
  prepTime,
  difficulty,
  spiceLevel,
  featured = false,
}: RecipeCardProps) => {
  // Function to render spice level indicators
  const renderSpiceLevel = (level: number) => {
    return (
      <div className="spice-meter">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-sm ${
              index < level ? "text-chili" : "text-gray-300"
            }`}
          >
            🌶️
          </span>
        ))}
      </div>
    );
  };

  // Color mapping for difficulty levels
  const difficultyColors = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  };

  return (
    <Link to={`/recipe/${id}`} className="block">
      <div className={`recipe-card group ${featured ? 'sm:col-span-2 md:row-span-2' : ''}`}>
        <div className="relative bg-gray-100 border border-gray-200">
          <div className={`${featured ? 'h-64' : 'h-48'} w-full flex items-center justify-center text-center p-4`}>
            <h3 className="font-bold text-xl">
              {title}
            </h3>
          </div>
          
          {/* Cuisine badge */}
          <Badge className="absolute top-2 left-2 bg-white/80 text-navy hover:bg-white/90">
            {cuisine}
          </Badge>
          
          {/* Featured badge */}
          {featured && (
            <Badge className="absolute top-2 right-2 bg-chili hover:bg-chili/90">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <p className="text-muted-foreground text-sm mb-3">
            {category}
          </p>
          
          <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
            <Badge variant="outline" className={difficultyColors[difficulty]}>
              {difficulty}
            </Badge>
            
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock size={14} />
              <span>{prepTime} min</span>
            </div>
            
            <div className="ml-auto">
              {renderSpiceLevel(spiceLevel)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
