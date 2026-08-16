/* ========================================
   FAEZA PROJECT
   SCRIPT.JS - BAGIAN 1
======================================== */

/* ========================================
   MENU MOBILE
======================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    });

}


/* ========================================
   SMOOTH SCROLL
======================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (!targetId || targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* ========================================
   NOMOR WHATSAPP FAEZA PROJECT
======================================== */

const whatsappNumber =
    "6285715612700";

/* ========================================
   WHATSAPP TRACKING
======================================== */

function openWhatsApp(message, source = "website") {

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    console.log(
        "WhatsApp consultation:",
        source
    );

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* ========================================
   DATA KARTU LAYANAN
======================================== */

const serviceItems =
    document.querySelectorAll(".service-item");


/* ========================================
   VARIABEL POPUP
======================================== */

let serviceModal = null;


/* ========================================
   AKHIR BAGIAN 1
======================================== */

/* ========================================
   FAEZA PROJECT
   SCRIPT.JS - BAGIAN 2
   POPUP LAYANAN
======================================== */


/* ========================================
   MEMBUAT POPUP LAYANAN
======================================== */

function createServiceModal() {

    /* Kalau popup sudah dibuat,
       gunakan popup yang sama */

    if (serviceModal) {
        return serviceModal;
    }


    /* Membuat elemen popup */

    serviceModal =
        document.createElement("div");


    serviceModal.className =
        "service-modal";


    /* Isi popup */

    serviceModal.innerHTML = `

        <div class="service-modal-content">


            <!-- TOMBOL TUTUP -->

            <button
                type="button"
                class="service-modal-close"
                aria-label="Tutup"
            >

                ×

            </button>


            <!-- IKON -->

            <div class="service-modal-icon">

                ✨

            </div>


            <!-- JUDUL -->

            <h3 class="service-modal-title">

                Layanan Faeza Project

            </h3>


            <!-- DESKRIPSI -->

            <p class="service-modal-description">

                Silakan pilih layanan yang ingin
                dikonsultasikan.

            </p>


            <!-- WHATSAPP -->

            <a
                class="service-modal-wa"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >

                💬 KONSULTASI VIA WHATSAPP

            </a>


        </div>

    `;


    /* Masukkan popup ke halaman */

    document.body.appendChild(
        serviceModal
    );


    /* ====================================
       TOMBOL CLOSE
    ==================================== */

    const closeButton =
        serviceModal.querySelector(
            ".service-modal-close"
        );


    closeButton.addEventListener(
        "click",
        function () {

            closeServiceModal();

        }
    );


    /* ====================================
       KLIK AREA LUAR POPUP
    ==================================== */

    serviceModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === serviceModal
            ) {

                closeServiceModal();

            }

        }
    );


    return serviceModal;

}


/* ========================================
   MEMBUKA POPUP SESUAI LAYANAN
======================================== */

function openServiceModal(item) {


    /* Membuat popup */

    const modal =
        createServiceModal();


    /* ====================================
       AMBIL DATA DARI HTML
    ==================================== */

    const icon =
        item.dataset.icon ||
        "✨";


    const title =
        item.dataset.title ||
        "Layanan Faeza Project";


    const description =
        item.dataset.description ||
        "Silakan konsultasikan kebutuhan project Anda bersama Faeza Project.";


    /* ====================================
       AMBIL ELEMEN POPUP
    ==================================== */

    const iconElement =
        modal.querySelector(
            ".service-modal-icon"
        );


    const titleElement =
        modal.querySelector(
            ".service-modal-title"
        );


    const descriptionElement =
        modal.querySelector(
            ".service-modal-description"
        );


    const whatsappButton =
        modal.querySelector(
            ".service-modal-wa"
        );


    /* ====================================
       MASUKKAN DATA KE POPUP
    ==================================== */

    iconElement.textContent =
        icon;


    titleElement.textContent =
        title;


    descriptionElement.textContent =
        description;


    /* ====================================
       BUAT PESAN WHATSAPP OTOMATIS
    ==================================== */

    const message =

        "Assalamu'alaikum Faeza Project,\n\n" +

        "Saya ingin konsultasi mengenai layanan:\n" +

        title +

        "\n\n" +

        "Mohon informasi lebih lanjut.\n\n" +

        "Terima kasih.";


    /* ====================================
       LINK WHATSAPP
    ==================================== */

    whatsappButton.href =

        "https://wa.me/" +

        whatsappNumber +

        "?text=" +

        encodeURIComponent(message);


    /* ====================================
       TAMPILKAN POPUP
    ==================================== */

    modal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* ========================================
   MENUTUP POPUP
======================================== */

function closeServiceModal() {


    if (!serviceModal) {
        return;
    }


    serviceModal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* ========================================
   AKHIR BAGIAN 2
======================================== */

/* ========================================
   FAEZA PROJECT
   SCRIPT.JS - BAGIAN 3
======================================== */


/* ========================================
   HUBUNGKAN SEMUA KARTU LAYANAN
======================================== */

serviceItems.forEach(function (item) {

    item.addEventListener(
        "click",
        function () {

            openServiceModal(this);

        }
    );

});


/* ========================================
   TOMBOL ESC UNTUK MENUTUP POPUP
======================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeServiceModal();

        }

    }
);


/* ========================================
   STYLE POPUP LAYANAN
======================================== */

const popupStyle =
    document.createElement("style");


popupStyle.textContent = `


/* ========================================
   BACKGROUND POPUP
======================================== */

.service-modal {

    position: fixed;

    inset: 0;

    z-index: 99999;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 20px;

    background:
        rgba(0, 0, 0, 0.72);

    opacity: 0;

    visibility: hidden;

    transition:
        opacity 0.25s ease,
        visibility 0.25s ease;

}


/* ========================================
   POPUP AKTIF
======================================== */

.service-modal.active {

    opacity: 1;

    visibility: visible;

}


/* ========================================
   KOTAK POPUP
======================================== */

.service-modal-content {

    position: relative;

    width: min(
        520px,
        100%
    );

    max-height: 90vh;

    overflow-y: auto;

    padding:
        32px
        26px;

    text-align: center;

    background: #ffffff;

    border-radius: 18px;

    box-shadow:
        0 20px 60px
        rgba(0, 0, 0, 0.35);

    transform:
        translateY(20px)
        scale(0.97);

    transition:
        transform 0.25s ease;

}


/* ========================================
   ANIMASI POPUP
======================================== */

.service-modal.active
.service-modal-content {

    transform:
        translateY(0)
        scale(1);

}


/* ========================================
   TOMBOL CLOSE
======================================== */

.service-modal-close {

    position: absolute;

    top: 12px;

    right: 14px;

    width: 38px;

    height: 38px;

    border: none;

    border-radius: 50%;

    background: #f2f2f2;

    color: #333;

    font-size: 28px;

    line-height: 1;

    cursor: pointer;

    transition:
        background 0.2s ease,
        transform 0.2s ease;

}


.service-modal-close:hover {

    background: #e5e5e5;

    transform:
        rotate(90deg);

}


/* ========================================
   IKON
======================================== */

.service-modal-icon {

    margin-top: 8px;

    margin-bottom: 14px;

    font-size: 52px;

    line-height: 1;

}


/* ========================================
   JUDUL
======================================== */

.service-modal-title {

    margin:
        0 0 14px;

    font-size: 25px;

    font-weight: 700;

    color: #222;

}


/* ========================================
   DESKRIPSI
======================================== */

.service-modal-description {

    margin:
        0 auto 24px;

    max-width: 440px;

    font-size: 16px;

    line-height: 1.7;

    color: #555;

}


/* ========================================
   TOMBOL WHATSAPP
======================================== */

.service-modal-wa {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    min-height: 48px;

    padding:
        12px
        22px;

    border-radius: 10px;

    background: #d4af37;

    color: #ffffff;

    font-size: 14px;

    font-weight: 700;

    text-decoration: none;

    transition:
        transform 0.2s ease,
        opacity 0.2s ease;

}


.service-modal-wa:hover {

    transform:
        translateY(-2px);

    opacity: 0.9;

}


/* ========================================
   LOCK SCROLL SAAT POPUP TERBUKA
======================================== */

body.modal-open {

    overflow: hidden;

}


/* ========================================
   RESPONSIVE HP
======================================== */

@media (
    max-width: 480px
) {

    .service-modal {

        padding: 14px;

    }


    .service-modal-content {

        padding:
            30px
            18px
            22px;

    }


    .service-modal-icon {

        font-size: 44px;

    }


    .service-modal-title {

        font-size: 21px;

    }


    .service-modal-description {

        font-size: 14px;

        line-height: 1.65;

    }


    .service-modal-wa {

        width: 100%;

        font-size: 13px;

    }

}


`;


/* Masukkan CSS popup ke halaman */

document.head.appendChild(
    popupStyle
);


/* ========================================
   SCRIPT.JS SELESAI
======================================== */

/* ========================================
   SOCIAL SHARE
======================================== */

function shareToWhatsApp() {

    const text =
        "Faeza Project - Konsultasi & Pendampingan Project\n\n" +
        window.location.href;

    const url =
        "https://wa.me/?text=" +
        encodeURIComponent(text);

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


function shareToFacebook() {

    const url =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(window.location.href);

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}

/* =========================================
   FAEZA PROJECT
   SEARCH ENGINE - FINAL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchToggle = document.getElementById("searchToggle");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("siteSearch");
    const searchClose = document.getElementById("searchClose");
    const searchResults = document.getElementById("searchResults");

    if (
        !searchToggle ||
        !searchBox ||
        !searchInput ||
        !searchClose ||
        !searchResults
    ) {
        console.warn("Search Faeza Project: elemen tidak lengkap.");
        return;
    }


    /* =====================================
       DATA SEARCH
    ===================================== */

    const searchData = [

        {
            title: "Tentang Faeza Project",
            keywords: "tentang profil faeza project",
            target: "#about"
        },

        {
            title: "Layanan",
            keywords:
                "layanan jasa umroh event organizer multimedia muslim wear",
            target: "#services"
        },

        {
            title: "Portfolio",
            keywords:
                "portfolio karya desain project umroh wedding muslim wear branding",
            target: "#portfolio"
        },

        {
            title: "Proses Kerja",
            keywords:
                "proses kerja alur kerja konsultasi perencanaan pengerjaan finalisasi",
            target: "#alur-kerja"
        },

        {
            title: "Kontak",
            keywords:
                "kontak konsultasi whatsapp hubungi faeza project",
            target: "#cta"
        },

        {
            title: "Blog",
            keywords:
                "blog artikel informasi berita panduan",
            target: "blog.html"
        }

    ];


    /* =====================================
       BUKA SEARCH
    ===================================== */

    searchToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        searchBox.classList.add("active");

        setTimeout(function () {

            searchInput.focus();

        }, 150);

    });


    /* =====================================
       TUTUP SEARCH
    ===================================== */

    function closeSearch() {

        searchBox.classList.remove("active");

        searchInput.value = "";

        searchResults.innerHTML = "";

    }


    searchClose.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        closeSearch();

    });


    /* =====================================
       FUNGSI SEARCH
    ===================================== */

    function performSearch() {

        const query =
            searchInput.value
            .trim()
            .toLowerCase();


        searchResults.innerHTML = "";


        if (!query) {

            return;

        }


        const words =
            query
            .split(/\s+/)
            .filter(Boolean);


        const matches =
            searchData.filter(function (item) {

                const text =
                    (
                        item.title +
                        " " +
                        item.keywords
                    )
                    .toLowerCase();


                return words.every(function (word) {

                    return text.includes(word);

                });

            });


        /* =================================
           TIDAK ADA HASIL
        ================================= */

        if (!matches.length) {

            searchResults.innerHTML = `

                <div class="search-empty">

                    🔎 Tidak ditemukan

                    <br>

                    <small>
                        Coba kata lain seperti
                        Portfolio, Layanan, Blog,
                        Proses, atau Kontak.
                    </small>

                </div>

            `;

            return;

        }


        /* =================================
           HASIL SEARCH
        ================================= */

        matches.forEach(function (item) {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "search-result-item";


            button.innerHTML = `

                <strong>
                    ${item.title}
                </strong>

                <span>
                    ${item.keywords}
                </span>

            `;


            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();


                    const target =
                        item.target;


                    closeSearch();


                    /* =========================
                       BLOG
                    ========================= */

                    if (
                        target === "blog.html"
                    ) {

                        window.location.href =
                            "blog.html";

                        return;

                    }


                    /* =========================
                       SECTION
                    ========================= */

                    const section =
                        document.querySelector(
                            target
                        );


                    if (section) {

                        setTimeout(function () {

                            section.scrollIntoView({

                                behavior: "smooth",

                                block: "start"

                            });

                        }, 100);

                    }

                }
            );


            searchResults.appendChild(
                button
            );

        });

    }


    /* =====================================
       KETIKA MENGETIK
    ===================================== */

    searchInput.addEventListener(
        "input",
        performSearch
    );


    /* =====================================
       ENTER
    ===================================== */

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                const firstResult =
                    searchResults.querySelector(
                        ".search-result-item"
                    );


                if (firstResult) {

                    firstResult.click();

                }

            }


            /* =============================
               ESC
            ============================= */

            if (
                event.key === "Escape"
            ) {

                event.preventDefault();

                closeSearch();

            }

        }
    );


    /* =====================================
       KLIK DI LUAR SEARCH
    ===================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                searchBox.classList.contains("active") &&
                !searchBox.contains(event.target) &&
                event.target !== searchToggle
            ) {

                closeSearch();

            }

        }
    );


    /* =====================================
       SELESAI
    ===================================== */

    console.log(
        "Faeza Project Search aktif."
    );

});

                            
