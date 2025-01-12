/*import { auth } from "./register.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login başarılı:", userCredential.user);

        const user = userCredential.user;
        let panelUrl = "";

        if (email.endsWith("@ogr.dersimo.com")) {
            panelUrl = "http://127.0.0.1:5500/student.html";
        } else if (email.endsWith("@dersimo.com")) {
            panelUrl = "http://127.0.0.1:5500/teacher.html";
        } else if (email.endsWith("@parent.dersimo.com")) {
            panelUrl = "http://127.0.0.1:5500/parent.html";
        } else {
            throw new Error("Yetkisiz giriş denemesi.");
        }

        // Yeni sekmede yönlendirme
        window.open(panelUrl, "_blank");
    } catch (error) {
        console.error("Giriş sırasında bir hata oluştu:", error);
        alert("Login başarısız: " + error.message);
    }
});
*/
// Firebase SDK'larından gerekli fonksiyonları içe aktar
import { auth } from "./register.js";  // Firebase authentication'ı register.js'ten alıyoruz
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Login formu submit işlemi
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Sayfanın yeniden yüklenmesini engelle

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Kullanıcıyı Firebase Authentication ile giriş yapma
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login başarılı:", userCredential.user);

        const user = userCredential.user;
        let panelUrl = "";

        // Kullanıcı mail adresine göre uygun paneli seç
        if (email.endsWith("@ogr.dersimo.com")) {
            panelUrl = "student.html";  // Öğrenci paneline yönlendirme
        } else if (email.endsWith("@dersimo.com")) {
            panelUrl = "teacher.html";  // Öğretmen paneline yönlendirme
        } else if (email.endsWith("@parent.dersimo.com")) {
            panelUrl = "parent.html";   // Veli paneline yönlendirme
        } else if (email.endsWith("@admin.dersimo.com")) {
            panelUrl = "admin.html";
        } else {
            throw new Error("Yetkisiz giriş denemesi.");
        }

        // Yeni sayfaya yönlendirme
        window.location.href = panelUrl;  // Kullanıcıyı seçilen panele yönlendir
    } catch (error) {
        console.error("Giriş sırasında bir hata oluştu:", error);
        alert("Login başarısız: " + error.message);  // Hata mesajını göster
    }
});
