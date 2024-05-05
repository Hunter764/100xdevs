//setTimeout
function greet(){
    console.log("hello world");
}
function greetAlien(){
    console.log("hello alien")
}
setTimeout(greetAlien,5 * 1000) //callback
//the setTimeout supposed to call a function after some time as defined
//In the above hello world will be printed after 5 seconds 

//me passing a function as an arguement is called callback
