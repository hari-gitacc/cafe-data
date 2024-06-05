const categories = [
  { category: 'All', },
  { category: 'Snacks', },
  { category: 'Burgers', },
  { category: 'Combos', },
  { category: 'Shakes', },
  { category: 'Mojito', },
  { category: 'Ice Creams', },
  { category: 'Falooda', },
  { category: 'Maggi', },
  { category: 'Drinks', },
  { category: 'Special', }
]


//here is the menu item data verify //that... don't think about categories on //the top...If any doubts, queries and questions call me at any time..
const menu_items=[
  {
    "name": "French Fries",
    "description": "French Fries",
    "quantity": 0,
    "img": "example.com/image-french-fries.jpg",
    "category": "Fries",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Cheese French Fries",
    "description": "Cheese French Fries",
    "quantity": 0,
    "img": "example.com/image-cheese-french-fries.jpg",
    "category": "Fries",
    "price": 139,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Topped French Fries",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-topped-french-fries.jpg",
    "category": "Fries",
    "price": 145,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Peri Peri French Fries",
    "description": "Peri Peri French Fries",
    "quantity": 0,
    "img": "example.com/image-peri-peri-french-fries.jpg",
    "category": "Fries",
    "price": 145,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chicken Lollipop [5 Pieces]",
    "description": "Chicken Lollipop [5 Pieces]",
    "quantity": 0,
    "img": "example.com/image-chicken-lollipop.jpg",
    "category": "Fries",
    "price": 249,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Veg Steamed Momos [5 Pieces]",
    "description": "Veg Steamed Momos [5 Pieces]",
    "quantity": 0,
    "img": "example.com/image-veg-steamed-momos.jpg",
    "category": "Momos",
    "price": 145,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chicken Steamed Momos [5 Pieces]",
    "description": "Chicken Steamed Momos [5 Pieces]",
    "quantity": 0,
    "img": "example.com/image-chicken-steamed-momos.jpg",
    "category": "Momos",
    "price": 174,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Bread Omelette",
    "description": "Bread Omelette",
    "quantity": 0,
    "img": "example.com/image-bread-omelette.jpg",
    "category": "Non Veg Snacks",
    "price": 73,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Cheesy Stuffed Bread Omelette",
    "description": "Cheesy Stuffed Bread Omelette",
    "quantity": 0,
    "img": "example.com/image-cheesy-stuffed-bread-omelette.jpg",
    "category": "Non Veg Snacks",
    "price": 99,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Spicy Bread Omelette",
    "description": "Spicy Bread Omelette",
    "quantity": 0,
    "img": "example.com/image-spicy-bread-omelette.jpg",
    "category": "Non Veg Snacks",
    "price": 99,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Veg Sandwich",
    "description": "Freshly prepared veggies added with sauce and butter and toasted at desired level",
    "quantity": 0,
    "img": "example.com/image-veg-sandwich.jpg",
    "category": "Sandwiches",
    "price": 89,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Capsicum Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-capsicum-sandwich.jpg",
    "category": "Sandwiches",
    "price": 89,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chilli Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-chilli-sandwich.jpg",
    "category": "Sandwiches",
    "price": 89,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chilli Cheese Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-chilli-cheese-sandwich.jpg",
    "category": "Sandwiches",
    "price": 89,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Capsicum Cheese Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-capsicum-cheese-sandwich.jpg",
    "category": "Sandwiches",
    "price": 102,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chicken 69 Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-chicken-69-sandwich.jpg",
    "category": "Sandwiches",
    "price": 189,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Paneer Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-paneer-sandwich.jpg",
    "category": "Sandwiches",
    "price": 139,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "American Cheese Corn Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-american-cheese-corn-sandwich.jpg",
    "category": "Sandwiches",
    "price": 139,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chicken Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-chicken-sandwich.jpg",
    "category": "Sandwiches",
    "price": 189,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Chocolate Sandwich",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-chocolate-sandwich.jpg",
    "category": "Sandwiches",
    "price": 119,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Premium Veg Burger",
    "description": "Cc special mayo and mixed spices, veg burger patty, added cheese and sauce.",
    "quantity": 0,
    "img": "example.com/image-premium-veg-burger.jpg",
    "category": "Burgers",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Paneer Burger",
    "description": "Cc special mayo and mixed spices, veg burger patty, paneer cubes, added cheese.",
    "quantity": 0,
    "img": "example.com/image-paneer-burger.jpg",
    "category": "Burgers",
    "price": 199,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Premium Chicken Burger",
    "description": "Cc special mayo and mixed spices, chicken burger patty, added cheese, egg, sauce.",
    "quantity": 0,
    "img": "example.com/image-premium-chicken-burger.jpg",
    "category": "Burgers",
    "price": 199,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Chicken Tower Burger",
    "description": "Cc special mayo and mixed spices, chicken burger patties [2 pieces], added cheese.",
    "quantity": 0,
    "img": "example.com/image-chicken-tower-burger.jpg",
    "category": "Burgers",
    "price": 261,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Chicken Zinger Tower Burger",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-chicken-zinger-tower-burger.jpg",
    "category": "Burgers",
    "price": 319,
    "available_items": "50",
    "type": "Non-Veg"
  },
  {
    "name": "Mini Starter",
    "description": "Bread Omelette, Veg Maggie, Peanutcandy shake",
    "quantity": 0,
    "img": "example.com/image-mini-starter.jpg",
    "category": "Combos",
    "price": 219,
    "available_items": "50"
  },
  {
    "name": "Cupids Special Combo",
    "description": "Red Velvet Waffle x 1 Chicken sandwich x 1 Veg Maggie x 1 French Fries x",
    "quantity": 0,
    "img": "example.com/image-cupids-special-combo.jpg",
    "category": "Combos",
    "price": 499,
    "available_items": "50"
  },
  {
    "name": "Classy Snack",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-classy-snack.jpg",
    "category": "Combos",
    "price": 549,
    "available_items": "50"
  },
  {
    "name": "Banana Milkshake",
    "description": "Fresh Fruit Shake, No added essence",
    "quantity": 0,
    "img": "example.com/image-banana-milkshake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Pineapple Milkshake",
    "description": "Fresh Fruit Shake, No added essence",
    "quantity": 0,
    "img": "example.com/image-pineapple-milkshake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Carrot Milkshake",
    "description": "Fresh Fruit Shake, No added essence",
    "quantity": 0,
    "img": "example.com/image-carrot-milkshake.jpg",
    "category": "Shakes",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Muskmelon Milkshake",
    "description": "Fresh Fruit Shake, No added essence",
    "quantity": 0,
    "img": "example.com/image-muskmelon-milkshake.jpg",
    "category": "Shakes",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Strawberry Banana Milkshake",
    "description": "Fresh Fruit and ice cream Shake, No added essence",
    "quantity": 0,
    "img": "example.com/image-strawberry-banana-milkshake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Date Shake",
    "description": "Fresh dates shake, No added essence",
    "quantity": 0,
    "img": "example.com/image-date-shake.jpg",
    "category": "Shakes",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Pomogranate Milkshake",
    "description": "Fresh Fruit and ice cream Shake, No added essence",
    "quantity": 0,
    "img": "example.com/image-pomogranate-milkshake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Strawberry Milkshake [350 ml]",
    "description": "Milkshake only made of Strawberry ice cream and milk, no added essence",
    "quantity": 0,
    "img": "example.com/image-strawberry-milkshake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Pista Milkshake [350 ml]",
    "description": "Milkshake only made of pista ice cream and milk, no added essence",
    "quantity": 0,
    "img": "example.com/image-pista-milkshake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Mango Milkshake [350 ml]",
    "description": "Milkshake only made of mango ice cream and milk, no added essence",
    "quantity": 0,
    "img": "example.com/image-mango-milkshake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chocolate Milkshake [350 ml]",
    "description": "Milkshake only made of chocolate ice cream and milk, no added essence",
    "quantity": 0,
    "img": "example.com/image-chocolate-milkshake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Butterscotch Milkshake [350 ml]",
    "description": "Milkshake only made of butterscotch ice cream and milk, no added essence",
    "quantity": 0,
    "img": "example.com/image-butterscotch-milkshake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Blackcurrant Milkshake [350 ml]",
    "description": "Milkshake only made of Blackcurrant ice cream and milk, no added essence",
    "quantity": 0,
    "img": "example.com/image-blackcurrant-milkshake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Oreo Shake",
    "description": "Fresh vanilla ice cream and oreo cookies, No added essence",
    "quantity": 0,
    "img": "example.com/image-oreo-shake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Peanut Candy Shake",
    "description": "Fresh vanilla ice cream and peanut candy, No added essence",
    "quantity": 0,
    "img": "example.com/image-peanut-candy-shake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Hide And Seekh Shake",
    "description": "Fresh vanilla ice cream and hide and seekh cookies, No added essence",
    "quantity": 0,
    "img": "example.com/image-hide-and-seekh-shake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Bourbon Shake",
    "description": "Fresh vanilla ice cream and bourbon cookies, No added essence",
    "quantity": 0,
    "img": "example.com/image-bourbon-shake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Cold Boost Shake",
    "description": "Fresh vanilla ice cream and boost and milk, No added essence",
    "quantity": 0,
    "img": "example.com/image-cold-boost-shake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Cold Horlicks Shake",
    "description": "Fresh vanilla ice cream and Horlicks and milk, No added essence",
    "quantity": 0,
    "img": "example.com/image-cold-horlicks-shake.jpg",
    "category": "Shakes",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Cold Coffee",
    "description": "Fresh vanilla ice cream and Chopped coffee beans mixed with milk and blended",
    "quantity": 0,
    "img": "example.com/image-cold-coffee.jpg",
    "category": "Shakes",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "KitKat Shake",
    "description": "Fresh vanilla ice cream and Kitkats and milk, No added essence",
    "quantity": 0,
    "img": "example.com/image-kitkat-shake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Dairy Milk Shake",
    "description": "Fresh vanilla ice cream and dairymilk and milk, No added essence",
    "quantity": 0,
    "img": "example.com/image-dairymilk-shake.jpg",
    "category": "Shakes",
    "price": 169,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Virgin Mojito",
    "description": "[Non Alcoholic] Refreshment Drink",
    "quantity": 0,
    "img": "example.com/image-virgin-mojito.jpg",
    "category": "Mojitos",
    "price": 119,
    "available_items": "50",
    "type": "Non-Alcoholic"
  },
  {
    "name": "Black Magic [350 Ml]",
    "description": "CHEF'S SPECIAL",
    "quantity": 0,
    "img": "example.com/image-black-magic-mojito.jpg",
    "category": "Mojitos",
    "price": 149,
    "available_items": "50",
    "type": "Non-Alcoholic"
  },
  {
    "name": "Strawberry Mojito [350 Ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-strawberry-mojito.jpg",
    "category": "Mojitos",
    "price": 149,
    "available_items": "50",
    "type": "Non-Alcoholic"
  },
  {
    "name": "Pineapple Mojito [350 Ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-pineapple-mojito.jpg",
    "category": "Mojitos",
    "price": 149,
    "available_items": "50",
    "type": "Non-Alcoholic"
  },
  {
    "name": "Watermelon Mojito [350 Ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-watermelon-mojito.jpg",
    "category": "Mojitos",
    "price": 149,
    "available_items": "50",
    "type": "Non-Alcoholic"
  },
  {
    "name": "Blue Land [350 Ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-blue-land-mojito.jpg",
    "category": "Mojitos",
    "price": 169,
    "available_items": "50",
    "type": "Non-Alcoholic"
  },
  {
    "name": "Blue Lagon [350 Ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-blue-lagon-mojito.jpg",
    "category": "Mojitos",
    "price": 169,
    "available_items": "50",
    "type": "Non-Alcoholic"
  },
  {
    "name": "Blue Curacao Lemon Land [350 Ml]",
    "description": "CHEF'S SPECIAL",
    "quantity": 0,
    "img": "example.com/image-blue-curacao-lemon-land-mojito.jpg",
    "category": "Mojitos",
    "price": 169,
    "available_items": "50",
    "type": "Non-Alcoholic"
  },
  {
    "name": "Strawberry Ice Cream [3 Scoops, Large]",
    "description": "Strawberry ice cream, choco topped and rainbow balls.",
    "quantity": 0,
    "img": "example.com/image-strawberry-ice-cream.jpg",
    "category": "Ice Creams",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Pista Ice Cream [3 Scoops, Large]",
    "description": "Pista ice cream, choco topped and rainbow balls.",
    "quantity": 0,
    "img": "example.com/image-pista-ice-cream.jpg",
    "category": "Ice Creams",
    "price": 179,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Mango Ice Cream [3 Scoops, Large]",
    "description": "Mango ice cream, choco topped and rainbow balls.",
    "quantity": 0,
    "img": "example.com/image-mango-ice-cream.jpg",
    "category": "Ice Creams",
    "price": 179,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chocolate Ice Cream [3 Scoops, Large]",
    "description": "Chocolate ice cream, choco topped and rainbow balls.",
    "quantity": 0,
    "img": "example.com/image-chocolate-ice-cream.jpg",
    "category": "Ice Creams",
    "price": 189,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Butterscotch Ice Cream [3 Scoops, Large]",
    "description": "Butterscotch ice cream, choco topped and rainbow balls.",
    "quantity": 0,
    "img": "example.com/image-butterscotch-ice-cream.jpg",
    "category": "Ice Creams",
    "price": 189,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Blackcurrant Ice Cream [3 Scoops, Large]",
    "description": "Blackcurrant ice cream, choco topped and rainbow balls.",
    "quantity": 0,
    "img": "example.com/image-blackcurrant-ice-cream.jpg",
    "category": "Ice Creams",
    "price": 189,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Fruit Salad with Ice Cream",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-fruit-salad-ice-cream.jpg",
    "category": "Ice Creams",
    "price": 179,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Brownie Ice Cream",
    "description": "Vanilla ice cream placed above freshly baked our own dark brownie, cherry, rainbow balls, choco sauce",
    "quantity": 0,
    "img": "example.com/image-brownie-ice-cream.jpg",
    "category": "Ice Creams",
    "price": 189,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Belgium Waffles",
    "description": "Nicely baked red velvet waffle added with customized dark or white chocolate compound and flavored ice creams to make your dessert delicious.",
    "quantity": 0,
    "img": "example.com/image-belgium-waffles.jpg",
    "category": "Ice Creams",
    "price": 199,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Love Birds",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-love-birds-falooda.jpg",
    "category": "Falooda",
    "price": 199,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Royal Falooda",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-royal-falooda.jpg",
    "category": "Falooda",
    "price": 199,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Arabian Falooda",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-arabian-falooda.jpg",
    "category": "Falooda",
    "price": 220,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Honeymoon Delight",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-honeymoon-delight-falooda.jpg",
    "category": "Falooda",
    "price": 220,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Cc Special Falooda",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-cc-special-falooda.jpg",
    "category": "Falooda",
    "price": 250,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Dry Maggi",
    "description": "Dry maggi added with fresh veggies onion capsicum tomato and topped with coriander.",
    "quantity": 0,
    "img": "example.com/image-dry-maggi.jpg",
    "category": "Maggi",
    "price": 59,
    "available_items": "50",
    "type": "Veg",
    "special": "CHEF'S SPECIAL"
  },
  {
    "name": "Lemon Salt [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-lemon-salt.jpg",
    "category": "Drinks",
    "price": 49,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Lemon Sweet [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-lemon-sweet.jpg",
    "category": "Drinks",
    "price": 58,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Lemon Soda Salt [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-lemon-soda-salt.jpg",
    "category": "Drinks",
    "price": 69,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Lemon Soda Sweet [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-lemon-soda-sweet.jpg",
    "category": "Drinks",
    "price": 69,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Lemon Mint [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-lemon-mint.jpg",
    "category": "Drinks",
    "price": 69,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Watermelon Fresh Juice [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-watermelon-juice.jpg",
    "category": "Drinks",
    "price": 79,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Pineapple Fresh Juice [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-pineapple-juice.jpg",
    "category": "Drinks",
    "price": 79,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Banana Fresh Juice [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-banana-juice.jpg",
    "category": "Drinks",
    "price": 99,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Carrot Fresh Juice [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-carrot-juice.jpg",
    "category": "Drinks",
    "price": 99,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Muskmelon Fresh Juice [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-muskmelon-juice.jpg",
    "category": "Drinks",
    "price": 119,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Mosambi Fresh Juice [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-mosambi-juice.jpg",
    "category": "Drinks",
    "price": 119,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Orange Fresh Juice [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-orange-juice.jpg",
    "category": "Drinks",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Pomegranate Fresh Juice [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-pomegranate-juice.jpg",
    "category": "Drinks",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Lemon Pineapple Juice",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-lemon-pineapple-juice.jpg",
    "category": "Drinks",
    "price": 116,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Apple Juice",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-apple-juice.jpg",
    "category": "Drinks",
    "price": 129,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Carrot Orange [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-carrot-orange.jpg",
    "category": "Drinks",
    "price": 139,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Carrot Mosambi [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-carrot-mosambi.jpg",
    "category": "Drinks",
    "price": 139,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Abc Healthy Juice",
    "description": "Carrot and beetroot juice.",
    "quantity": 0,
    "img": "example.com/image-abc-healthy-juice.jpg",
    "category": "Drinks",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Cb Health Juice",
    "description": "Carrot and beetroot juice.",
    "quantity": 0,
    "img": "example.com/image-cb-health-juice.jpg",
    "category": "Drinks",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Cpa Health Juice",
    "description": "Cucumber, pineapple, apple.",
    "quantity": 0,
    "img": "example.com/image-cpa-health-juice.jpg",
    "category": "Drinks",
    "price": 149,
    "available_items": "50",
    "type": "Veg",
    "special": "CHEF'S SPECIAL, NEW"
  },
  {
    "name": "Ac Health Juice",
    "description": "Apple, cucumber.",
    "quantity": 0,
    "img": "example.com/image-ac-health-juice.jpg",
    "category": "Drinks",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Pc Health Juice",
    "description": "Pineapple, cucumber.",
    "quantity": 0,
    "img": "example.com/image-pc-health-juice.jpg",
    "category": "Drinks",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Om Health Juice",
    "description": "Melon and orange.",
    "quantity": 0,
    "img": "example.com/image-om-health-juice.jpg",
    "category": "Drinks",
    "price": 149,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Orange Mosambi [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-orange-mosambi.jpg",
    "category": "Drinks",
    "price": 159,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Apple Pomegranate Mocktail [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-apple-pomegranate-mocktail.jpg",
    "category": "Drinks",
    "price": 159,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Rose Milk [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-rose-milk.jpg",
    "category": "Drinks",
    "price": 89,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Badam Milk [350 ml]",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-badam-milk.jpg",
    "category": "Drinks",
    "price": 89,
    "available_items": "50",
    "type": "Veg"
  },
  {
    "name": "Chef Special Watermelon Agua Fresca",
    "description": "Smashed watermelon added up with a specially flavoured milk topped with cashew cherries ...",
    "quantity": 0,
    "img": "example.com/image-chef-special-watermelon-agua-fresca.jpg",
    "category": "specials",
    "price": 199,
    "available_items": "50",
    "type": "Veg",
    "special": "CHEF'S SPECIAL, NEW"
  },
  {
    "name": "Cupid's Love Fall",
    "description": "",
    "quantity": 0,
    "img": "example.com/image-cupids-love-fall.jpg",
    "category": "specials",
    "price": 247,
    "available_items": "50",
    "type": "Veg"
  }
]