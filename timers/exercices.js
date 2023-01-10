/////////////////////////////////// Exercice 1

// function affiche(){
//     alert("Hello World!");
// }

// let timeoutId = setTimeout(affiche, 4200);

/////////////////////////////////// Exercice 2



// function affiche2(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let secondes = date.getSeconds();
//     console.log(`Il est ${hours} heures ${minutes} minutes et ${secondes} secondes`);
// }

// let intervalId = setInterval(affiche2, 4200);

/////////////////////////////////// Exercice 3

// let times = [1, 2, 3];

// function affiche3(truc) {
//     for (let i = 0; i < truc.length; i++) {
//         let timeoutId = setTimeout(function() {
//               console.log(truc[i]);
            
//         }, truc[i]*1000);
//     }
// }

// affiche3(times);

/////////////////////////////////// Exercice 4

let numbers = [32, 43, 56, 24, 78, 42,32, 43, 56, 24, 78, 42,32, 43, 56, 24, 78, 42];

function affiche4(truc) {
    for (let i = 0; i < truc.length; i++) {
        let timeoutId = setTimeout(function() {
            console.log(truc[i]);
        }, i*1000)
    }
}

affiche4(numbers);