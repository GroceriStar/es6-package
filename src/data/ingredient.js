const ingredients = [{
  name: 'Asparagus',
  department: 'Fresh vegetables',
},
{
  name: 'Broccoli',
  department: 'Fresh vegetables',
},
{
  name: 'Carrots',
  department: 'Fresh vegetables',
},
{
  name: 'Cauliflower',
  department: 'Fresh vegetables',
},
{
  name: 'Celery',
  department: 'Fresh vegetables',
},
{
  name: 'Corn',
  department: 'Fresh vegetables',
},
{
  name: 'Cucumbers',
  department: 'Fresh vegetables',
},
{
  name: 'Lettuce  Greens',
  department: 'Fresh vegetables',
},
{
  name: 'Mushrooms',
  department: 'Fresh vegetables',
},
{
  name: 'Onions',
  department: 'Fresh vegetables',
},
{
  name: 'Peppers',
  department: 'Fresh vegetables',
},
{
  name: 'Potatoes',
  department: 'Fresh vegetables',
},
{
  name: 'Spinach',
  department: 'Fresh vegetables',
},
{
  name: 'Squash',
  department: 'Fresh vegetables',
},
{
  name: 'Zucchini',
  department: 'Fresh vegetables',
},
{
  name: 'Tomatoes*',
  department: 'Fresh vegetables',
},
{
  name: 'BBQ sauce',
  department: 'Condiments / Sauces',
},
{
  name: 'Gravy',
  department: 'Condiments / Sauces',
},
{
  name: 'Honey',
  department: 'Condiments / Sauces',
},
{
  name: 'Hot sauce',
  department: 'Condiments / Sauces',
},
{
  name: 'Jam  Jelly  Preserves',
  department: 'Condiments / Sauces',
},
{
  name: 'Ketchup  Mustard',
  department: 'Condiments / Sauces',
},
{
  name: 'Pasta sauce',
  department: 'Condiments / Sauces',
},
{
  name: 'Relish',
  department: 'Condiments / Sauces',
},
{
  name: 'Salad dressin',
  department: 'Condiments / Sauces',
},
{
  name: 'Salsa',
  department: 'Condiments / Sauces',
},
{
  name: 'Soy sauce',
  department: 'Condiments / Sauces',
},
{
  name: 'Steak sauce',
  department: 'Condiments / Sauces',
},
{
  name: 'Syrup',
  department: 'Condiments / Sauces',
},
{
  name: 'Worcestershire sauce',
  department: 'Condiments / Sauces',
},
{
  name: 'Butter  Margarine',
  department: 'Dairy',
},
{
  name: 'Cottage cheese',
  department: 'Dairy',
},
{
  name: 'Half & half',
  department: 'Dairy',
},
{
  name: 'Milk',
  department: 'Dairy',
},
{
  name: 'Sour cream',
  department: 'Dairy',
},
{
  name: 'Whipped cream',
  department: 'Dairy',
},
{
  name: 'Yogurt',
  department: 'Dairy',
},
{
  name: 'Bleu cheese',
  department: 'Cheese',
},
{
  name: 'Cheddar',
  department: 'Cheese',
},
{
  name: 'Cottage cheese',
  department: 'Cheese',
},
{
  name: 'Cream cheese',
  department: 'Cheese',
},
{
  name: 'Feta',
  department: 'Cheese',
},
{
  name: 'Goat cheese',
  department: 'Cheese',
},
{
  name: 'Mozzarella',
  department: 'Cheese',
},
{
  name: 'Parmesan',
  department: 'Cheese',
},
{
  name: 'Provolone',
  department: 'Cheese',
},
{
  name: 'Ricotta',
  department: 'Cheese',
},
{
  name: 'Sandwich slices',
  department: 'Cheese',
},
{
  name: 'Swiss',
  department: 'Cheese',
},
{
  name: 'Bacon  Sausage',
  department: 'Meat',
},
{
  name: 'Beef',
  department: 'Meat',
},
{
  name: 'Chicken',
  department: 'Meat',
},
{
  name: 'Ground beef  Turkey',
  department: 'Meat',
},
{
  name: 'Ham  Pork',
  department: 'Meat',
},
{
  name: 'Hot dogs',
  department: 'Meat',
},
{
  name: 'Lunchmeat',
  department: 'Meat',
},
{
  name: 'Turkey',
  department: 'Meat',
},
{
  name: 'Catfish',
  department: 'Seafood',
},
{
  name: 'Crab',
  department: 'Seafood',
},
{
  name: 'Lobster',
  department: 'Seafood',
},
{
  name: 'Mussels',
  department: 'Seafood',
},
{
  name: 'Oysters',
  department: 'Seafood',
},
{
  name: 'Salmon',
  department: 'Seafood',
},
{
  name: 'Shrimp',
  department: 'Seafood',
},
{
  name: 'Tilapia',
  department: 'Seafood',
},
{
  name: 'Tuna',
  department: 'Seafood',
},
{
  name: 'Beer',
  department: 'Beverages',
},
{
  name: 'Club soda  Tonic',
  department: 'Beverages',
},
{
  name: 'Champagne',
  department: 'Beverages',
},
{
  name: 'Gin',
  department: 'Beverages',
},
{
  name: 'Juice',
  department: 'Beverages',
},
{
  name: 'Mixers',
  department: 'Beverages',
},
{
  name: 'Red wine  White wine',
  department: 'Beverages',
},
{
  name: 'Rum',
  department: 'Beverages',
},
{
  name: 'Saké',
  department: 'Beverages',
},
{
  name: 'Soda pop',
  department: 'Beverages',
},
{
  name: 'Sports drink',
  department: 'Beverages',
},
{
  name: 'Whiskey',
  department: 'Beverages',
},
{
  name: 'Vodka',
  department: 'Beverages',
},
{
  name: 'Bagels  Croissants',
  department: 'Baked goods',
},
{
  name: 'Buns  Rolls',
  department: 'Baked goods',
},
{
  name: 'Cake  Cookies',
  department: 'Baked goods',
},
{
  name: 'Donuts  Pastries',
  department: 'Baked goods',
},
{
  name: 'Fresh bread',
  department: 'Baked goods',
},
{
  name: 'Pie! Pie! Pie!',
  department: 'Baked goods',
},
{
  name: 'Pita bread',
  department: 'Baked goods',
},
{
  name: 'Sliced bread',
  department: 'Baked goods',
},
{
  name: 'Baking powder  Soda',
  department: 'Baking',
},
{
  name: 'Bread crumbs',
  department: 'Baking',
},
{
  name: 'Cake  Brownie mix',
  department: 'Baking',
},
{
  name: 'Cake icing Decorations',
  department: 'Baking',

},
{
  name: 'Chocolate chips  Cocoa',
  department: 'Baking',
},
{
  name: 'Flour',
  department: 'Baking',
},
{
  name: 'Shortening',
  department: 'Baking',
},
{
  name: 'Sugar',
  department: 'Baking',
},
{
  name: 'Sugar substitute',
  department: 'Baking',
},
{
  name: 'Yeast',
  department: 'Baking',
},

{
  name: 'Candy  Gum',
  department: 'Snacks',
},
{
  name: 'Cookies',
  department: 'Snacks',
},
{
  name: 'Crackers',
  department: 'Snacks',
},
{
  name: 'Dried fruit',
  department: 'Snacks',
},

{
  name: 'Granola bars  Mix',
  department: 'Snacks',
},
{
  name: 'Nuts  Seeds',
  department: 'Snacks',
},
{
  name: 'Oatmeal',
  department: 'Snacks',
},
{
  name: 'Popcorn',
  department: 'Snacks',
},
{
  name: 'Potato  Corn chips',
  department: 'Snacks',
},
{
  name: 'Pretzels',
  department: 'Snacks',
},
{
  name: 'Burger night',
  department: 'Themed meals',
},
{
  name: 'Chili night',
  department: 'Themed meals',
},
{
  name: 'Pizza night',
  department: 'Themed meals',
},
{
  name: 'Spaghetti night',
  department: 'Themed meals',
},
{
  name: 'Taco night',
  department: 'Themed meals',
},
{
  name: 'Take-out deli food',
  department: 'Themed meals',
},
{
  name: 'Baby food',
  department: 'Baby stuff',
},
{
  name: 'Diapers',
  department: 'Baby stuff',
},
{
  name: 'Formula',
  department: 'Baby stuff',
},
{
  name: 'Lotion',
  department: 'Baby stuff',
},
{
  name: 'Baby wash',
  department: 'Baby stuff',
},
{
  name: 'Wipes',
  department: 'Baby stuff',
},
{
  name: 'Cat food  Treats',
  department: 'Pets',
},
{
  name: 'Cat litter',
  department: 'Pets',
},
{
  name: 'Dog food  Treats',
  department: 'Pets',
},
{
  name: 'Flea treatment',
  department: 'Pets',
},
{
  name: 'Pet shampoo',
  department: 'Pets',
},
{
  name: 'Apples',
  department: 'Fresh fruits',
},
{
  name: 'Avocados',
  department: 'Fresh fruits',
},

{
  name: 'Bananas',
  department: 'Fresh fruits',
},
{
  name: 'Berries',
  department: 'Fresh fruits',
},
{
  name: 'Cherries',
  department: 'Fresh fruits',
},
{
  name: 'Grapefruit',
  department: 'Fresh fruits',
},
{
  name: 'Grapes',
  department: 'Fresh fruits',
},
{
  name: 'Kiwis',
  department: 'Fresh fruits',
},
{
  name: 'Lemons  Limes',
  department: 'Fresh fruits',
},

{
  name: 'Melon',
  department: 'Fresh fruits',
},
{
  name: 'Nectarines',
  department: 'Fresh fruits',
},
{
  name: 'Oranges',
  department: 'Fresh fruits',
},
{

  name: 'Peaches',
  department: 'Fresh fruits',
},

{
  name: 'Pears',
  department: 'Fresh fruits',
},
{
  name: 'Plums',
  department: 'Fresh fruits',
},
{
  name: 'Bagels',
  department: 'Refrigerated items',
},
{
  name: 'Chip dip',
  department: 'Refrigerated items',
},
{
  name: 'Eggs',
  department: 'Refrigerated items',
},
{
  name: 'English muffins',
  department: 'Refrigerated items',
},
{
  name: 'Fruit juice',
  department: 'Refrigerated items',
},
{
  name: 'Hummus',
  department: 'Refrigerated items',
},
{
  name: 'Ready-bake breads',
  department: 'Refrigerated items',
},
{
  name: 'Tofu',
  department: 'Refrigerated items',
},
{

  name: 'Tortillas',
  department: 'Refrigerated items',
},


{
  name: 'Breakfasts',
  department: 'Frozen',
},
{
  name: 'Burritos',
  department: 'Frozen',
},
{

  name: 'Fish sticks',
  department: 'Frozen',
},
{
  name: 'Fries  Tater tots',
  department: 'Frozen',
},
{
  name: 'Ice cream  Sorbet',
  department: 'Frozen',
},
{
  name: 'Juice concentrate',
  department: 'Frozen',
},
{
  name: 'Pizza',
  department: 'Frozen',
},
{
  name: 'Pizza Rolls',
  department: 'Frozen',
},
{
  name: 'Popsicles',
  department: 'Frozen',
},
{

  name: 'TV dinners',
  department: 'Frozen',
},
{

  name: 'Vegetables',
  department: 'Frozen',
},

{
  name: 'Bouillon cubes',
  department: 'Various groceries',
},
{

  name: 'Cereal',
  department: 'Various groceries',
},
{

  name: 'Coffee  Filters',
  department: 'Various groceries',
},
{
  name: 'Instant potatoes',
  department: 'Various groceries',
},
{
  name: 'Lemon  Lime juice',
  department: 'Various groceries',
},
{
  name: 'Mac & cheese',
  department: 'Various groceries',
},
{
  name: 'Olive oil',
  department: 'Various groceries',
},
{

  name: 'Packaged meals',
  department: 'Various groceries',
},
{
  name: 'Pancake  Waffle mix',
  department: 'Various groceries',
},
{
  name: 'Pasta',
  department: 'Various groceries',
},
{
  name: 'Peanut butter',
  department: 'Various groceries',
},
{
  name: 'Pickles',
  department: 'Various groceries',
},
{
  name: 'Rice',
  department: 'Various groceries',
},
{
  name: 'Tea',
  department: 'Various groceries',
},
{
  name: 'Vegetable oil',
  department: 'Various groceries',
},
{

  name: 'Vinegar',
  department: 'Various groceries',
},

{

  name: 'Applesauce',
  department: 'Canned foods',
},
{
  name: 'Baked beans',
  department: 'Canned foods',
},
{
  name: 'Broth',
  department: 'Canned foods',
},
{
  name: 'Fruit',
  department: 'Canned foods',
},
{
  name: 'Olives',
  department: 'Canned foods',
},
{
  name: 'Tinned meats',
  department: 'Canned foods',
},
{
  name: 'Tuna  Chicken',
  department: 'Canned foods',
},
{
  name: 'Soup  Chili',
  department: 'Canned foods',
},
{
  name: 'Tomatoes',
  department: 'Canned foods',
},
{

  name: 'Veggies',
  department: 'Canned foods',
},

{
  name: 'Basil',
  department: 'Spices & herbs',
},
{
  name: 'Black pepper',
  department: 'Spices & herbs',
},
{
  name: 'Cilantro',
  department: 'Spices & herbs',
},
{

  name: 'Cinnamon',
  department: 'Spices & herbs',
},
{
  name: 'Garlic',
  department: 'Spices & herbs',
},
{
  name: 'Ginger',
  department: 'Spices & herbs',
},
{
  name: 'Mint',
  department: 'Spices & herbs',
},
{
  name: 'Oregano',
  department: 'Spices & herbs',
},
{
  name: 'Paprika',
  department: 'Spices & herbs',
},
{
  name: 'Parsley',
  department: 'Spices & herbs',
},
{
  name: 'Red pepper',
  department: 'Spices & herbs',
},
{
  name: 'Salt',
  department: 'Spices & herbs',
},
{
  name: 'Vanilla extract',
  department: 'Spices & herbs',
},


{
  name: 'Antiperspirant  Deodorant',
  department: 'Personal care',
},
{
  name: 'Bath soap  Hand soap',
  department: 'Personal care',
},
{
  name: 'Condoms  Other b.c.',
  department: 'Personal care',
},
{
  name: 'Cosmetics',
  department: 'Personal care',
},
{
  name: 'Cotton swabs  Balls',
  department: 'Personal care',
},
{
  name: 'Facial cleanser',
  department: 'Personal care',
},
{
  name: 'Facial tissue',
  department: 'Personal care',
},
{
  name: 'Feminine products',
  department: 'Personal care',
},
{
  name: 'Floss',
  department: 'Personal care',
},
{
  name: 'Hair gel  Spray',
  department: 'Personal care',
},
{
  name: 'Lip balm',
  department: 'Personal care',
},
{
  name: 'Moisturizing lotion',
  department: 'Personal care',
},
{
  name: 'Mouthwash',
  department: 'Personal care',
},
{
  name: 'Razors  Shaving cream',
  department: 'Personal care',
},
{
  name: 'Shampoo  Conditioner',
  department: 'Personal care',
},
{
  name: 'Sunblock',
  department: 'Personal care',
},
{
  name: 'Toilet paper',
  department: 'Personal care',
},
{
  name: 'Toothpaste',
  department: 'Personal care',
},
{
  name: 'Vitamins  Supplements',
  department: 'Personal care',
},

{
  name: 'Allergy',
  department: 'Medicine',
},
{
  name: 'Antibiotic',
  department: 'Medicine',
},
{
  name: 'Antidiarrheal',
  department: 'Medicine',
},
{
  name: 'Aspirin',
  department: 'Medicine',
},
{
  name: 'Antacid',
  department: 'Medicine',
},
{
  name: 'Band-aids  Medical',
  department: 'Medicine',
},
{
  name: 'Cold  Flu  Sinus',
  department: 'Medicine',
},
{
  name: 'Pain reliever',
  department: 'Medicine',
},
{
  name: 'Prescription pick-up',
  department: 'Medicine',
},

{
  name: 'Aluminum foil',
  department: 'Kitchen',
},
{
  name: 'Napkins',
  department: 'Kitchen',
},
{
  name: 'Non-stick spray',
  department: 'Kitchen',
},
{
  name: 'Paper towels',
  department: 'Kitchen',
},
{
  name: 'Plastic wrap',
  department: 'Kitchen',
},
{
  name: 'Sandwich  Freezer bags',
  department: 'Kitchen',
},
{
  name: 'Wax paper',
  department: 'Kitchen',
},

{
  name: 'Air freshener',
  department: 'Other',
},
{
  name: 'Bathroom cleaner',
  department: 'Other',
},
{
  name: 'Bleach  Detergent',
  department: 'Other',
},
{
  name: 'Dish  Dishwasher soap',
  department: 'Other',
},
{
  name: 'Garbage bags',
  department: 'Other',
},
{
  name: 'Glass cleaner',
  department: 'Other',
},
{
  name: 'Mop head  Vacuum bags',
  department: 'Other',
},
{
  name: 'Sponges  Scrubbers',
  department: 'Other',
},

{
  name: 'CDRs  DVDRs',
  department: 'Cleaning products',
},
{
  name: 'Notepad  Envelopes',
  department: 'Cleaning products',
},
{
  name: 'Glue  Tape',
  department: 'Cleaning products',
},
{
  name: 'Printer paper',
  department: 'Cleaning products',
},
{
  name: 'Pens  Pencils',
  department: 'Cleaning products',
},
{
  name: 'Postage stamps',
  department: 'Cleaning products',
},


{
  name: 'Automotive',
  department: 'Office supplies',
},
{
  name: 'Batteries',
  department: 'Office supplies',

},
{
  name: 'Charcoal  Propane',
  department: 'Office supplies',
},
{
  name: 'Flowers  Greeting card',
  department: 'Office supplies',
},
{
  name: 'Insect repellent',
  department: 'Office supplies',
},
{
  name: 'Light bulbs',
  department: 'Office supplies',
},
{
  name: 'Newspaper  Magazine',
  department: 'Office supplies',
},
{
  name: 'Random impulse buy',
  department: 'Office supplies',
},


{
  name: 'boneless skinless chicken',
  department: 'PROTEIN',
},
{
  name: 'turkey breast',
  department: 'PROTEIN',
},
{
  name: 'lean ground chicken, turkey',
  department: 'PROTEIN',
},
{
  name: 'fresh water fish',
  department: 'PROTEIN',
},
{
  name: 'wild fish',
  department: 'PROTEIN',
},
{
  name: 'game',
  department: 'PROTEIN',
},
{
  name: 'eggs',
  department: 'PROTEIN',
},
{
  name: 'greek yogurt',
  department: 'PROTEIN',
},
{
  name: 'non fat yogurt',
  department: 'PROTEIN',
},
{
  name: 'sardines',
  department: 'PROTEIN',
},
{
  name: 'shellfish',
  department: 'PROTEIN',
},
{
  name: 'Shakeology',
  department: 'PROTEIN',
},
{
  name: 'Tempeh',
  department: 'PROTEIN',
},
{
  name: 'Tuna, Canned in water',
  department: 'PROTEIN',
},
{
  name: 'Turkey slices 0 fat & sodium',
  department: 'PROTEIN',
},
{
  name: 'ricotta cheese, light',
  department: 'PROTEIN',
},
{
  name: 'Cottage cheese 2%',
  department: 'PROTEIN',
},
{
  name: 'Veggie Burger',
  department: 'PROTEIN',
},
{
  name: 'Turkey Bacon',
  department: 'PROTEIN',
},
{
  name: 'sweet potato',
  department: 'STARCH',
},
{
  name: 'yams',
  department: 'STARCH',
},
{
  name: 'quinoa',
  department: 'STARCH',
},
{
  name: 'beans (kidney, black, garbanzo)',
  department: 'STARCH',
},
{
  name: 'lentils',
  department: 'STARCH',
},
{
  name: 'edamame',
  department: 'STARCH',
},
{
  name: 'peas',
  department: 'STARCH',
},
{
  name: 'brown rice',
  department: 'STARCH',
},
{
  name: 'wild rice',
  department: 'STARCH',
},
{
  name: 'red potato',
  department: 'STARCH',
},
{
  name: 'corn on the cob',
  department: 'STARCH',
},
{
  name: 'amaranth',
  department: 'STARCH',
},
{
  name: 'millet',
  department: 'STARCH',
},
{
  name: 'buckwheat',
  department: 'STARCH',
},
{
  name: 'barley',
  department: 'STARCH',
},
{
  name: 'oats (rolled or steel cut)',
  department: 'STARCH',
},
{
  name: 'whole grain pasta',
  department: 'STARCH',
},
{
  name: 'whole grain bread',
  department: 'STARCH',
},
{
  name: 'whole grain pita',
  department: 'STARCH',
},
{
  name: 'whole grain or corn tortilla',
  department: 'STARCH',
},
{
  name: 'Avocado',
  department: 'HEALTHY FATS',
},
{
  name: 'almonds',
  department: 'HEALTHY FATS',
},
{
  name: 'cashews',
  department: 'HEALTHY FATS',
},
{
  name: 'peanuts',
  department: 'HEALTHY FATS',
},
{
  name: 'pistachios',
  department: 'HEALTHY FATS',
},
{
  name: 'pecans',
  department: 'HEALTHY FATS',
},
{
  name: 'walnuts',
  department: 'HEALTHY FATS',
},
{
  name: 'hummus',
  department: 'HEALTHY FATS',
},
{
  name: 'coconut milk',
  department: 'HEALTHY FATS',
},
{
  name: 'feta cheese',
  department: 'HEALTHY FATS',
},
{
  name: 'goat cheese',
  department: 'HEALTHY FATS',
},
{
  name: 'parmesan',
  department: 'HEALTHY FATS',
},
{
  name: 'brussels sprouts',
  department: 'VEGGIES',
},
{
  name: 'kale',
  department: 'VEGGIES',
},
{
  name: 'spinach',
  department: 'VEGGIES',
},
{
  name: 'collard greens',
  department: 'VEGGIES',
},
{
  name: 'broccoli',
  department: 'VEGGIES',
},
{
  name: 'asparagus',
  department: 'VEGGIES',
},
{
  name: 'beets',
  department: 'VEGGIES',
},
{
  name: 'tomatoes',
  department: 'VEGGIES',
},
{
  name: 'squash',
  department: 'VEGGIES',
},
{
  name: 'green beans',
  department: 'VEGGIES',
},
{
  name: 'cauliflower',
  department: 'VEGGIES',
},
{
  name: 'eggplant',
  department: 'VEGGIES',
},
{
  name: 'snow peas',
  department: 'VEGGIES',
},
{
  name: 'cabbage',
  department: 'VEGGIES',
},
{
  name: 'lettuce (pot iceberg)',
  department: 'VEGGIES',
},
{
  name: 'Spring mix',
  department: 'VEGGIES',
},
{
  name: 'alfalfa sprouts',
  department: 'VEGGIES',
},
{
  name: 'mushrooms',
  department: 'VEGGIES',
},
{
  name: 'radishes',
  department: 'VEGGIES',
},
{
  name: 'onions',
  department: 'VEGGIES',
},
{
  name: 'peppers',
  department: 'VEGGIES',
},
{
  name: 'carrots',
  department: 'VEGGIES',
},
{
  name: 'cucumbers',
  department: 'VEGGIES',
},
{
  name: 'celery',
  department: 'VEGGIES',
},
{
  name: 'Almond Milk',
  department: 'BEVERAGES',
},
{
  name: 'Rice Milk',
  department: 'BEVERAGES',
},
{
  name: 'Hemp Milk',
  department: 'BEVERAGES',
},
{
  name: 'Coconut Milk',
  department: 'BEVERAGES',
},
{
  name: 'Coconut Water',
  department: 'BEVERAGES',
},
{
  name: 'Lemon or Fruit infused Water',
  department: 'BEVERAGES',
},
{
  name: 'Raspberries',
  department: 'FRUITS',
},
{
  name: 'blackberries',
  department: 'FRUITS',
},
{
  name: 'blueberries',
  department: 'FRUITS',
},
{
  name: 'strawberries',
  department: 'FRUITS',
},
{
  name: 'watermelon',
  department: 'FRUITS',
},
{
  name: 'cantaloupe',
  department: 'FRUITS',
},
{
  name: 'oranges',
  department: 'FRUITS',
},
{
  name: 'tangerines',
  department: 'FRUITS',
},
{
  name: 'apples',
  department: 'FRUITS',
},
{
  name: 'apricots',
  department: 'FRUITS',
},
{
  name: 'grapefruit',
  department: 'FRUITS',
},
{
  name: 'grapes',
  department: 'FRUITS',
},
{
  name: 'cherries',
  department: 'FRUITS',
},
{
  name: 'kiwi',
  department: 'FRUITS',
},
{
  name: 'mango',
  department: 'FRUITS',
},
{
  name: 'pears',
  department: 'FRUITS',
},
{
  name: 'nectarines',
  department: 'FRUITS',
},
{
  name: 'Pineapple',
  department: 'FRUITS',
},
{
  name: 'Papaya',
  department: 'FRUITS',
},
{
  name: 'figs',
  department: 'FRUITS',
},
{
  name: 'honeydew',
  department: 'FRUITS',
},
{
  name: 'pumpkin seeds',
  department: 'OILS AND SEEDS',
},
{
  name: 'sunflower seeds',
  department: 'OILS AND SEEDS',
},
{
  name: 'sesame seeds',
  department: 'OILS AND SEEDS',
},
{
  name: 'flaxseed',
  department: 'OILS AND SEEDS',
},
{
  name: 'olives',
  department: 'OILS AND SEEDS',
},
{
  name: 'coconut, unsweetened',
  department: 'OILS AND SEEDS',
},
{
  name: 'dressings',
  department: 'OILS AND SEEDS',
},
{
  name: 'Herbs',
  department: 'SEASONINGS',
},
{
  name: 'lemon, lime (not lemonade smarty pants)',
  department: 'SEASONINGS',
},
{
  name: 'garlic, ginger',
  department: 'SEASONINGS',
},
{
  name: 'vinegars (red wine, apple cider, rice)',
  department: 'SEASONINGS',
},
{
  name: 'vanilla extract',
  department: 'SEASONINGS',
},
{
  name: 'spices (no salt)',
  department: 'SEASONINGS',
},


{
  name: 'Chicken breast',
  department: 'MEAT/PROTEIN',
},
{
  name: 'Ground turkey',
  department: 'MEAT/PROTEIN',
},
{
  name: 'Turkey/chicken sausage',
  department: 'MEAT/PROTEIN',
},
{
  name: 'Turkey pepperoni',
  department: 'MEAT/PROTEIN',
},
{
  name: 'Canned tuna',
  department: 'MEAT/PROTEIN',
},
{
  name: 'Beans/lentils',
  department: 'MEAT/PROTEIN',
},
{
  name: 'Greek yogurt',
  department: 'DAIRY',
},
{
  name: 'String cheese',
  department: 'DAIRY',
},
{
  name: 'Milk (cow, almond)',
  department: 'DAIRY',
},
{
  name: 'Strawberries',
  department: 'FRUITS',
},
{
  name: 'Blueberries',
  department: 'FRUITS',
},
{
  name: 'Cantaloupe',
  department: 'FRUITS',
},
{
  name: 'Tortilla chips',
  department: 'SNACKS',
},
{
  name: 'Trail mix',
  department: 'SNACKS',
},
{
  name: 'Peanuts',
  department: 'SNACKS',
},
{
  name: 'Almonds',
  department: 'SNACKS',
},
{
  name: 'Raisins',
  department: 'SNACKS',
},
{
  name: 'Romaine lettuce',
  department: 'VEGETABLES',
},
{
  name: 'Bell peppers',
  department: 'VEGETABLES',
},
{
  name: 'Sweet potatoes',
  department: 'VEGETABLES',
},
{
  name: 'Whole wheat flour',
  department: 'BAKING',
},
{
  name: 'Dark chocolate chips',
  department: 'BAKING',
},
{
  name: 'Maple syrup',
  department: 'BAKING',
},
{
  name: 'Cooking spray',
  department: 'BAKING',
},
{
  name: 'Whole wheat pasta',
  department: 'GRIS',
},
{
  name: 'Whole wheat tortillas',
  department: 'GRIS',
},
{
  name: 'Whole wheat bread',
  department: 'GRIS',
},
{
  name: 'Pita pockets',
  department: 'GRIS',
},
{
  name: 'Brown rice',
  department: 'GRIS',
},
{
  name: 'Rolled oats',
  department: 'GRIS',
},

{
  name: 'Salad greens',
  department: 'Produce',
},
{
  name: 'Onion',
  department: 'Produce',
},
{
  name: 'Butternut Squash',
  department: 'Produce',
},
{
  name: 'Kale',
  department: 'Produce',
},
{
  name: 'Jalapeno',
  department: 'Produce',
},
{
  name: 'Eggplant',
  department: 'Produce',
},
{
  name: 'Lemon or lime',
  department: 'Produce',
},
{
  name: 'Green beans',
  department: 'Produce',
},
{
  name: 'Summer squash',
  department: 'Produce',
},
{
  name: 'Vegan sausage',
  department: 'Protein',
},
{
  name: 'Cheese',
  department: 'Protein',
},
{
  name: 'Milk (Dairy or non-dairy)',
  department: 'Protein',
},
{
  name: 'Dried beans',
  department: 'Bulk Foods',
},
{
  name: 'Quinoa',
  department: 'Bulk Foods',
},
{
  name: 'Lentils',
  department: 'Bulk Foods',
},
{
  name: 'Brown Rice',
  department: 'Bulk Foods',
},
{
  name: 'Nuts: almonds, walnuts, cashews',
  department: 'Bulk Foods',
},
{
  name: 'Chia seeds',
  department: 'Bulk Foods',
},
{
  name: 'Ground flaxseed',
  department: 'Bulk Foods',
},
{
  name: 'Peanut or Almond butter',
  department: 'Canned Goods/Pantry',
},
{
  name: 'Canned diced tomatoes',
  department: 'Canned Goods/Pantry',
},
{
  name: 'Tomato paste',
  department: 'Canned Goods/Pantry',
},
{
  name: 'Canned beans',
  department: 'Canned Goods/Pantry',
},
{
  name: 'Vegetable broth',
  department: 'Canned Goods/Pantry',
},
{
  name: 'Whole grain pasta',
  department: 'Canned Goods/Pantry',
},
{
  name: 'Nutritional yeast',
  department: 'Herbs/Spices',
},
{
  name: 'Italian seasoning',
  department: 'Herbs/Spices',
},
{
  name: 'Taco seasoning',
  department: 'Herbs/Spices',
},
{
  name: 'Garlic powder',
  department: 'Herbs/Spices',
},
{
  name: 'Onion powder',
  department: 'Herbs/Spices',
},
{
  name: 'Chili powder',
  department: 'Herbs/Spices',
},
{
  name: 'Smoked paprika',
  department: 'Herbs/Spices',
},
{
  name: 'Cumin',
  department: 'Herbs/Spices',
},
{
  name: 'Black Pepper',
  department: 'Herbs/Spices',
},
{
  name: 'Frozen fruit: berries, mango, pineapple',
  department: 'Frozen Foods',
},
{
  name: 'Frozen vegetables: peas, green beans, brussels sprouts, corn, edamame',
  department: 'Frozen Foods',
},
{
  name: 'Olive or Canola oil',
  department: 'Oils, Vinegars, and Condiments',
},
{
  name: 'Vinegar: balsamic, apple cider, red wine, rice',
  department: 'Oils, Vinegars, and Condiments',
},
{
  name: 'Mustard',
  department: 'Oils, Vinegars, and Condiments',
},
{
  name: 'Ketchup',
  department: 'Oils, Vinegars, and Condiments',
},
{
  name: 'Vegan Worcestershire sauce',
  department: 'Oils, Vinegars, and Condiments',
},
{
  name: 'Sriracha',
  department: 'Oils, Vinegars, and Condiments',
},
{
  name: 'BBQ Sauce',
  department: 'Oils, Vinegars, and Condiments',
},
{
  name: 'Vanilla',
  department: 'Oils, Vinegars, and Condiments',
},


{
  name: 'Extra Virgin Olive Oil',
  department: 'FATS',
},
{
  name: 'Avocado Oil',
  department: 'FATS',
},
{
  name: 'Coconut Oil',
  department: 'FATS',
},
{
  name: 'Ghee',
  department: 'FATS',
},
{
  name: 'Butter',
  department: 'FATS',
},
{
  name: 'Lard',
  department: 'FATS',
},
{
  name: 'Fatty Beef/Steak',
  department: 'FATS',
},
{
  name: 'Bacon, Pork Belly',
  department: 'FATS',
},
{
  name: 'Olives, pickled, green',
  department: 'FATS',
},
{
  name: 'Macadamia Nuts',
  department: 'FATS',
},
{
  name: 'Brazil Nuts',
  department: 'FATS',
},
{
  name: 'Cheddar Cheese',
  department: 'FATS',
},
{
  name: 'Heavy Cream',
  department: 'FATS',
},
{
  name: 'Cucumber',
  department: 'KETO SNACKS',
},
{
  name: 'Cherry Tomatoes',
  department: 'KETO SNACKS',
},
{
  name: 'Pickles (pickled cucumbers)',
  department: 'KETO SNACKS',
},
{
  name: 'Olives, pickled, green',
  department: 'KETO SNACKS',
},
{
  name: 'Creek Yogurt, nonfat',
  department: 'KETO SNACKS',
},
{
  name: 'Macadamia Nuts',
  department: 'KETO SNACKS',
},
{
  name: 'Brazil Nuts',
  department: 'KETO SNACKS',
},
{
  name: 'Cheddar Cheese',
  department: 'KETO SNACKS',
},
{
  name: 'Chicken Breast',
  department: 'PROTEIN',
},
{
  name: 'Chicken Thighs',
  department: 'PROTEIN',
},
{
  name: 'Turkey Meat',
  department: 'PROTEIN',
},
{
  name: 'Duck Meat',
  department: 'PROTEIN',
},
{
  name: 'Pork Meat',
  department: 'PROTEIN',
},
{
  name: 'Beef Meat',
  department: 'PROTEIN',
},
{
  name: 'Beef Liver',
  department: 'PROTEIN',
},
{
  name: 'Beef Kidneys',
  department: 'PROTEIN',
},
{
  name: 'Ground Beef',
  department: 'PROTEIN',
},
{
  name: 'Bacon, Pork',
  department: 'PROTEIN',
},
{
  name: 'Bone Broth, Beef',
  department: 'PROTEIN',
},
{
  name: 'Salmon, raw',
  department: 'PROTEIN',
},
{
  name: 'Tuna fish',
  department: 'PROTEIN',
},
{
  name: 'Mackerel',
  department: 'PROTEIN',
},
{
  name: 'Seafood',
  department: 'PROTEIN',
},
{
  name: 'Cheddar Cheese',
  department: 'PROTEIN',
},
{
  name: 'Feta Cheese',
  department: 'PROTEIN',
},
{
  name: 'Creek Yogurt',
  department: 'PROTEIN',
},
{
  name: 'Lettuce',
  department: 'VEGGIES',
},
{
  name: 'Arugula',
  department: 'VEGGIES',
},
{
  name: 'Bok choy',
  department: 'VEGGIES',
},
{
  name: 'Cucumber',
  department: 'VEGGIES',
},
{
  name: 'Cherry Tomatoes',
  department: 'VEGGIES',
},
{
  name: 'Cabbage',
  department: 'VEGGIES',
},
{
  name: 'Lemon juice',
  department: 'CONDIMENTS',
},
{
  name: 'Mayonnaise',
  department: 'CONDIMENTS',
},
{
  name: 'Apple cider vinegar',
  department: 'CONDIMENTS',
},
{
  name: 'Coconut milk/cream',
  department: 'CONDIMENTS',
},
{
  name: 'Extra Virgin Olive Oil',
  department: 'CONDIMENTS',
},
{
  name: 'Basil leaves, fresh',
  department: 'CONDIMENTS',
},
{
  name: 'Basil leaves, dried',
  department: 'CONDIMENTS',
},
{
  name: 'Cayenne pepper',
  department: 'CONDIMENTS',
},
{
  name: 'Turmeric',
  department: 'CONDIMENTS',
},
{
  name: 'Black coffee',
  department: 'DRINKS',
},
{
  name: 'Black coffee with heavy cream, no sugar',
  department: 'DRINKS',
},
{
  name: 'Black, green or oolong tea',
  department: 'DRINKS',
},
{
  name: 'Herbal tea',
  department: 'DRINKS',
},
{
  name: 'Water and Lemon water',
  department: 'DRINKS',
},
{
  name: 'Almond milk, unsweetened',
  department: 'DRINKS',
},
{
  name: 'Coconut milk, unsweetened',
  department: 'DRINKS',
},
{
  name: 'Bone Broth',
  department: 'DRINKS',
},
{
  name: 'Flaxseed meal',
  department: 'FLOUR',
},
{
  name: 'Almond flour',
  department: 'FLOUR',
},
{
  name: 'Coconut flour',
  department: 'FLOUR',
},
{
  name: 'Blackberries',
  department: 'FRUITS',
},


{
  name: 'Alfalfa Sprouts',
  department: 'Vegatables',
},
{
  name: 'Daikon',
  department: 'Vegatables',
},
{
  name: 'Endive',
  department: 'Vegatables',
},
{
  name: 'Escarole',
  department: 'Vegatables',
},
{
  name: 'Bok Choy',
  department: 'Vegatables',
},
{
  name: 'Chicory Greens',
  department: 'Vegatables',
},
{
  name: 'Green Onions',
  department: 'Vegatables',
},
{
  name: 'Fennel',
  department: 'Vegatables',
},
{
  name: 'Iceberg Lettuce',
  department: 'Vegatables',
},
{
  name: 'Jicama',
  department: 'Vegatables',
},
{
  name: 'Bell Peppers',
  department: 'Vegatables',
},
{
  name: 'Radicchio',
  department: 'Vegatables',
},
{
  name: 'Radishes',
  department: 'Vegatables',
},
{
  name: 'Romaine Lettuce',
  department: 'Vegatables',
},
{
  name: 'Artichoke (1/4 Streamed)',
  department: 'Vegatables',
},
{
  name: 'Artichoke Hearts In Water',
  department: 'Vegatables',
},
{
  name: 'Bamboo Shoots',
  department: 'Vegatables',
},
{
  name: 'Brussels sprouts',
  department: 'Vegatables',
},
{
  name: 'Chard',
  department: 'Vegatables',
},
{
  name: 'Collard Greens',
  department: 'Vegatables',
},
{
  name: 'Hearts of Palm',
  department: 'Vegatables',
},
{
  name: 'Kohlrabi',
  department: 'Vegatables',
},
{
  name: 'Leeks',
  department: 'Vegatables',
},
{
  name: 'Okra',
  department: 'Vegatables',
},
{
  name: 'Black Olives',
  department: 'Vegatables',
},
{
  name: 'Pumpkin',
  department: 'Vegatables',
},
{
  name: 'Sauerkraut',
  department: 'Vegatables',
},
{
  name: 'Summer Squash',
  department: 'Vegatables',
},
{
  name: 'Tomato',
  department: 'Vegatables',
},
{
  name: 'Turnips',
  department: 'Vegatables',
},
{
  name: 'All Red Meat',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Pork',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Veal',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Lamb',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Fowl (duck, goose, hen, quail)',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Organ Meats (tongue, brains, liver, heart, and kidneys)',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Game Meats (ostrich, venison, caribou, bison, and elk)',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Exotic Meats (such as ostrich and emu)',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Cold Cuts and Beacon (read label some have added sugar)',
  department: 'Meat/Fish Poultry',
},
{
  name: 'Egg White',
  department: 'Cheese/Dairy',
},
{
  name: 'Egg Yolk',
  department: 'Cheese/Dairy',
},
{
  name: 'Whole Egg',
  department: 'Cheese/Dairy',
},
{
  name: 'Half-and-Half',
  department: 'Cheese/Dairy',
},
{
  name: 'Plaint Full Fat Greek Yogurt',
  department: 'Cheese/Dairy',
},
{
  name: 'Full Fat Sour Cream (4 tbsp.)',
  department: 'Cheese/Dairy',
},
{
  name: 'Unsweetened Almond Milk',
  department: 'Cheese/Dairy',
},
{
  name: 'Gruyere Cheese',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Fontina',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Havarti',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Gouda',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Blue Cheese',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Edam',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Monterey',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Muenster',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Neufchatel',
  department: 'Cheses In 1 Ounce Portions',
},
{
  name: 'Crawfish',
  department: 'Seafood',
},
{
  name: 'Scallops',
  department: 'Seafood',
},
{
  name: 'Clams',
  department: 'Seafood',
},
{
  name: 'Squid',
  department: 'Seafood',
},
{
  name: 'Limes',
  department: 'Fruits',
},
{
  name: 'Lemons',
  department: 'Fruits',
},
{
  name: 'Rhubarb',
  department: 'Fruits',
},
{
  name: 'Apricots',
  department: 'Fruits',
},
{
  name: 'Red Grapefruit',
  department: 'Fruits',
},
{
  name: 'Grass Fed Butter',
  department: 'Fats and Dressings',
},
{
  name: 'Oils',
  department: 'Fats and Dressings',
},
{
  name: 'Blue Cheese Dressing (2 tbsp.)',
  department: 'Fats and Dressings',
},
{
  name: 'Italian Dressing (2 tbsp.)',
  department: 'Fats and Dressings',
},
{
  name: 'Cesar Dressing (2 tbsp.)',
  department: 'Fats and Dressings',
},
{
  name: 'Ranch Dressing (2 tbsp.)',
  department: 'Fats and Dressings',
},
{
  name: '100 Island Dressing (2 tbsp.)',
  department: 'Fats and Dressings',
},
{
  name: 'Water',
  department: 'Zero Carb Drinks',
},
{
  name: 'Unsweetened Tea',
  department: 'Zero Carb Drinks',
},
{
  name: 'Unsweetened Coffee',
  department: 'Zero Carb Drinks',
},
{
  name: 'Club Soda',
  department: 'Zero Carb Drinks',
},
{
  name: 'Sugar-Free Sparkling Water',
  department: 'Zero Carb Drinks',
},
{
  name: 'No-Calorie Flavored Seltzers',
  department: 'Zero Carb Drinks',
},
{
  name: 'Herbal Tea (without added barley or fruit sugars)',
  department: 'Zero Carb Drinks',
},
{
  name: 'Almonds (2tbsp. whole)',
  department: 'Nuts/Seeds',
},
{
  name: 'Peanuts (2tbsp.)',
  department: 'Nuts/Seeds',
},
{
  name: 'Hazelnuts (2tbsp. chopped)',
  department: 'Nuts/Seeds',
},
{
  name: 'Macadamia Nuts (2tbsp. chopped)',
  department: 'Nuts/Seeds',
},
{
  name: 'Pecans (2tbsp. chopped)',
  department: 'Nuts/Seeds',
},
{
  name: 'Pine Nuts (2tbsp.)',
  department: 'Nuts/Seeds',
},
{
  name: 'Pistachio Nuts (2tbsp.)',
  department: 'Nuts/Seeds',
},
{
  name: 'Walnuts (2tbsp. chopped)',
  department: 'Nuts/Seeds',
},
{
  name: 'Pumpkin Seeds',
  department: 'Nuts/Seeds',
},
{
  name: 'Sunflower Seeds (2tbsp.)',
  department: 'Nuts/Seeds',
},
{
  name: 'Almond Butter',
  department: 'Nuts/Seeds',
},
{
  name: 'Peanut Butter',
  department: 'Nuts/Seeds',
},
{
  name: 'Shirataki Noodles',
  department: 'Miscellaneous',
},
{
  name: 'White Vinegar',
  department: 'Miscellaneous',
},
{
  name: 'Balsamic Vinegar',
  department: 'Miscellaneous',
},
{
  name: 'Red Wine Vinegar',
  department: 'Miscellaneous',
},
{
  name: 'Rice Vinegar (seasoned)',
  department: 'Miscellaneous',
},
{
  name: 'Soy Sauce',
  department: 'Miscellaneous',
},
{
  name: 'Unflavored, powdered gelatin (use as a binder in recipes)',
  department: 'Miscellaneous',
},
{
  name: 'Most Hot Sauces',
  department: 'Miscellaneous',
},
{
  name: 'Turkey or Beef Jerky (not teriyaki flavor)',
  department: 'Miscellaneous',
},
{
  name: 'Kale Chips',
  department: 'Miscellaneous',
},
{
  name: 'Coconut Flakes',
  department: 'Miscellaneous',
},
{
  name: 'Soybeans',
  department: 'Soy Vegan Protein',
},
{
  name: 'Soy Milk',
  department: 'Soy Vegan Protein',
},
{
  name: 'Firm Tofu',
  department: 'Soy Vegan Protein',
},
{
  name: 'Silken Tofu',
  department: 'Soy Vegan Protein',
},
{
  name: 'Soy Nuts',
  department: 'Soy Vegan Protein',
},
{
  name: 'All Herbs And Spices Have Very Few Carbs',
  department: 'Herbs/Spices',
},
{
  name: 'Martini',
  department: 'Zero Carb Alcoholic Drinks',
},
{
  name: 'Tequila',
  department: 'Zero Carb Alcoholic Drinks',
},

];


export default ingredients;
