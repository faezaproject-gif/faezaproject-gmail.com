/* ========================================
   FAEZA PROJECT
   MAIN JAVASCRIPT
======================================== */


/* ========================================
   NAVBAR MOBILE
======================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });


    // Tutup menu setelah memilih navigasi
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });

    });

}


/* ========================================
   SERVICE POPUP
======================================== */

const serviceItems = document.querySelectorAll(".service-item");


/* Membuat popup */

const servicePopup = document.createElement("div");

servicePopup.className = "service-popup";

servicePopup.innerHTML = `

    <div class="service-popup-overlay"></div>

    <div class="service-popup-box">

        <button class="service-popup-close"
                aria-label="Tutup">
            ×
        </button>

        <div class="service-popup-icon">
        </div>

        <h3 class="service-popup-title">
        </h3>

        <p class="service-popup-description">
        </p>

        <a class="service-popup-wa"
           href="#"
           target="_blank"
           rel="noopener">
            💬 KONSULTASI VIA WHATSAPP
        </a>

    </div>

`;

document.body.appendChild(servicePopup);


/* ========================================
   ELEMENT POPUP
======================================== */

const popupOverlay =
    servicePopup.querySelector(".service-popup-overlay");

const popupBox =
    servicePopup.querySelector(".service-popup-box");

const popupClose =
    servicePopup.querySelector(".service-popup-close");

const popupIcon =
    servicePopup.querySelector(".service-popup-icon");

const popupTitle =
    servicePopup.querySelector(".service-popup-title");

const popupDescription =
    servicePopup.querySelector(".service-popup-description");

const popupWhatsApp =
    servicePopup.querySelector(".service-popup-wa");


/* ========================================
   NOMOR WHATSAPP FAEZA PROJECT
======================================== */

const whatsappNumber = "6285715612700";


/* ========================================
   BUKA POPUP SERVICE
======================================== */

serviceItems.forEach(function (service) {

    service.addEventListener("click", function () {

        const title =
            service.getAttribute("data-title");

        const icon =
            service.getAttribute("data-icon");

        const description =
            service.getAttribute("data-description");


        /* Isi popup */

        popupIcon.textContent = icon;

        popupTitle.textContent = title;

        popupDescription.textContent = description;


        /* Pesan WhatsApp otomatis */

        const message =
            `Assalamualaikum Faeza Project, saya ingin konsultasi mengenai layanan ${title}.`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        popupWhatsApp.href = whatsappURL;


        /* Tampilkan popup */

        servicePopup.classList.add("active");

        document.body.classList.add("popup-open");

    });

});


/* ========================================
   TUTUP POPUP
======================================== */

function closeServicePopup() {

    servicePopup.classList.remove("active");

    document.body.classList.remove("popup-open");

}


/* Tombol X */

popupClose.addEventListener(
    "click",
    closeServicePopup
);


/* Klik area luar */

popupOverlay.addEventListener(
    "click",
    closeServicePopup
);


/* Tekan ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            servicePopup.classList.contains("active")
        ) {

            closeServicePopup();

        }

    }
);


/* ========================================
   PWA SERVICE WORKER
======================================== */

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        function () {

            navigator.serviceWorker
                .register("service-worker.js")
                .catch(function (error) {

                    console.log(
                        "Service Worker gagal:",
                        error
                    );

                });

        }
    );

}



    
