//por: Felipe Augusto Pereira Lemes
function decimalToBinary(decNumber) {
    const remStack = [];  // Array simples como uma pilha
    let number = decNumber;
    let binaryString = '';

    while (number > 0) {
        let rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while (remStack.length > 0) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

// Essa linha pode ser usada para testar o conversor
console.log(decimalToBinary(25));  // <---Coloque o numero que deseja conveter em ( )