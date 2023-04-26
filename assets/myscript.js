/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Creare un bottone ed assegnare l'evento "click" e la funzione per creare la griglia
// Selezionare gli elementi del DOM necessari
// Generare la griglia
// Applicare gli event listeners a tutte le celle della griglia e stampare in console

let myButton = document.getElementById("play");
myButton.addEventListener('click', complete);


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
    } else if (value == "normal") {
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add( "grid_medium");
        createGrid(81, eleGrid);
    } else if (value == "hard") {
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add("grid_hard");
        createGrid(49, eleGrid);
    }

    const listCells = document.querySelectorAll('.cell');
    for (let i = 0; i < listCells.length; i++) {
	    const cell = listCells[i];
	    cell.addEventListener('click', colorCell);
    }
}
