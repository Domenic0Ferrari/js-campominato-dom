// selezionare gli elementi del DOM
const eleHelp = document.querySelector('.help');
const eleGrid = document.querySelector('.grid');
const btnPlay = document.querySelector('#play');
const selectLevel = document.querySelector('#level');

btnPlay.addEventListener('click', function() {
	// nascondere il messaggio
	eleHelp.classList.add('hidden');

	// mostrare la griglia
	eleGrid.classList.remove('hidden');

	// leggere il livello per determinare il numero di celle
	const nCells = parseInt(selectLevel.value);

	// switch (selectLevel.value) {
	// 	case 'easy':
	// 		createGrid(100, eleGrid);
	// 		break;
	// 	case 'hard':
	// 		createGrid(81, eleGrid);
	// 		break;
	// 	case 'crazy':
	// 		createGrid(49, eleGrid);
	// 		break;
	// }

	// aggiustare lo style della griglia
	eleGrid.style.setProperty('--sideSquare', Math.sqrt(nCells));

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
		// eleCell.style.width = `calc(100% / ${side})`;
		// eleCell.style.height = `calc(100% / ${side})`;
		eleContainer.append(eleCell);
		// aggiungere l'event listener alla cella appena creata
		eleCell.addEventListener('click', function() {
			console.log(this);
			console.log('Hai cliccato ls cella ' + this.innerHTML)
			this.classList.toggle('clicked');
		});
	}
}
