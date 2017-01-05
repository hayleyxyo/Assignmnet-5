$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();

    var city = $("#city-type").val().toLowerCase(); //.tolowercase 会让你不管输入NCY还是Ncy还是 ncy都会work
    displayCity(city);
  });


  function displayCity(city) {
    if(city === "nyc" || city === "New York City" || city === "New York") {
      $("body").attr("class", "nyc"); //第一个"class" 的意思是把"body" attribute to "class", 第二个""代表这个class的名字
    }

    else if (city === "austin" || city === "Austin" || city ==="ATX") {
      $("body").attr("class", "austin");
    }

    else if (city === "sf" || city === "Bay Area" || city === "San Francisco") {
      $("body").attr("class", "sf");
    }

    else if (city ==="la" || city ==="LAX" || city ==="Los Angeles") {
      $("body").attr("class", "la")
    }

    else if (city ==="syd" || city ==="Sydney" || city === "SYD") {
      $("body").attr("class", "sydney")
    }
  }

});
