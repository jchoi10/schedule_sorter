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

    $("#08hour .description").val(localStorage.getItem("08hour"));
    $("#09hour .description").val(localStorage.getItem("09hour"));
    $("#10hour .description").val(localStorage.getItem("10hour"));
    $("#11hour .description").val(localStorage.getItem("11hour"));
    $("#12hour .description").val(localStorage.getItem("12hour"));
    $("#13hour .description").val(localStorage.getItem("13hour"));
    $("#14hour .description").val(localStorage.getItem("14hour"));
    $("#15hour .description").val(localStorage.getItem("15hour"));
    $("#16hour .description").val(localStorage.getItem("16hour"));
    $("#17hour .description").val(localStorage.getItem("17hour"));
    $("#18hour .description").val(localStorage.getItem("18hour"));
    $("#19hour .description").val(localStorage.getItem("19hour"));

    function hourCounter () {
        var currentTime= moment().hour();

        $(".timeBlock").each(function() {
            var slotTime = parseInt($(this).attr("id").split("hour")[0]);
            console.log(slotTime)
            console.log(currentTime)
        })
    }

    hourCounter();
});