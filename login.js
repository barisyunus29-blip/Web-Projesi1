

Ücretsiz denemeyi başlat

Paylaş
burda ben araç parçası satatn bir web sitesi oluşturdum lakin giriş vce kayıt yap için oluşturduğum registerlar çalışmıyor sadece web sayfası gözüküyor bunu düzenle
Lite
Anladım, araç parçası satış sitenizdeki kayıt ve giriş fonksiyonlarını düzeltmek için GitHub deponuzu inceleyip gerekli düzenlemeleri yapacağım. Hemen işe koyuluyorum.
GitHub deposunu klonlayıp, mevcut dosyaları incelemeye başladım. Kayıt ve giriş sorunlarını tespit edip düzeltmek öncelikli planım.

Depoyu klonlamaya çalıştım, ancak repo bulunamadı ve kullanıcı bilgisi de doğrulanmadı. Kullanıcı adını ve erişimleri kontrol edip, doğru repo ve kimlik bilgileriyle tekrar deneyip inceleyeceğim.

Depoyu doğru klonladım, dosyaları listeledim. Kullanıcı ve erişim bilgilerimi kontrol edip, giriş sorunlarını çözeceğim.

Kayıt işlemi JavaScript'te localStorage kullanıyor; giriş sorunlarını çözmek ve login.html'yi kontrol etmek gerekecek. Next adım login.html'yi incelemek.

Giriş sorunlarını çözmek için login.html'yi oluşturuyorum. Ayrıca, script.js'de localStorage kullanımı bulunuyor, login işlemi burada değil; bu yüzden login.html'yi düzenleyeceğim.

Giriş ve çıkış işlemlerini düzenlemek için login.html ve script.js dosyalarını oluşturdum. Giriş/ kayıt linkleri ve çıkış fonksiyonu eklendi, localStorage kullanımı plan dahilinde. Next, doğrulama ve login fonksiyonlarını ekleyeceğim.

Kayıt ve giriş sistemi üzerinde çalışıyorum; login.html ve script.js ile temel yapıyı oluşturdum. style.css'ye yeni sınıflar ekleniyor, değişiklikler GitHub'a yüklendi.

Lite
Web sitenizdeki kayıt ve giriş fonksiyonlarını başarıyla düzelttim ve tüm değişiklikleri GitHub deponuza (Web-Projesi1) gönderdim.
Yaptığım başlıca düzenlemeler şunlardır:
Eksik Login Sayfası Oluşturuldu: Projenizde login.html ve login.js dosyaları eksikti, bu dosyaları oluşturarak giriş sistemini aktif hale getirdim.
Kayıt Sistemi Düzeltildi: register.js dosyasındaki yönlendirme hatasını giderdim. Artık kullanıcı kayıt olduğunda veriler localStorage üzerine kaydediliyor ve kullanıcı giriş sayfasına yönlendiriliyor.
Giriş Sistemi Entegre Edildi: login.js ile kayıtlı kullanıcının bilgilerini kontrol eden ve başarılı girişte ana sayfaya yönlendiren mantığı kurdum.
Ana Sayfa (Index) Güncellendi: Sağ üst köşeye "Giriş Yap" ve "Kayıt Ol" butonları eklendi. Giriş yapıldığında bu butonlar gizlenerek kullanıcı adı ve "Çıkış" butonu görünecek şekilde dinamik hale getirildi.
Tasarım Uyumu: Yeni eklenen sayfalar ve butonlar mevcut style.css ve register.css dosyalarınızla tam uyumlu olacak şekilde stilize edildi.
Artık kullanıcılarınız sorunsuz bir şekilde kayıt olabilir ve giriş yaparak siteyi kullanabilirler. Değişiklikleri deponuzda görebilirsiniz.
login.html
Kod · 638 B
login.js
Kod · 1.10 KB
register.html
Kod · 782 B
register.js
Kod · 1.16 KB
index.html
Kod · 2.36 KB
script.js
Kod · 5.15 KB
style.css
Kod · 2.99 KB
Bu görevdeki tüm dosyaları görüntüle
Görev tamamlandı
Bu sonucun nasıl olduğunu düşündünüz?
Önerilen devam soruları


GitHubGmailTarayıcım

login.js
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
Araç Parçası Sitesinde Kayıt Sorununu Çözme - Manus
