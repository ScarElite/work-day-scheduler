var timeBlockDescription = document.querySelector(".description");
var saveBtn = document.querySelector(".saveBtn");
var currentDay = document.querySelector("#currentDay");

// Display's the day and today's date
var currentDate = moment().format("dddd, MMM do YYYY");
currentDay.textContent = currentDate;


var saveTextDescription = function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(description, time);
};

$(".saveBtn").on("click", saveTextDescription);