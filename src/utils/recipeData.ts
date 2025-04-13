// Recipe data types
export interface Recipe {
  id: string;
  title: string;
  description: string;
  cuisine: "Indian" | "American" | "Fusion";
  category: string;
  subcategory: string;
  region?: "North" | "South" | "East" | "West";
  image: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  taste: {
    spicy: number;
    sweet: number;
    savory: number;
    tangy: number;
  };
  spiceLevel: number;
  ingredients: string[];
  instructions: string[];
  nutritionFacts: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  mood: ("Lazy Day" | "Impress Your Date" | "Festival Vibes" | "Midnight Cravings")[];
  featured?: boolean;
  vegetarian?: boolean;
}

// Sample recipe data
export const recipes: Recipe[] = [
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    description: "Creamy, tomato-based curry with tender chicken pieces - a North Indian delicacy loved worldwide.",
    cuisine: "Indian",
    category: "Main Course",
    subcategory: "Non-Veg",
    region: "North",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: 30,
    cookTime: 25,
    totalTime: 55,
    servings: 4,
    difficulty: "Medium",
    taste: {
      spicy: 3,
      sweet: 2,
      savory: 5,
      tangy: 2
    },
    spiceLevel: 3,
    ingredients: [
      "1.5 lbs boneless chicken thighs, cut into pieces",
      "1 cup plain yogurt",
      "2 tbsp lemon juice",
      "2 tsp garam masala",
      "1 tsp ground cumin",
      "1 tsp red chili powder",
      "1 tsp turmeric",
      "2 tbsp ginger-garlic paste",
      "2 tbsp vegetable oil",
      "2 tbsp butter",
      "1 large onion, finely chopped",
      "2 cups tomato puree",
      "1 cup heavy cream",
      "1 tbsp sugar",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "In a bowl, mix yogurt, lemon juice, garam masala, cumin, red chili powder, turmeric, and ginger-garlic paste.",
      "Add chicken pieces to the marinade and refrigerate for at least 1 hour, preferably overnight.",
      "Heat oil in a large pan over medium-high heat. Add marinated chicken pieces and cook until browned, about 3-4 minutes per side.",
      "Remove chicken and set aside. In the same pan, add butter and chopped onions. Sauté until onions are soft and translucent.",
      "Add tomato puree and cook until the sauce thickens, about 10 minutes.",
      "Return chicken to the pan, cover and simmer for 15 minutes.",
      "Stir in heavy cream and sugar. Simmer for another 5-7 minutes until the sauce reaches desired consistency.",
      "Season with salt to taste and garnish with fresh cilantro before serving.",
      "Serve hot with naan bread or rice."
    ],
    nutritionFacts: {
      calories: 450,
      protein: 28,
      carbs: 12,
      fat: 34,
      fiber: 2
    },
    mood: ["Impress Your Date", "Festival Vibes"],
    featured: true,
    vegetarian: false
  },
  {
    id: "masala-dosa",
    title: "Masala Dosa",
    description: "Crispy fermented rice and lentil crepe filled with spiced potato filling - a South Indian breakfast favorite.",
    cuisine: "Indian",
    category: "Breakfast",
    subcategory: "Veg",
    region: "South",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: 60,
    cookTime: 30,
    totalTime: 90,
    servings: 6,
    difficulty: "Hard",
    taste: {
      spicy: 4,
      sweet: 1,
      savory: 5,
      tangy: 3
    },
    spiceLevel: 4,
    ingredients: [
      "2 cups rice",
      "1 cup urad dal (split black gram)",
      "1/4 tsp fenugreek seeds",
      "Salt to taste",
      "4 medium potatoes, boiled and mashed",
      "2 tbsp oil",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "1 onion, finely chopped",
      "2 green chilies, finely chopped",
      "1 sprig curry leaves",
      "1/4 cup chopped cilantro",
      "1/2 tsp ginger, grated",
      "Salt to taste",
      "Oil for cooking dosas"
    ],
    instructions: [
      "Wash and soak rice, urad dal, and fenugreek seeds separately for 4-6 hours.",
      "Drain water from rice and dal, then grind them separately into a smooth paste using minimal water.",
      "Mix the rice and dal batter, add salt, and let it ferment overnight (8-12 hours).",
      "For the potato filling, heat oil in a pan and add mustard seeds and cumin seeds.",
      "Once they splutter, add curry leaves, chopped onions, green chilies, and ginger. Sauté until onions are translucent.",
      "Add turmeric powder and mashed potatoes. Mix well and cook for 5 minutes.",
      "Add salt and chopped cilantro. Mix well and remove from heat.",
      "Heat a dosa tawa or non-stick pan. Once hot, lightly grease it with oil.",
      "Pour a ladleful of batter onto the center of the tawa and spread it in a circular motion to form a thin crepe.",
      "Drizzle a little oil around the edges and cook until the bottom turns golden brown.",
      "Place a spoonful of the potato filling in the center of the dosa and fold it over.",
      "Serve hot with coconut chutney and sambar."
    ],
    nutritionFacts: {
      calories: 310,
      protein: 7,
      carbs: 54,
      fat: 6,
      fiber: 4
    },
    mood: ["Lazy Day", "Festival Vibes"],
    featured: true,
    vegetarian: true
  },
  {
    id: "chole-bhature",
    title: "Chole Bhature",
    description: "Spicy chickpea curry served with deep-fried, puffy bread - a popular North Indian street food.",
    cuisine: "Indian",
    category: "Street Food",
    subcategory: "Veg",
    region: "North",
    image: "https://images.unsplash.com/photo-1626132827561-97d3222c5848?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: 40,
    cookTime: 35,
    totalTime: 75,
    servings: 4,
    difficulty: "Medium",
    taste: {
      spicy: 5,
      sweet: 1,
      savory: 4,
      tangy: 3
    },
    spiceLevel: 5,
    ingredients: [
      "2 cups chickpeas (chole), soaked overnight",
      "2 bay leaves",
      "1 cinnamon stick",
      "2-3 cloves",
      "1 large onion, finely chopped",
      "2 tomatoes, pureed",
      "2 tbsp ginger-garlic paste",
      "2 tsp chole masala",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1 tsp ground coriander",
      "1/2 tsp ground cumin",
      "1/4 tsp turmeric",
      "2 tbsp oil",
      "Salt to taste",
      "For bhature: 2 cups all-purpose flour",
      "1/4 cup semolina",
      "1/4 cup yogurt",
      "1/2 tsp baking powder",
      "1/2 tsp sugar",
      "Water as needed",
      "Oil for deep frying"
    ],
    instructions: [
      "For Chole:",
      "Pressure cook soaked chickpeas with bay leaves, cinnamon, and cloves until soft.",
      "In a separate pan, heat oil and sauté onions until golden brown.",
      "Add ginger-garlic paste and cook for 2 minutes.",
      "Add tomato puree, chole masala, red chili powder, garam masala, coriander, cumin, and turmeric. Cook until oil separates.",
      "Add cooked chickpeas with some of the cooking water. Simmer for 15-20 minutes until the gravy thickens.",
      "For Bhature:",
      "Mix all-purpose flour, semolina, yogurt, baking powder, sugar, and salt in a bowl.",
      "Add water gradually and knead into a soft dough.",
      "Cover and let it rest for 2-3 hours.",
      "Divide the dough into small balls and roll each into an oval shape.",
      "Heat oil for deep frying. Fry each bhatura until it puffs up and turns golden brown on both sides.",
      "Serve hot chole with bhature, along with sliced onions and lemon wedges."
    ],
    nutritionFacts: {
      calories: 520,
      protein: 15,
      carbs: 68,
      fat: 22,
      fiber: 11
    },
    mood: ["Festival Vibes", "Lazy Day"],
    vegetarian: true
  },
  {
    id: "classic-burger",
    title: "Classic American Burger",
    description: "Juicy beef patty with melted cheese, fresh vegetables, and special sauce in a toasted bun - the quintessential American comfort food.",
    cuisine: "American",
    category: "Fast Food",
    subcategory: "Non-Veg",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1599&q=80",
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    servings: 4,
    difficulty: "Easy",
    taste: {
      spicy: 2,
      sweet: 1,
      savory: 5,
      tangy: 3
    },
    spiceLevel: 2,
    ingredients: [
      "1.5 lbs ground beef (80/20 lean-to-fat ratio)",
      "1 tsp Worcestershire sauce",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "Salt and pepper to taste",
      "4 hamburger buns",
      "4 slices American cheese",
      "4 lettuce leaves",
      "2 tomatoes, sliced",
      "1 red onion, sliced",
      "4 tbsp mayonnaise",
      "2 tbsp ketchup",
      "1 tbsp mustard",
      "4 dill pickle slices",
      "Butter for toasting buns"
    ],
    instructions: [
      "In a bowl, combine ground beef, Worcestershire sauce, garlic powder, onion powder, salt, and pepper. Mix gently, don't overwork the meat.",
      "Divide the mixture into 4 equal portions and shape into patties slightly larger than your buns, as they will shrink while cooking.",
      "Make a small indent in the center of each patty with your thumb to prevent it from puffing up during cooking.",
      "Heat a grill or skillet over medium-high heat.",
      "Cook patties for about 4-5 minutes per side for medium doneness, or adjust to your preference.",
      "Add cheese slices to the patties during the last minute of cooking to melt.",
      "Meanwhile, butter the cut sides of the hamburger buns and toast them until golden brown.",
      "For the special sauce, mix mayonnaise, ketchup, and mustard in a small bowl.",
      "To assemble, spread the special sauce on the bottom bun, add lettuce, tomato, onion, the beef patty with melted cheese, and a pickle slice.",
      "Top with the other half of the bun and serve immediately."
    ],
    nutritionFacts: {
      calories: 650,
      protein: 32,
      carbs: 40,
      fat: 38,
      fiber: 3
    },
    mood: ["Lazy Day", "Midnight Cravings"],
    featured: true,
    vegetarian: false
  },
  {
    id: "bbq-pulled-pork",
    title: "BBQ Pulled Pork Sandwich",
    description: "Slow-cooked, tender pork shoulder shredded and tossed in smoky barbecue sauce, served on a soft bun with coleslaw - an American BBQ classic.",
    cuisine: "American",
    category: "BBQ",
    subcategory: "Non-Veg",
    image: "https://images.unsplash.com/photo-1623238913973-21e45574d358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: 30,
    cookTime: 480,
    totalTime: 510,
    servings: 8,
    difficulty: "Medium",
    taste: {
      spicy: 3,
      sweet: 4,
      savory: 5,
      tangy: 4
    },
    spiceLevel: 3,
    ingredients: [
      "4-5 lbs pork shoulder (Boston butt)",
      "2 tbsp brown sugar",
      "1 tbsp paprika",
      "1 tbsp garlic powder",
      "1 tbsp onion powder",
      "1 tsp cayenne pepper",
      "1 tsp cumin",
      "2 tsp salt",
      "1 tsp black pepper",
      "1 cup chicken broth",
      "1/4 cup apple cider vinegar",
      "2 cups barbecue sauce",
      "8 hamburger buns",
      "For coleslaw: 4 cups shredded cabbage",
      "1 cup shredded carrots",
      "1/2 cup mayonnaise",
      "2 tbsp apple cider vinegar",
      "1 tbsp sugar",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a small bowl, mix brown sugar, paprika, garlic powder, onion powder, cayenne pepper, cumin, salt, and black pepper to create a dry rub.",
      "Pat dry the pork shoulder and rub the spice mixture all over it, making sure to cover all sides.",
      "Place the seasoned pork in a slow cooker. Pour chicken broth and apple cider vinegar around the sides.",
      "Cover and cook on low for 8-10 hours, or until the meat is very tender and easily shreds with a fork.",
      "Remove the pork from the slow cooker and let it rest for 10 minutes. Reserve some of the cooking liquid.",
      "Using two forks, shred the pork, discarding any large pieces of fat.",
      "Return the shredded pork to the slow cooker, add barbecue sauce and a few tablespoons of the reserved cooking liquid. Mix well and keep warm.",
      "For the coleslaw, combine shredded cabbage and carrots in a large bowl.",
      "In a separate bowl, whisk together mayonnaise, apple cider vinegar, sugar, salt, and pepper.",
      "Pour the dressing over the cabbage mixture and toss to coat. Refrigerate until ready to serve.",
      "Toast the hamburger buns lightly if desired.",
      "To assemble, place a generous portion of pulled pork on the bottom half of each bun, top with coleslaw, and cover with the top half of the bun.",
      "Serve immediately with extra barbecue sauce on the side."
    ],
    nutritionFacts: {
      calories: 580,
      protein: 35,
      carbs: 45,
      fat: 28,
      fiber: 2
    },
    mood: ["Lazy Day", "Festival Vibes"],
    vegetarian: false
  },
  {
    id: "apple-pie",
    title: "Classic Apple Pie",
    description: "Flaky, buttery crust filled with cinnamon-spiced apples - the iconic American dessert that represents comfort and tradition.",
    cuisine: "American",
    category: "Desserts",
    subcategory: "Veg",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: 45,
    cookTime: 50,
    totalTime: 95,
    servings: 8,
    difficulty: "Medium",
    taste: {
      spicy: 1,
      sweet: 5,
      savory: 2,
      tangy: 3
    },
    spiceLevel: 1,
    ingredients: [
      "For the crust: 2 1/2 cups all-purpose flour",
      "1 tsp salt",
      "1 tbsp sugar",
      "1 cup cold unsalted butter, cubed",
      "6-8 tbsp ice water",
      "For the filling: 8 cups thinly sliced apples (mix of Granny Smith and Honeycrisp)",
      "3/4 cup granulated sugar",
      "2 tbsp all-purpose flour",
      "1 tsp ground cinnamon",
      "1/4 tsp ground nutmeg",
      "1/4 tsp ground allspice",
      "1/4 tsp salt",
      "2 tbsp lemon juice",
      "2 tbsp unsalted butter, cut into small pieces",
      "1 egg, beaten (for egg wash)",
      "1 tbsp sugar (for topping)"
    ],
    instructions: [
      "For the crust: In a food processor, combine flour, salt, and sugar. Pulse to mix.",
      "Add cold, cubed butter and pulse until the mixture resembles coarse crumbs with some pea-sized pieces.",
      "Gradually add ice water, 1 tablespoon at a time, pulsing until the dough begins to form a ball.",
      "Divide the dough in half, shape each into a disk, wrap in plastic, and refrigerate for at least 1 hour.",
      "For the filling: In a large bowl, combine sliced apples, sugar, flour, cinnamon, nutmeg, allspice, salt, and lemon juice. Toss to coat apples evenly.",
      "Preheat oven to 425°F (220°C).",
      "Roll out one disk of dough on a floured surface to a 12-inch circle. Transfer to a 9-inch pie plate.",
      "Add the apple filling to the crust, mounding slightly in the center. Dot with small pieces of butter.",
      "Roll out the second disk of dough to a 12-inch circle. Place over the filling.",
      "Trim excess dough, leaving about 1/2 inch overhang. Fold the overhang under and crimp the edges decoratively.",
      "Cut several slits in the top crust to allow steam to escape. Brush with beaten egg and sprinkle with sugar.",
      "Place the pie on a baking sheet to catch any drips. Bake for 20 minutes at 425°F (220°C).",
      "Reduce the oven temperature to 375°F (190°C) and continue baking for 30-35 minutes more, until the crust is golden brown and the filling is bubbling.",
      "Allow the pie to cool for at least 2 hours before serving to let the filling set.",
      "Serve warm or at room temperature, optionally with a scoop of vanilla ice cream."
    ],
    nutritionFacts: {
      calories: 410,
      protein: 4,
      carbs: 58,
      fat: 19,
      fiber: 3
    },
    mood: ["Festival Vibes", "Impress Your Date"],
    vegetarian: true
  },
  {
    id: "tandoori-chicken",
    title: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, then roasted to perfection - a North Indian classic that's both flavorful and aromatic.",
    cuisine: "Indian",
    category: "Main Course",
    subcategory: "Non-Veg",
    region: "North",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 4,
    difficulty: "Easy",
    taste: {
      spicy: 4,
      sweet: 1,
      savory: 5,
      tangy: 2
    },
    spiceLevel: 4,
    ingredients: [
      "8 chicken pieces (drumsticks or thighs), skin removed",
      "1 cup plain yogurt",
      "2 tbsp lemon juice",
      "2 tbsp ginger-garlic paste",
      "2 tsp red chili powder",
      "1 tsp turmeric powder",
      "2 tsp garam masala",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1 tbsp tandoori masala",
      "2 tbsp oil",
      "Salt to taste",
      "Lemon wedges for serving",
      "Red onion rings for serving",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Make small cuts on the chicken pieces to allow the marinade to penetrate.",
      "In a large bowl, mix yogurt, lemon juice, ginger-garlic paste, red chili powder, turmeric, garam masala, cumin, coriander, tandoori masala, oil, and salt.",
      "Add chicken pieces to the marinade and coat evenly. Cover and refrigerate for at least 4 hours, preferably overnight.",
      "Preheat oven to 425°F (220°C). Line a baking sheet with foil and place a wire rack on top.",
      "Remove chicken from the marinade, shaking off excess, and place on the wire rack.",
      "Bake for 35-40 minutes, turning once halfway through, until chicken is cooked and slightly charred.",
      "Alternatively, grill the chicken on a barbecue for a more authentic smoky flavor.",
      "Garnish with cilantro and serve hot with lemon wedges and red onion rings.",
      "Pair with mint chutney and naan bread for a complete meal."
    ],
    nutritionFacts: {
      calories: 320,
      protein: 35,
      carbs: 5,
      fat: 18,
      fiber: 1
    },
    mood: ["Lazy Day", "Impress Your Date"],
    vegetarian: false
  },
  {
    id: "masala-loaded-fries",
    title: "Masala Loaded Fries",
    description: "Crispy french fries topped with spicy Indian masala, chutneys, and cheese - a delicious fusion of American and Indian flavors.",
    cuisine: "Fusion",
    category: "Street Food",
    subcategory: "Veg",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: "Easy",
    taste: {
      spicy: 4,
      sweet: 2,
      savory: 5,
      tangy: 3
    },
    spiceLevel: 4,
    ingredients: [
      "1 lb frozen french fries or 4 large potatoes, cut into fries",
      "Oil for frying (if making fresh fries)",
      "For masala topping: 2 tbsp oil",
      "1 onion, finely chopped",
      "2 tomatoes, finely chopped",
      "2 green chilies, finely chopped",
      "1 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1/2 tsp chaat masala",
      "1/4 cup chopped cilantro",
      "Salt to taste",
      "1 cup shredded cheese (cheddar or mozzarella)",
      "For garnish: 2 tbsp mint chutney",
      "2 tbsp tamarind chutney",
      "1/4 cup chopped onions",
      "1/4 cup sev (crispy chickpea noodles)"
    ],
    instructions: [
      "If using frozen fries, bake according to package instructions. If making fresh, soak cut potatoes in cold water for 30 minutes, pat dry, and deep fry until golden and crispy.",
      "For the masala topping, heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and sauté until translucent.",
      "Add ginger-garlic paste and green chilies. Sauté for a minute.",
      "Add chopped tomatoes and cook until soft and mushy.",
      "Add turmeric, red chili powder, garam masala, and salt. Cook for 3-4 minutes.",
      "Add chopped cilantro and chaat masala. Mix well and remove from heat.",
      "Place crispy fries on a serving plate. Spoon the masala topping over the fries.",
      "Sprinkle shredded cheese on top while the masala is still hot, allowing it to melt slightly.",
      "Drizzle mint chutney and tamarind chutney over the top.",
      "Garnish with chopped onions and sev.",
      "Serve immediately while hot and crispy."
    ],
    nutritionFacts: {
      calories: 380,
      protein: 10,
      carbs: 45,
      fat: 18,
      fiber: 4
    },
    mood: ["Lazy Day", "Midnight Cravings"],
    featured: true,
    vegetarian: true
  },
  {
    id: "rasgulla",
    title: "Rasgulla",
    description: "Soft, spongy cheese balls soaked in light sugar syrup - a popular sweet from Eastern India.",
    cuisine: "Indian",
    category: "Desserts",
    subcategory: "Veg",
    region: "East",
    image: "https://images.unsplash.com/photo-1598715559054-0dd1931e326b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format=crop&w=1472&q=80",
    prepTime: 30,
    cookTime: 30,
    totalTime: 60,
    servings: 20,
    difficulty: "Hard",
    taste: {
      spicy: 0,
      sweet: 5,
      savory: 1,
      tangy: 0
    },
    spiceLevel: 0,
    ingredients: [
      "1 liter whole milk",
      "2-3 tbsp lemon juice or vinegar",
      "1/4 cup all-purpose flour",
      "2 cups sugar",
      "6 cups water",
      "4-5 cardamom pods, crushed",
      "1 tsp rose water (optional)",
      "Cold water for rinsing"
    ],
    instructions: [
      "Bring milk to a boil in a heavy-bottomed pan. Add lemon juice gradually while stirring until the milk curdles completely.",
      "Turn off the heat and let it sit for 5 minutes.",
      "Line a colander with a muslin cloth and pour the curdled milk into it. Rinse the cheese (chenna) under cold water to remove the lemon taste.",
      "Hang the cloth with cheese for 30 minutes to drain excess water. The cheese should be moist, not dry.",
      "Transfer the cheese to a flat surface and knead for 8-10 minutes until smooth and soft. Add flour while kneading.",
      "Divide the dough into 20 equal portions and roll each into a smooth ball with no cracks.",
      "In a large pot, combine sugar, water, and cardamom pods. Bring to a boil.",
      "Gently add the cheese balls to the boiling syrup. Cover and cook on medium heat for 15 minutes.",
      "The balls will double in size. Add rose water if using.",
      "Turn off the heat and let the rasgullas cool in the syrup.",
      "Refrigerate for at least 4 hours before serving.",
      "Serve chilled, garnished with pistachios if desired."
    ],
    nutritionFacts: {
      calories: 120,
      protein: 2,
      carbs: 25,
      fat: 1,
      fiber: 0
    },
    mood: ["Festival Vibes", "Impress Your Date"],
    vegetarian: true
  },
  {
    id: "mumbai-vada-pav",
    title: "Mumbai Vada Pav",
    description: "Spicy potato fritter sandwiched in a bread roll with chutneys - Mumbai's most beloved street food.",
    cuisine: "Indian",
    category: "Street Food",
    subcategory: "Veg",
    region: "West",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    prepTime: 30,
    cookTime: 20,
    totalTime: 50,
    servings: 6,
    difficulty: "Medium",
    taste: {
      spicy: 5,
      sweet: 0,
      savory: 5,
      tangy: 3
    },
    spiceLevel: 5,
    ingredients: [
      "For vada: 4 medium potatoes, boiled and mashed",
      "1 tbsp oil",
      "1 tsp mustard seeds",
      "1 tsp cumin seeds",
      "8-10 curry leaves",
      "2 green chilies, finely chopped",
      "1 tbsp ginger, grated",
      "2 cloves garlic, minced",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tbsp chopped cilantro",
      "Salt to taste",
      "For batter: 1 cup gram flour (besan)",
      "1/4 tsp turmeric powder",
      "1/4 tsp red chili powder",
      "1/4 tsp asafoetida (hing)",
      "1/2 tsp baking soda",
      "Salt to taste",
      "Water as needed",
      "Oil for deep frying",
      "6 pav (small bread rolls)",
      "For green chutney: 1 cup cilantro",
      "4-5 mint leaves",
      "2-3 green chilies",
      "1 tbsp lemon juice",
      "Salt to taste",
      "For garlic chutney: 10-12 garlic cloves",
      "1/4 cup dried coconut",
      "2 tbsp red chili powder",
      "Salt to taste"
    ],
    instructions: [
      "For potato mixture: Heat oil in a pan. Add mustard seeds and cumin seeds, let them splutter.",
      "Add curry leaves, green chilies, ginger, and garlic. Sauté for a minute.",
      "Add turmeric powder and red chili powder. Mix well.",
      "Add mashed potatoes and salt. Mix thoroughly and cook for 2-3 minutes.",
      "Add chopped cilantro, mix, and remove from heat. Allow to cool slightly.",
      "Divide the mixture into 6 equal portions and shape into round patties.",
      "For batter: In a bowl, mix gram flour, turmeric powder, red chili powder, asafoetida, baking soda, and salt.",
      "Add water gradually to make a smooth batter of coating consistency.",
      "For green chutney: Blend cilantro, mint leaves, green chilies, lemon juice, and salt into a smooth paste.",
      "For garlic chutney: Dry roast garlic and dried coconut separately. Grind together with red chili powder and salt.",
      "Heat oil for deep frying. Dip each potato patty in the batter, coating it evenly.",
      "Deep fry until golden brown and crisp on both sides. Drain on paper towels.",
      "Slice pav buns horizontally, but not all the way through.",
      "Apply green chutney on one side and garlic chutney on the other.",
      "Place the fried vada between the bun and serve hot."
    ],
    nutritionFacts: {
      calories: 350,
      protein: 8,
      carbs: 45,
      fat: 15,
      fiber: 5
    },
    mood: ["Lazy Day", "Midnight Cravings"],
    vegetarian: true
  }
];

// Utility functions

// Get all unique cuisine types
export const getCuisineTypes = (): string[] => {
  const cuisines = recipes.map(recipe => recipe.cuisine);
  return [...new Set(cuisines)];
};

// Get all categories for a specific cuisine
export const getCuisineCategories = (): { [key: string]: string[] } => {
  const categories: { [key: string]: string[] } = {};
  
  getCuisineTypes().forEach(cuisine => {
    const cuisineRecipes = recipes.filter(recipe => recipe.cuisine === cuisine);
    const uniqueCategories = [...new Set(cuisineRecipes.map(recipe => recipe.subcategory))];
    categories[cuisine] = uniqueCategories;
  });
  
  return categories;
};

// Get recipes by cuisine and optional subcategory
export const getRecipesByCuisine = (cuisine: string, subcategory: string = ""): Recipe[] => {
  if (subcategory) {
    return recipes.filter(recipe => 
      recipe.cuisine === cuisine && 
      recipe.subcategory === subcategory
    );
  }
  return recipes.filter(recipe => recipe.cuisine === cuisine);
};

// Get featured recipes
export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.featured);
};

// Get recipes by mood
export const getRecipesByMood = (mood: string): Recipe[] => {
  return recipes.filter(recipe => recipe.mood.includes(mood as any));
};

// Get recipe by ID
export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

// Get recipes by region (for Indian cuisine)
export const getRecipesByRegion = (region: string): Recipe[] => {
  return recipes.filter(recipe => 
    recipe.region === region && 
    recipe.cuisine === "Indian"
  );
};

// Search recipes by title or ingredients
export const searchRecipes = (query: string): Recipe[] => {
  const lowerCaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowerCaseQuery) || 
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(lowerCaseQuery)
    )
  );
};
