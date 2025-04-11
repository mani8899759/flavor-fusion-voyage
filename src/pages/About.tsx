
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Users, Utensils, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-turmeric via-chili to-navy"></div>
        </div>
        <div className="container-custom relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Culinary Journey
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bridging the world through flavor – From Indian kitchens to American diners.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Our Mission</h2>
            <p className="text-lg text-center mb-12">
              At Flavor Fusion Voyage, we're passionate about connecting cultures through the universal language of food.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-chili" />
                  Cultural Bridge
                </h3>
                <p>
                  We believe food is the ultimate cultural ambassador. Our platform celebrates the rich traditions of both Indian and American cuisines, showcasing how these distinct culinary worlds can inspire and complement each other.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-chili" />
                  Authentic Recipes
                </h3>
                <p>
                  Every recipe on our platform is researched and tested to ensure authenticity while remaining accessible to home cooks of all skill levels. We honor traditional techniques while embracing modern adaptations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-chili" />
                  Emotional Connection
                </h3>
                <p>
                  Our mood-based approach to recipe discovery recognizes that food and emotions are deeply intertwined. We help you find dishes that not only satisfy your hunger but also nourish your soul and match your current state of mind.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-chili" />
                  Community Building
                </h3>
                <p>
                  We're creating a global community of food lovers who share their experiences, adaptations, and stories. Through food, we foster understanding and appreciation of diverse cultures and traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Our Story</h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">From Two Continents to One Table</h3>
                  <p className="mb-4">
                    Flavor Fusion Voyage began as a simple idea: what happens when the bold, complex spices of Indian cuisine meet the comforting, diverse flavors of American cooking?
                  </p>
                  <p className="mb-4">
                    Our founder, who grew up between Mumbai and New York, noticed how food served as a constant bridge between these two worlds. Family recipes passed down through generations were adapted with locally available ingredients, creating entirely new dishes that honored both culinary traditions.
                  </p>
                  <p>
                    What started as a personal blog documenting these cross-cultural recipe experiments has evolved into a comprehensive platform celebrating the best of both worlds - a true culinary voyage across continents.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-navy via-chili to-turmeric flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <p className="text-lg font-medium italic mb-6">
                      "Food is our common ground, a universal experience that connects us all across borders, languages, and cultures."
                    </p>
                    <p className="font-semibold">- Flavor Fusion Voyage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Unique Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-turmeric/20 text-turmeric flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mood-Based Discovery</h3>
              <p>
                We've pioneered a mood-based recipe finder that matches dishes to how you're feeling. Whether you're seeking comfort on a lazy day or looking to impress on a special occasion, our emotional categorization helps you find the perfect recipe.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-chili/20 text-chili flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Regional Focus</h3>
              <p>
                We dive deep into the regional variations within Indian cuisine, helping you explore the distinct flavors of North, South, East, and West India. Our interactive map makes regional discovery engaging and educational.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-navy/20 text-navy flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Context</h3>
              <p>
                Each recipe comes with cultural context, explaining its origins, significance, and place in its native cuisine. We believe understanding the "why" behind a dish enhances both the cooking and eating experience.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-chili hover:bg-chili/90">
              <Link to="/categories">Explore Our Recipes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team/Contributors Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Contributors</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-chili to-turmeric"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Chef Priya</h3>
                <p className="text-gray-500 mb-3">Indian Cuisine Expert</p>
                <p className="text-sm">
                  Specializes in authentic regional Indian recipes with a focus on South Indian flavors.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-navy to-mint"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Chef Michael</h3>
                <p className="text-gray-500 mb-3">American Cuisine Expert</p>
                <p className="text-sm">
                  Brings expertise in classic American comfort food and regional BBQ traditions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-mint to-turmeric"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Anjali</h3>
                <p className="text-gray-500 mb-3">Food Historian</p>
                <p className="text-sm">
                  Researches and documents the historical connections between Indian and American food cultures.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-turmeric to-navy"></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">The Community</h3>
                <p className="text-gray-500 mb-3">Food Enthusiasts</p>
                <p className="text-sm">
                  Our vibrant community of home cooks who test, review, and contribute their own recipe variations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Culinary Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become part of our growing family of food enthusiasts who are exploring, creating, and sharing the best of Indian and American cuisines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-chili hover:bg-chili/90">
              <Link to="/categories">Browse Recipes</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/feedback">Share Your Feedback</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
