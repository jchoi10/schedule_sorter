//Display calender
var day = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(day);

//save task to local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, task);
    })

    $("#0800hour .description").val(localStorage.getItem("0800hour"));
    $("#0900hour .description").val(localStorage.getItem("0900hour"));
    $("#1000hour .description").val(localStorage.getItem("1000hour"));
    $("#1100hour .description").val(localStorage.getItem("1100hour"));
    $("#1200hour .description").val(localStorage.getItem("1200hour"));
    $("#1300hour .description").val(localStorage.getItem("1300hour"));
    $("#1400hour .description").val(localStorage.getItem("1400hour"));
    $("#1500hour .description").val(localStorage.getItem("1500hour"));
    $("#1600hour .description").val(localStorage.getItem("1600hour"));
    $("#1700hour .description").val(localStorage.getItem("1700hour"));
    $("#1800hour .description").val(localStorage.getItem("1800hour"));
    $("#1900hour .description").val(localStorage.getItem("1900hour"));

    function hourCounter () {
        var currentTime= moment().hour();

    }
})