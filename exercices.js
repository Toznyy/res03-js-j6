/////////////////////////////////// Exercice 1

function affiche(){
    alert("Hello World!");
}

let timeoutId = setTimeout(affiche, 4200);

/////////////////////////////////// Exercice 2



function affiche2(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    console.log(`Il est ${hours} heures ${minutes} minutes et ${secondes} secondes`);
}

let intervalId = setInterval(affiche2, 4200);