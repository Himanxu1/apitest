const text  = document.getElementById('text');
const btn = document.getElementById('btn');



btn.addEventListener('click',function(){

    $.getJSON("http://www.boredapi.com/api/activity/",function(data){
   
    var title = data.activity;
      $(".text").text(title);

})


});

