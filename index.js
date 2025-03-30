// function myDisplayer(massage) {
//     console.log(massage)
// }

// function myFirst() {
//     myDisplayer("Hello");
// }

// function mySecond() {
//     myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
// }

// myCalculator(5, 5);

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// const posNumbers = removeNeg(myNumbers, (x) => x >- 0);
// document.getElementById("demo").innerHTML = posNumbers;
// function removeNeg(numbers, callback) {
//     const myArray = [];
//     for (const x of numbers) {
//         if (callback(x)) {
//             myArray.push(x);
//         }
//     }
//     return myArray;
// }

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//     let success = false;

//     if (success) {
//         myResolve("Operation Successful!");
//     } else {
//         myReject("Operation Failed!");
//     }
// });

// myPromise
//     .then(myDisplayer)
//     .catch(myDisplayer);

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//     let x = 0;
//     if (x == 0) {
//         myResolve("Berhasil");
//     } else {
//         myReject("Gagal");
//     }
// });

// myPromise.then(
//     function (value) { myDisplayer(value); },
//     function (error) { myDisplayer(error); }
// )

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// setTimeout(function() { myFunction("Adelia"); }, 3000);

// function myFunction(value) {
//     document.getElementById("demo").innerHTML = value;
// }

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("Adelia"); }, 3000);
// });

// myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
// });

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//         if (req.status == 200) {
//             myCallback(req.responseText);
//         } else {
//             myCallback("Error: " + req.status);
//         }
//     };
//     req.send();
// }

// getFile(myDisplayer);

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//         if (req.status == 200) {
//             myResolve("File Found");
//         } else {
//             myReject("File not Found");
//         }
//     };
//     req.send();
// });

// myPromise.then(
//     function(value) { myDisplayer(value); },
//     function(error) { myDisplayer(error); }
// );

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// async function myFunction() {
//     return "Hello";
// }

// myFunction().then(myDisplayer).catch((error) => myDisplayer("Error: " + error));

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// async function myFunction() {
//     return "Hello";
// }

// myFunction().then(
//     function(value) { myDisplayer(value); },
//     function(error) { myDisplayer(error); }
// );

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// async function myFunction() {
//     return "Hello";
// }

// myFunction().then(
//     function(value) { myDisplayer(value); }
// );

// -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//         resolve("Adelia");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();

// -----------------------------------------------------------------------------

// // function myDisplayer(some) {
// //     document.getElementById("demo").innerHTML = some;
// // }

// // async function myDisplay() {
// //     let myPromise = new Promise(function(resolve) {
// //         setTimeout(function() { resolve("Adelia"); }, 3000);
// //     });
// //     document.getElementById("demo").innerHTML = await myPromise;
// // }

// // myDisplay();

// // -----------------------------------------------------------------------------

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// async function getFile() {
//     let myPromise = new Promise((resolve, reject) => {
//         let req = new XMLHttpRequest();
//         req.open('GET', "mycar.file:///C:/TUGAS6/index.html");
//         req.onload = function() {
//             if (req.status == 200) {
//                 resolve(req.response);
//             } else {
//                 reject("File not found");
//             }
//         };
//         req.onerror = function() {
//             reject("Network error");
//         };
//         req.send();
//     });

//     try {
//         document.getElementById("demo").innerHTML = await myPromise;
//     } catch (error) {
//         document.getElementById("demo").innerHTML = error;
//     }
// }

// getFile();

// -----------------------------------------------------------------------------