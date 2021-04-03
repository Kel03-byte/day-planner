var lastUpdate = 0;
var currentHour = moment().format("HH")

function getCurrentDay() {
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    jQuery("#currentDay").text(currentDay);
};

function checkCurrentHour() {
    var hour = +currentHour;
    var timeId = "#" + currentHour;

    for (var i = 9; i < 18; i++) {
        if (i == hour) {
            jQuery(timeId).find("textarea").addClass("present");
        }
        else if (i < hour) {
            jQuery("#" + i).find("textarea").addClass("past");
        }
        else {
            jQuery("#" + i).find("textarea").addClass("future");
        }
    }
    lastUpdate = currentHour;
};

jQuery(".saveBtn").click(function () {
    var eventTime = jQuery(this)
        .closest(".row")
        .attr("id");

    var eventText = jQuery(this)
        .closest(".row")
        .find("textarea")
        .val();

    localStorage.setItem(eventTime, eventText);
});

jQuery(".delete").click(function () {
    var eventTime = jQuery(this)
        .closest(".row")
        .attr("id");

    var eventText = jQuery(this)
        .closest(".row")
        .find("textarea")
        .val("");
    localStorage.removeItem(eventTime, eventText);
});

function savedEvents() {
    for (var i = 0; i < localStorage.length; i++) {
        var time = localStorage.key(i);
        var description = localStorage.getItem(time);
        var timeId = ("#" + time);
        $(timeId).find("textarea").val(description);
    }
};

getCurrentDay()
checkCurrentHour()
savedEvents()