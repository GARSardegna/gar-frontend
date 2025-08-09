document.addEventListener("DOMContentLoaded", () => {
    const notizie = [
        { titolo: "Nuova sentenza TAR Cagliari", data: "2025-08-07" },
        { titolo: "Aggiornamento normativa ambientale", data: "2025-08-05" },
        { titolo: "Commento alle ultime pronunce", data: "2025-08-03" }
    ];

    const lista = document.getElementById("lista-notizie");
    notizie.forEach(n => {
        const li = document.createElement("li");
        li.textContent = `${n.data} - ${n.titolo}`;
        lista.appendChild(li);
    });
});
