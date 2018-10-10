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

function rec2s(num){
    console.log(num)
    num *= 2
    if(num < 256){
        rec2s(num)
    }
}

// rec2s(1)

function replaceAll( string , char, rep){
    if(string.indexOf(char)< 0){ //or === -1/

        return string
    }else{
        string = string.replace(char.rep)
        return replaceAll(string, char, rep)
        // if(string.indexOf(char)>= 0){
        //     replaceAll(string,char, rep)
        // }else {
        //     return string
        // }

    }
}

let newName = replaceAll("nick briz","x","z")

// name = name.replace('i','o')
console.log(newName);
