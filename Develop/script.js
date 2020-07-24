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
      // Arrays made for Loops by the Hour
      var timeOfDay = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", ];
      var hoursRows = document.getElementsByClassName("hour");
      var textRows = document.getElementsByClassName("text");