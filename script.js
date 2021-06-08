var todaysDate = moment();
var dateArray = moment().toArray();
var taskArray = [];
var save9 = $("#btn-9");
var save10 = $("#btn-10");
var save11 = $("#btn-11");
var save12 = $("#btn-12");
var save13 = $("#btn-13");
var save14 = $("#btn-14");
var save15 = $("#btn-15");
var save16 = $("#btn-16");
var save17 = $("#btn-17");

//finds and displays the current date
$("#currentDay").text(todaysDate.format("MMM Do, YYYY"));

storedTasks();

//when a save button is clicked, then the task is saved to its respective array spot
save9.on("click", function (){
    var str = document.getElementById("task9").value
    taskArray[0] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});
save10.on("click", function (){
    var str = document.getElementById("task10").value
    taskArray[1] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});
save11.on("click", function (){
    var str = document.getElementById("task11").value
    taskArray[2] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});
save12.on("click", function (){
    var str = document.getElementById("task12").value
    taskArray[3] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});
save13.on("click", function (){
    var str = document.getElementById("task13").value
    taskArray[4] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});
save14.on("click", function (){
    var str = document.getElementById("task14").value
    taskArray[5] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});
save15.on("click", function (){
    var str = document.getElementById("task15").value
    taskArray[6] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});
save16.on("click", function (){
    var str = document.getElementById("task16").value
    taskArray[7] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});
save17.on("click", function (){
    var str = document.getElementById("task17").value
    taskArray[8] = str;
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
});

function storedTasks(){
    var localTasks = []
    var localString = localStorage.getItem("taskArray")
    if(localString){
        localTasks = JSON.parse(localString);
        //checks if task array is filled. if so, then the stored task is displayed
        if(localTasks[0]){
            var taskHolder = localTasks[0];
            document.getElementById("task9").innerText = taskHolder;
        }
        if(localTasks[1]){
            var taskHolder = localTasks[1];
            document.getElementById("task10").innerText = taskHolder;
        }
        if(localTasks[2]){
            var taskHolder = localTasks[2];
            document.getElementById("task11").innerText = taskHolder;
        }
        if(localTasks[3]){
            var taskHolder = localTasks[3];
            document.getElementById("task12").innerText = taskHolder;
        }
        if(localTasks[4]){
            var taskHolder = localTasks[4];
            document.getElementById("task13").innerText = taskHolder;
        }
        if(localTasks[5]){
            var taskHolder = localTasks[5];
            document.getElementById("task14").innerText = taskHolder;
        }
        if(localTasks[6]){
            var taskHolder = localTasks[6];
            document.getElementById("task15").innerText = taskHolder;
        }
        if(localTasks[7]){
            var taskHolder = localTasks[7];
            document.getElementById("task16").innerText = taskHolder;
        }
        if(localTasks[8]){
            var taskHolder = localTasks[8];
            document.getElementById("task17").innerText = taskHolder;
        }
    }
}

//fills the background based on the current time
 
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