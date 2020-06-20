// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
document.write(Array.isArray(a));
document.write(Array.isArray(b));
console.log(Array.isArray(a));
console.log(Array.isArray(b));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++){
      a[i]=a[i]*2
}
document.write(a);
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
document.write(colors.join(' '));
console.log(colors.join(' '));

document.write(colors.join('+'));
console.log(colors.join('+'));

document.write(colors.join(','));
console.log(colors.join(','));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
document.write(a.sort(function(a,b){return b-a}));
console.log(a.sort(function(a,b){return b-a}));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr) {
    if (!arr.length) return;
    if (arr.length === 1) return 1;
    var res = {};
    // 遍历数组
    for (var i = 0, l = arr.length; i < l; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }
    }
    // 遍历 res
    var keys = Object.keys(res);
    var maxNum = 0, maxEle;
    for (var i = 0, l = keys.length; i < l; i++) {
        if (res[keys[i]] > maxNum) {
            maxNum = res[keys[i]];
            maxEle = keys[i];
        }
    }
    return  maxEle ;
}

console.log(findMost(a));
document.write(findMost(a));
