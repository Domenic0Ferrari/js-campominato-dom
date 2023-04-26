/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// Creare un bottone ed assegnare l'evento "click" e la funzione per creare la griglia
// Selezionare gli elementi del DOM necessari
// Generare la griglia
// Applicare gli event listeners a tutte le celle della griglia e stampare in console

let myButton = document.getElementById("play");
myButton.addEventListener('click', complete);

let bomb = [];

// for (var i = 0; i < 16; i++) {
//   let bomb_number = getRandom(1,100);
//   bomb.push(bomb_number);
//   console.log(bomb_number);
// }


/* DEFINIRE LE FUNZIONI */

function createGrid(numCells, eleContainer) {
    eleContainer.innerHTML = "";
	for (let i = 1; i <= numCells; i++) {
		eleContainer.innerHTML += `<div class="cell"> ${i} </div>`;
	}
}

function colorCell() {
    console.log(this);
    this.classList.toggle('clicked');
}

function complete(){
    const eleGrid = document.querySelector('.grid');
    const eleDifficulty = document.querySelector('#mode');
    let value = eleDifficulty.options[eleDifficulty.selectedIndex].value;
    console.log(value);

    if (value == "easy") {
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add("grid_easy");
        createGrid(100, eleGrid);
        for (var i = 0; i < 16; i++) {
            let bomb_number = getRandom(1,100);
            bomb.push(bomb_number);
            console.log(bomb_number);
            }
    } else if (value == "normal") {
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add( "grid_medium");
        createGrid(81, eleGrid);
        for (var i = 0; i < 16; i++) {
            let bomb_number = getRandom(1,81);
            bomb.push(bomb_number);
            console.log(bomb_number);
            }
    } else if (value == "hard") {
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add("grid_hard");
        createGrid(49, eleGrid);
        for (var i = 0; i < 16; i++) {
            let bomb_number = getRandom(1,49);
            bomb.push(bomb_number);
            console.log(bomb_number);
            }
    }

    const listCells = document.querySelectorAll('.cell');
    for (let i = 0; i < listCells.length; i++) {
	    const cell = listCells[i];
	    cell.addEventListener('click', colorCell);
    }
}

function getRandom(min,max) {
  return Math.floor(Math.random() * (max-min +1) + min);
}