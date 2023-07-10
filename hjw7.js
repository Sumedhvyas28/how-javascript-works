// 2

// function myfunction(power){
//     return function(number){
//         return number**power;
//     }

// }
// const cube =myfunction(3)
// const ans = cube(2)
// console.log(ans)


// 3

function func(){
    let counter=0
    return function(){
         if(counter<1){
            console.log("hi there")
            counter++
        }
        else(
            console.log("already called men ")
            
            
            
        )
    
    }
}
const myFunc=func()
myFunc()
myFunc()
myFunc()
