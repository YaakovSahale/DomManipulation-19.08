//!................................1

// var button = document.getElementById("btn");
// var input = document.getElementById("input");
// var myList = document.getElementById("mylist");
// var myArray = [];

// button.onclick = function(){

//     if(myArray.indexOf(input.value) != -1){
//         return
//     }
//     myArray.push(input.value);
//     myList.innerHTML += (`<li>${input.value}</li>`);
// }

//!.................................2

// var input1 = document.getElementById("input1")
// var input2 = document.getElementById("input2")
// var button = document.getElementById("btn")

// button.onclick = function(){
//     var sum = Number(input1.value) + Number(input2.value)
//     console.log(sum);
//     return sum
// }

//!..................................3

// var button = document.getElementById("btn")

// button.onclick = function(){
//     button.style = "background-color: red;"
// }

//!...................................4

// var button = document.getElementById("btn")
// button.onclick = function(){
//     document.getElementById("myP").innerText = `${Math.floor(Math.random()*100)}`
// }

//!...................................5

// var products = [
//   {
//     name: "milk",
//     img: "https://cdn.pixabay.com/photo/2016/12/06/18/27/milk-1887234__340.jpg",
//   },

//   {
//     name: "banana",
//     img: "https://cdn.pixabay.com/photo/2015/01/27/18/32/bananas-614090__340.jpg",
//   },

//   {
//     name: "avocado",
//     img: "https://cdn.pixabay.com/photo/2017/03/04/12/10/avocado-2115922__340.jpg",
//   },
// ];

// var my_Div = document.getElementById("myDiv");

// for (let i = 0; i < products.length; i++) {
//   my_Div.innerHTML += `<h1>${products[i].name} </h1><br>`;
//   my_Div.innerHTML += `<img src="${products[i].img}">`;
// }

//!........................................6

// var button = document.getElementById("btn")
// var userInput = document.getElementById("input")
// var myArray = []

// button.onclick = function(){
//     myArray.push(userInput.value)
//     console.log(myArray);
// }

//!.........................................7

// var my_P = document.getElementById("myP")
// my_P.onclick = function(){
//     my_P.innerText = new Date()
// }

//!.........................................8

// var my_P = document.getElementById("myP")

// my_P.onclick = function(){
//     my_P.innerHTML = new Date().getHours()
// }

//!.........................................9

// var userInput = document.getElementById("input")
// var my_P = document.getElementById("myP")
// var button = document.getElementById("btn")

// button.onclick = function(){
//     my_P.innerHTML = new Date().getFullYear() - userInput.value
// }

//!.........................................10


// var button = document.getElementById("btn");
// var userInput = document.getElementById("input");
// var my_P = document.getElementById("myP");

// button.onclick = function () {
//     var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     console.log(myArray.indexOf(Number(userInput.value)));
    
//     if(myArray.indexOf(Number(userInput.value)) != -1){
//         return my_P.innerText = "the number is in the array";
//     }
//     return my_P.innerText = "the number isn't in the array"

// };

//!........................................11

// var button = document.getElementById("btn")
// var userInput = document.getElementById("input")
// var my_P = document.getElementById("myP")
// var my_P2 = document.getElementById("myP2")


// button.onclick = function(){
//     var fullNmae = userInput.value
//     var spaceHolder = fullNmae.indexOf(" ")
//     my_P.innerText = fullNmae.substring(0,spaceHolder)
//     my_P2.innerText = fullNmae.substring(spaceHolder+1)
// }

//!.........................................12

// var userInput1 = document.getElementById("input1")
// var userInput2 = document.getElementById("input2")
// var button = document.getElementById("btn")

// button.onclick = function (){
//     var input1 = userInput1.value
//     var input2 = userInput2.value

//     if(input1.length > input2.length){
//         return console.log("input1 is longer than input2");
//     }
//     return console.log("input2 is longer than input1");
// }

//!..........................................13

// var my_Div = document.getElementById("myDiv")
// var inputName = document.getElementById("inputName")
// var inputEmail = document.getElementById("inputEmail")
// var inputAge = document.getElementById("inputAge")
// var button = document.getElementById("btn")

// var uaersArray = []
// button.onclick = function(){
//     var userData = {}

//     userData.name = inputName.value
//     userData.email = inputEmail.value
//     userData.age = inputAge.value

//     uaersArray.push(userData)

//     console.log(uaersArray);
//     my_Div.innerHTML += `${userData.name} ${userData.email} ${userData.age}<br>`
// }
















