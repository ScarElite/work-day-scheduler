var timeBlockDescription = document.querySelector(".description");
var saveBtn = document.querySelector(".saveBtn");
var currentDay = document.querySelector("#currentDay");

// Display's the day and today's date
var currentDate = moment().format("dddd, MMM do YYYY");
currentDay.textContent = currentDate;

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // Get the value of the description in the time-block that the user inputs
        var description = $(this).siblings(".description").val();
        // Get the value of the id associated with the description in the same time-block
        var time = $(this).parent().attr("id");

        // Save the description the user input and the id of the time-block associated with that description to the localStorage
        localStorage.setItem(description, time);
    });
});