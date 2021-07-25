$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


// the verify time function compares the INT ID of each timeblock to the current time and colors the timeblocks accordingly

function verifyTime(){
    currentTime = moment().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[0]);
        console.log( blockHour, currentTime)

        if (blockHour < currentTime) {
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


