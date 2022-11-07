
setInterval(() =>{
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let currentDate = new Date();
let futureDate = new Date('1 january 2023')
let ruthBirthday = futureDate - currentDate 
console.log(ruthBirthday);

let daysToBirthD = ruthBirthday/1000/60/60/24
console.log(daysToBirthD);
document.getElementById('days').innerHTML = Math.floor(daysToBirthD)

let hoursToBirthD = Math.floor(ruthBirthday /60/60/1000) %24
console.log(hoursToBirthD);
document.getElementById('hours').innerHTML = (hoursToBirthD)

let minutesToBirthD = (ruthBirthday/1000/60) %60
console.log(minutesToBirthD);
document.getElementById('minutes').innerHTML = Math.floor(minutesToBirthD)


let secondsToBirthD = (ruthBirthday/1000) %60
console.log(secondsToBirthD);
document.getElementById('seconds').innerHTML = Math.floor(secondsToBirthD)

}, 1000)
