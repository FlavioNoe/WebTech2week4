var html;

var date = new Date();

html = "<h1> Date today is: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "</h1>";

var day
switch (date.getDay()) {
    case 0: day = "Sunday"; break;
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
}

html = html + "<h2>and it is " + day + "</h2>"

var num;
num = Math.floor(Math.random() * 10); // number ramdon from 0 to 10...

html = html + "<h2>A random number from 0 to 9: " + num + "</h2>"


document.body.innerHTML = html;



function myFunction() {
    alert("my funtion works!!!")
}

