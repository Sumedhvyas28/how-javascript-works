// function execution context


let foo ="foo" // 1
console.log(foo) // 2

function getFullName(firstName,lastName){           // 3
    // new function execution context will be created same as gec from 4 line
    // array like object :arguments
    console.log(arguments);
    let myVar="inside var func"
    console.log(myVar)
    const fullname= firstName + ""+ lastName
    return fullname;
    // fec is over now the thread can go again to gec and to line 5 
    
}
const personName=getFullName("Sumedh","Vyas");// 4 from here to fec 
console.log(personName)//5 