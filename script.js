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

const serviceItems =
    document.querySelectorAll(".service-item");


/* ========================================
   WHATSAPP FAEZA PROJECT
======================================== */

const whatsappNumber =
    "6285715612700";


/* ========================================
   DATA KHUSUS UMROH
======================================== */

const umrohDetails = {

    "Konsultasi Pilih Biro": {

        extra: `
            <div class="popup-extra">

                <strong>Yang dapat dikonsultasikan:</strong>

                <ul>
                    <li>Legalitas dan kredibilitas biro</li>
                    <li>Program dan fasilitas perjalanan</li>
                    <li>Perbandingan pilihan biro</li>
                    <li>Biaya dan komponen paket</li>
                    <li>Hal penting sebelum mendaftar</li>
                </ul>

            </div>
        `

    },


    "Persiapan Umroh": {

        extra: `
            <div class="popup-extra">

                <strong>Persiapan yang dapat dibahas:</strong>

                <ul>
                    <li>Dokumen dan administrasi</li>
                    <li>Perlengkapan jamaah</li>
                    <li>Persiapan perjalanan</li>
                    <li>Kebutuhan pribadi jamaah</li>
                    <li>Checklist sebelum keberangkatan</li>
                </ul>

            </div>
        `

    },


    "Pendampingan Jamaah": {

        extra: `
            <div class="popup-extra">

                <strong>Pendampingan meliputi:</strong>

                <ul>
                    <li>Memahami alur perjalanan</li>
                    <li>Persiapan sebelum keberangkatan</li>
                    <li>Informasi kebutuhan jamaah</li>
                    <li>Arahan selama proses perjalanan</li>
                    <li>Konsultasi kebutuhan jamaah</li>
                </ul>

            </div>
        `

    },


    "Konsultasi Program Umroh": {

        extra: `
            <div class="popup-extra">

                <strong>Pilihan program yang dapat dikonsultasikan:</strong>

                <ul>
                    <li>🕋 Umroh Reguler</li>
                    <li>⭐ Umroh Premium</li>
                    <li>🌙 Umroh Ramadhan</li>
                    <li>🤲 Umroh I'tikaf</li>
                    <li>✨ Program Khusus</li>
                </ul>

                <p class="popup-note">
                    Setiap program dapat memiliki karakteristik,
                    fasilitas, durasi, dan biaya yang berbeda.
                    Konsultasikan kebutuhan Anda sebelum menentukan pilihan.
                </p>

            </div>
        `

    },


    "Knowledge & Edukasi Umroh": {

        extra: `
            <div class="popup-extra">

                <strong>Materi knowledge & edukasi:</strong>

                <ul>
                    <li>🎫 Tiket perjalanan</li>
                    <li>🏨 Hotel dan akomodasi</li>
                    <li>🚌 Transportasi</li>
                    <li>🍽️ Catering</li>
                    <li>👥 Pembimbing</li>
                    <li>📑 Administrasi perjalanan</li>
                    <li>🧳 Persiapan jamaah</li>
                </ul>

                <p class="popup-note">
                    Materi edukasi membantu calon jamaah memahami
                    berbagai komponen perjalanan umroh sebelum memilih
                    dan mempersiapkan keberangkatan.
                </p>

            </div>
        `

    }

};


/* ========================================
   MEMBUAT POPUP
======================================== */

const servicePopup =
    document.createElement("div");

servicePopup.className =
    "service-popup";


servicePopup.innerHTML = `

    <div class="service-popup-overlay"></div>


    <div class="service-popup-box">


        <button
            class="service-popup-close"
            aria-label="Tutup">
            ×
        </button>


        <div class="service-popup-icon">
        </div>


        <h3 class="service-popup-title">
        </h3>


        <p class="service-popup-description">
        </p>


        <div class="service-popup-extra">
        </div>


        <a
            class="service-popup-wa"
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
    servicePopup.querySelector(
        ".service-popup-overlay"
    );


const popupClose =
    servicePopup.querySelector(
        ".service-popup-close"
    );


const popupIcon =
    servicePopup.querySelector(
        ".service-popup-icon"
    );


const popupTitle =
    servicePopup.querySelector(
        ".service-popup-title"
    );


const popupDescription =
    servicePopup.querySelector(
        ".service-popup-description"
    );


const popupExtra =
    servicePopup.querySelector(
        ".service-popup-extra"
    );


const popupWhatsApp =
    servicePopup.querySelector(
        ".service-popup-wa"
    );


/* ========================================
   BUKA POPUP
======================================== */

serviceItems.forEach(function (service) {

    service.addEventListener(
        "click",
        function () {


            const title =
                service.getAttribute(
                    "data-title"
                );


            const icon =
                service.getAttribute(
                    "data-icon"
                );


            const description =
                service.getAttribute(
                    "data-description"
                );


            /* Isi popup */

            popupIcon.textContent =
                icon;


            popupTitle.textContent =
                title;


            popupDescription.textContent =
                description;


            /* Tambahkan informasi khusus */

            if (umrohDetails[title]) {

                popupExtra.innerHTML =
                    umrohDetails[title].extra;

            } else {

                popupExtra.innerHTML =
                    "";

            }


            /* Pesan WhatsApp */

            const message =
                `Assalamualaikum Faeza Project, saya ingin konsultasi mengenai layanan ${title}.`;


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            popupWhatsApp.href =
                whatsappURL;


            /* Tampilkan popup */

            servicePopup.classList.add(
                "active"
            );


            document.body.classList.add(
                "popup-open"
            );

        }
    );

});


/* ========================================
   TUTUP POPUP
======================================== */

function closeServicePopup() {

    servicePopup.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "popup-open"
    );

}


/* Tombol X */

popupClose.addEventListener(
    "click",
    closeServicePopup
);


/* Klik background */

popupOverlay.addEventListener(
    "click",
    closeServicePopup
);


/* Tombol ESC */

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


            









    
