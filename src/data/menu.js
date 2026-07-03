import dish1 from "../assets/images/dish1.jpg";
import dish2 from "../assets/images/dish2.jpg";
import dish3 from "../assets/images/dish3.jpg";
import dish4 from "../assets/images/dish4.jpg";

const menu = [
  {
    id: 1,
    image: dish1,
    name: "Grilled Steak",
    description: "Premium grilled beef served with vegetables.",
    price: "$28",
    rating: 4.9,
    category: "Main Course",
  },
  {
    id: 2,
    image: dish2,
    name: "Seafood Pasta",
    description: "Fresh seafood tossed in creamy Italian sauce.",
    price: "$24",
    rating: 4.8,
    category: "Pasta",
  },
  {
    id: 3,
    image: dish3,
    name: "Classic Burger",
    description: "Juicy beef burger with fries and cheese.",
    price: "$18",
    rating: 4.7,
    category: "Fast Food",
  },
  {
    id: 4,
    image: dish4,
    name: "Chocolate Dessert",
    description: "Rich chocolate delight with vanilla cream.",
    price: "$12",
    rating: 5.0,
    category: "Dessert",
  },
];

export default menu;