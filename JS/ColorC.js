var bt1 = document.getElementById('power');
var bt2 = document.getElementById('amistosos');
var bt3 = document.getElementById('acogedores');
var bt4 = document.getElementById('orientadores');
var bt5 = document.getElementById('refrescante');
var bt6 = document.getElementById('profesional');
var texto = document.getElementById('text');

bt1.addEventListener('click', function(){

	texto.classList.add('txtu');
	texto.classList.remove('txtd');
	texto.classList.remove('txtt');
	texto.classList.remove('txtc');
	texto.classList.remove('txti');
	texto.classList.remove('txts');
	document.body.classList.add('bgu');
	document.body.classList.remove('bgd');	
	document.body.classList.remove('bgt');
	document.body.classList.remove('bgc');
	document.body.classList.remove('bgi');
	document.body.classList.remove('bgs');
});

bt2.addEventListener('click', function(){

texto.classList.remove('txtu');
texto.classList.add('txtd');
texto.classList.remove('txtt');
texto.classList.remove('txtc');
texto.classList.remove('txti');
texto.classList.remove('txts');
document.body.classList.remove('bgu');
document.body.classList.add('bgd');	
document.body.classList.remove('bgt');
document.body.classList.remove('bgc');
document.body.classList.remove('bgi');
document.body.classList.remove('bgs');
});

bt3.addEventListener('click', function(){

texto.classList.remove('txtu');
texto.classList.remove('txtd');
texto.classList.add('txtt');
texto.classList.remove('txtc');
texto.classList.remove('txti');
texto.classList.remove('txts');
document.body.classList.remove('bgu');
document.body.classList.remove('bgd');	
document.body.classList.add('bgt');
document.body.classList.remove('bgc');
document.body.classList.remove('bgi');
document.body.classList.remove('bgs');
});

bt4.addEventListener('click', function(){

texto.classList.remove('txtu');
texto.classList.remove('txtd');
texto.classList.remove('txtt');
texto.classList.add('txtc');
texto.classList.remove('txti');
texto.classList.remove('txts');
document.body.classList.remove('bgu');
document.body.classList.remove('bgd');	
document.body.classList.remove('bgt');
document.body.classList.add('bgc');
document.body.classList.remove('bgi');
document.body.classList.remove('bgs');
});

bt5.addEventListener('click', function(){

texto.classList.remove('txtu');
texto.classList.remove('txtd');
texto.classList.remove('txtt');
texto.classList.remove('txtc');
texto.classList.add('txti');
texto.classList.remove('txts');
document.body.classList.remove('bgu');
document.body.classList.remove('bgd');	
document.body.classList.remove('bgt');
document.body.classList.remove('bgc');
document.body.classList.add('bgi');
document.body.classList.remove('bgs');
});

bt6.addEventListener('click', function(){

texto.classList.remove('txtu');
texto.classList.remove('txtd');
texto.classList.remove('txtt');
texto.classList.remove('txtc');
texto.classList.remove('txti');
texto.classList.add('txts');
document.body.classList.remove('bgu');
document.body.classList.remove('bgd');	
document.body.classList.remove('bgt');
document.body.classList.remove('bgc');
document.body.classList.remove('bgi');
document.body.classList.add('bgs');
});