function randomInRange(min, max) {
    const numbers = {};
    for (let i = 0; i < 10000000; i++) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (numbers[num]) { numbers[num] += 1; }
        else { numbers[num] = 1; }
    }
    return numbers;
}
console.log(randomInRange(3, 7));
console.log('');
