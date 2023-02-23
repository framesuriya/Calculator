let elements = document.getElementsByClassName('tool__button');
let input = document.getElementById('input');
let set1 = 0;
let set2 = '';
let intSet2 = parseInt(set2)
let operator = ''
for (let i = 0; i < elements.length; i += 1) {
    elements[i].addEventListener('click', () => {
        if (elements[i].innerHTML === '=') {
            calculation(operator)
        } else if (elements[i].innerHTML === "÷") {
            operator = '÷';
            set1 = intSet2;
            intSet2 = 0;
            input.innerHTML = ''
        } else if (elements[i].innerHTML === "x") {
            operator = 'x';
            set1 = intSet2;
            intSet2 = 0;
            input.innerHTML = ''
        } else if (elements[i].innerHTML === "+") {
            operator = '+';
            set1 = intSet2;
            intSet2 = 0;
            input.innerHTML = ''
        } else if (elements[i].innerHTML === "-") {
            operator = '-';
            set1 = intSet2;
            intSet2 = 0;
            input.innerHTML = ''
        } else if (elements[i].innerHTML === 'C') {
            input.innerHTML = ''
            intSet2 = 0;
            set1 = 0;
            intSet2 = 0;
            set1 = 0;
        } else if (elements[i].innerHTML === 'Del') {
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1)
            set2 = input.innerHTML
            intSet2 = parseInt(set2)
        } else {
            input.innerHTML += elements[i].innerHTML;
            set2 = input.innerHTML
            intSet2 = parseInt(set2)
        }
        // console.log(`${intSet2} ' '${set1}`);
    })
}
calculation = (operator) => {
    if (operator === '+') {
        input.innerHTML = set1 + intSet2
        intSet2 = set1 + intSet2
    } else if (operator === '-') {
        input.innerHTML = set1 - intSet2
        intSet2 = set1 - intSet2
    } else if (operator === 'x') {
        input.innerHTML = set1 * intSet2
        intSet2 = set1 * intSet2
    } else if (operator === '÷') {
        input.innerHTML = set1 / intSet2
        intSet2 = set1 / intSet2
    }
}

