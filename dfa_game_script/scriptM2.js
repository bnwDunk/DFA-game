
function transitionM2(state, symbol) {
    if (state === 'q0' && symbol === '0') return 'q3';
    if (state === 'q0' && symbol === '1') return 'q1';
    if (state === 'q1' && symbol === '0') return 'qt';
    if (state === 'q1' && symbol === '1') return 'q2';
    if (state === 'q2' && symbol === '0') return 'q2';
    if (state === 'q2' && symbol === '1') return 'q1';
    if (state === 'q3' && symbol === '0') return 'q3';
    if (state === 'q3' && symbol === '1') return 'q1';
   
    
    if (state === 'qt' && symbol === '0') return 'qt';
    if (state === 'qt' && symbol === '1') return 'qt';

    return state; // Stay in the current state for other symbols
}


function checkStringM2() {
    const inputString = document.getElementById('inputStringM2').value;  // id ของ input type=text == inputStringM2
    let currentState = 'q0';
    let check = true

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== '0' && inputString[i] !== '1') {
            check = false
         }
         else{
             currentState = transitionM2(currentState, inputString[i]);
        
         }
    }

    if ((currentState === 'q2' || currentState === 'q3' )&& check === true) {
        document.getElementById('resultM2').textContent = 'Accepted '; // id ของคำตอบ == resultM2
        document.getElementById('resultM2').style.color = '#03fc20';
        acceptedStrings.push(inputString);
        updateAcceptedStrings();
    } else {
        document.getElementById('resultM2').textContent = 'Rejected';
        document.getElementById('resultM2').style.color = '#f2112b';
    }
}

let acceptedStrings = [];
function updateAcceptedStrings() {
    const acceptedStringsList = document.getElementById('acceptedStrings');
    acceptedStringsList.innerHTML = '';

    for ( str of acceptedStrings) {
        if (str == ''){str='λ'}
        const listItem = document.createElement('li');
        listItem.textContent = str;
        acceptedStringsList.appendChild(listItem);
    }
}

document.getElementById('checkButton').addEventListener('click', function () {
    var trueRadio = document.querySelector('input[type="radio"][value="1"]:checked');

    if (trueRadio) {
        document.getElementById('s').style.display = "block";
        
    } else {
        document.getElementById('e').style.display = "block";
        
    }
});

function closepopup() {
    document.getElementById('close-popup').addEventListener('click', function () {
        document.getElementById('e').style.display = "none";
    });
}

var imageOrder = [1, 2, 3, 4]; 
shuffleArray(imageOrder); 

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setImageOrder(order) {
    var images = document.querySelectorAll(".form-check-input.form-img");
    for (var i = 0; i < images.length; i++) {
        var imageIndex = order[i] - 1;
        images[i].parentNode.querySelector("img").src = "../img_dfa/nomal/2/nomal2-" + imageOrder[imageIndex] + ".png";
        images[i].value = imageOrder[imageIndex];
    }
}
setImageOrder(imageOrder);