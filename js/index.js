$(document).ready(function(){

  $("form").submit(function(event){ // when you click or enter a value
    event.preventDefault();// provent the browser to refresh the website

    var city = $("#city-type").val().toLowerCase(); //.tolowercase no matter you enter NYC or nyc, they both worked
    displayCity(city);
  });


  function displayCity(city) {
    if(city === "nyc" || city === "New York City" || city === "New York") {
      $("body").attr("class", "nyc"); //第一个"class" 的意思是把"body" attribute to "class", 第二个""代表这个class的名字
    }

    else if (city === "austin" || city === "Austin" || city ==="ATX") { //no matter user enter "austin", "ATX" or "austin", picture of Austin will come out
      $("body").attr("class", "austin");
    }

    else if (city === "sf" || city === "Bay Area" || city === "San Francisco") { //no matter user enter "sf", "Bay Area" or "San Francisco", picture of Austin will come out
      $("body").attr("class", "sf");
    }

    else if (city ==="la" || city ==="LAX" || city ==="Los Angeles") { //no matter user enter "la", "Los Angeles" or "LAX", picture of Austin will come out
      $("body").attr("class", "la")
    }

    else if (city ==="syd" || city ==="Sydney" || city === "SYD") { //no matter user enter "syd", "sydney" or "SYD", picture of Austin will come out
      $("body").attr("class", "sydney")
    }
  }

});
