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
        case "Start": 
            h2Text = "Overskrift"
            pText = "Lorem ipsum dolor sit amet";
            bntsText = ["Option 1", "Option 2", "Option 3"]; //placeholder text. det der skal stå på knapperne

        break;

        case "Option 1":
            h2Text = "Overskrift Option 1";
            pText = "Lorem ipsum dolor sit amet";
            bntsText = ["Start forfra"];
            break;

        case "Option 2":
            h2Text = "Overskrift Option 2";
            pText = "Lorem ipsum dolor sit amet";
            bntsText = ["Start forfra"];
            break;

        case "Option 3":
            h2Text = "Overskrift Option 3";
            pText = "Lorem ipsum dolor sit amet";
            bntsText = ["Start forfra"];
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