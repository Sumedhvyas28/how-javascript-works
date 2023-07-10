// closures
// A closure is the combination of a function bundled together (enclosed) with references to its 
// surrounding state (the lexical environment)


function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName)
    }
    // when printName will return it will return with outer function memory 
    // in this case which is fname sumedh and lname vyas
    return printName;
}
const ans =printFullName("sumedh","vyas")
ans()