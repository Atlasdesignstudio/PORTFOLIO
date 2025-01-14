// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Language Toggle
// Translations for English and Spanish
const translations = {
    en: {
        home: "M.M.M",
        work: "WORK",
        contact: "CONTACT",
        name: "Mathias Meneses Mora",
        tagline: "Costa Rican Product Designer fueled by nature's inspiration.",
        portfolioBtn: "Portfolio",
    },
    es: {
        home: "M.M.M",
        work: "TRABAJOS",
        contact: "CONTACTO",
        name: "Mathias Meneses Mora",
        tagline: "Diseñador de productos costarricense inspirado por la naturaleza.",
        portfolioBtn: "Portafolio",
    },
};

let currentLanguage = "en"; // Default language

// Language toggle functionality
document.getElementById("lang-toggle").addEventListener("click", () => {
    // Toggle the language
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    updateLanguage(currentLanguage);
});

function updateLanguage(lang) {
    // Update button text
    document.getElementById("lang-toggle").textContent = lang === "en" ? "ES" : "EN";

    // Update text content for all elements with a `data-key` attribute
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}