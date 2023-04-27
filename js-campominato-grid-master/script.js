// selezionare gli elementi del DOM
const eleHelp = document.querySelector('.help');
const eleGrid = document.querySelector('.grid');
const btnPlay = document.querySelector('#play');
const selectLevel = document.querySelector('#level');
let bomb = []; /* all'inizio è vuoto */

btnPlay.addEventListener('click', function() {
	// nascondere il messaggio
	eleHelp.classList.add('hidden');

	// mostrare la griglia
	eleGrid.classList.remove('hidden');

	// leggere il livello per determinare il numero di celle
	const nCells = parseInt(selectLevel.value);

	// aggiustare lo style della griglia
	eleGrid.style.setProperty('--sideSquare', Math.sqrt(nCells));

	// calcolo delle bombe
	
	let randomNum
		do{
			for(let i = 0; i < 16; i++){
			randomNum = getRandomInteger(1, nCells);
		}}while (bomb.includes(randomNum));
	bomb.push(randomNum);
	console.log(bomb);

	// generare la griglia
	createGrid(nCells, eleGrid);
});






/* FUNCTION DEFINITIONS */
function createGrid(nCells, eleContainer) {
	console.log(nCells);

	const side = Math.sqrt(nCells);

	// pulisco il container dall'eventuale griglia precedente
	eleContainer.innerHTML = '';

	for (let i = 1; i <= nCells; i++) {
		// creaiamo la cella e la formattiamo
		const eleCell = document.createElement('div');
		eleCell.innerHTML = i;
		eleCell.classList.add('cell');

		eleContainer.append(eleCell);
		// aggiungere l'event listener alla cella appena creata
		eleCell.addEventListener('click', function() {
			console.log(this);
			console.log('Hai cliccato la cella ' + this.innerHTML)
			this.classList.toggle('clicked');
		});
	}
}

// per generare numeri casuali

function getRandomInteger(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// per inserire nell'array i numeri e verificare siano corretti

function generateRandomArray(min, max, nElements){
	let arr = [];
	for (let i = 0; i < nElements; i++){
		let randomNum;
		do{
			randomNum = getRandomInteger(min, max);
		} while (arr.includes(randomNum));
		arr.push(randomNum);
	}
	return arr;
}