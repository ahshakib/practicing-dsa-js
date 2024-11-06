/*

Write a function that takes an array and a chunk size as input. The function should return a new array where the original
is split into chunks of the specified size.

chunkArray([1,2,3,4,5,6,7,8], 3)   ====>   [[1,2,3], [4,5,6], [7,8]]
chunkArray([1,2,3,4,5], 2)         ====>   [[1,2], [3,4]]

*/

function chunkArray (arr, chunk) {
    const arr1 = []
    let count = 0, l = 0, n = arr.length - 1
    for(let i = 0; i <= n; i++) {
        if(count <= chunk) {
            if(i%chunk === 0 && i !== 0) {
                arr1.push(arr.slice(l, i))
                l = i
                count++
            }
            else if(i === n) {
                arr1.push(arr.slice(l))
            }
        }
    }
    return arr1
}

// function chunkArray (arr, chunk) {
//     let i = 0
//     let n = arr.length
//     const arr1 = []
//     while(i < n) {
//         arr1.push(arr.slice(i, i + chunk))
//         i += chunk
//     }

//     return arr1
// }

const arr = [1,2,3,4,5,6,7,8]
console.log(chunkArray(arr,3))
const arr1 = [1,2,3,4,5]
console.log(chunkArray(arr1, 2))