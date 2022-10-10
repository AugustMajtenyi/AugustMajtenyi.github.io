var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d = new Date();

//var element = document.getElementById("Date");
//element.innerHTML = days[d.getDay()]+", "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();
//
//Use the code above if you want to include the day!

var element = document.getElementById("Date");
element.innerHTML = months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();



