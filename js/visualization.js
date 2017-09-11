$(function() {
   $(document).ready(function() {
       expand();
       customization();
   });
});

function expand(){
    [].forEach.call(document.getElementsByClassName("workout-day"), function(day) {
        var size = day.getAttribute("size");
        if(size > "5") {
            var changer = day.getElementsByClassName("workout-day-changer")[0];
            changer.classList.add("workout-day-changer-active");
            var icon = changer.getElementsByClassName("fa")[0];
            icon.classList.add("fa-angle-down");
            $(changer).click(function() {
                var workoutList = day.getElementsByClassName("workout-day-wrap")[0].getElementsByClassName("workout-list")[0];
                if($(workoutList).css("height") === "115px") {
                    height = 115 + 23 * (size - 5);
                    icon.classList.remove("fa-angle-down");
                    icon.classList.add("fa-angle-up");
                }
                else {
                    height = 115;
                    icon.classList.remove("fa-angle-up");
                    icon.classList.add("fa-angle-down");
                }
                $(workoutList).animate({
                    height: height+"px"
                }, 100, "linear");
            });
        };
    });
};

function customization() {
    [].forEach.call(document.getElementsByClassName("workout-day"), function(item) {
        switch(item.getAttribute("success")) {
            case "2": customizeUpDay(item); break;
            case "1": customizeRepeatDay(item); break;
            case "0": customizeDownDay(item); break;
        };
    });
};

function customizeUpDay(item) {
    item.classList.add("workout-day-up");

    item.getElementsByClassName("workout-day-wrap")[0].getElementsByClassName("workout-day-arrow")[0].
    getElementsByClassName("workout-arrow-icon")[0].getElementsByClassName("fa")[0].
    classList.add("fa-arrow-circle-o-up");

};

function customizeRepeatDay(item) {
    item.classList.add("workout-day-repeat");

    item.getElementsByClassName("workout-day-wrap")[0].getElementsByClassName("workout-day-arrow")[0].
    getElementsByClassName("workout-arrow-icon")[0].getElementsByClassName("fa")[0].
    classList.add("fa-repeat");
};

function customizeDownDay(item) {
    item.classList.add("workout-day-down");

    item.getElementsByClassName("workout-day-wrap")[0].getElementsByClassName("workout-day-arrow")[0].
    getElementsByClassName("workout-arrow-icon")[0].getElementsByClassName("fa")[0].
    classList.add("fa-arrow-circle-o-down");
};