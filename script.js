// Leeres Array für die 6 zu generierenden Gewinnzahlen
let lottoZahlen = [];

// Solange es noch keine 6 Zahlen sind, generieren wir neue
while (lottoZahlen.length < 6) {
    // Zufallszahl zwischen 1 und 49 generieren
    let zufallsZahl = Math.floor(Math.random() * 49) + 1;
    
    // zur Liste hinzufügen, wenn die Zahl noch nicht enthalten (keine Dopplung)
    if (!lottoZahlen.includes(zufallsZahl)) {
        lottoZahlen.push(zufallsZahl);
    }
}

// Zum Testen
// alert(lottoZahlen);

function zahlTippen() {
    // Startwert für die Übereinstimmungen ist 0
    let treffer = 0;

    /* Werte aus den 6 Inputs in Zahlen umwandeln mit Number(), damit wir rechnen können, 
    weil Inputs als String mit "X" übergeben werden */
    let tipp1 = Number(tippZahl1.value);
    let tipp2 = Number(tippZahl2.value);
    let tipp3 = Number(tippZahl3.value);
    let tipp4 = Number(tippZahl4.value);
    let tipp5 = Number(tippZahl5.value);
    let tipp6 = Number(tippZahl6.value);

    // Tippzahlen prüfen
    if (lottoZahlen.includes(tipp1)) { treffer = treffer + 1; }
    if (lottoZahlen.includes(tipp2)) { treffer = treffer + 1; }
    if (lottoZahlen.includes(tipp3)) { treffer = treffer + 1; }
    if (lottoZahlen.includes(tipp4)) { treffer = treffer + 1; }
    if (lottoZahlen.includes(tipp5)) { treffer = treffer + 1; }
    if (lottoZahlen.includes(tipp6)) { treffer = treffer + 1; }

    let lottoZahlenAusgabe = lottoZahlen.join(' ');

    // Treffer übermitteln
    ergebnis.innerHTML = '<br>Die Lottozahlen waren: ' + lottoZahlenAusgabe + '<br> Du hast <b>' + treffer + '</b> Richtige!';

    // Konfetti bei Gewinnen
    if (treffer == 6) {
        ergebnis.innerHTML += ' <br><br>🏆 JACKPOT! 🏆';
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['💸', '🤑', '💶'],
         });
    }
    if (treffer > 0 && treffer < 6) {
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['🪙'],
         });
    }
}