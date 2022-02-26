let numberOne, numberTwo, operator, result;

CalculatorFunction = (userValue) => {
    numberOne = document.getElementById("number1").value;

    
    if(userValue == 'delete') {
        deleteACharacter();
        return;
    }
    else if(userValue == '='){
        calculateResult();
        return;
    }
    else if(userValue != '+' && userValue != '-' && userValue != '/' && userValue != '*'){
        if(document.getElementById("operator").value==''){
            numberOne = document.getElementById("number1").value + userValue;
            document.getElementById("number1").value = numberOne;
            return;
        }
        else{
            numberTwo = document.getElementById("number2").value + userValue;
            document.getElementById("number2").value = numberTwo;
            return;
        }
    }
    else if(numberOne == ''){
        alert(`Please, you need to pick a number first. Try again.`);
        return;
    }
    else if(userValue == '+' || userValue == '-' || userValue == '/' || userValue == '*'){
        if(document.getElementById("operator").value=='') document.getElementById("operator").value = userValue;
        return;
    }
    return;
}

clearInputs = () => {
    document.getElementById("number1").value = '';
    document.getElementById("operator").value = '';
    document.getElementById("number2").value = '';
}

calculateResult = () => {
    operator = document.getElementById("operator").value;
    switch(operator){
        case '+': result = parseInt(numberOne) + parseInt(numberTwo);
            break;
        case '-': result = parseInt(numberOne) - parseInt(numberTwo);
            break;
        case '*': result = parseInt(numberOne) * parseInt(numberTwo);
            break;
        case '/': result = parseInt(numberOne) / parseInt(numberTwo);
            break;
        default: alert(`something has been wrong, please try again.`);
            clearInputs();
            return;
    }
    alert(`Result: ${result}`);
    clearInputs();
    return;
}

deleteACharacter = () => {
    let numberToRemove;
    if(document.getElementById("operator").value == '' && document.getElementById("number2").value == ''){
        numberToRemove = document.getElementById("number1").value;
        numberOne = numberToRemove.substring(0, numberToRemove.length - 1);
        document.getElementById("number1").value = numberOne;
        return;
    }
    else if(document.getElementById("number2").value == ''){
        numberToRemove = document.getElementById("operator").value;
        operator = numberToRemove.substring(0, numberToRemove.length - 1);
        document.getElementById("operator").value = operator;
        return;
    }
    else if(document.getElementById("operator").value){
        numberToRemove = document.getElementById("number2").value;
        numberTwo = numberToRemove.substring(0, numberToRemove.length - 1);
        document.getElementById("number2").value = numberTwo;
        return;
    }
    return;
}