
import { useState } from "react";
import { MessageSquare, Star, Upload, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [messageType, setMessageType] = useState("general");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !message || rating === 0) {
      toast({
        variant: "destructive",
        title: "Form incomplete",
        description: "Please fill out all required fields and provide a rating."
      });
      return;
    }

    // Mock form submission
    setTimeout(() => {
      setIsSubmitted(true);
      
      toast({
        title: "Feedback submitted!",
        description: "Thank you for sharing your thoughts with us."
      });
      
      // Reset form (would normally happen after actual API call)
      setName("");
      setEmail("");
      setRating(0);
      setMessageType("general");
      setMessage("");
      setImage(null);
      setPreviewUrl(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-navy via-chili to-turmeric text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Share Your Feedback
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We value your thoughts and experiences. Help us improve by sharing your feedback, suggestions, or your own cooking adventures.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          {isSubmitted ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You for Your Feedback!</h2>
              <p className="text-lg mb-6">
                We appreciate you taking the time to share your thoughts with us. Your input helps us improve and create a better experience for everyone.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                className="bg-navy hover:bg-navy/90"
              >
                Submit Another Response
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="bg-navy p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <p className="mb-8">
                    We're always looking to improve our recipes and website. Your feedback helps us create a better experience for all food lovers.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Tell Us What You Think</h3>
                        <p className="text-sm text-white/80">Share your experiences with our recipes or suggest new features</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Rate Your Experience</h3>
                        <p className="text-sm text-white/80">Let us know how we're doing with our recipe quality and website usability</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded">
                        <Upload className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Share Your Creations</h3>
                        <p className="text-sm text-white/80">Upload photos of dishes you've made using our recipes</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 p-8">
                  <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name <span className="text-chili">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chili/50"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email <span className="text-chili">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chili/50"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">
                        Rate Your Experience <span className="text-chili">*</span>
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              rating >= star ? "bg-turmeric text-navy" : "bg-gray-100"
                            }`}
                          >
                            <Star
                              className={`h-6 w-6 ${
                                rating >= star ? "fill-navy" : ""
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">
                        Type of Feedback
                      </label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="type-general"
                            name="feedback-type"
                            value="general"
                            checked={messageType === "general"}
                            onChange={() => setMessageType("general")}
                            className="mr-2"
                          />
                          <label htmlFor="type-general">General Feedback</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="type-recipe"
                            name="feedback-type"
                            value="recipe"
                            checked={messageType === "recipe"}
                            onChange={() => setMessageType("recipe")}
                            className="mr-2"
                          />
                          <label htmlFor="type-recipe">Recipe Suggestion</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="type-bug"
                            name="feedback-type"
                            value="bug"
                            checked={messageType === "bug"}
                            onChange={() => setMessageType("bug")}
                            className="mr-2"
                          />
                          <label htmlFor="type-bug">Report an Issue</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message <span className="text-chili">*</span>
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chili/50"
                        placeholder="Tell us your thoughts, experiences, or suggestions..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">
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
                            accept="image/*"
                            onChange={handleImageChange}
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
                        
                        {previewUrl && (
                          <div className="mt-4">
                            <div className="relative w-24 h-24 mx-auto">
                              <img
                                src={previewUrl}
                                alt="Preview"
                                className="w-full h-full object-cover rounded"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setImage(null);
                                  setPreviewUrl(null);
                                }}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-chili hover:bg-chili/90">
                      Submit Feedback
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">
            What Our Community Says
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-turmeric mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-turmeric" />
                ))}
              </div>
              <p className="italic mb-4">
                "The mood-based recipe search is genius! I was feeling down and found the perfect comfort food recipe that lifted my spirits."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy"></div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Home Cook</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-turmeric mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-turmeric" />
                ))}
              </div>
              <p className="italic mb-4">
                "As an Indian living in America, I appreciate how authentic the recipes are while still being accessible with ingredients I can find locally."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-chili"></div>
                <div>
                  <p className="font-medium">Raj Patel</p>
                  <p className="text-sm text-gray-500">Food Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-turmeric mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-turmeric" />
                ))}
              </div>
              <p className="italic mb-4">
                "The interactive map feature helped me discover regional Indian dishes I'd never heard of before. The detailed instructions made them easy to recreate at home."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-mint"></div>
                <div>
                  <p className="font-medium">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Culinary Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
