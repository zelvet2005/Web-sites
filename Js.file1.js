document.querySelector('button').onclick = Click;

function Click() {
	let a = document.querySelector('.q').value;
	console.log(a);
	document.querySelector('.diver').innerHTML = a;
	alert('hello');
}