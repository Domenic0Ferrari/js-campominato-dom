// selezionare gli elementi del DOM
const eleHelp = document.querySelector('.help');
const eleGrid = document.querySelector('.grid');
const btnPlay = document.querySelector('#play');
const selectLevel = document.querySelector('#level');
let bomb = []; /* all'inizio è vuoto */
let score;
let nCells;

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
	bomb = generateRandomArray(1, nCells, 16);
	console.log(bomb);

	// generare la griglia
	createGrid(nCells, eleGrid);
});






/* FUNCTION DEFINITIONS */
function createGrid(nCells, eleContainer){
	console.log(nCells);

	const side = Math.sqrt(nCells);

	// pulisco il container dall'eventuale griglia precedente
	eleContainer.innerHTML = '';

	for (let i = 1; i <= nCells; i++) {
		// creaiamo la cella e la formattiamo
		const eleCell = document.createElement('div');
		eleCell.innerHTML = i;
		eleCell.classList.add('cell');
		bomb.includes(i) ? eleCell.classList.add('mine-helper') : ''; 

		eleContainer.append(eleCell);
		// aggiungere l'event listener alla cella appena creata
		eleCell.addEventListener('click', cellClick);
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



function cellClick() {
	console.log(this);
	console.log('Hai cliccato la cella ' + this.innerHTML)
	numCell = parseInt(this.innerHTML);
	if(bomb.includes(numCell)){
		this.classList.add('mine')
		// fermare il gioco
		const cells = document.querySelectorAll('.cell');
		for (let i = 0; i < cells.length; i++){
			cells[i].removeEventListener('click', cellClick);
			const numCell = parseInt(cells[i].innerHTML);
			bomb.includes(numCell) ? cells[i].classList.add('mine') : '';
		}
		// dire il punteggio
		console.log('punteggio: ', score);
	}else{
		this.classList.add('clicked');
		score++;
	}
}