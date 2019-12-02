function weather()
{
    var city = document.getElementById("value").value;
    console.log(city);
    var xmlhttp= new XMLHttpRequest();
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city + "&APPID=dc879f4ae515cddfa61996c184a1b2a8";
    xmlhttp.open("GET", url);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            var result=this.responseText;
            console.log(result);
            var x = JSON.parse(result);
            console.log(x.main.temp);
            document.getElementById("xyz").innerHTML = "<h3><u>Temperature:</u><h3> " + x.main.temp +" F";
            console.log(x.weather.description);
        }
    };
}

function weatherspeed()
{
    var city = document.getElementById("value").value;
    console.log(city);
    var xmlhttp= new XMLHttpRequest();
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city + "&APPID=dc879f4ae515cddfa61996c184a1b2a8";
    xmlhttp.open("GET", url);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            var result=this.responseText;
            console.log(result);
            var x = JSON.parse(result);
            console.log(x.main.temp);
            document.getElementById("abc").innerHTML = "<h3><u>Wind Speed: </u><h3>" + x.wind.speed+" m/s";
        }
    };
}

function weatherhumidity()
{
    var city = document.getElementById("value").value;
    console.log(city);
    var xmlhttp= new XMLHttpRequest();
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city + "&APPID=dc879f4ae515cddfa61996c184a1b2a8";
    xmlhttp.open("GET", url);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            var result=this.responseText;
            console.log(result);
            var x = JSON.parse(result);
            console.log(x.main.temp);
            document.getElementById("def").innerHTML = "<h3><u>Humidity:</u><h3> " + x.main.humidity;
        }
    };
}
