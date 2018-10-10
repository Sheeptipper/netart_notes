function repeat(num,func){
    for (let i= 0; i<num; i++ ){    //i = i+1
        fun(i)
    }
}

function sayHi(num){
    console.log(`hello for the ${num} time`);

}
// repeat(10, sayHi)

function stratsWithA(string){
    if(string[0] == "A") return true
    else return false
}


function hasPrefix(string){
    if(string.indexOf('Mr.')>=0) ||
       string.indexOf('Ms.')>=0) ||
       string.indexOf('Mrs.')>=0) ||
       string.indexOf('Dr.')>=0) {
           return true
       }else{
           return false
       }
}
arr = ["nick","Tina", "Anna"]
function filter(arr,func){
    let passed =[]
    for (let i = 0; i< arr.length; i++){
        if(fun(arr[i])){
            passed.push(arr[i])
        }
    }
    return passed
}

let faculty = [ "nick","jon"," Dr.Englebart","Dr, Poop"]

let docs = filter( faculty, function(string){
    if(string[0]=="N") return true
    else return false
})

console.log(docs)
