const products = [
  { name: "Laptop", price: 800, rating: 4.5, category: "Electronics", image: "https://via.placeholder.com/150?text=Laptop" },
  { name: "Smartphone", price: 600, rating: 4.3, category: "Electronics", image: "https://via.placeholder.com/150?text=Smartphone" },
  { name: "Headphones", price: 50, rating: 4.1, category: "Electronics", image: "https://via.placeholder.com/150?text=Headphones" },
  { name: "Smartwatch", price: 120, rating: 4.0, category: "Electronics", image: "https://via.placeholder.com/150?text=Smartwatch" },
  { name: "T-Shirt", price: 20, rating: 4.2, category: "Clothing", image: "https://via.placeholder.com/150?text=T-Shirt" },
  { name: "Jeans", price: 40, rating: 4.4, category: "Clothing", image: "https://via.placeholder.com/150?text=Jeans" },
  { name: "Jacket", price: 80, rating: 4.5, category: "Clothing", image: "https://via.placeholder.com/150?text=Jacket" },
  { name: "Sneakers", price: 60, rating: 4.3, category: "Clothing", image: "https://via.placeholder.com/150?text=Sneakers" },
  { name: "Socks", price: 8, rating: 4.1, category: "Clothing", image: "https://via.placeholder.com/150?text=Socks" },
  { name: "Action Figure", price: 15, rating: 3.9, category: "Toys", image: "https://via.placeholder.com/150?text=Action+Figure" },
  { name: "Board Game", price: 25, rating: 4.2, category: "Toys", image: "https://via.placeholder.com/150?text=Board+Game" },
  { name: "Puzzle", price: 10, rating: 4.0, category: "Toys", image: "https://via.placeholder.com/150?text=Puzzle" },
  { name: "Toy Car", price: 8, rating: 3.8, category: "Toys", image: "https://via.placeholder.com/150?text=Toy+Car" },
  { name: "Coffee Maker", price: 70, rating: 4.3, category: "Home Appliances", image: "https://via.placeholder.com/150?text=Coffee+Maker" },
  { name: "Blender", price: 45, rating: 4.1, category: "Home Appliances", image: "https://via.placeholder.com/150?text=Blender" },
  { name: "Toaster", price: 30, rating: 4.0, category: "Home Appliances", image: "https://via.placeholder.com/150?text=Toaster" },
  { name: "Microwave", price: 90, rating: 4.4, category: "Home Appliances", image: "https://via.placeholder.com/150?text=Microwave" },
  { name: "Desk Lamp", price: 25, rating: 4.2, category: "Home Appliances", image: "https://via.placeholder.com/150?text=Desk+Lamp" },
  { name: "Novel Book", price: 12, rating: 4.5, category: "Books", image: "https://via.placeholder.com/150?text=Novel+Book" },
  { name: "Cookbook", price: 18, rating: 4.3, category: "Books", image: "https://via.placeholder.com/150?text=Cookbook" },
  { name: "Comic Book", price: 10, rating: 4.1, category: "Books", image: "https://via.placeholder.com/150?text=Comic+Book" },
  { name: "Notebook", price: 5, rating: 4.0, category: "Books", image: "https://via.placeholder.com/150?text=Notebook" }
];

const container = document.getElementById("productContainer");
const filterDropdown = document.getElementById("filterCategory");
const sortDropdown = document.getElementById("sortProducts");

function displayProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>
      <p>Category: ${p.category}</p>
    `;
    container.appendChild(card);
  });
}

displayProducts(products);

filterDropdown.addEventListener("change", () => {
  const filtered = filterDropdown.value === "All" ? products : products.filter(p => p.category === filterDropdown.value);
  displayProducts(filtered);
});

sortDropdown.addEventListener("change", () => {
  let list = [...products];
  switch(sortDropdown.value) {
    case "priceAsc": list.sort((a,b)=>a.price-b.price); break;
    case "priceDesc": list.sort((a,b)=>b.price-a.price); break;
    case "nameAsc": list.sort((a,b)=>a.name.localeCompare(b.name)); break;
    case "nameDesc": list.sort((a,b)=>b.name.localeCompare(a.name)); break;
    case "ratingAsc": list.sort((a,b)=>a.rating-b.rating); break;
    case "ratingDesc": list.sort((a,b)=>b.rating-a.rating); break;
  }
  displayProducts(list);
});
