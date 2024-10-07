const validateFNumberField = (FieldId) => {
    document.getElementById("number").disabled = false; // Enable the field when needed
  
    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value;
  
    // If input is empty, reset to default state
  
    if (inputValue === "") {
      inputElement.style.borderColor = "red"; // Reset to default
      inputElement.style.border = "2px solid red"; // Set border thickness and color

  
      return; // Exit the function
    }
  
    // Check if the input is not a number
    if (isNaN(inputValue) || inputValue.length > 6) {
      inputElement.style.borderColor = "red";
      inputElement.style.border = "2px solid red"; // Set border thickness and color

    } else {
      inputElement.style.borderColor = "green";
      inputElement.style.border = "2px solid green"; // Set border thickness and color
    }
  };

//   

const validateFNameField = (FieldId) => {
    document.getElementById(`${FieldId}`).disabled = false; // Enable the field when needed

    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value;

    // If input is empty, reset to default state
    if (inputValue === "") {
        inputElement.style.borderColor = "red"; // Reset to default
        inputElement.style.border = "2px solid red"; // Set border thickness and color


  
      return; // Exit the function
    }
    //check if the value contains only letters and spaces
  
    let isValid = true; // Assume valid by default
  
    // Loop through each character to check if it's a letter, period, or space
    for (let i = 0; i < inputValue.length; i++) {
      const char = inputValue[i];
  
      // Check if the character is not a letter, period, or space
      if (inputValue.length<6||inputValue.length > 50) {
        isValid = false;
        break;
      } else if (
        !(char >= "A" && char <= "Z") && // Uppercase letters
        !(char >= "a" && char <= "z") && // Lowercase letters
        !(char === ".") && // Period
        !(char === " ") // Space
      ) {
        isValid = false;
        break;
      }
    }
    if (!isValid) {
        inputElement.style.borderColor = "red";
        inputElement.style.border = "2px solid red"; // Set border thickness and color


    } else {
        inputElement.style.borderColor = "green";
      inputElement.style.border = "2px solid green"; // Set border thickness and color
    }
  };


  const validateFMobileField = (FieldId) => {
    document.getElementById(`${FieldId}`).disabled = false; // Enable the field when needed

    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value; // Trim whitespace
    const errorMessageMobile = document.getElementById(`error-${FieldId}`);

  
    // List of valid prefixes
    const validPrefixes = ["015", "016", "018", "019", "011", "017", "013"];
  
    // If input is empty, reset to default state
    if (inputValue === "") {
        inputElement.style.borderColor = "red"; // Reset to default
        inputElement.style.border = "2px solid red"; // Set border thickness and color

      return; // Exit the function
    }
  
    // Validate the mobile number
    let isValid = true;
  
    // Check if the input contains only digits
    if (!/^\d+$/.test(inputValue)) {
      isValid = false; // Input contains non-digit characters
    } else if (inputValue.length !== 11) {
      isValid = false; // Length is not 11
    } else {
      // Check if the first three digits match a valid prefix
      const prefix = inputValue.substring(0, 3);
      if (!validPrefixes.includes(prefix)) {
        isValid = false;
      }
  
      // Check if the remaining digits follow the consecutive rules
      let count = 1; // Initialize counter for consecutive digits
      for (let i = 4; i < inputValue.length; i++) {
        if (inputValue[i] === inputValue[i - 1]) {
          count++; // Increase count for consecutive digits
          if (count > 5) {
            isValid = false; // More than 3 consecutive same digits
            break;
          }
        } else {
          count = 1; // Reset count if digit changes
        }
      }
    }
  
    // If the mobile number is invalid
    if (!isValid) {
        inputElement.style.borderColor = "red"; // Reset to default
        inputElement.style.border = "2px solid red"; // Set border thickness and color
    } else {
      // If valid
      inputElement.style.borderColor = "green";
      inputElement.style.border = "2px solid green"; // Set border thickness and color
    }
  };
  


  const validateFDropField = (FieldId) => {
    document.getElementById(`${FieldId}`).disabled = false; // Enable the field when needed

    const selectElement = document.getElementById(FieldId);
    const selectedValue = selectElement.value;
 
  
    // Store the default error message
  
    // If the selected value is empty or still the default placeholder option
    if (selectedValue === "") {
    
        selectElement.style.borderColor = "red"; // Reset to default
        selectElement.style.border = "2px solid red"; // Set border thickness and color
    } else {
        selectElement.style.borderColor = "green";
        selectElement.style.border = "2px solid green"; // Set border thickness and color
    }
  };
  