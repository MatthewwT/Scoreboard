let sum1 = document.getElementById("sum1")

let num1 = 0
document.getElementById("sum1").textContent = 0


function add1() {
    num1 += 1
    sum1.textContent = num1
}

function add2() {
    num1 += 2
    sum1.textContent = num1
}

function add3() {
    num1 += 3
    sum1.textContent = num1
}

let sum2 = document.getElementById("sum2")
document.getElementById("sum2").textContent = 0

let num2 = 0

function add4() {
    num2 += 1
    sum2.textContent = num2
}

function add5() {
    num2 += 2
    sum2.textContent = num2
}

function add6() {
    num2 += 3
    sum2.textContent = num2
}

function reset1() {
    num1 = 0
    num2 = 0
    document.getElementById("sum1").textContent = 0
    document.getElementById("sum2").textContent = 0
}
