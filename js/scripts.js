var pingpong = function(number) {
  if (number % 15 === 0) {
    return "pingpong";
  } else if (number % 5 === 0) {
    return "pong";
  } else if (number % 3 === 0) {
    return "ping";
  } else {
    return number;
  }
};

$(document).ready(function(){
 $("form#pingpong").submit(function(event) {
 var number = parseInt($("input#number").val());
 var answer = pingpong(number);
 $("ul").append(answer);


 event.preventDefault();

  });
});
