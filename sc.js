
function changeBackgroundColorToRed() {
	document.body.style.backgroundColor = 'red';
}

function changeBackgroundColorToBlue() {
	document.body.style.backgroundColor = 'blue';
}

function changeBackgroundColor(event) {
	evt.preventDefault();
	console.log('I was clicked!');
	console.log(evt);
	evt.target.style.backgroundColor = 'red';
}

const board = document.querySelector('.game_board');
const reset = document.querySelector('.game_reset');

board.addEventListener('click', changeBackgroundColor);

for (let i = 0; i < board.length; i++) {
	board[i].addEventListener('click', () => {
		if (
			board[i].style.backgroundColor != 'blue' &&
			board[i].style.backgroundColor != 'red'
		) {
			if (player1) {
				board[i].style.backgroundColor = 'red';
				console.log('turn red');
				player1 = false;
			} else {
				board[i].style.backgroundColor = 'blue';
				console.log('turn blue');
				player1 = true;
			}
		}
	});
}

reset.addEventListener('click', refreshPage);
function changeBackgroundColorToBlue() {
	document.body.style.backgroundColor = 'blue';
	function refreshPage() {
		if (confirm('Are you ready to play again?')) {
			location.reload();
		}
	}
}
