//callbacks example
var button = document.getElementById("btn")

button.onclick = function () {
    alert('button clicked!')
}

//promises example

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
        // reject()
    }, 300);
});


var promise = document.getElementById("promise")
promise.onclick = function(){
    promise1.then(function (value) {
    alert("From promise "+ value)
    })
    promise1.catch(function (err) {
        alert("From promise Error "+ err)
        })
}
//   // expected output: [object Promise]
//async await
var async = document.getElementById("async")
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("From Async Await!"), 1000)
    });
    //  promise = undefined
    let result = await promise; // wait till the promise resolves (*)
  
    alert(result); // "done!"
  }
async.onclick = function(){
    f()
};


// async Component {
//     let db = fetch('https://api.com')
//     let response = await db 
//     console.log(response)
// }