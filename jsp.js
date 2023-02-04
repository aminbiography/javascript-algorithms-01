
//# ------------------------------------------------------------------------------------------------
// 23-1 Module Introduction and isArray, includes, concat------------------------------------------
// */variables 
// conditionals
// Array
// loop
// function
// object/*
// ----------------------------------------------------------------------------------------------------


// const country = 'Bangladesh';
// const age = 52;
// const isIndependent = true;
// const student = {id: 121, class: 12, name: 'Jam'};
// const friends = [13, 14, 15, 16, 17, 18, 19, 20];
// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isIndependent)
// console.log(typeof student);
// console.log(Array.isArray(friends));
// console.log(typeof add);


// terminal-
// string
// number
// boolean
// object
// true
// function

// -----------------------------------------------------------------------------------------------------


// const friends = [13, 14, 15, 16, 17, 18, 19, 20];
// console.log(friends.includes(17));

// terminal-
// true

// ---------------------------------------------------------------------------------------------------

// const friends = [13, 14, 15, 16, 17, 18, 19, 20];
// const newFriends = [21, 22, 23, 24, 25];
// const allFriends = newFriends.concat(friends);
// console.log(allFriends);


// terminal-
// [
//     21, 22, 23, 24, 25, 13,
//     14, 15, 16, 17, 18, 19,
//     20
//   ]


// -----------------------------------------------------------------------------------------



// const persons = [20, 21, 22, 23, 24, 25, 26];
// const partial = persons.slice(2, 5);
// console.log(partial);

// terminal-
// [ 22, 23, 24 ]


// -------------------------------------------------------------------------------------


// const persons = [20, 21, 22, 23, 24, 25, 26];
// const partial = persons.slice(2, 5);
// console.log(partial);
// console.log(persons);


// [ 22, 23, 24 ]
// [
//   20, 21, 22, 23,      
//   24, 25, 26
// ]


// ----------------------------------------------------------------------------------

// const persons = [20, 21, 22, 23, 24, 25, 26, 27, 28];
// const partial = persons.splice(3, 4);
// console.log(partial);

// terminal-
// [ 23, 24, 25, 26 ]
// [splice will start from selected index and will count up to mention digit]


// ----------------------------------------------------------------------------------

// 23-3 Remove duplicate items from an array-----------------------------------------


// const names = ['odu', 'bodu', 'jodu', 'sodu', 'bodu', 'odu', 'jodu'];

// function removeDuplicate(names){
//     const unique = [];
//     for(let i = 0; i< names.length; i++){
//         const name = names[i];
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


// terminal-
// [ 'odu', 'bodu', 'jodu', 'sodu' ]




// 23-4 Write foo, bar, foobar if divisible by 3 or 5 or both-----------------------------

/* 
1.show output from: 1-50
2.if the number is divisible by 3 then insted of the number show 'foo'
3.if the number is divisible by 5 then insted of the number show 'bar'
4.if the number is divisible by both 3 and 5 then insted of the number show 'foobar'
*/

// 1.show output from: 1-50//

// for(let i = 1; i <= 50; i++){
//     console.log(i);
// }

// terminal-
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// 40
// 41
// 42
// 43
// 44
// 45
// 46
// 47
// 48
// 49
// 50




// 2.if the number is divisible by 3 then insted of the number show 'foo'///

// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log('foo');
//     }
//     else{
//         console.log(i);
//     }
// }

// terminal-
// 1
// 2
// foo
// 4
// 5
// foo
// 7
// 8
// foo
// 10
// 11
// foo
// 13
// 14
// foo
// 16
// 17
// foo
// 19
// 20
// foo
// 22
// 23
// foo
// 25
// 26
// foo
// 28
// 29
// foo
// 31
// 32
// foo
// 34
// 35
// foo
// 37
// 38
// foo
// 40
// 41
// foo
// 43
// 44
// foo
// 46
// 47
// foo
// 49
// 50



// 3.if the number is divisible by 5 then insted of the number show 'bar'///


// for(let i = 1; i <= 50; i++){
//     if(i % 5 === 0){
//         console.log('bar');
//     }
//     else{
//         console.log(i);
//     }
// }


// terminal-
// 1
// 2  
// 3  
// 4  
// bar
// 6  
// 7  
// 8  
// 9  
// bar
// 11
// 12
// 13
// 14
// bar
// 16
// 17
// 18
// 19
// bar
// 21
// 22
// 23
// 24
// bar
// 26
// 27
// 28
// 29
// bar
// 31
// 32
// 33
// 34
// bar
// 36
// 37
// 38
// 39
// bar
// 41
// 42
// 43
// 44
// bar
// 46
// 47
// 48
// 49
// bar




// 4.if the number is divisible by both 3 and 5 then insted of the number show 'foobar'///


// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log('foo');
//     }
//     else if (i % 5 === 0){
//         console.log('bar');
//     }
//     else{
//         console.log(i);
//     }
// }


// terminal-
// 1
// 2
// foo
// 4
// bar
// foo
// 7
// 8
// foo
// bar
// 11
// foo
// 13
// 14
// foo
// 16
// 17
// foo
// 19
// bar
// foo
// 22
// 23
// foo
// bar
// 26
// foo
// 28
// 29
// foo
// 31
// 32
// foo
// 34
// bar
// foo
// 37
// 38
// foo
// bar
// 41
// foo
// 43
// 44
// foo
// 46
// 47
// foo
// 49
// bar



// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log('foo');
//     }
//     else if (i % 5 === 0){
//         console.log('bar');
//     }
//     else if(1 % 3 === 0&& i % 5 === 0){
//         console.log(foobar);
//     }
    
// }


// terminal-
// foo
// bar
// foo
// foo
// bar
// foo
// foo
// foo
// bar
// foo
// foo
// bar
// foo
// foo
// foo
// bar
// foo
// foo
// bar
// foo
// foo
// foo
// bar


// 23-5 Use add and multiplication to calculate wood requirements----------------------


/*
fixed: per item wood requirements
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/

function wooeCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    cost chairWood = chairQuantity * perChairWood;
    cont totalWood = tableQuantity * perTableWood;
    const bedQuantity = bedQuantity * perBedWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);
}

const totalWood = woodCalculator(2, 2, 5);

















