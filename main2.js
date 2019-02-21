// Validation du champ vide
function check_empty() {
	if (
		document.getElementById('name').value == '' ||
		document.getElementById('email').value == '' ||
		document.getElementById('msg').value == ''
	) {
		alert('Fill All Fields !');
	} else {
		document.getElementById('form').submit();
		alert('Form Submitted Successfully...');
	}
}
//Fonction afficher Popup
function div_show() {
	document.getElementById('abc').style.display = 'block';
}
//Fonction cacher Popup
function div_hide() {
	document.getElementById('abc').style.display = 'none';
}
