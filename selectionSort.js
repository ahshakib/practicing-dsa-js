function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const arr = [2,5,1,4,3];
console.log(selectionSort(arr));