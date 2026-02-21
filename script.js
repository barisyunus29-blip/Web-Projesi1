let cartCount = 0;

const products = [
    { 
        name: "Fren Balatası", 
        category: "fren", 
        price: 750,
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e"
    },
    { 
        name: "Disk Fren Seti", 
        category: "fren", 
        price: 1200,
        image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2"
    },
    { 
        name: "Motor Yağı", 
        category: "motor", 
        price: 450,
        image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f"
    },
    { 
        name: "Far", 
        category: "elektrik", 
        price: 1800,
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
    },
    { 
        name: "Akü 72Ah", 
        category: "elektrik", 
        price: 2500,
        image: "https://images.unsplash.com/photo-1581091215367-59ab6c7f4d2e"
    }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts() {
    productList.innerHTML = "";

    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchValue);
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Fiyat: ₺${product.price}</p>
            <button onclick="addToCart()">Sepete Ekle</button>
        `;

        productList.appendChild(div);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

searchInput.addEventListener("input", displayProducts);
categoryFilter.addEventListener("change", displayProducts);

displayProducts();
