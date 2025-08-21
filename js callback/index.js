
// // call function inside another function

// function square(n) {
//     return n*n
// }

// function sumOfSqare(a,b){
//     const val1 = square(a)
//     const val2 = square(b)

//     return val1+val2;
// }

// console.log(sumOfSqare(1 , 2));

// // using 2 function 

// function square(n) {
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfSqare(a,b){
//     const val1 = square(a)
//     const val2 = square(b)

//     return val1+val2;
// }

// function sumOfCube(a,b){
//     const val1 = cube(a)
//     const val2 = cube(b)

//     return val1+val2;
// }

// const ans = sumOfCube(2,2)
// console.log(ans);

// // easy way to wright code is 

// function square(a){
//     return a*a
// }

// function sumOfSomething(a , b, fn){
//         const val1 = fn(a);
//     const val2 = fn(b);
//     return val1 + val2;

// }

// sumOfSomething(a , b , square);



// anonymous function = a function does not have name

// async function : -


// function onDone(content){
//     console.log(content);
// }

// readFile("a.txt", onDone)  // async call

// console.log("hi theree !");
// for(let i = 0; i <10; i++){
//     console.log(i);
// }


function onDone(){
    console.log("hey its me ");
}
// 2 run thas 

setTimeout(onDone,1000);
console.log("after settimeout  ");
// 1 run thase 


// for(let i=0; i<10; i++){
   
// }

function main(){
    let a = 0; for (let i =0; i<10; i++){
        a = a +1 
    }

    console.log(a);
}

main();
