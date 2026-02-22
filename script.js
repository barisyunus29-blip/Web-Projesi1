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

    filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₺${product.price}</p>
            <button onclick='addToCart(${JSON.stringify(product)})'>Sepete Ekle</button>
        `;

        productList.appendChild(div);
    });
}

function addToCart(product) {
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        count += item.quantity;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₺${item.price} x ${item.quantity}<br>
            <button onclick="increaseQty(${index})">+</button>
            <button onclick="decreaseQty(${index})">-</button>
            <button onclick="removeItem(${index})">Sil</button>
        `;
        cartItems.appendChild(li);
    });

    totalPrice.innerText = total;
    cartCount.innerText = count;
}

function increaseQty(index) {
    cart[index].quantity++;
    saveCart();
    updateCart();
}

function decreaseQty(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    saveCart();
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function checkout() {
    if (cart.length === 0) {
        alert("Sepet boş!");
        return;
    }

    let summary = "<h4>Sipariş Özeti</h4>";
    let total = 0;

    cart.forEach(item => {
        summary += `<p>${item.name} x ${item.quantity}</p>`;
        total += item.price * item.quantity;
    });

    summary += `<strong>Toplam: ₺${total}</strong>`;
    summary += `<br><br><button onclick="completePayment()">Ödeme Yap</button>`;

    document.getElementById("orderSummary").innerHTML = summary;
}

function completePayment() {
    alert("Ödeme Başarılı! 🎉");
    clearCart();
    document.getElementById("orderSummary").innerHTML = "";
}

cartButton.addEventListener("click", () => {
    cartPanel.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    cartPanel.classList.remove("active");
    overlay.classList.remove("active");
});

searchInput.addEventListener("input", displayProducts);
categoryFilter.addEventListener("change", displayProducts);

displayProducts();
updateCart();

// Giriş Kontrolü ve Profil Yönetimi
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userProfile = document.getElementById("userProfile");
    const authLinks = document.getElementById("authLinks");
    const userNameDisplay = document.getElementById("userNameDisplay");

    if (isLoggedIn) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        userProfile.style.display = "flex";
        authLinks.style.display = "none";
        userNameDisplay.innerText = "Hoş geldin, " + (currentUser ? currentUser.fullname : "Kullanıcı");
    } else {
        userProfile.style.display = "none";
        authLinks.style.display = "flex";
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.reload();
}

// Sayfa yüklendiğinde giriş durumunu kontrol et
document.addEventListener("DOMContentLoaded", checkLoginStatus);
