

// find factorial of the number value 5 of factorial 1*2*3*4*5 = 120
function factorial() {
    const val = parseInt(prompt('Enter the positive integer: '));
    console.log('val', val);

    if (val < 0) {
        console.log('factorial of negative value is not valid!!!');
    } else if (val === 0) {
        console.log(`factorial of ${val} is 1`);
    } else {
        let fact = 1;
        for (i = 1; i <= val; i++) {
            fact *= i;
        }
        console.log(`the factorial of ${val} is ${fact}.`);
    }
}

// 2^5
let number = 2;
let raisedTo = 5;

console.log(`the number of ${number ** raisedTo}`);
console.log(Math.pow(2, 5));


//set() remove duplicate value 
const set = new Set([1, 1, 2, 3, 4]);
console.log(set); // result = [1,2,3,4]

const fruits = ['apple', 'banana', 'orange'];
const [, , x] = fruits;
console.log(x); // result banana

const name = 'asdasfg'
console.log(!typeof name === 'object'); // false
console.log(!typeof name === 'string'); // false
console.log(!typeof name === false); // false === false // true
// here task perform from left to right
// typeof name = string then !typeof name = false if give "!" to the string it will be false then it compare the flase === 'object' which means it is false.


// check odd even
function checkOddEven() {
    let number = 89;
    if (number % 2) {
        console.log('the value is odd');
    } else {
        console.log('the value is even');
    }
}
checkOddEven();


// map vs forEach function

// let's try first in for loop

const names1 = ['a', 'b', 'c'];

const newNames1 = [];
for (let i = 0; i < names1.length; i++) {
    newNames1.push(`hello ${names1[i]}`);
}
console.log('for loop', newNames1);


// forEach
const newNames2 = [];
names1.forEach((val, index) => {
    newNames2.push(`hello ${val} ${index}`);
});
console.log('forEach', newNames2);

// map
const newNames3 = names1.map((val, index) => {
    return (`hi ${val} ${index}`);
});
console.log('map', newNames3);


// infinate curring in one line
let sum = a => b => b ? sum(a + b) : a
console.log(sum(1)(2)(3)(4)(5)(6)());

// factorial number function again
let num3 = 5;
const factoFun = () => {
    let fact = 1;
    for (i = 1; i <= num3; i++) {
        fact *= i
    }
    console.log(`facto of ${num3} is`, fact);
}
factoFun();



//map vs forEach
const arr1 = [1, 2, 3, 4, 5];

arr1.map((val) => {
    return val + 2;
});
console.log(arr1);


// use var for the for loop and print 0 to 2 values with 1000 second delay
//probleam statement: print // 0 1 2 using var in side loop

/* function a1(){
    for(var i = 0; i < 3; i++){
        setTimeout(function log(){
            console.log(i); // output is 3 3 3  // https://youtu.be/sZjlEKbaykc?list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&t=1327
        }, 1000)
    }
}
a1(); */

for (var i = 0; i < 3; i++) {
    function b1(i) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000)
    }
    b1(i)
}



// rest opration : rest oprater combined values and return it new array or object

function a2(a, b, c, ...rest) {
    console.log(rest);
    return a + b + c;
}
const output = a2(2, 5, 6, 12, 59);
console.log('rest opration', output);

// spread opration : spread oprater destruture the array or object and return it new array or object

const names = ['tony', 'steve', 'widow']
function getNames(name1, name2, name3) {
    console.log('spread opration', name1, name2, name3);
}
getNames(...names)




const arr2 = [1, 2, 3, 4, 5, 6];
let sum1 = 0;

function a3() {
    for (let i = 0; i < arr2.length; i++) {
        sum1 += arr2[i];
    }
}

a3();
console.log('sum1', sum1);

let sum3 = 0
arr2.map((val) => sum3 += val);
console.log('useMap', sum3);


// enter index number of month return month name
function userInput() {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augest', 'septembar', 'october', 'november', 'december'];
    const userInput = prompt('Enter the month index number you get month name');
    const userRes = months[userInput - 1];
    console.log('userRes', userRes);
}


// closures

function sum2(a) {
    console.log('sum2', a);
    let c = 3;
    return function (b) {
        return a + b + c;
    }
}

let store = sum2(500);
console.log('closures', store(6));



//print unique value from array and remove duplicates

//method: 1 using filter() and  method

let arr3 = [1, 0, 2, 1, 100, 95, 2, 0, 64, 10, 1, 100, 12, 5];
let uniqueValFilter = arr3.filter((val, index, arr) => arr.indexOf(val) === index);
console.log('uniqueValFilter', uniqueValFilter);

//method: 2 using es6 set() method

let uniqueValSet = [...new Set(arr3)];
console.log('uniqueValSet', uniqueValSet);



// sort array in ascending order
let sortArr = arr3.sort((a, b) => a - b); // for descending order b-a
console.log('sortArr', sortArr);


// JS loops

// for loop
const fruitsList = ['apple', 'banana', 'orange', 'mango'];

let list1 = '';
for (i = 0; i < fruitsList.length; i++) {
    list1 += fruitsList[i] + `\n`;
}
console.log('list1', list1);


// for in loop: for in loop iterate only objects value like in bottom array it print the value of object
const personInfo = {
    fName: 'jon',
    lName: 'snow',
    age: 29,
    username: 'snow',
    cousins: ['arya', 'sansa', 'robb', 'theon'],
    cousinsAge: { // this is not gonna iterate because it's another object and it iterate only value of an object
        arya: 12,
        sansa: 15,
        robb: 24,
        theon: 21
    }
}

let printInfo = '';
for (let i in personInfo) {
    printInfo += personInfo[i] + ' ';
}
console.log(printInfo);


// for of loop: for of loop only iterate content of array and object
let language = ['javascript', 'react', 'angular', 'ruby'];
let languageList = ''; // for  sum of value provide 0 instead of '' string
for (let i of language) {
    languageList += i + `\n`;
}
console.log('languageList', languageList);


// sum of the array using reduce method
const numbers2 = [15, 45, 54, 89, 24];
// (myfunc4, 100) 100 is adding in total sum of array 227 is sum of this array and add  100 and the final answer is the 327
let sum4 = numbers2.reduce((total, value, index, array) => total + value); // .reduceRight method is sum of an array right to left 

console.log(sum4);


// this function call only once
let callOnce = (function () {
    let executed = false;
    return function () {
        if (!executed) {
            executed = true;
            // do something
            console.log('this function call at once only');
        }
    };
})();

callOnce(); // "do something" happens
callOnce(); // nothing happens


//while loop
let printWhile = '';
let i1 = 0;
while (i1 < 3) {
    printWhile += i1 + `\n`;
    i1++;
}
console.log('print while', printWhile);


// do while loop
let printDoWhile = '';
let i2 = 0;
do {
    printDoWhile += i2 + `\n`;
    i2++;
} while (i2 < 3);
console.log('print do while', printDoWhile);


// swap the value without using third variable

let a = 5;
let b = 6;

// method - 1 using Es6

[a, b] = [b, a];
console.log('ES6', a, b);

//method - 2 using arithmetic opration
let x1 = 5;
let y1 = 6;

x1 = x1 + y1;
y1 = x1 - y1;
x1 = x1 - y1;

console.log('arithmetic', x1, y1);


// decimal to binary integer

/* function binary(){
    const number = parseInt(prompt('decimal to binary'));
    let res = number.toString(2);
    console.log('binary', res);
}
binary(); */



// for of loop: we can access 

function forOf() {
    let names = ['john', 'mike', 'steve'];
    for (let i of names) {
        console.log(i);
    }
}
forOf();


// for In loop: we can access the key and value of object and arrays

function forIn() {
    const user = {
        name: 'jonathan',
        age: 24,
        userId: 101
    }
    for (let i in user) { // here 'i' is for key and 'user' as an object elements value
        // console.log(i); // here "i" is as a key like in this object is // output: name,age,userId
        console.log(user[i]); // user[i] is the value of object element
    }
}
forIn();


// array reduce method

function funReduce() {
    const arr = [1, 2, 3];
    const res = arr.reduce((prevVal, curVal) => {
        return prevVal + curVal;
    })
    console.log('reduce arr', res);
}
funReduce();



// flattening the array
function flatMap() {
    const arr = [[10, 20], 30, 40, [50, 60, [70, [80, [90, 100]]]]];

    const res = arr.flatMap(x => x);

    const concatRes = [].concat(...arr);

    const flatRes = arr.flat(4); // in () we provide the level of depth in array if endless then add infinty 

    console.log(res, concatRes, flatRes);
}
flatMap();


// check in array every element is even or not?

function CheckEven() {
    const arr = [2, 4, 12, 8];
    const output = arr.every(num => num % 2 === 0);
    console.log('checkEven', output);
}
CheckEven();


// Promises in js 

async function promise() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hello');
            resolve();
        }, 1000)
    })
    console.log('world');
}
promise();


// arr.push 
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push('a');
}
console.log(arr); // ['a','a','a','a','a'];


// custom memoization
function memoization() {
    const calc = (n) => {
        let sum = 0;
        for (i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    // console.time();
    // console.log(calc(500000));
    // console.timeEnd();
    
    const memoize = (newFunc) => {
        let cache = {};
        return function(...args){
            let n = args[0];
            if(n in cache){
                console.log('cache');
                return cache[n];
            }else{
                console.log('calc first time');
                let result = newFunc(n);
                cache[n] = result;
                return result;
            }
        }
    }
    
    console.time();
    const efficient = memoize(calc);
    console.log(efficient(500000))
    console.timeEnd();
    
    console.time();
    console.log(efficient(500000));
    console.timeEnd();
}
memoization();


















/* 
    Questions: 
    1. rest and spread opration difference?
    2. virtual DOM?
    3. let, const, var difference?
    4. ES5 vs ES6 features?
    5. css and scss difference?
    6. how many hooks in react?
    7. useEffect() vs useLayoutEffect()
    8. one logical question like convert integer to binary?
    9. center or right the div container using css?
    10.most difficulty part that you are face in projects?
    11.when we use the useMemo()?
    12.difference of useMemo(), useCallback(), useEffect()?
    13.useContext vs redux?
    14.hosting of web app in any platform explain the procedure of deploying?
    15.difference between sessionStorage vs localStorage?
    16.most use React libraries that you have?
    17.how to use react app component to another react app?
 */