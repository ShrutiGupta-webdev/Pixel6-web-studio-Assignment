// query to retrieve the user name from the URL
const url = new URL(window.location.href);
const Fname = url.searchParams.get("Fname");


var otp = generateOtp(4)
console.log(`Your otp is ${otp}`)

//function to generate otp
function generateOtp(length)
{
  return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}
//set a message with the user's name
document.getElementById(
  "userName"
).innerHTML = `Dear ${Fname} Thank you for your inquiry A 4 digit verification number has been sent to your phone number, please enter in the following box and submit for confirmation`;

// count variable to track how many times the user enters the otp
let count = 0;

// function for dealing with and validating otp form numbers
const otpHandler = () => {
  count++;
  const otp_input = document.getElementById("otp").value;
  //If the otp matches, proceed to the success page.
  if (parseInt(otp_input) === otp) {
    window.location.href = `./success.html`;
  } else {
      // Otherwise, request a re-entry of the otp and verify that the count is less than or equal to 3.
    if (count <= 3) {
      document.getElementById("otp").value = "";
      document.getElementById("error").innerHTML = "re-enter the correct OTP";
    } else {
      // If you make more than three tries, you will be sent to the error page.
      window.location.href = `http://pixel6.co/error`;
    }
  }
};
