let cartCount = 0;

const products = [
    { name: "Fren Balatası", category: "fren", price: 750 },
    { name: "Disk Fren Seti", category: "fren", price: 1200 },
    { name: "Motor Yağı", category: "motor", price: 450 },
    { name: "Yağ Filtresi", category: "motor", price: 250 },
    { name: "Akü 72Ah", category: "elektrik", price: 2500 },
    { name: "Far Ampulü", category: "elektrik", price: 150 }
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
