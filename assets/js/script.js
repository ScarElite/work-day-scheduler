var currentDay = document.querySelector("#currentDay");

// Display's the day and today's date
var currentDate = moment().format("dddd, MMMM Do YYYY");
currentDay.textContent = currentDate;

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // Get the value of the description in the time-block that the user inputs
        var description = $(this).siblings(".description").val();
        // Get the value of the id associated with the description in the same time-block
        var time = $(this).parent().attr("id");

        // Save the description the user input and the id of the time-block associated with that description to the localStorage
        localStorage.setItem(description, time);
    })

    function timeTracker() {
        // Gets the current hour of the day
        var currentTime = moment().hour();
        console.log(currentTime);

        // the function will run for each time-block and add/remove the necessary classes so that the user has a visual to go along with the time-blocks to differentiate them from being in the past, present, or future
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (timeBlock === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    // Get item from localStorage if any
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
});