// closuers example 




function hello(x){
    const a="var a "
    const b="var b "
    // this will return with abx in local memory taken from parent gec
    return function(){
        console.log(a,b,x)
    }
}
const ans =hello("args")
console.log(ans)
ans()


