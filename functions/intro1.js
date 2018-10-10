// let a = 5
//
// function squareA(){
//     a *= a
//
// }
//
//
// function square(b){
//     b *= b
//     return b
// }
// function add(a, b){
//     let answer = a + b
//     return answer
// }
//
// squareA()
//
// let x = square(5)
// let y = add( 10, 20)
//

let a = 5
function squareA(){
    a *= 2
}

function powers2(amount){
    let num = 1
    let arr = []
    for (let i=0; i<amount; i++){
        arr.push(num)
        num*=2

    }
    return arr
}

let twos = powers2(100,10)
// let twos =powers2(10)
// let twos = [1,2,4,8,16,32,64,128]

// console.log( twos [twos.length-1])
//
// let x = Infinity
// let y = -Infinity
