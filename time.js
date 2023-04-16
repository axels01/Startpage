function timeAndDate(){
    var date = new Date();
    const time = [];
    //Puts time, day, month, date, and year into an array
    time[0] = date.getHours();
    time[1] = date.getMinutes();
    time[2] = date.getSeconds();
    time[3] = date.getDay();
    time[4] = date.getMonth();
    time[5] = date.getDate();
    time[6] = date.getFullYear();

    //Arrays used to convert month and day number
    //to the string equivilant
    var dayArray = new Array("Sunday", "Monday", "Tuesday", 
        "Wednesday", "Thursday", "Friday", "Saturday");
    var monthArray = new Array("January", "February", 
        "March", "April", "May", "June", "July", "August", 
        "September", "October", "November", "December");
    
    //Adds a 0 when time (hours, minutes, seconds) is less than 10
    for (let i = 0; i < 3; i++){
        if (time[i] < 10){
            time[i] = "0" + time[i];
        }
    }

    //Adds the content of the updated array into the HTML
    document.querySelectorAll("#time")[0].innerHTML = time[0] + 
        ":" + time[1] + ":" + time[2] + " " + dayArray[time[3]] + 
        ", " + monthArray[time[4]] + " " + time[5] + ", " + time[6];
}

//Calls the function every second
setInterval(timeAndDate, 1000);