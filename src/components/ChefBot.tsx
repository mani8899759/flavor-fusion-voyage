
import React, { useState, useRef, useEffect } from "react";
import { ChefHat, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const predefinedResponses: Record<string, string[]> = {
  "potato": [
    "Try making Aloo Paratha! It's an Indian flatbread stuffed with spiced potatoes.",
    "Potato wedges with herbs and parmesan make a great snack!",
    "How about some Bombay Potatoes? They're spicy, tangy and delicious."
  ],
  "romantic": [
    "Truffle Risotto is perfect for a romantic dinner! Elegant and impressive.",
    "Try making Butter Chicken with homemade naan bread. The rich flavors will impress your date!",
    "Chocolate Souffle for dessert is always a romantic choice!"
  ],
  "mumbai": [
    "Vada Pav is Mumbai's favorite street food! A spicy potato fritter in a bun.",
    "Pav Bhaji is a must-try Mumbai street food - spiced vegetable mash with buttered rolls.",
    "Try Bhel Puri - a crunchy, tangy and sweet Mumbai street snack!"
  ],
  "quick": [
    "Egg Bhurji (Indian scrambled eggs) takes just 10 minutes to make!",
    "Quesadillas are super quick - just cheese and fillings in a tortilla, grilled until melty!",
    "Try making a quick Cucumber Raita - it's refreshing and takes just 5 minutes."
  ],
  "spicy": [
    "Vindaloo is one of the spiciest Indian curries you can try!",
    "Nashville Hot Chicken is amazingly spicy and delicious.",
    "Try making Phaal curry - it's considered one of the hottest curry dishes in the world!"
  ]
};

const defaultResponses = [
  "I'd recommend trying our popular Butter Chicken recipe! It's a crowd-pleaser.",
  "Have you tried our Palak Paneer recipe? It's healthy and delicious!",
  "For a quick meal, check out our 30-minute Taco recipe!",
  "I'm sorry, I don't have specific information about that. Try browsing our categories for inspiration!"
];

export const ChefBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm ChefBot Veeru. How can I help with your cooking today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (input.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate typing delay
    setTimeout(() => {
      // Generate response based on keywords
      let botResponse = "";
      const lowerInput = input.toLowerCase();
      
      // Check for keywords
      if (lowerInput.includes("potato") || lowerInput.includes("potatoes") || lowerInput.includes("aloo")) {
        botResponse = predefinedResponses.potato[Math.floor(Math.random() * predefinedResponses.potato.length)];
      } else if (lowerInput.includes("romantic") || lowerInput.includes("date") || lowerInput.includes("impress")) {
        botResponse = predefinedResponses.romantic[Math.floor(Math.random() * predefinedResponses.romantic.length)];
      } else if (lowerInput.includes("mumbai") || lowerInput.includes("street food")) {
        botResponse = predefinedResponses.mumbai[Math.floor(Math.random() * predefinedResponses.mumbai.length)];
      } else if (lowerInput.includes("quick") || lowerInput.includes("fast") || lowerInput.includes("easy")) {
        botResponse = predefinedResponses.quick[Math.floor(Math.random() * predefinedResponses.quick.length)];
      } else if (lowerInput.includes("spicy") || lowerInput.includes("hot")) {
        botResponse = predefinedResponses.spicy[Math.floor(Math.random() * predefinedResponses.spicy.length)];
      } else {
        // Default responses
        botResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-chili text-white shadow-lg flex items-center justify-center hover:bg-chili/90 transition-all z-40"
      >
        <ChefHat className="h-6 w-6" />
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-navy text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5" />
              <h3 className="font-medium">ChefBot Veeru</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map(message => (
              <div
                key={message.id}
                className={`mb-4 max-w-[80%] ${
                  message.sender === "user" 
                    ? "ml-auto bg-chili text-white" 
                    : "mr-auto bg-gray-200 text-gray-800"
                } rounded-lg px-3 py-2`}
              >
                <p>{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="border-t p-3 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask ChefBot about recipes..."
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-chili/50"
              />
              <Button 
                onClick={handleSend} 
                size="icon" 
                className="bg-chili hover:bg-chili/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Try asking about: potatoes, romantic dinners, Mumbai street food
            </div>
          </div>
        </div>
      )}
    </>
  );
};
