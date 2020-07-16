//create a boiler plate and divs with 9 squares for 3*3 game board in html
//create reset button in html
//grab buttons for each square
let square1 = document.querySelector('.square1');
	 let square2 = document.querySelector('.square2');
	 let square3 = document.querySelector('.square3');
	 let square4 = document.querySelector('.square4');
	 let square5 = document.querySelector('.square5');
	 let square6 = document.querySelector('.square6');
	 let square7 = document.querySelector('.square7');
	 let square8 = document.querySelector('.square8');
	 let square9 = document.querySelector('.square9');
//create a function for winning condition
function handlePlayer(){
	if(square1.innerHTML!== '' && square1.innerHTML=== square2.innerHTML && square1.innerHTML===square3.innerHTML){
		console.log("win");
	}else if(square4.innerHTML!== '' && square4.innerHTML===square5.innerHTML && square4.innerHTML=== square6.innerHTML){
		console.log("win");
	}else if(square7.innerHTML!== '' && square7.innerHTML ===square8.innerHTML && square7.innerHTML ===square9.innerHTML){
		console.log("win");
	}else if(square1.innerHTML!== '' && square1.innerHTML ===square4.innerHTML && square1.innerHTML ===square7.innerHTML){
		console.log("win");
}else if(square2.innerHTML!== '' && square2.innerHTML ===square5.innerHTML && square2.innerHTML ===square8.innerHTML){
		console.log("win");
}else if(square3.innerHTML!== '' && square3.innerHTML ===square6.innerHTML && square3.innerHTML ===square9.innerHTML){
		console.log("win");
}else if(square4.innerHTML!== '' && square4.innerHTML ===square5.innerHTML && square4.innerHTML ===square6.innerHTML){
		console.log("win");
}else if(square1.innerHTML!== '' && square1.innerHTML ===square5.innerHTML && square1.innerHTML ===square9.innerHTML){
		console.log("win");
}else if(square3.innerHTML!== '' && square3.innerHTML ===square5.innerHTML && square3.innerHTML ===square7.innerHTML){
		console.log("win");
}
}

//add event listnerer to each button
//add color to squares