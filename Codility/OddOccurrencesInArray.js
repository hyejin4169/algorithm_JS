let A = [9, 3, 9, 3, 9, 8, 9]

function solution(A) {
    const obj = {};

    for (let i = 0, arrLen = A.length; i < arrLen; i++) {
        const value = A[i];

        if (obj[value] === undefined) {
            obj[value] = value;
        } else {
            delete obj[value];
        }
    }

    const oddValue = Object.values(obj)[0];

    return oddValue;
}

console.log(solution(A))