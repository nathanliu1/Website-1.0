$(function() {
$("#workexperience .GuestLogix").one("mouseover", function() {
  $("#workexperience .GuestLogix").addClass('permhover');
  $("#workexperience .MainlyMac").removeClass('permhover');
});

$("#workexperience .MainlyMac").one("mouseover", function() {
  $("#workexperience .MainlyMac").addClass('permhover');
  $("#workexperience .GuestLogix").removeClass('permhover');
});
});