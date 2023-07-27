
function Union (arr1, arr2) {
        arr1.map(item => {
        arr2.push(item)
    })
    arr2.sort((item1, item2) => item1 - item2)
    console.log(arr2)
}

console.log(Union([1, 2, 3], [100, 2, 1, 10]));
