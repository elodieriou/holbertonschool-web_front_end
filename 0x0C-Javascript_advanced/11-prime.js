function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            count++;
        }
    }
    return count;
}

function nTimes() {
    for (let i = 1; i <= 100; i++) {
        countPrimeNumbers();
    }
}

const start = performance.now();
setTimeout(() => { nTimes(); }, 0)
const timeTaken = performance.now() - start;
console.log(`Execution time of calculating prime numbers 100 times was ${timeTaken} milliseconds.`);
