// Exemple 1 :
function maPromesse(isValid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isValid){
                resolve('Accepté');
            }
            else {
                reject('Refusé');
            }
        },1000)
    })
}
async function run(isValid) {
    try{
        let resultat = await maPromesse(isValid);
        console.log(resultat);
    }
    catch{
        console.log('Refusé');
    }
}
run(false);

// Exemple 2 :
function demandePaiement(validation){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(validation){
                resolve("Carte acceptée");
            }
            else {
                reject("Carte refusée");
            }
        }, 1000)
    })
}
async function run(validation) {
    try{
        let result = await demandePaiement(validation);
        console.log(result);
    }
    catch{
        console.log("Carte refusée");
    }
}
run(false);


// Exemple 3 :
function ticketCinema(valide){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(valide){
                resolve("ticket valide");
            }
            else {
                reject("ticket non-valide");
            }
        }, 1000)
    })
}
async function verification(valide){
    try{
        let affichage = await ticketCinema(valide);
        console.log(affichage);
    }
    catch{
        console.log("ticket non-valide");
    }
}
verification(false);

// Exemple 4 :

const eleveAge = prompt('Veuillez renseigner votre âge');

function age(eleveAge){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(eleveAge >= 18){
                resolve(`Vous pouvez passez votre permis de conduire.`);
            }
            else{
                reject(`Vous devez attendre d'avoir 18 ans.`);
            }
        }, 1000);
    })
}
async function verdict(eleveAge) {
    try{
        let reponse = await age(eleveAge);
        alert(reponse);
    }
    catch{
        alert(`Vous devez attendre d'avoir 18 ans.`);
    }
}
verdict(eleveAge);


