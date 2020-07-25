// Testing the Console.log
$(document).ready(function () {
  // README.md Line 24: THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // Format Dates from momentjs.com
  var current = moment().format("MMMM Do YYYY, h:mm:ss a");

  // README.md Line 20: THEN the current day is displayed at the top of the calendar
  $("#currentDay").append(current); // Current Time

  // README.md Line 21:WHEN I scroll down
  // README.md Line 22:THEN I am presented with timeblocks for standard business hours
  var row = $(".row");
  for (var i = 0; i < 8; i++) {
    row.clone().insertAfter(row);
  }
  // Arrays made for Loops by the Hour//
  // Not sure why I make it 12PM the green will still pop up so I left it at 12AM.//
  var timeOfDay = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", ];
  var hoursRows = document.getElementsByClassName("hour");
  var textRows = document.getElementsByClassName("text");


  // Explaining how to get from Current time to Past time
  for (var i = 0; i < timeOfDay.length; i++) {
    hoursRows[i].innerHTML = timeOfDay[i];

    if (timeOfDay[i] == "12AM") hoursRows[i].innerHTML = "12PM";

    description = JSON.parse(localStorage.getItem(timeOfDay[i]));
    if (description) textRows[i].innerHTML = description;
    // Multiple Locale Support Time Zone
    var presentTime = moment().format('LTS');;

    var newTime = presentTime.split(":")[0] + presentTime.split(" ")[1];

    var hourFormat = parseInt(presentTime.split(":")[0]);

    if (presentTime.split(" ")[1] == "PM") {
      hourFormat += 12;
    }
    // README.md Line 25: WHEN I click into a timeblock
    // README.md Line 26: THEN I can enter an event
    var compareTime = timeOfDay[i];

    console.log(compareTime);
    if (compareTime.length == 3) compareTime = compareTime.substring(0, 1);
    else compareTime = compareTime.substring(0, 2);

    // README.md Line 27: WHEN I click the save button for that timeblock

    var numCompareTime = parseInt(compareTime);

    console.log(presentTime.split("")[1]);

    console.log("Have a good day!" + " " + timeOfDay[i].substr(-4));
    if (timeOfDay[i].substr(-2) == "PM") {
      numCompareTime += 12;
    }

    // Currently whats on my mind during the time
    if (timeOfDay[i] == newTime) {
      console.log(" Is it lunch time yet??");
      // Taken color's from CSS page //
      textRows[i].setAttribute(
        "style",
        "background-color: #ff6961",
        "important" // Used important to ensure colors work //
      );

    } else if (numCompareTime < hourFormat) {
      console.log(" I am getting food, will be back shortly!");
      textRows[i].setAttribute(
        "style",
        "background-color: #d3d3d3",
        "important"
      );
    } else {
      console.log("Oh I have to check and see if we can hire more workers");
      textRows[i].setAttribute(
        "style",
        "background-color: #77dd77",
        "important"
      );
    }
  }
  // Thanks to moment.js this will offer the correct time slot from 9AM-5pm 
  // Also giving the number 14 for the format of time being used from line 5
  console.log(numCompareTime);
  console.log(hourFormat);

  // README.md Line 28: THEN the text for that event is saved in local storage //
  // README.md Line 29: WHEN I refresh the page
  // README.md Line 30:THEN the saved events persist
  // Everything gets saved due to
  $(".saveBtn").on("click", function () {
    var siblings = $(this).siblings();
    var content = siblings[1].value;
    var hour = siblings[0].innerText;
    localStorage.setItem(hour, JSON.stringify(content));
  });
});