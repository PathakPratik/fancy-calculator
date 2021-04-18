function initialize(){
    displayActive = document.getElementById('displayActive');
    displaySummary = document.getElementById('displaySummary');
}

function addValue(val){

    var displayLength = displayActive.textContent.length;
    if(!isNumber(parseInt(val)) && !isNumber(parseInt(displayActive.textContent[displayLength-1]))){
        return;
    }  

    displayActive.textContent += val;
}

function clearDisplay(){
    displayActive.textContent = '';
}

function clearLastDigit(){
    displayActive.textContent = displayActive.textContent.trim().slice(0, -1).trim();
}

function negate(){
    var res = - displayActive.textContent;
    
    if(!isNaN(res)) {
        displayActive.textContent = res;
    }
}

function displayResult(){
    displaySummary.textContent = displayActive.textContent;
    var res = displayActive.textContent.replace('x','*').replace('÷','/').replace(/[^-()\d/*+.]/g, '');
    displayActive.textContent = eval(res);
}

function isNumber(value) 
{
   return typeof value === 'number' && isFinite(value);
}