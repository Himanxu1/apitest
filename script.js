var city = ["india","London","russia"];


$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=c636d7472ad4c5b416efc819cbb2d0ca",function(data){
  
console.log(data);
var icon = "";
var temp =data.main.temp;
var des = data.weather[0].description;
var co = data.coord.lat;
var wm = data.weather[0].main;
var n = data.name;



$('.temp').append(temp);
$('.des').append(des);
$('.c').append(co);
$('.name').append(n);
$('.weather').append(wm);

});

