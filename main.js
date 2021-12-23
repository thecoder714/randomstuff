const pi = Math.PI;

function random() {
    var a = 10 * Math.random();
    var b = 10 * Math.random();
    if (Math.pow(a, b).toFixed(0) < 1000) {
        random();
    } else if (Math.pow(a, b).toFixed(0) > 100000) {
        random();
    } else {
        document.getElementById("result").innerHTML = Math.pow(a, b).toFixed(0);
        return Math.pow(a, b).toFixed(0);
    }
}

function iterate() {
    for (let index = 0; index < 100; index++) {
        if (checkPrime(index)) {
            document.getElementById("para").innerHTML += index + "<br>";
        }
    }
}

function checkPrime(n) {
    var dvd = 0;
    var isPrime = false;
    for (let i = 2; i <= n; i++) {
        if (n % i != 0) {
            dvd++;
        }
    }
    if (dvd == n - 2) {
        isPrime = true;
    }
    return isPrime;
}

function area() {
    var radius = document.getElementById("inpu1").value;
    var circarea = radius * radius * pi;
    document.getElementById("1p").innerHTML = circarea;
}

var arr1 = [1, 3, 5, 7, 9];
var arr2 = [1, 2, 4, 5, 9];
var arr3 = [1, 4, 5, 7, 9];
var arr4 = [1, 2, 5, 6, 9];
var arr5 = [1, 2, 5, 7, 9];
var arr = [arr1, arr2, arr3, arr4, arr5];

function multiArrayIteration() {
    arr6 = arr.slice();
    document.getElementById("hcf").innerHTML = arr6.shift().filter(function (v) {
        return arr6.every(function (a) {
            return a.indexOf(v) !== -1;
        });
    });
}

function getPrimeFactors(number) {
    var factors = [];
    for (i = 2; i <= number; i++) {
        while (number % i === 0) {
            factors.push(i);
            number /= i;
        }
    }
    return factors;
}

function findHCF() {
    var number1 = document.getElementById("input1").value;
    var number2 = document.getElementById("input2").value;

    a = getPrimeFactors(number1);
    b = getPrimeFactors(number2);

    a.sort();
    b.sort();

    console.log();

    var common_array = b.filter((x) => a.includes(x));
    document.getElementById("hcf").innerHTML = Math.max(...common_array);
}

function convertToUnicode() {
    var input = document.getElementById("unicode").value;
    var output = [];
    for (let i = 0; i < input.length; i++) {
        output.push(input.charCodeAt(i));
    }
    document.getElementById("out").innerHTML = output;
}

function power2() {
    var limit = document.getElementById("power2input").value;
    var x = 1;
    var lastx = 0;
    for (let index = 0; index <= limit; index++) {
        x = lastx + x;
        lastx = x;
    }
    document.getElementById("power2x").innerHTML = x;
}

//-----------------------------------------------------------------



function makeID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-------------____________';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    document.getElementById("32ID").innerHTML = result;
    return result;
}