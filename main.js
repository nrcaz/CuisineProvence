// ANIMATION

let tomate = $('#tomate');
let steak = $('#steak');
let wine = $('#wine');
let seafood = $('#seafood');
let searchbar = $('#searchbar');

let icons = [
	tomate,
	steak,
	wine,
	seafood
];
console.log(innerWidth);
tomate.css({
	left : `${innerWidth}px`
});
steak.css({
	left : `${innerWidth}px`
});
wine.css({
	left : `${innerWidth}px`
});
seafood.css({
	left : `${innerWidth}px`
});

function animateIcon(element) {
	element.css({
		visibility : 'visible'
	});
	element.animate({ left: '5rem' }, 500).animate({ left: '5rem' }, 300).fadeOut();
}
function animateForm() {
	searchbar.animate(
		{
			opacity : '1'
		},
		500
	);
}
function animateSeafood() {
	animateIcon(seafood);
	setTimeout(animateForm, 1000);
}
function animateWine() {
	animateIcon(wine);
	setTimeout(animateSeafood, 1000);
}
function animateSteak() {
	animateIcon(steak);
	setTimeout(animateWine, 1000);
}
function animateTomate() {
	animateIcon(tomate);
	setTimeout(animateSteak, 1000);
}

setTimeout(animateTomate, 1000);

// MODALE

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// FORM HANDLING
document.querySelector('#searchbar').addEventListener('submit', function(e) {
	e.preventDefault();
	$(modal)
		.css({
			display : 'block',
			opacity : '0'
		})
		.animate(
			{
				opacity : '1'
			},
			300
		);
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
	span.onclick = function() {
		modal.style.display = 'none';
	};
});

// ELEMENTS
let buttonCook = $('#cook');
let buttonResto = $('#flemme');
let recette = $('#recette');
let resto = $('#resto');

// BUTTON Je cuisine

document.querySelector('#cook').addEventListener('click', function(e) {
	buttonCook.hide().fadeIn();
	buttonResto.hide().fadeIn();
	recette
		.css({
			display : 'block'
		})
		.hide()
		.fadeIn();
	resto.hide();
});
document.querySelector('#flemme').addEventListener('click', function(e) {
	buttonCook.hide().fadeIn();
	buttonResto.hide().fadeIn();
	resto
		.css({
			display : 'block'
		})
		.hide()
		.fadeIn();
	recette.hide();
});
