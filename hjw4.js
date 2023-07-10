// lexical enviorment and scope chain 


const lastName="vyas"

const printName= function(){
    const firstName="sumedh"
    console.log(firstName)
    // see in lexical enviorment 
    // fec takes last name value from its parent i.e gec 
    console.log(lastName)
}
printName()