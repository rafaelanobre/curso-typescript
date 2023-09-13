function multiply(num1:number, num2:number) {
    return num1 * num2;
}

function sum(num1:number, num2:number) {
    return num1 + num2;
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result:number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");

    if( typeof num1 !== "number" || typeof num2 !== "number"){
        return prompt("Não é possível executar com tal entrada")
    }
    
    let result = sum(num1,num2);
    result += multiply(1,2);
    showResult(result);
})();
