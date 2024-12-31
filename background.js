var body = document.getElementById('bdy');
var color1 = document.querySelector('.colorOne');
var color2 = document.querySelector('.colorTwo');
var h3 = document.querySelector('h3');

function colorGradient (){
    body.style.background = 
    'linear-gradient(to right, '
    + color1.value +', '
    + color2.value + ')';
    h3.textContent = body.style.background;
};

color1.addEventListener('input', colorGradient);

color2.addEventListener('input', colorGradient);