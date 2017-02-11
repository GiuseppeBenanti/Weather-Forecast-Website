function display() {
    var input = document.getElementById("chooseDays").value;
    
    if(input == 1) {
        day1();
    }
    else if(input == 2) {
        day2();
    }
    else if(input == 3) {
        day3();
    }
    else if(input == 4) {
        day4();
    }
    else if(input == 5) {
        day5();
    }
    
    return false;
}

function day1() {
    var chobin = new XMLHttpRequest();
    var url = "Daily.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
        //Extract data from the root object
        var importantObject = obj.list[0];
        //Now we can extract from this object the info we need and want to display on our html page.

        var minTemp = importantObject.temp.min;
        var maxTemp = importantObject.temp.max;
        var pressure = importantObject.pressure;
        var humidity = importantObject.humidity;
        var description = importantObject.weather[0].description;
        var icon = importantObject.weather[0].icon;
        var speed = importantObject.speed;

        //Display the information:
        var output = "Date: 18-Oct-2016  <input id='submit2' type='submit' value='Details' onclick='details1()'><br>";
        
        output += "Overall: " + description + "<img src='http://openweathermap.org/img/w/" + icon + ".png'><br>";
        output += "Min temperature: " + minTemp + " °C<br>";
        output += "Max temperature: " + maxTemp + " °C<br>";

        var input2 = document.getElementById("pres").checked;

        var input3 = document.getElementById("humid").checked;

        var input4 = document.getElementById("wind").checked;


        if(input2 == true && input3 == true && input4 == true) {
            output += "Air pressure: " + pressure + " hpa<br>";
            output += "Humidity: " + humidity + " %<br>";
            output += "Wind Speed: " + speed + " m/s<br>";
        }
        else if(input2 == true && input3 == false && input4 == false) {
            output += "Air pressure: " + pressure + " hpa<br>";
        }
        else if(input2 == true && input3 == true && input4 == false) {
            output += "Air pressure: " + pressure + " hpa<br>";
            output += "Humidity: " + humidity + " %<br>";  
        }
        else if(input2 == true && input3 == false && input4 == true) {
            output += "Air pressure: " + pressure + " hpa<br>";
            output += "Wind Speed: " + speed + " m/s<br>";  
        }
        else if(input2 == false && input3 == true && input4 == true) {
            output += "Humidity: " + humidity + " %<br>";
            output += "Wind Speed: " + speed + " m/s<br>";  
        }
        else if(input2 == false && input3 == true && input4 == false) {
            output += "Humidity: " + humidity + " %<br>";
        }
        else if(input2 == false && input3 == false && input4 == true) {
            output += "Wind Speed: " + speed + " m/s<br>";  
        }
        document.getElementById("result").style.display="block";
        document.getElementById("result").innerHTML = output;

    }
}

function day2() {
    var chobin = new XMLHttpRequest();
    var url = "Daily.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
        //Extract data from the root object
        var importantObject = obj.list;
        //Now we can extract from this object the info we need and want to display on our html page.
        var input2 = document.getElementById("pres").checked;

        var input3 = document.getElementById("humid").checked;

        var input4 = document.getElementById("wind").checked;
        var output = "";
        for(var i = 0; i < 2; i++) {
            
            var minTemp = importantObject[i].temp.min;
            var maxTemp = importantObject[i].temp.max;
            var pressure = importantObject[i].pressure;
            var humidity = importantObject[i].humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].speed;

            //Display the information:
            output += "Date: " + (i+18) + "-Oct-2016 <input id='submit" + (i+3) + "' type='submit' value='Details' onclick='details" + (i+1) + "()'><br>";
            
            output += "Overall: " + description + "<img src='http://openweathermap.org/img/w/" + icon + ".png'><br>";
            output += "Min temperature: " + minTemp + " °C<br>";
            output += "Max temperature: " + maxTemp + " °C<br><br>";

            if(input2 == false && input3 == false && input4 == false) {
                output += "<br><hr>";
            }
            else if(input2 == true && input3 == true && input4 == true) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Humidity: " + humidity + " %<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";
            }
            else if(input2 == true && input3 == false && input4 == false) {
                output += "Air pressure: " + pressure + " hpa<br><br><hr>";
            }
            else if(input2 == true && input3 == true && input4 == false) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Humidity: " + humidity + " %<br><br><hr>";  
            }
            else if(input2 == true && input3 == false && input4 == true) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            else if(input2 == false && input3 == true && input4 == true) {
                output += "Humidity: " + humidity + " %<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            else if(input2 == false && input3 == true && input4 == false) {
                output += "Humidity: " + humidity + " %<br><br><hr>";
            }
            else if(input2 == false && input3 == false && input4 == true) {
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            
            document.getElementById("result").style.display="block";
            document.getElementById("result").innerHTML = output;
  
        }
    }
}
    
function day3() {
    var chobin = new XMLHttpRequest();
    var url = "Daily.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
        //Extract data from the root object
        var importantObject = obj.list;
        //Now we can extract from this object the info we need and want to display on our html page.
        var input2 = document.getElementById("pres").checked;

        var input3 = document.getElementById("humid").checked;

        var input4 = document.getElementById("wind").checked;
        var output = "";
        for(var i = 0; i < 3; i++) {
            
            var minTemp = importantObject[i].temp.min;
            var maxTemp = importantObject[i].temp.max;
            var pressure = importantObject[i].pressure;
            var humidity = importantObject[i].humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].speed;

            ///Display the information:
            output += "Date: " + (i+18) + "-Oct-2016 <input id='submit" + (i+3) + "' type='submit' value='Details' onclick='details" + (i+1) + "()'><br>";
            
            output += "Overall: " + description + "<img src='http://openweathermap.org/img/w/" + icon + ".png'><br>";
            output += "Min temperature: " + minTemp + " °C<br>";
            output += "Max temperature: " + maxTemp + " °C<br><br>";

            
            if(input2 == false && input3 == false && input4 == false) {
                output += "<br><hr>";
            }
            else if(input2 == true && input3 == true && input4 == true) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Humidity: " + humidity + " %<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";
            }
            else if(input2 == true && input3 == false && input4 == false) {
                output += "Air pressure: " + pressure + " hpa<br><br><hr>";
            }
            else if(input2 == true && input3 == true && input4 == false) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Humidity: " + humidity + " %<br><br><hr>";  
            }
            else if(input2 == true && input3 == false && input4 == true) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            else if(input2 == false && input3 == true && input4 == true) {
                output += "Humidity: " + humidity + " %<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            else if(input2 == false && input3 == true && input4 == false) {
                output += "Humidity: " + humidity + " %<br><br><hr>";
            }
            else if(input2 == false && input3 == false && input4 == true) {
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            
            document.getElementById("result").style.display="block";
            document.getElementById("result").innerHTML = output;

        }
    }
}
    
function day4() {
    var chobin = new XMLHttpRequest();
    var url = "Daily.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
        //Extract data from the root object
        var importantObject = obj.list;
        //Now we can extract from this object the info we need and want to display on our html page.
        var input2 = document.getElementById("pres").checked;

        var input3 = document.getElementById("humid").checked;

        var input4 = document.getElementById("wind").checked;
        var output = "";
        for(var i = 0; i < 4; i++) {
            
            var minTemp = importantObject[i].temp.min;
            var maxTemp = importantObject[i].temp.max;
            var pressure = importantObject[i].pressure;
            var humidity = importantObject[i].humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].speed;

            ///Display the information:
            output += "Date: " + (i+18) + "-Oct-2016 <input id='submit" + (i+3) + "' type='submit' value='Details' onclick='details" + (i+1) + "()'><br>";
            
            output += "Overall: " + description + "<img src='http://openweathermap.org/img/w/" + icon + ".png'><br>";
            output += "Min temperature: " + minTemp + " °C<br>";
            output += "Max temperature: " + maxTemp + " °C<br><br>";

            
            if(input2 == false && input3 == false && input4 == false) {
                output += "<br><hr>";
            }
            else if(input2 == true && input3 == true && input4 == true) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Humidity: " + humidity + " %<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";
            }
            else if(input2 == true && input3 == false && input4 == false) {
                output += "Air pressure: " + pressure + " hpa<br><br><hr>";
            }
            else if(input2 == true && input3 == true && input4 == false) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Humidity: " + humidity + " %<br><br><hr>";  
            }
            else if(input2 == true && input3 == false && input4 == true) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            else if(input2 == false && input3 == true && input4 == true) {
                output += "Humidity: " + humidity + " %<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            else if(input2 == false && input3 == true && input4 == false) {
                output += "Humidity: " + humidity + " %<br><br><hr>";
            }
            else if(input2 == false && input3 == false && input4 == true) {
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            
            document.getElementById("result").style.display="block";
            document.getElementById("result").innerHTML = output;

        }
    }
}
    
function day5() {
    var chobin = new XMLHttpRequest();
    var url = "Daily.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
        //Extract data from the root object
        var importantObject = obj.list;
        //Now we can extract from this object the info we need and want to display on our html page.
        var input2 = document.getElementById("pres").checked;

        var input3 = document.getElementById("humid").checked;

        var input4 = document.getElementById("wind").checked;
        var output = "";
        for(var i = 0; i < 5; i++) {
            
            var minTemp = importantObject[i].temp.min;
            var maxTemp = importantObject[i].temp.max;
            var pressure = importantObject[i].pressure;
            var humidity = importantObject[i].humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].speed;

            ///Display the information:
            output += "Date: " + (i+18) + "-Oct-2016 <input id='submit" + (i+3) + "' type='submit' value='Details' onclick='details" + (i+1) + "()'><br>";
            
            output += "Overall: " + description + "<img src='http://openweathermap.org/img/w/" + icon + ".png'><br>";
            output += "Min temperature: " + minTemp + " °C<br>";
            output += "Max temperature: " + maxTemp + " °C<br><br>";

            
            if(input2 == false && input3 == false && input4 == false) {
                output += "<br><hr>";
            }
            else if(input2 == true && input3 == true && input4 == true) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Humidity: " + humidity + " %<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";
            }
            else if(input2 == true && input3 == false && input4 == false) {
                output += "Air pressure: " + pressure + " hpa<br><br><hr>";
            }
            else if(input2 == true && input3 == true && input4 == false) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Humidity: " + humidity + " %<br><br><hr>";  
            }
            else if(input2 == true && input3 == false && input4 == true) {
                output += "Air pressure: " + pressure + " hpa<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            else if(input2 == false && input3 == true && input4 == true) {
                output += "Humidity: " + humidity + " %<br>";
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            else if(input2 == false && input3 == true && input4 == false) {
                output += "Humidity: " + humidity + " %<br><br><hr>";
            }
            else if(input2 == false && input3 == false && input4 == true) {
                output += "Wind Speed: " + speed + " m/s<br><br><hr>";  
            }
            
            document.getElementById("result").style.display="block";
            document.getElementById("result").innerHTML = output;

        }
    }
}
    
function details1() {
    var output = "";
    var chobin = new XMLHttpRequest();
    var url = "Detailed.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
    
        //Extract data from the root object    
        var importantObject = obj.list; 
        
        for(var i = 0; i < 5; i++) {
            
            var minTemp = importantObject[i].main.temp_min;
            var maxTemp = importantObject[i].main.temp_max;
            var pressure = importantObject[i].main.pressure;
            var humidity = importantObject[i].main.humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].wind.speed;
            var dateTime = importantObject[i].dt_txt;
            
            output += "<table border='1'><tr><th>Variable</th><th>Value</th></tr>";
            
            output += "<tr><td>Date and time:</td><td>" + dateTime + "</td></tr>";
            
            output += "<tr><td>Overall:</td><td>" + description + "<img id='smallIcon' src='http://openweathermap.org/img/w/" + icon + ".png'></td></tr>";
            
            output += "<tr><td>Min temp:</td><td>" + minTemp + "</td></tr>";
            
            output += "<tr><td>Max temp:</td><td>" + maxTemp + "</td></tr>";
            
            output += "<tr><td>Pressure:</td><td>" + pressure + "</td></tr>";
            
            output += "<tr><td>Humidity:</td><td>" + humidity + "</td></tr>";
            
            output += "<tr><td>Wind speed:</td><td>" + speed + "</td></tr></table>";
            
            document.getElementById("result2").style.display="block";
            document.getElementById("result2").innerHTML = output;
            
        }
    }
}  
    
function details2() {
    var output = "";
    var chobin = new XMLHttpRequest();
    var url = "Detailed.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
    
        //Extract data from the root object    
        var importantObject = obj.list; 
        
        for(var i = 5; i < 13; i++) {
            
            var minTemp = importantObject[i].main.temp_min;
            var maxTemp = importantObject[i].main.temp_max;
            var pressure = importantObject[i].main.pressure;
            var humidity = importantObject[i].main.humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].wind.speed;
            var dateTime = importantObject[i].dt_txt;
            
            output += "<table border='1'><tr><th>Variable</th><th>Value</th></tr>";
            
            output += "<tr><td>Date and time:</td><td>" + dateTime + "</td></tr>";
            
            output += "<tr><td>Overall:</td><td>" + description + "<img id='smallIcon' src='http://openweathermap.org/img/w/" + icon + ".png'></td></tr>";
            
            output += "<tr><td>Min temp:</td><td>" + minTemp + "</td></tr>";
            
            output += "<tr><td>Max temp:</td><td>" + maxTemp + "</td></tr>";
            
            output += "<tr><td>Pressure:</td><td>" + pressure + "</td></tr>";
            
            output += "<tr><td>Humidity:</td><td>" + humidity + "</td></tr>";
            
            output += "<tr><td>Wind speed:</td><td>" + speed + "</td></tr></table>";
            
            document.getElementById("result2").style.display="block";
            document.getElementById("result2").innerHTML = output;
            
        }
    }
}

function details3() {
    var output = "";
    var chobin = new XMLHttpRequest();
    var url = "Detailed.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
    
        //Extract data from the root object    
        var importantObject = obj.list; 
        
        for(var i = 13; i < 21; i++) {
            
            var minTemp = importantObject[i].main.temp_min;
            var maxTemp = importantObject[i].main.temp_max;
            var pressure = importantObject[i].main.pressure;
            var humidity = importantObject[i].main.humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].wind.speed;
            var dateTime = importantObject[i].dt_txt;
            
            output += "<table border='1'><tr><th>Variable</th><th>Value</th></tr>";
            
            output += "<tr><td>Date and time:</td><td>" + dateTime + "</td></tr>";
            
            output += "<tr><td>Overall:</td><td>" + description + "<img id='smallIcon' src='http://openweathermap.org/img/w/" + icon + ".png'></td></tr>";
            
            output += "<tr><td>Min temp:</td><td>" + minTemp + "</td></tr>";
            
            output += "<tr><td>Max temp:</td><td>" + maxTemp + "</td></tr>";
            
            output += "<tr><td>Pressure:</td><td>" + pressure + "</td></tr>";
            
            output += "<tr><td>Humidity:</td><td>" + humidity + "</td></tr>";
            
            output += "<tr><td>Wind speed:</td><td>" + speed + "</td></tr></table>";
            
            document.getElementById("result2").style.display="block";
            document.getElementById("result2").innerHTML = output;
            
        }
    }
}  

function details4() {
    var output = "";
    var chobin = new XMLHttpRequest();
    var url = "Detailed.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
    
        //Extract data from the root object    
        var importantObject = obj.list; 
        
        for(var i = 21; i < 29; i++) {
            
            var minTemp = importantObject[i].main.temp_min;
            var maxTemp = importantObject[i].main.temp_max;
            var pressure = importantObject[i].main.pressure;
            var humidity = importantObject[i].main.humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].wind.speed;
            var dateTime = importantObject[i].dt_txt;
            
            output += "<table border='1'><tr><th>Variable</th><th>Value</th></tr>";
            
            output += "<tr><td>Date and time:</td><td>" + dateTime + "</td></tr>";
            
            output += "<tr><td>Overall:</td><td>" + description + "<img id='smallIcon' src='http://openweathermap.org/img/w/" + icon + ".png'></td></tr>";
            
            output += "<tr><td>Min temp:</td><td>" + minTemp + "</td></tr>";
            
            output += "<tr><td>Max temp:</td><td>" + maxTemp + "</td></tr>";
            
            output += "<tr><td>Pressure:</td><td>" + pressure + "</td></tr>";
            
            output += "<tr><td>Humidity:</td><td>" + humidity + "</td></tr>";
            
            output += "<tr><td>Wind speed:</td><td>" + speed + "</td></tr></table>";
            
            document.getElementById("result2").style.display="block";
            document.getElementById("result2").innerHTML = output;
            
        }
    }
}

function details5() {
    var output = "";
    var chobin = new XMLHttpRequest();
    var url = "Detailed.json";

    chobin.onreadystatechange = function() {
        if(chobin.readyState == 4 && chobin.status == 200) {
            var parsedObject = JSON.parse(chobin.responseText);
            myFunction(parsedObject);
        }
    };

    chobin.open("GET", url, true);
    chobin.send();

    function myFunction(obj) {
    
        //Extract data from the root object    
        var importantObject = obj.list; 
        
        for(var i = 29; i < 36; i++) {
            
            var minTemp = importantObject[i].main.temp_min;
            var maxTemp = importantObject[i].main.temp_max;
            var pressure = importantObject[i].main.pressure;
            var humidity = importantObject[i].main.humidity;
            var description = importantObject[i].weather[0].description;
            var icon = importantObject[i].weather[0].icon;
            var speed = importantObject[i].wind.speed;
            var dateTime = importantObject[i].dt_txt;
            
            output += "<table border='1'><tr><th>Variable</th><th>Value</th></tr>";
            
            output += "<tr><td>Date and time:</td><td>" + dateTime + "</td></tr>";
            
            output += "<tr><td>Overall:</td><td>" + description + "<img id='smallIcon' src='http://openweathermap.org/img/w/" + icon + ".png'></td></tr>";
            
            output += "<tr><td>Min temp:</td><td>" + minTemp + "</td></tr>";
            
            output += "<tr><td>Max temp:</td><td>" + maxTemp + "</td></tr>";
            
            output += "<tr><td>Pressure:</td><td>" + pressure + "</td></tr>";
            
            output += "<tr><td>Humidity:</td><td>" + humidity + "</td></tr>";
            
            output += "<tr><td>Wind speed:</td><td>" + speed + "</td></tr></table>";
            
            document.getElementById("result2").style.display="block";
            document.getElementById("result2").innerHTML = output;
            
        }
    }
}  

function resetForm() {
    document.getElementById("result").style.display="none";
    document.getElementById("result2").style.display="none";
}