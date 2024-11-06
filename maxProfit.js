/*

Imagine you are buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by
buying low and selling high only once.

Here is what you are given:
    A list of stock price for each day = [7,1,5,3,6,4]

Here is what you need to find:
    The difference between the cheapest price you could have bought the stock and the most expensive price you could
    have sold it later on.

*/

function maxProfit(arr) {
    let min = arr[0]
    let max = 0
    for(let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i])
        max = Math.max(max, arr[i] - min)
    }
    return max
}

const arr = [7,1,5,3,6,4]
console.log(maxProfit(arr))