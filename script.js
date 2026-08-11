// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// ===============================
// TUTUP MENU SETELAH LINK DIKLIK
// ===============================

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


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
                behavior: "smooth"
            });

        }

    });

});

function showService(service) {

    const modal = document.getElementById("serviceModal");
    const title = document.getElementById("serviceModalTitle");
    const text = document.getElementById("serviceModalText");
    const icon = document.getElementById("serviceModalIcon");

    const services = {

        visa: {
            icon: "🎫",
            title: "Tiket & Visa",
            text: "Bantuan informasi dan persiapan dokumen perjalanan serta kebutuhan visa Umroh."
        },

        transport: {
            icon: "🚌",
            title: "Transportasi",
            text: "Informasi dan pengaturan transportasi selama perjalanan Umroh agar perjalanan jamaah lebih nyaman."
        },

        hotel: {
            icon: "🏨",
            title: "Hotel",
            text: "Informasi pilihan akomodasi yang nyaman dan sesuai dengan kebutuhan jamaah selama berada di Tanah Suci."
        },

        catering: {
            icon: "🍽️",
            title: "Katering",
            text: "Informasi layanan konsumsi selama perjalanan untuk membantu memenuhi kebutuhan jamaah."
        },

        guide: {
            icon: "👥",
            title: "Pembimbing",
            text: "Pendampingan dan bimbingan perjalanan ibadah agar jamaah lebih nyaman, terarah, dan mendapatkan informasi yang dibutuhkan."
        }

    };

    const selected = services[service];

    if (!selected) return;

    icon.textContent = selected.icon;
    title.textContent = selected.title;
    text.textContent = selected.text;

    modal.classList.add("active");
}


function closeService() {

    const modal = document.getElementById("serviceModal");

    modal.classList.remove("active");
}


/* Tutup popup jika klik area luar */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("serviceModal");

    if (event.target === modal) {
        closeService();
    }

});
