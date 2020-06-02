// Measure the performance of a algorithm
function sumUp(number) {
    let result = 0;
    for (let i = 0; i <= number; i++) {
        result = result + i;
    }

    return result;
}


let start = performance.now();
sumUp(10);  //call function
let end = performance.now();
console.log(end - start)



document.querySelector('#app').textContent = sumUp(4);
