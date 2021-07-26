$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")); // make current date and time appear at top of page

// the following loads saved local storage data for each hour

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

function verifyTime(){

    currentTime = moment().hour(); // sets current time

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[0]); // identifies int value of each timeblock hour

        if (blockHour < currentTime) { // compares current time and block time to verify if past present or future
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })
}
verifyTime();

// the following saves information to local storage with the key of hour and value of descript

$(".saveBtn").on("click", function(){
    var descript = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    console.log("the scheduled notes for", hour, "is", descript)
    localStorage.setItem(hour, descript);
})