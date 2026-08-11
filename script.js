// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

}


// ===============================
// TUTUP MENU SETELAH LINK DIKLIK
// ===============================

if (navMenu) {

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });

    });

}


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ===============================
// POPUP LAYANAN
// ===============================

const serviceModal = document.getElementById("serviceModal");
const serviceModalIcon = document.getElementById("serviceModalIcon");
const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalText = document.getElementById("serviceModalText");
const modalWA = document.querySelector(".modal-wa");


// Semua tombol / kartu layanan
const serviceItems = document.querySelectorAll(".service-item");


serviceItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const title = this.dataset.title;
        const icon = this.dataset.icon;
        const description = this.dataset.description;

        // Isi popup
        if (serviceModalIcon) {
            serviceModalIcon.textContent = icon || "✨";
        }

        if (serviceModalTitle) {
            serviceModalTitle.textContent = title || "Layanan Faeza Project";
        }

        if (serviceModalText) {
            serviceModalText.textContent =
                description || "Silakan konsultasikan kebutuhan project Anda.";
        }


        // Pesan WhatsApp otomatis sesuai layanan
        if (modalWA) {

            const message =
                "Assalamu'alaikum Faeza Project,%0A%0A" +
                "Saya ingin konsultasi mengenai layanan: " +
                title +
                ".%0A%0ATerima kasih.";

            modalWA.href =
                "https://wa.me/6285715612700?text=" +
                message;

        }


        // Tampilkan popup
        if (serviceModal) {
            serviceModal.classList.add("active");
        }

    });

});


// ===============================
// TUTUP POPUP
// ===============================

function closeService() {

    if (serviceModal) {
        serviceModal.classList.remove("active");
    }

}


// ===============================
// KLIK AREA LUAR POPUP
// ===============================

if (serviceModal) {

    serviceModal.addEventListener("click", function (event) {

        if (event.target === serviceModal) {
            closeService();
        }

    });

}


// ===============================
// TOMBOL ESC UNTUK MENUTUP POPUP
// ===============================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeService();
    }

});
