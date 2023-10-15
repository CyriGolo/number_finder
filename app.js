let rdn = Math.round(Math.random() * 100);
let dmd;
do {
    dmd = parseInt(prompt("Donne moi un nombre"));
    if (isNaN(dmd)) {
        alert("Merci de rentrer un chiffre valide.")
    } else if (dmd === rdn) {
        alert("C'est GAGNÉ !")
    } else if (dmd < rdn) {
        alert("Ton nombre est trop petit, réessaye !")
    } else if (dmd > rdn) {
        alert("Ton nombre est trop grand, réessaye !")
    }
} while (dmd !== rdn);