function getValues() {
    let userString = document.getElementById('userString').value;
    let reversedString = reverseWithRecursion(userString);
    displayString(reversedString);
}

function reverseWithRecursion(userString, reversedString = '') {
    return userString.length == reversedString.length ? reversedString : reverseWithRecursion(userString, userString[reversedString.length] + reversedString);
}

function basicReverseString(userString) {
    let reversedString = '';
    for (let i = userString.length - 1; i >= 0; i--) reversedString += userString[i];
    return reversedString;
}

function reverseWithCharAt(userString) {
    let reversedString = '';
    for (let i = userString.length - 1; i >= 0; i--) reversedString += userString.charAt(i);
    return reversedString;
}

function reverseWithArray(userString) {
    let userArray = userString.split('');
    let reversedArray = [];
    let reversedString = '';
    for (let i = 0; i < userArray.length; i++) reversedArray.unshift(userArray[i]);
    for (let i = 0; i < reversedArray.length; i++) reversedString += reversedArray[i];
    return reversedString;
}

function displayString(reversedString) {
    document.getElementById('results').textContent = reversedString;
    document.getElementById('alert').classList.remove('invisible')
}