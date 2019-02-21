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
	element.animate({ left: '4rem' }, 500).animate({ left: '4rem' }, 300).fadeOut();
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
