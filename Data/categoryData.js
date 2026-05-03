import organicVeggis from "../src/assets/organic-veggies.png";
import facewash from "../src/assets/facewash.png";
import shampoo from "../src/assets/sampoo.png";
import sports from "../src/assets/sports.png";
import pet from "../src/assets/pet.png";
import books from "../src/assets/books.png";

const categories = [
  {
    id: 1,
    name: "Fashion",
    slug: "fashion",
    image: "https://enseig.com/img/cms/cat-2.jpg",
    parentId: null,
    children: [
      {
        id: 11,
        name: "Clothing",
        slug: "clothing",
        parentId: 1,
        children: [
          {
            id: 111,
            name: "T-Shirt",
            slug: "t-shirt",
            image: "https://enseig.com/img/cms/cat-2.jpg",
            parentId: 11,
            children: [],
          },
        ],
      },
      {
        id: 12,
        name: "Accessories",
        slug: "accessories",
        parentId: 1,
        children: [
          {
            id: 121,
            name: "Purse",
            slug: "purse",
            image: "https://enseig.com/img/cms/cat-7.jpg",
            parentId: 12,
            children: [],
          },
          {
            id: 122,
            name: "Rings",
            slug: "rings",
            image: "https://enseig.com/img/cms/cat-4.jpg",
            parentId: 12,
            children: [],
          },
          {
            id: 123,
            name: "Leather Watch",
            slug: "leather-watch",
            image: "https://enseig.com/img/cms/cat-3.jpg",
            parentId: 12,
            children: [],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Electronics",
    slug: "electronics",
    image: "https://enseig.com/img/cms/cat-1.jpg",
    parentId: null,
    children: [
      {
        id: 21,
        name: "Devices",
        slug: "devices",
        parentId: 2,
        children: [
          {
            id: 211,
            name: "Smart Tablet",
            slug: "smart-tablet",
            image: "https://enseig.com/img/cms/cat-1.jpg",
            parentId: 21,
            children: [],
          },
          {
            id: 212,
            name: "Controller",
            slug: "controller",
            image: "https://enseig.com/img/cms/cat-8.jpg",
            parentId: 21,
            children: [],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Home & Furniture",
    slug: "home-furniture",
    image: "https://enseig.com/img/cms/cat-5.jpg",
    parentId: null,
    children: [
      {
        id: 31,
        name: "Chair",
        slug: "chair",
        image: "https://enseig.com/img/cms/cat-5.jpg",
        parentId: 3,
        children: [],
      },
    ],
  },

  {
    id: 4,
    name: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    image: "https://via.placeholder.com/400x300",
    parentId: null,
    children: [
      {
        id: 41,
        name: "Facewash",
        slug: "facewash",
        image: facewash,
        parentId: 4, // ✅ fixed
        children: [],
      },
      {
        id: 42,
        name: "Shampoo",
        slug: "shampoo",
        image: shampoo,
        parentId: 4, // ✅ fixed
        children: [],
      },
    ],
  },

  {
    id: 5,
    name: "Grocery & Essentials",
    slug: "grocery-essentials",
    image: "https://via.placeholder.com/400x300",
    parentId: null,
    children: [
      {
        id: 51,
        name: "Organic Veggies",
        slug: "organic-veggies",
        image: organicVeggis,
        parentId: 5,
        children: [], // ✅ added
      },
    ],
  },

  {
    id: 6,
    name: "Books & Stationery",
    slug: "books-stationery",
    image: books,
    parentId: null,
    children: [],
  },

  {
    id: 7,
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    image: sports,
    parentId: null,
    children: [],
  },

  {
    id: 8,
    name: "Pet Supplies",
    slug: "pet-supplies",
    image: pet,
    parentId: null,
    children: [],
  },

  {
    id: 9,
    name: "Footwear",
    slug: "footwear",
    image: "https://enseig.com/img/cms/cat-6.jpg",
    parentId: null,
    children: [
      {
        id: 91,
        name: "Shoes",
        slug: "shoes",
        parentId: 9,
        children: [
          {
            id: 911,
            name: "Sneaker Shoes",
            slug: "sneaker-shoes",
            image: "https://enseig.com/img/cms/cat-6.jpg",
            parentId: 91,
            children: [],
          },
        ],
      },
    ],
  },
];

export default categories;
