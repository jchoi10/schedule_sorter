//Display calender
var day = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(day);

//save task to local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var task = $(this).sibling(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, task);
    })
})