// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $(".saveBtn");

//this function will show the current day on the top of the page

$("#currentDay").text(moment().format('dddd MMMM do YYYY'));

// so this will be the current day displayed on the top of the calendar
 function timeBlockColor() {
  var hour = moment().hours();

  $(".time-block").each(function() {
    var currHour = parseInt($(this).attr("id"));

    //will be using a if-then statement to indicate whether it will be past, present or future.

    if (currHour > hour) {
      $(this).addClass("future");
    } else if (currHour === hour) {
      $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
  })

 };



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // WHEN I click the save button for that time block
  saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    //THEN this function will save in the local storage

    localStorage.setItem(time, plan);
  });

  // When I refresh the page it will save the information
  function usePlanner() {
    $(".hour").each(function() {
      var currHour = $(this).text();
      var currPlan = localStorage.getItem(currHour);

      //this will be the console.log for current hour


      if(currPlan !== null) {
        $(this).siblings(".plan").val(currPlan);
      }
   });
  }

  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  // call functions

  timeBlockColor();
  usePlanner()
