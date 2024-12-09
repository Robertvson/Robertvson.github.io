//Translation Vars:

const it = {
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
    //Heading and C1 R1 done, below C2 R1
    workExpTitle: "Esperienza",
    workExpCosa: "Insegnante di inglese e creatore di contenuti",
    workExpDiscorso: "In questo ruolo sono stato un insegnante di inglese e un creatore di contenuti. Ho creato contenuti interattivi per i clienti. In questo ruolo ho imparato come utilizzare vari strumenti per creare contenuti grafici. Ho appreso le seguenti abilita':",
    workExpL1: "Disegno grafico",
    workExpL2: "Analisi dei dati con Excel",
    workExpL3: "Base di UX",
    workExpL4: "Troubleshooting",
    workExpL5: "Moduli Condizionali",
    workExpL6: "Archiviazione e organizzazione dei dati in Zoho CRM",
    workExpL7: "Collaborazione di squadra",
    //C2 R1 Done, Below TEFL.
    teflTitle: "Certificato TEFL",
    teflDiscorso: "Questo certificato mi da' la possibilita' di insegnare l'inglese come lingua straniera. Le competenze che ho acquisito durante il corso sono:",
    teflL1: "Essere in grado di pianificare e svolgere le lezioni",
    teflL2: "Grammatica inglese in dettaglio",
    teflL3: "Organizzazione e pianificazione",
    teflL4: "Puntualita'",
    teflL5: "Comunicazione",
    teflL6: "Principi di insegnamento",
    teflL7: "Presentare informazioni",
    //TEFL done, now Egnlish Teacher Freelance
    eTFTitle: "Insegnante Inglese (Freelance)",
    eTFDove: "Anglo American School, Preply e NativeCamp",
    eTFDiscorso: "Ho lavorato come insegnante di inglese per varie istituzioni per un anno, durante questo periodo ho acquisito e migliorato le mie competenze:",
    eTFL1: "Costruire rapporti con studenti provenienti da contesti diversi, compresi i bambini",
    eTFL2: "Usare il linguaggio del corpo e le espressioni facciali per superare una barriera linguistica",
    eTFL3: "Organizzare la mia agenda",
    eTFL4: "Pianificare in anticipo",
    eTFL5: "Anticipare malintesi o confusione da argomenti grammaticali",
    eTFL6: "Migliore comprensione delle culture",
    //ETF done now Front End Engineer Cert
    cATitle: "Certificato Ingegneria Font-End",
    cADove: "CodeAcademy (in corso)",
    cADiscorso: "Questo corso ha migliorato le mie precedenti competenze in HMTL e CSS e mi ha dato la possibilita' di fare un tentativo di irrompere nel mercato del lavoro attraverso un portfolio ben fatto. Preferisco invece fare i miei pezzi da zero che vedrete in fondo e in questa pagina web. Cose che ho imparato:",
    cAList1: "Fondamenti di HTML e CSS",
    cAList2: "Personalizzazione avanzata con CSS",
    cAList6: "Teoria del colore, accessibilita' e HTML semantico",
    //cA done now dog grooming, the hardest to translate IMHO
    dogTitle: "Toelettatore / assistente del toelettatore",
    dogDiscorso: "Ho lavorato in saloni di grooming per cani per 3 anni come assistente e 6 mesi come toelettatore. Sono qualificato. Ho seguito un corso intensivo di 2,5 mesi che ha coperto tutte le fasi del processo di preparazione. Ho superato il corso e ottenuto il certificato (Open College Network livello 3) Nonostante mi piaccia, non credo che sia la mia vera vocazione. Penso che i cani sono animali domestici migliori dei clienti. Ho imparato e migliorato le seguenti abilita':",
    dogList1: "Toelettatura dei Cani",
    dogList2: "Taglio tradizionale e di utilita'",
    dogList3: "Servizio clienti",
    dogList4: "Gestione del cane",
    dogList5: "Comportamento del cane",
    dogList6: "Controlli sanitari e di benessere dei cani",
    dogList7: "Mantenere un ambiente pulito, sicuro e igienico per lavorare con gli animali",
    //Back to english
    translateLink: "Back to English",
    //Additions
    
}




const traduzioneFunc = () => document.querySelectorAll('[data-traduzione]').forEach(el => {
    const key = el.getAttribute('data-traduzione'); // Access element's attribute
    el.textContent = it[key]; // Update element's content
});

document.getElementById('tradurre').onclick = traduzioneFunc
