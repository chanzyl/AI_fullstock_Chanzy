var arr = ['a','b','c','d']
//arr.push('e')  在尾部插入
//arr.shift()
//arr.

for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 1
}
console.log(arr)


arr.forEach(function(item, index, arr){
    return item + 2;
})

//可以返回一个新数组
var newArr = arr.map(function(item, index, arr) {
    return item + 2;
})
console.log(newArr)

console.log(arr.IndexOf('a')) //从左往右查找，返回下标 
console.log(arr.includes('f')) //从左往右查找，返回true / flase
console.log(arr.lastIndexOf('b')) //从右往左查找，返回下标

var arr2 = [1, 2, 3]

console.log(arr.concat(arr2))//
console.log([].arr.concat(arr2))//数组拼接