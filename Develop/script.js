var todaysDate = moment();
var dateArray = moment().toArray();

//finds and displays the current date
$("#currentDay").text(todaysDate.format("MMM Do, YYYY"));

//fills the background based on the current time
//i swear on my mother i'm going to find a better way of doing this 
if (dateArray[3] === 9){
    $("#hour-9").addClass("bg-danger");
    $("#hour-9").removeClass("bg-secondary");
}
else if(dateArray[3] < 9){
    $("#hour-9").addClass("bg-success");
    $("#hour-9").removeClass("bg-secondary");
}

if (dateArray[3] === 10){
    $("#hour-10").addClass("bg-danger");
    $("#hour-10").removeClass("bg-secondary");
}
else if(dateArray[3] < 10){
    $("#hour-10").addClass("bg-success");
    $("#hour-10").removeClass("bg-secondary");
}

if (dateArray[3] === 11){
    $("#hour-11").addClass("bg-danger");
    $("#hour-11").removeClass("bg-secondary");
}
else if(dateArray[3] <11){
    $("#hour-11").addClass("bg-success");
    $("#hour-11").removeClass("bg-secondary");
}

if (dateArray[3] === 12){
    $("#hour-12").addClass("bg-danger");
    $("#hour-12").removeClass("bg-secondary");
}
else if(dateArray[3] < 12){
    $("#hour-12").addClass("bg-success");
    $("#hour-12").removeClass("bg-secondary");
}

if (dateArray[3] === 13){
    $("#hour-13").addClass("bg-danger");
    $("#hour-13").removeClass("bg-secondary");
}
else if(dateArray[3] < 13){
    $("#hour-13").addClass("bg-success");
    $("#hour-13").removeClass("bg-secondary");
}

if (dateArray[3] === 14){
    $("#hour-14").addClass("bg-danger");
    $("#hour-14").removeClass("bg-secondary");
}
else if(dateArray[3] < 14){
    $("#hour-14").addClass("bg-success");
    $("#hour-14").removeClass("bg-secondary");
}

if (dateArray[3] === 15){
    $("#hour-15").addClass("bg-danger");
    $("#hour-15").removeClass("bg-secondary");
}
else if(dateArray[3] < 15){
    $("#hour-15").addClass("bg-success");
    $("#hour-15").removeClass("bg-secondary");
}

if (dateArray[3] === 16){
    $("#hour-16").addClass("bg-danger");
    $("#hour-16").removeClass("bg-secondary");
}
else if(dateArray[3] < 16){
    $("#hour-16").addClass("bg-success");
    $("#hour-16").removeClass("bg-secondary");
}

if (dateArray[3] === 17){
    $("#hour-17").addClass("bg-danger");
    $("#hour-17").removeClass("bg-secondary");
}
else if(dateArray[3] < 17){
    $("#hour-17").addClass("bg-success");
    $("#hour-17").removeClass("bg-secondary");
}