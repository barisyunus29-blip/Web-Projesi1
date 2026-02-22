function registerUser(){

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if(!fullname || !email || !password || !confirmPassword){
        message.style.color="red";
        message.innerText="Lütfen tüm alanları doldurun!";
        return;
    }

    if(password.length < 6){
        message.style.color="red";
        message.innerText="Şifre en az 6 karakter olmalı!";
        return;
    }

    if(password !== confirmPassword){
        message.style.color="red";
        message.innerText="Şifreler uyuşmuyor!";
        return;
    }

    const user = {
        fullname,
        email,
        password
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    message.style.color="lightgreen";
    message.innerText="Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz...";

    setTimeout(()=>{
        window.location.href="login.html";
    },2000);
}
