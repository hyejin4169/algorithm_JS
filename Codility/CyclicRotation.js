let A = [1, 2, 3, 4]
let K = 3

function solution(A, K){
    if (!A.length) {
        return [];
    }
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
    return A;
}

console.log(solution(A, K))