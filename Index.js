
let phone_numberValidate = false;


function get_state_name(state_code){
    if (state_code >= "100") {
          return "Andhra Pradesh"
        }
          else if (state_code >= "126") {
              return "Arunachal Pradesh"
          }
          else if (state_code >= "151" ) {
              return "Assam"
          } else if (state_code >= "176" ) {
              return "Bihar"
          } else if (state_code >= "301" ) {
              return "Chhattisgarh"
          } else if (state_code >= "326" ) {
              return "Goa"
          } else if (state_code >= "351" ) {
              return "Gujarat"
          } else if (state_code >= "326" ) {
              return "Haryana"
          } else if (state_code >= "351" ) {
              return "Himachal Pradesh"
          } else if (state_code >= "376" ) {
              return "Jharkhand"
          } else if (state_code >= "401" ) {
              return "Karnataka"
          } else if (state_code >= "426" ) {
              return "Kerala"
          } else if (state_code >= "451" ) {
              return "Madhya Pradesh"
          } else if (state_code >= "476" ) {
              return "Maharashtra"
          } else if (state_code >= "501" ) {
              return "Manipur"
          } else if (state_code >= "526" ) {
              return "Meghalaya"
          } else if (state_code >= "551" ) {
              return "Mizoram"
          } else if (state_code >= "576" ) {
              return "Nagaland"
          } else if (state_code >= "601" ) {
              return "Odisha"
          } else if (state_code >= "626") {
              return "Punjab"
          } else if (state_code >= "651") {
              return "Rajasthan"
          } else if (state_code >= "676") {
              return "Sikkim"
          } else if (state_code >= "701") {
              return "Tamil Nadu"
          } else if (state_code >= "726") {
              return "Telangana"
          } else if (state_code >= "751") {
              return "Tripura"
          } else if (state_code >= "776") {
              return "Uttar Pradesh"
          } else if (state_code >= "801") {
              return "Uttarakhand"
          } else if (state_code >= "826") {
              return "West Bengal"
          } else if (state_code >= "851") {
              return "Andaman and Nicobar Islands"
          } else if (state_code >= "876") {
              return "Chandigarh"
          } else if (state_code >= "901") {
              return "Dadra & Nagar Haveli and Daman & Diu"
          } else if (state_code >= "921") {
              return "Delhi"
          } else if (state_code >= "941") {
              return "Jammu and Kashmir"
          } else if (state_code >= "961") {
              return "Lakshadweep"
          } else if (state_code >= "971") {
              return "Puducherry"
          } else if (state_code >= "981") {
              return "Ladakh"
          }
  
}
// service provider management function
const manageServiceProvider = (serviceProvider, stateNumber, dom) => {
  const img = document.getElementById("logo");
  console.log(img)

  // Set the service provider's logo if it is a genuine service provider.
  if (
    Number(serviceProvider) >= 601 &&
    Number(serviceProvider) <= 700 &&
    stateNumber === ""
  ) {
    img.src =
      "images/jio.png";
    dom.value = `(${serviceProvider})-`;
  } else if (
    Number(serviceProvider) >= 701 &&
    Number(serviceProvider) <= 800 &&
    stateNumber === ""
  ) {
    img.src =
      "images/airtel.jpg";
    dom.value = `(${serviceProvider})-`;
  } else if (
    Number(serviceProvider) >= 921 &&
    Number(serviceProvider) <= 999 &&
    stateNumber === ""
  ) {
    img.src =
      "images/vodafone.png";
    dom.value = `(${serviceProvider})-`;
  } else {
    if (serviceProvider.length >= 3) {
      const error = document.getElementById("error");
      error.innerHTML = "invalid number";
      phone_numberValidate = true;
    } else {
      const error = document.getElementById("error");
      error.innerHTML = "";
    }
  }
};

// function for validating phone numbers in the provided formate
const phone_number_validation = (value) => {
  let substringDivide = 0;

  if (value.length >= 4) {
    substringDivide = 1;
  }

  const serviceProvider = value.substring(substringDivide, 4);
  const stateNumber = value.substring(6, 9);
  const rest = value.substring(10, 14);
  const dom = document.getElementById("phone_number");

  manageServiceProvider(serviceProvider, stateNumber, dom);

  if (!isNaN(stateNumber) && stateNumber.length > 0 && rest === "") {
    dom.value = `(${serviceProvider})-${stateNumber}`;
  }

  if (value.length === 9) {
    dom.value = `(${serviceProvider})-${stateNumber}-`;
  }

  if (rest) {
    dom.value = `(${serviceProvider})-${stateNumber}-${rest}`;
  }

  const stateName = get_state_name(stateNumber)
  
    

  if (stateNumber.length >= 3) {
    // set state Name if found
    if (stateName) {
      document.getElementById("stateName").innerHTML = stateName;
      document.getElementById("error").innerHTML = "";
    } else {
      document.getElementById("error").innerHTML = "invalid number";
      phone_numberValidate = false;
    }
  }

  if (value.length < 14) {
    phone_numberValidate = false;
  }
};

// function for full name validation
const full_nameValidation = (value) => {
  const regex = /^[a-zA-Z ]*$/;

  if (!regex.test(value)) {
    return false;
  } else {
    const splitedName = value.split(" ");
    if (splitedName[0].length < 4 || splitedName[1].length < 4) {
      return false;
    } else {
      return true;
    }
  }
};

// function for email validation
const emailValidation = (value) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

// function for validating user name and email in the specified format
const validate = (name, email) => {
  const isValid = {};
  isValid.name = full_nameValidation(name);
  isValid.email = emailValidation(email);

  if (!isValid.email) {
    const emailValidator = document.getElementById("email_error");
    emailValidator.innerHTML = "Not a valid email";
  } else {
    const emailValidator = document.getElementById("email_error");
    emailValidator.innerHTML = "";
  }

  if (!isValid.name) {
    const nameValidator = document.getElementById("full_name_error");
    nameValidator.innerHTML = "Not a valid name";
  } else {
    const nameValidator = document.getElementById("full_name_error");
    nameValidator.innerHTML = "";
  }

  if (!phone_numberValidate) {
    const nameValidator = document.getElementById("error");
    nameValidator.innerHTML = "Not a valid Number";
  } else {
    const nameValidator = document.getElementById("error");
    nameValidator.innerHTML = "";
  }
  return { ...isValid, phone_numberValidate };
};

// function to accept form data from html page
const submitFormHandler = () => {
  const form1 = document.getElementById("form1");
  const form = new FormData(form1);
  console.log(form)

  const name = form.get("full_name");
  const email = form.get("email");
  const isValid = validate(name, email); // validate function is use to validate html form data
  const notValidForm = Object.keys(isValid).some(
    (isValidKey) => isValid[isValidKey] === false
  );

  // if form is valid then navigate to otp page
  if (!notValidForm) {
    window.location.href = `./otp.html?Fname=${name.split(" ")[0]}`;
  }
};
