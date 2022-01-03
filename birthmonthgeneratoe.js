let birthMonthMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
for (let i = 0; i < 50; i++) {
    let birthGenerator = Math.floor(Math.random() * 12) + 1;
    let count = birthMonthMap.get(birthGenerator);
    birthMonthMap.set(birthGenerator, ++count);
}
console.log(birthMonthMap);