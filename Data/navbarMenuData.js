import fire from "../src/assets/fire.svg";
import star from "../src/assets/star-removebg-preview.png";
import gems from "../src/assets/gem-stone.svg";

const navbarMenuItems = [
  {
    name: "Home",
    path: "/",
    icon: null,
  },
  {
    name: "Shop",
    path: "/shop",
    icon: null,
  },
  {
    name: "New Arrivals",
    path: "/products/new-arrivals",
    icon: null,
  },
  {
    name: "Hot Deals",
    path: "/products/hot-deals",
    icon: fire,
    iconAlt: "hot deals",
    iconClass: "h-6",
  },
  {
    name: "Featured",
    path: "/products/feature-product",
    icon: gems,
    iconAlt: "featured",
    iconClass: "h-5.5",
  },
  {
    name: "Best Sellers",
    path: "/products/best-sellers",
    icon: star,
    iconAlt: "best sellers",
    iconClass: "h-5.5",
  },
  {
    name: "Flash Sale",
    path: "/products/flash-sale",
    icon: null,
  },
];

export default navbarMenuItems;
