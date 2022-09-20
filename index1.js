function randomInRange() {
    const numbers = {};
    for (let i = 0; i < this.range; i++) {
        const num = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        if (numbers[num]) { numbers[num] += 1; }
        else { numbers[num] = 1; }
    }
    return numbers;
}
const task = {
    min: 3,
    max: 7,
    range: 10000000
}
const solution = randomInRange.bind(task);
console.log(solution());
console.log('');
