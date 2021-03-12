//declaring variables
let rightN = 0;
let incorrectN = 0;
let totalN = 0;
let fNum = document.getElementById('firstNum');
let sNum = document.getElementById('secondNum');
let result;
let num1;
let num2;
let input = document.getElementById('input');
let ding = document.getElementById('ding');
let wrong = document.getElementById('wrong');
let right = document.getElementById('score');
let incorrect = document.getElementById('incorrect');
let total = document.getElementById('total');
let perc = document.getElementById('perc');
let percentage;

//calculates score
function scoreFinder() {
    percentage = (100 * rightN) / totalN;
    perc.innerHTML = percentage.toFixed(1) + '%';
}

//changes background of main to any random color
function changeBG() {
    let background = document.getElementById('body');
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    background.style.backgroundColor = '#' + randomColor;
}

//if answer is right, adds one to right, and calculates total
function rightAdder() {
    rightN++;
    right.innerHTML = rightN;
    totalN = rightN + incorrectN;
    total.innerHTML = totalN;
    scoreFinder();
}

//if answer is wrong, adds one to wrong, and calculates total
function wrongAdder() {
    incorrectN++;
    incorrect.innerHTML = incorrectN;
    totalN = rightN + incorrectN;
    total.innerHTML = totalN;
    scoreFinder();
}

//checks if enter is pressed and does the changes it needs
function enterCheck() {
    document.getElementById('input').onkeydown = function(event) {
        if (event.keyCode == 13) {
            if (input.value == result) {
                ding.play();
                numGen();
                input.value = '';
                changeBG();
                rightAdder();
            } else {
                input.value = '';
                wrong.play();
                wrongAdder();
            } 
        }
    }
}

//changes the order of the numbers, putting the bigger in front
function addOrder() {
    if (num1 > num2) {
        fNum.innerHTML = num1;
        sNum.innerHTML = num2;
    } else {
        fNum.innerHTML = num2;
        sNum.innerHTML = num1;
    }

    result = num1 + num2;
}

//changes the order of the numbers, putting the bigger in front so that the answer isn't negative 
function subOrder() {
    if (num1 > num2) {
        fNum.innerHTML = num1;
        sNum.innerHTML = num2;
        result = num1 - num2;
    } else {
        fNum.innerHTML = num2;
        sNum.innerHTML = num1;
        result = num2 - num1;
    }
}

//changes the order of the numbers, putting the bigger in front idk y tbh
function multOrder() {
    if (num1 > num2) {
        fNum.innerHTML = num1;
        sNum.innerHTML = num2;
    } else {
        fNum.innerHTML = num2;
        sNum.innerHTML = num1;
    }

    result = num1 * num2;
}

/*changes the order of the numbers, putting the bigger in front so that the answer is > 0 and 
this function contains an alg so the answer is always an int*/
function divOrder() {
    if (num1 > num2) {
        if (num1 % num2 != 0) {
            while (num1 % num2 != 0) {
                num2++
            }
        }
        fNum.innerHTML = num1;
        sNum.innerHTML = num2;
        result = num1 / num2;
    } else {
        if (num2 % num1 != 0) {
            while (num2 % num1 != 0) {
                num1++
            }
        }
        fNum.innerHTML = num2;
        sNum.innerHTML = num1;
        result = num2 / num1;
    }

}

//generates random number from 1- 4, and changes the operator depending on the random number. its basically the main function
function decidingOperator() {
    let operatorDecider = Math.round(Math.random() * 3.4) + 1;
    let operator = document.getElementById('operator');

    if (operatorDecider == 1) {
        operator.innerHTML = '+';
        num1 = Math.round(Math.random() * 20) + 1;
        num2 = Math.round(Math.random() * 10) + 1;

        addOrder();
        enterCheck();

    } else if (operatorDecider == 2) {
        operator.innerHTML = '-';
        num1 = Math.round(Math.random() * 20) + 1;
        num2 = Math.round(Math.random() * 10) + 1;

        subOrder();
        enterCheck();

    } else if (operatorDecider == 3) {
        operator.innerHTML = 'x';
        num1 = Math.round(Math.random() * 5) + 1;
        num2 = Math.round(Math.random() * 5) + 1;

        multOrder();
        enterCheck();

    } else if (operatorDecider == 4) {
        operator.innerHTML = '/';
        num1 = Math.round(Math.random() * 19.4) + 1;
        num2 = Math.round(Math.random() * 5.4) + 1;

        divOrder();
        enterCheck();
    }
}

function numGen() {
    decidingOperator();
}

numGen();














/*document.addEventListener('keyup', function(e){
    if(e.keyCode == 32)
      window.location.reload();
  }) */

  /*function spaceRefresh() {
    document.addEventListener('keyup', function(e){
        if(e.keyCode == 32)
          window.location.reload();
        })
}*/