/*Створіть функцію getRandomArray(length, min, max)
– яка повертає масив випадкових цілих чисел.
У функції є параметри: length - довжина масиву,
min – мінімальне значення цілого числа,
max – максимальне значення цілого числа.
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2] */

function getRandomArray(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    document.writeln(`<p>${arr.join(", ")} --> масив випадкових цілих чисел</p>`);
    return arr;
}
const getArray = getRandomArray(15, 1, 100);
console.log(`${getArray} --> масив випадкових цілих чисел`);

/*Створіть функцію getAverage(...numbers) 
– яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */

function getAverage(...numbers) {
    const num = numbers.flat();
    const a = 0;
    const arr = num.length;
    let result = 0;
    const sum = num.reduce((previousValue, currentValue) => previousValue + currentValue, a);
    result = Math.floor(sum) / arr;
    document.write(`<p>${num.join(", ")} --> ${result.toFixed(1)} середнє арифметичне всіх переданих в неї аргументів</p>`);
    return `${num} --> ${result.toFixed(1)} середнє арифметичне всіх переданих в неї аргументів`;
}
const average = getAverage(getArray);
console.log(average);

/*Створіть функцію getMedian(...numbers) 
– яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
Приклад: getMedian(1, 2, 3, 4) –> 2.5 
Приклад: getMedian(1, 2, 3, 4, 5) –> 3 */

function getMedian(...numbers) {
    function sor(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    }
    const num = numbers.flat().sort(sor);
    let result = 0;
    num.map((elements, index, array) => {
        let evenOdd = array.length % 2;
        if (evenOdd === 0) {
            let half = array.length / 2;
            result = (array[half] + array[half - 1]) / 2;
        } else {
            let half = Math.floor(array.length / 2);
            result = array[half];
        }
    });
    document.writeln(`<p>${num.join(", ")} --> ${result} медіанa всіх переданих в неї аргументів</p>`);
    return `${num} --> ${result} медіанa всіх переданих в неї аргументів`;
}

const median = getMedian(getArray);
console.log(median);

/*Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

function filterEvenNumbers(...numbers) {
    const num = numbers.flat();
    let result = num.filter((a) => {
        return a % 2 !== 0 ? Math.floor(a) : false;
    });
    document.writeln(`<p>${num.join(", ")} --> ${result} непарні числа</p>`);
    return `${num} --> ${result} непарні числа`;
}

const filter = filterEvenNumbers(1, 2, 3, 4, 6, 16, 17, 23, 55);
console.log(filter);

/*Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */
function countPositiveNumbers(...numbers) {
    const num = numbers.flat();
    let count = 0;
    num.forEach((a) => {
        return a > 0 ? count++ : false;
    });
    document.writeln(`<p>${num.join(", ")} --> ${count}  кількість чисел більших 0</p>`);
    return `${num.join(", ")} --> ${count}  кількість чисел більших 0`;
}
const countPosNum = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(countPosNum);

/*Створіть функцію getDividedByFive(...numbers) 
– яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

function getDividedByFive(...numbers) {
    const num = numbers.flat();
    let result = num.filter((a) => {
        return a % 5 === 0 ? Math.floor(a) : false;
    });
    document.writeln(`<p>${num.join(", ")} --> ${result} діляться на число 5</p>`);
    return `${num.join(", ")} --> ${result} діляться на число 5`;
}

const getDivide = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 40, 87, 25, 2, 56, 3, 2);
console.log(getDivide);
