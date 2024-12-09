// Translation Vars
const translations = {
    it: {
        aspiring: 'Aspirante sviluppatore web',
        enTeach: 'Insegnante Inglese',
        contactme: 'Contattarmi',
        telWhats: 'Telefono o WhatsApp: +447391500329',
        perIt: 'Per chiamate italiane: +393311268678',
        info: 'Informazioni',
        eduMainTitle: 'Formazione',
        eduCosa: 'Higher National Diploma in Technical Support and Cyber Security (Diploma Nazionale Superiore di Supporto Tecnico con Sicurezza Cyber)',
        eduDiscorso: "Qui ho imparato i fondamenti del l'informatica, dal punto di vista hardware. Questo corso si e' concentrato sui seguenti argomenti:",
        eduListI1: "Architettura hardware e di sistema",
        eduListI2: "Reti, pratiche e teoriche",
        eduListI3: 'Troubleshooting',
        eduListI4: "Sistema del ticket e prioritizzazione",
        eduListI5: "Fondamenti di sicurezza informatica",
        eduListI6: "Bloccare le autorizzazioni per prevenire violazioni secutiy",
        eduListI7: "Fondamenti del HTML e CSS",
        translateLink: "Back to English",
    },
    en: {
        aspiring: 'Aspiring Web Developer',
        enTeach: 'English Teacher',
        contactme: 'Contact',
        telWhats: 'Telephone or WhatsApp: +447391500329',
        perIt: 'For local Italian Calls: +393311268678',
        info: 'Information',
        eduMainTitle: 'Education',
        eduCosa: 'HND in Technical Support and Cyber Security',
        eduDiscorso: "Here I learned the fundamentals of computer science, from a hardware perspective. This course focussed on the following topics:",
        eduListI1: "Hardware and System architecture",
        eduListI2: "Networking, practical and theoretic",
        eduListI3: 'Troubleshooting',
        eduListI4: "Ticketing and prioritisation",
        eduListI5: "Cyber security fundamentals",
        eduListI6: "Locking down permissions to prevent security breaches",
        eduListI7: "HTML and CSS fundamentals",
        translateLink: "Traduci in Italiano",
    }
};

// Current Language
let currentLanguage = 'en';

// Translation Function
const toggleTranslation = () => {
    // Determine the target language
    const targetLanguage = currentLanguage === 'en' ? 'it' : 'en';

    // Update all elements with `data-traduzione` attributes
    document.querySelectorAll('[data-traduzione]').forEach(el => {
        const key = el.getAttribute('data-traduzione');
        el.textContent = translations[targetLanguage][key];
    });

    // Update the button text
    document.getElementById('tradurre').textContent = translations[targetLanguage].translateLink;

    // Update the current language
    currentLanguage = targetLanguage;
};

// Attach the function to the button
document.getElementById('tradurre').onclick = toggleTranslation;
