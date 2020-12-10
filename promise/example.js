//with function and resolved
const promise1 = new Promise(function(resolve, reject){
let number = 10;
setTimeout(function(){
console.log(number);
}, 300);
resolve(number);
});
promise1.then(function(number){
console.log("Resolved: ", number);
});
//Resolved: 10
//10

//with arrow function and resolved
const promise2 = new Promise((resolve, reject) =>{
let name = 'I am learning ';
setTimeout(() => {
console.log(name)}, 1000);
resolve(name);
});
promise2.then(
data => {
return new Promise((resolve, reject) => {
setTimeout(() => {
let newData = data + 'JavaScript'
console.log(newData);
resolve(newData);
}, 1000);
}).then(end => {
console.log('Result: ', end);
});
});

//I am learning 
//I am learning JavaScript
//Result:  I am learning JavaScript

//with function and rejected and finally
const promise3 = new Promise(function(resolve, reject){
let number = 10;
console.log(number);
reject(number);
});
promise3.catch(function(err){
console.error("Error: ", err);
});
promise3.finally(function(){
console.log('Finally');
});
//Error:  10
//Finally





