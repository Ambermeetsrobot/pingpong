// var pingpong = function(number) {
//   var text = "";
//   for (var i = 0; i < number; i++) {
//     if (i % 15 === 0) {
//       text += "pingpong";
//     } else if (i % 5 === 0) {
//       text += "pong";
//     } else if (i % 3 === 0) {
//       text += "ping";
//     } else {
//       text += i;
//     }
//   }
// };
// I couldn't get this loop version to work in the console

var pingpong = function(number) {
    if (number % 15 === 0) {
      return "ping-pong";
    } else if (number % 5 === 0) {
      return "pong";
    } else if (number % 3 === 0) {
      return "ping";
    } else {
      return number;
    }
};

// Not sure why this isn't working in the UI. I've tried .html, .append, .text, and many html variations. Tried debugging, console logs, and alerts. No love.
$(document).ready(function() {
 $("form#pingpong").submit(function(event) {
   var number = parseInt($("input#number").val());
   var answer = pingpong(number);

   $(".answer").append(answer);
   $("#result").show();

   event.preventDefault();

  });
});
