
var welcMesage = "Welcome to our future scientist!";
alert(welcMesage);
var email = prompt("Please enter your email to receive the latest from our website.");
document.write("<p>" + email + "</p>");
if (email.length !=0){
  confirm("Congrats! You will now start receiving daily updates on great science stuff!");
} else {
  confirm("We are so sad that you will be missing a lot about science :(");
  document.write("<p>" + "No email provided" + "</p>");
}