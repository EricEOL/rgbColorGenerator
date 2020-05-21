window.addEventListener('load', start);

function start(){

    var content = document.querySelector('#content');

    var red = document.querySelector('#red');
    var green = document.querySelector('#green');
    var blue = document.querySelector('#blue');

    var colorPainel = document.querySelector('#colorPainel');
    var inputsDiv = document.querySelector('#inputsdiv');

    var redPainel = document.querySelector('#redPainel');
    var greenPainel = document.querySelector('#greenPainel');
    var bluePainel = document.querySelector('#bluePainel');

    rgbChangeColor();
}

//colorPainel.addEventListener('mousemove', changeColor);

//changeColor(redValue(), greenValue(), blueValue());

//colorPainel.addEventListener('mousemove', rgbChangeColor);

content.addEventListener('input', rgbChangeColor);

function rgbChangeColor(){

    changeColor(redValue(), greenValue(), blueValue());
    changeRedColor(redValue());
    changeGreenColor(greenValue());
    changeBlueColor(blueValue());

    function changeColor(r, g, b){
        colorPainel.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    function changeRedColor(r){
        redPainel.style.backgroundColor = 'rgb(' + r + ',' + 0 + ',' + 0 + ')';
    }
    function changeGreenColor(g){
        greenPainel.style.backgroundColor = 'rgb(' + 0 + ',' + g + ',' + 0 + ')';
    }
    function changeBlueColor(b){
        bluePainel.style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + b + ')';
    }


red.addEventListener('click', redValue);
    function redValue(){
        var redvalue = red.value;
        console.log('Vermelho: ' + redvalue);

        var inputRed = document.querySelector('#redvalue');
        inputRed.value = redvalue;

        return redvalue;
    }

green.addEventListener('click', greenValue);
    function greenValue(){
        var greenvalue = green.value;
        console.log('Verde: ' + greenvalue);

        var inputGreen = document.querySelector('#greenvalue');
        inputGreen.value = greenvalue;

        return greenvalue;
}

blue.addEventListener('click', blueValue);
    function blueValue(){
        var bluevalue = blue.value;
        console.log('Azul: ' + bluevalue);

        inputBlue = document.querySelector('#bluevalue');
        inputBlue.value = bluevalue;

        return bluevalue;
}
}