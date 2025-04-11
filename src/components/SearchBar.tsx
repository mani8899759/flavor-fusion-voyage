
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Search, X } from "lucide-react";
import { getAllRecipes } from "@/utils/recipeData";

interface SearchBarProps {
  onClose: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const recipes = getAllRecipes();
    
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    const filteredRecipes = recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filteredRecipes.slice(0, 6));
  }, [searchQuery]);
  
  const handleSelect = (recipeId: string) => {
    navigate(`/recipe/${recipeId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-hidden">
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">Search Recipes</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <Command className="rounded-lg">
          <CommandInput 
            placeholder="Search for recipes, cuisines, or ingredients..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="h-12"
          />
          
          <CommandList>
            <CommandEmpty>No recipes found.</CommandEmpty>
            <CommandGroup heading="Recipes">
              {searchResults.map((recipe) => (
                <CommandItem 
                  key={recipe.id}
                  onSelect={() => handleSelect(recipe.id)}
                  className="flex items-center gap-3 py-3"
                >
                  <div className="h-12 w-12 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{recipe.title}</span>
                    <span className="text-sm text-muted-foreground">{recipe.cuisine} • {recipe.category}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
