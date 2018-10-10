

// --------------------------
// let num = 1
// console.log(num);
// // num += 2
// // console.log(num);
// // num += 2
// // console.log(num);
// // num += 2
// // console.log(num);
// // num += 2
// // console.log(num);
// // num += 2
// // console.log(num);
// // num += 2
// // console.log(num);
// // num += 2
// // console.log(num);
// // num += 2
// ----------------------------------
// equals to ||

// for(let i =0; i<7; i++){
//     console.log(num)
//     num+=2
// }
//------------------------------------------
// three different ways to run a function :
//
// 1,
function powers2(){
    let num = 1
    for(let i =0; i<7; i++){
        console.log(num)
        num+=2
    }
}

for(let i =0; i<3; i++){
    powers2()
}


2,
function powers2(){
    let num = 1
    for(let i =0; i<8; i++){
        console.log(num)
        num*=2
    }
}

let powers2 = function(){
    //code goes here
}

3,
let powers2 = ()=>{
    //code goes here
}

let b = 0
function squareA (){
    let a = 5
    a *= a
}

squareA()
console.log(a)
