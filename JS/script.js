const btns = document.querySelectorAll(".stage .btn");
const stages = document.querySelectorAll(".stage");
const main = document.querySelector("main");

// Funktion, der skal opdatere UI
const updateUI = (h2Text, pText, btnsText, imgPath) => {
    const section = document.createElement("section");
    section.classList.add("stage");
    section.classList.add("active");

    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    section.append(h2);

    // conditional statement - hvis billedet er der, skal det bruges

    if(imgPath != undefined) {
        const img = document.createElement("img");
        img.src = imgPath;
        section.append(img);
    }

    const p = document.createElement("p");
    p.textContent = pText;
    section.append(p);

    btnsText.forEach(text => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = text;
        button.addEventListener("click", nextStage);
        section.append(button);
    })

    // Sæt ny section ind i main
    main.replaceChildren(section);
    
}

// Funktion, der skal finde frem til, hvad der skal vises
const nextStage = (e) => {
    console.log(e.target.textContent);

    //herunder erklærer vi variabler uden at tildele dem værdi, da værdierne kommer i switchen
    let h2Text, pText, btnsText, imgPath;

    switch(e.target.textContent) {

        case "START": 
            h2Text = "Opret en konto"
            pText = "Du skal oprette en konto på en webshop. Hvordan vælger du dit password hertil?";
            btnsText = ["Bruger et nemt password", "Laver et komplekst password", "Genbruger et gammelt password"]; //placeholder text. det der skal stå på knapperne
        break;

        // et usikkert valg
        case "Bruger et nemt password":
            h2Text = "Ikke sikkert!";
            pText = "Du skriver det simple password '123456'. Din konto bliver hurtigt kompromitteret!"
            btnsText = ["Start forfra"];
            imgPath = "img/tyve.jpg";
            break;

        // det sikre valg
        case "Laver et komplekst password":
            h2Text = "Stærkt valg!";
            pText = "Du laver et stærkt password, som både består af specialtegn, tal og små som store bogstaver.";
            btnsText = ["Jeg gemmer det i browseren", "Jeg bruger en password-manager"];
            imgPath = "img/sikkerhed.jpg";
            break;

        // middel sikkerhed
        case "Jeg gemmer det i browseren":
            h2Text = "Pas på med dette"
            pText = "Det er en nem løsning, men det kan være usikkert, hvis du ikke bruger din egen computer eller i tilfælde af, at du glemmer at låse din computer."
            btnsText = ["Start forfra"];
            imgPath = "img/ninja.jpg";
            break;

        // det sikre valg
        case "Jeg bruger en password-manager":
            h2Text = "Stærkt valg!";
            pText = "Du bruger en password-manager og beskytter dermed dine oplysninger optimalt.";
            btnsText = ["Start forfra"];
            imgPath = "img/sikkerhed.jpg";
            break;

        // password genbrug
        case "Genbruger et gammelt password":
            h2Text = "Pas på!";
            pText = "Du genbruger et password fra en anden konto. Bliver den hacket, er du i fare for at din nye konto også bliver det.";
            btnsText = ["Lav et nyt password", "Fortsæt alligevel"];
            imgPath = "img/tyve.jpg";
            break;

        // lav et nyt password
        case "Lav et nyt password":
            h2Text = "Godt valgt!";
            pText = "Du vælger at lave et nyt og stærkt password. Hvad gør du nu?";
            btnsText = ["Jeg gemmer det i browseren", "Jeg bruger en password-manger"];
            imgPath = "img/sikkerhed.jpg";
            break;
        
        // sikkerhedsbristen
        case "Fortsæt alligevel":
            h2Text = "Konto kompromitteret!";
            pText = "Din konto bliver hacket via et datalæk fra en anden side";
            btnsText = ["Start forfra"];
            imgPath = "img/tyve.jpg";
            break;

        //start forfra
        case "Start forfra":
            h2Text = "Prøv igen";
            pText = "Træf nye valg og se om du kan forbedre din sikkerhed";
            btnsText = ["START"];
            imgPath = "img/start.jpg";
            break;



        case "Option 1":
            h2Text = "Overskrift Option 1";
            pText = "Lorem ipsum dolor sit amet";
            btnsText = ["Start forfra"];
            imgPath = "img/tyve.jpg";
            break;

        case "Option 2":
            h2Text = "Overskrift Option 2";
            pText = "Lorem ipsum dolor sit amet";
            btnsText = ["Start forfra"];
            break;

        case "Option 3":
            h2Text = "Overskrift Option 3";
            pText = "Lorem ipsum dolor sit amet";
            btnsText = ["Start forfra"];
            break;

        case "Start forfra":
            //console.log("Start forfra button was clicked");
            stages [2].classList.remove("active");
            stages [3].classList.remove("active");
            stages [4].classList.remove("active");
            stages [0].classList.add("active");

            break;

        default: console.log("Error");
    }

    //Herunder kalder vi den funktion vi har, der skal skabe interface. Derfor skriver vi navnet på funktionen
    updateUI(h2Text, pText, btnsText, imgPath);


}

for(const btn of btns) {
    btn.addEventListener("click", nextStage);
}