function loginUser() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const message = document.getElementById("loginMessage");

    if (!email || !password) {
        message.style.color = "red";
        message.innerText = "Lütfen tüm alanları doldurun!";
        return;
    }

    // Yerel depolamadan kayıtlı kullanıcıyı al
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        message.style.color = "lightgreen";
        message.innerText = "Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz...";
        
        // Giriş durumunu kaydet
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(registeredUser));

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        message.style.color = "red";
        message.innerText = "E-posta veya şifre hatalı!";
    }
}
