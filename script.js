let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = [
    { name: "Fren Balatası", category: "fren", price: 750, image: "images/fren.jpg" },
    { name: "Motor Yağı", category: "motor", price: 450, image: "images/motor.jpg" },
    { name: "Far", category: "elektrik", price: 1800, image: "images/far.jpg" },
    { name: "Akü 72Ah", category: "elektrik", price: 2500, image: "images/aku.jpg" }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartButton = document.getElementById("cartButton");

function displayProducts() {
    productList.innerHTML = "";

    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue) &&
        (selectedCategory === "all" || product.category === selectedCategory)
    );
