//*variable declaration in javascript

// var firstName = 'rahim';
// console.log (firstName);


// *never use keywords in variable declaration in javascript

// var ifelse = 10;
// console.log(ifelse);


// *data types in javascript

// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.

// String.
// var firstName = 'rahim';
// console.log (typeof firstName);

// Number.
// var rahim = 10;
// console.log (typeof rahim);

// Bigint.

// Boolean.
// var rahimAge10 = true;
// console.log (typeof rahimAge10);

// Undefined.
// var firstName;
// console.log (typeof firstName);

// Null.

// Symbol.

// Object.
// var rahim = {
//     name:'rahim',
//     age: 10,
// };
// console.log (typeof rahim);


// * string to number convertion by parseInt use for full digit like '20' string

// var num = '20';
// const convertnum = parseInt(num);
// console.log(num);

// var num1 = 10;
// var num2 = '20';
// const convertNum2 = parseInt(num2);
// const sum = num1 + convertNum2
// console.log(sum);


// * string to number convertion by parseFloat use for full digit like '20.333332' string

// var num = '20.333332';
// const convertnum = parseFloat(num);
// console.log(num);

// var num1 = 10;
// var num2 = '20.333332';
// const convertNum2 = parseFloat(num2);
// const sum = num1 + convertNum2
// console.log(sum);


// * string to number convertion no need for multiplication use any digit

// var num1 = 10;
// var num2 = '20.333332';
// const sum = num1 * num2
// console.log(sum);

// * control or limit fraction digits

// var num1 = 10;
// var num2 = 20.333332;
// const sum = num1 + num2
// console.log(sum.toFixed(2));


// * control or limit fraction digits

// var num1 = 10;
// var num2 = 20.333332;
// const sum = num1 * num2
// console.log(sum.toFixed(2));


// * control or limit fraction digits

// var num1 = 10;
// var num2 = 20.333332;
// const sum = num1 + num2;
// console.log(sum.toFixed(1));



// * if ---------------

// var name = 'hablu';
// if(name == 'maklu'){
//     console.log('this is maklu');
// }
// if(name == 'hablu'){
// console.log('this is hablu');
// }


// * if/else if ---------------

// var name = 'hablu';
// if(name == 'maklu'){
//     console.log('this is maklu');
// }
// else if(name == 'hablu'){
// console.log('this is hablu');
// }


// * if/else if/else ---------------

// var name = 'hablu';
// if(name == 'maklu'){
//     console.log('this is maklu');
// }
// else if(name == 'taklu'){
// console.log('this is hablu');
// }
// else{
//     console.log('no......');
// }


// * if/else if/else if ---------------

// var num = 20;
// if(num == '20'){
//     console.log('this is 20');
// }
// else if(num == '100'){
// console.log('this is 100');
// }


// * if/else if/else if ---------------

// var name = 'hablu';
// if(name == 'maklu'){
//     console.log('this is maklu');
// }
// else if(name == 'taklu'){
// console.log('this is hablu');
// }
// else if(name == 'hablu'){
//     console.log('this is hablu');
// }


// * if/else if/else if with &&--------------

// var num1 = 20;
// var num2 = 30;
// if(num1 == 20 && num2 == 40){
//     console.log('this is 50');
// }
// else if(num1 == 20 && num2 == 30){
// console.log('it is 50');
// }


// * if/else if/else with &&--------------

// var num1 = 20;
// var num2 = 30;
// if(num1 == 20 && num2 == 40){
//     console.log('this is 50');
// }
// else if(num1 == 20 && num2 == 60){
// console.log('it is 50');
// }
// else{
//     console.log('nothing is correct');
// }


// * if/else if with ||--------------

// var num1 = 20;
// var num2 = 30;
// if(num1 == 20 || num2 == 40){
//     console.log('this is 50');
// }
// else if(num1 == 10 || num2 == 40){
// console.log('it is 50');
// }


// * if/else if/else with ||--------------

// var num1 = 20;
// var num2 = 30;
// if(num1 == 20 || num2 == 40){
//     console.log('this is 50');
// }
// else if(num1 == 20 || num2 == 60){
// console.log('it is 50');
// }
// else{
//     console.log('nothing is correct');
// }


// * if/else if/else with > < -------------

// var num1 = 100;
// if(num1 > 100){
//     console.log('this is 100');
// }
// else if(num1 < 100){
//     console.log('it is 100');
// }
// else{
//     console.log('none of above');
// }


// * if/else if/else with > < -------------

// var num1 = 100;
// if(num1 > 100){
//     console.log('this is 100');
// }
// else if(num1 < 100){
//     console.log('it is 100');
// }
// else{
//     console.log('yes it equal 100');
// }


// * if/else if/else with > = < -------------

// var num1 = 100;
// if(num1 > 100){
//     console.log('this is 100');
// }
// else if(num1 < 100){
//     console.log('it is 100');
// }
// else if(num1 >= 100){
//     console.log('may be 100');
// }
// else{
//     console.log('none of above');
// }



// * if/else if/else with > && < --------------

// var num1 = 100;
// var num2 = 200;
// var num3 = 300;
// if(num1 > num2 && num1 > num3){
//     console.log('num1 is biggest');
// }
// else if(num2 > num3){
// console.log('num2 is biggest');
// }
// else{
//     console.log('num3 is biggest');
// }


// * if/else if/else with > && < --------------

// var num1 = 300;
// var num2 = 500;
// var num3 = 400;
// if(num1 > num2 && num1 > num3){
//     console.log('num1 is biggest');
// }
// else if(num2 > num3){
// console.log('num2 is biggest');
// }
// else{
//     console.log('num3 is biggest');
// }



// * if/else if/else with > && < --------------

// var num1 = 600;
// var num2 = 400;
// var num3 = 500;
// if(num1 > num2 && num1 > num3){
//     console.log('num1 is biggest');
// }
// else if(num2 > num3){
// console.log('num2 is biggest');
// }
// else{
//     console.log('num3 is biggest');
// }


// *nested elements of if/if else ----

// var number = '30';
// if(number == 30){
//     if (typeof number == 'string'){
//         console.log('all ok');
//     }
// }


// *nested elements of if/else ----
// var number = 30;
// if(number == 30){
//     if (typeof number == number){
//         console.log('all ok');
//     }
//     else {
//         console.log('number is 30 but not string');
//     }}
//     else {
//         console.log('wrong');
//     }
//     console.log(typeof number == 'string');



// *nested elements of if/else ----
// var number = '30';
// if(number == 30){
//     if (typeof number == 'string'){
//         console.log('all ok');
//     }
//     else {
//         console.log('number is 30 but not string');
//     }}
//     else {
//         console.log('wrong');
//     }
//     console.log(typeof number == 'string');


// *number even or odd-------
// var num = 100;
// if (num % 2 == 1){
//     console.log('this is odd number');
// }
// else{
//     console.log('this is even number');
// }


// *number even or odd-------
// var num = 100;
// if (num % 2 != 0){
//     console.log('this is odd number');
// }
// else{
//     console.log('this is even number');
// }


// *grading system-------------
// var result = 85;
// if(result >= 80){
//     console.log('A+');
// }
// else if(result >=70){
//     console.log('A');
// }
// else if(result >= 60){
//     console.log('-A');
// }
// else if(result >=50){
//     console.log('B');
// }
// else if(result >=40){
//     console.log('C');
// }
// else {
//     console.log('F');
// }


// *grading system my logic-----------
// 0-32=F
// 33-49=D
// 50-60=C 
// 60-69=B 
// 70-79=A
// 80-100=A+


// var number = 75;
// if(number >= 80){
//     console.log('A+');
// }
// else if(number >= 70){
//     console.log('A');
// }
// else if(number >= 60){
//     console.log('B');
// }
// else if(number >= 50){
//     console.log('C');
// }
// else if(number >= 40){
//     console.log('D');
// }
// else if(number < 40){
//     console.log('F');
// }
    


// *grading system-------------
// 0-32=F
// 33-49=D
// 50-60=C 
// 60-69=B 
// 70-79=A
// 80-100=A+


// var number = 85;
// if(number <= 100 && number >= 80){
//     console.log('A+');
// }
// else if(number < 80 && number >= 70){
//     console.log('A');
// }
// else if(number < 70 && number >= 60){
//     console.log('B');
// }
// else if(number < 60 && number >= 50){
//     console.log('B');
// }
// else if(number < 50 && number >= 40){
//     console.log('D');
// }
// else if(number < 40 && number >= 0){
//     console.log('F');
// }


// *array numbers length check -----

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(numbers.length);

// *array numbers length check -----

// var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0];
// console.log(numbers.length);

// *array numbers index check -----

// var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0];
// console.log(numbers[3]);


// *array numbers position check indexof -----

// var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0];
// console.log(numbers.indexOf('tabul'));


// *array push---add number or string in last  position -----------------

// var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0];
// numbers.push('tal');
// console.log(numbers);


// *array pop---less number or string from last  position -----------------

// var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
// numbers.pop('tal');
// console.log(numbers);

// or--
// var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
// numbers.pop();
// console.log(numbers);


// *array unshift---add number or string at first position -----------------

// var numbers = [1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
// numbers.unshift(0);
// console.log(numbers);



// *array shift---remove number or string from first position -----------------

// var numbers = [0, 1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
// numbers.shift(0);
// console.log(numbers);

// or--
// var numbers = [0, 1, 'abul', 3, 'tabul', 5, 6, 'gol', 8, 'mal', 0, 'tal'];
// numbers.shift();
// console.log(numbers);


// *splice check -----splice 3,5 means index 0,1,2,3 
// position hold 4, to last 5 degit---

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(numbers.splice(3,5));


// *slice check -----slice 3,5 means index 0,1,2 
// position hold 3, to up to mentioned degit 6, 
// cutting like cake---

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(numbers.slice(2,6));


// *concat ['a', 'b'] ['c', 'd']; 
// combination of array 

// var number1 = ['a', 'b', 'u', 'l'];
// var number2 = ['t', 'a', 'b', 'l'];
// number = number1.concat(number2);
// console.log(number);


// *reverses an array's elements---
// reverse all array number or string

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(numbers.reverse());


// *toString combain array elements-----
// var num = 123;
// var newNum = String(num);
// console.log(newNum);

// var bool = true;
// newBool = bool.toString();
// console.log(newBool);

// var obj = {name: "John"};
// newObj = obj.toString();
// console.log(newObj);


// *join("-"); array elements-----

// let message = ['abul', 'is', 'good'];
// let joinedMessage = message.join(" ");
// console.log(joinedMessage);



































































