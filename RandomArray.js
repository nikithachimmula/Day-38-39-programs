const ARRAY_LENGTH = 10
const randArray10 = []
for (i = 0; i < 10; i++) {
    randArray10.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}
console.log(randArray10);