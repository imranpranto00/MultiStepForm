const validateNidField = (FieldId) => {
    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value;
  
    const errorMessageNid = document.getElementById(`error-${FieldId}`);
    const iconElement = document.getElementById(`icon-${FieldId}`);
  
    const defaultMessage = errorMessageNid.getAttribute("data");
  
    // If input is empty, reset to default state
    if (inputValue === "") {
      inputElement.style.borderColor = ""; // Reset to default
      errorMessageNid.innerText = defaultMessage;
      errorMessageNid.style.fontSize = "";
      errorMessageNid.style.color = "";
      iconElement.innerHTML = ""; // Reset icon
  
      return; // Exit the function
    }
  
    //checking if the value is not a number
    if (
      isNaN(inputValue) ||
      (inputValue.length != 10 && inputValue.length != 16)
    ) {
      // Showing the error message
      errorMessageNid.innerText = "Invalid. Ex: 3761189098";
      inputElement.style.borderColor = "red";
      errorMessageNid.style.fontSize = "15px";
      errorMessageNid.style.color = "red";
      iconElement.innerHTML = "❌";
      iconElement.style.fontSize = "12px"; // error size
    } else {
      errorMessageNid.innerText = "";
      errorMessageNid.style.color = "green";
      inputElement.style.borderColor = "green";
      iconElement.innerHTML = "✔️";
      iconElement.style.fontSize = "12px"; // success size
    }
  };
  
  const validateNameField = (FieldId) => {
    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value;
    const errorMessageName = document.getElementById(`error-${FieldId}`);
    const iconElement = document.getElementById(`icon-${FieldId}`);
  
    // If input is empty, reset to default state
    if (inputValue === "") {
      inputElement.style.borderColor = ""; // Reset to default
      errorMessageName.innerText = "";
      errorMessageName.style.fontSize = "";
      errorMessageName.style.color = "";
      iconElement.innerHTML = ""; // Reset icon
  
      return; // Exit the function
    }
    //check if the value contains only letters and spaces
  
    let isValid = true; // Assume valid by default
  
    // Loop through each character to check if it's a letter, period, or space
    for (let i = 0; i < inputValue.length; i++) {
      const char = inputValue[i];
  
      // Check if the character is not a letter, period, or space
      if (inputValue.length > 50) {
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
      errorMessageName.innerText = "Invalid. EX:  Muhammad bin Bakhtiyar Khilji";
      inputElement.style.borderColor = "red";
      errorMessageName.style.fontSize = "15px";
      errorMessageName.style.color = "red";
      iconElement.innerHTML = "❌";
      iconElement.style.fontSize = "12px"; // error size
    } else {
      errorMessageName.innerText = "";
      errorMessageName.style.color = "green";
      // inputElement.placeholder=''
      inputElement.style.borderColor = "green";
      iconElement.innerHTML = "✔️";
      iconElement.style.fontSize = "12px"; // success size
    }
  };
  
  const validateMobileField = (FieldId) => {
    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value; // Trim whitespace
    const errorMessageMobile = document.getElementById(`error-${FieldId}`);
    const iconElement = document.getElementById(`icon-${FieldId}`);
    const defaultMessage = errorMessageMobile.getAttribute("data");
  
    // List of valid prefixes
    const validPrefixes = ["015", "016", "018", "019", "011", "017", "013"];
  
    // If input is empty, reset to default state
    if (inputValue === "") {
      inputElement.style.borderColor = ""; // Reset to default
      errorMessageMobile.innerText = defaultMessage;
      errorMessageMobile.style.fontSize = "";
      errorMessageMobile.style.color = "";
      iconElement.innerHTML = ""; // Reset icon
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
      errorMessageMobile.innerText = "Invalid. Ex: 01535762799";
      errorMessageMobile.style.color = "red";
      inputElement.style.borderColor = "red";
      errorMessageMobile.style.fontSize = "15px";
      iconElement.innerHTML = "❌"; // Error icon
      iconElement.style.fontSize = "12px"; // error size
    } else {
      // If valid
      errorMessageMobile.innerText = "";
      errorMessageMobile.style.color = "green";
      inputElement.style.borderColor = "green";
      iconElement.innerHTML = "✔️"; // Success icon
      iconElement.style.fontSize = "12px"; // success size
    }
  };
  
  const validateAccountField = (FieldId) => {
    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value;
    const errorMessageAccount = document.getElementById(`error-${FieldId}`);
    const defaultMessage = errorMessageAccount.getAttribute("data");
    const iconElement = document.getElementById(`icon-${FieldId}`);
  
    // If input is empty, reset to default state
    if (inputValue === "") {
      inputElement.style.borderColor = ""; // Reset to default
      errorMessageAccount.innerText = defaultMessage;
      errorMessageAccount.style.fontSize = "";
      errorMessageAccount.style.color = "";
      iconElement.innerHTML = "";
  
      return; // Exit the function
    }
  
    //checking if the value is not a number
    if (isNaN(inputValue) || inputValue.length < 10 || inputValue.length > 10) {
      errorMessageAccount.innerText = "Invalid Number";
      inputElement.style.borderColor = "red";
      errorMessageAccount.style.color = "red";
  
      errorMessageAccount.style.fontSize = "15px";
      iconElement.innerHTML = "❌"; // Error icon
      iconElement.style.fontSize = "12px"; // error size
    } else {
      errorMessageAccount.innerText = "";
      errorMessageAccount.style.color = "green";
      inputElement.style.borderColor = "green";
      iconElement.innerHTML = "✔️"; // Success icon
      iconElement.style.fontSize = "12px"; // success size
    }
  };
  
  const validateIField = (FieldId) => {
    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value;
    const errorMessageAddress = document.getElementById(`error-${FieldId}`);
    const iconElement = document.getElementById(`icon-${FieldId}`);
  
    // If input is empty, reset to default state
    if (inputValue === "") {
      inputElement.style.borderColor = ""; // Reset to default
      errorMessageAddress.innerText = "";
      errorMessageAddress.style.fontSize = "";
      errorMessageAddress.style.color = "";
      iconElement.innerHTML = ""; // Error icon
      return; // Exit the function
    }
    if (inputValue.length > 200 || inputValue.length < 5) {
      errorMessageAddress.style.fontSize = "15px";
      errorMessageAddress.style.color = "red";
      iconElement.innerHTML = "❌"; // Error icon
      inputElement.style.borderColor = "red";
      iconElement.style.fontSize = "12px"; // error size
    } else {
      errorMessageAddress.innerText = "";
      errorMessageAddress.style.color = "green";
      inputElement.style.borderColor = "green";
      iconElement.innerHTML = "✔️"; // Success icon
      iconElement.style.fontSize = "12px"; // success size
    }
  };
  
  const validateDropField = (FieldId) => {
    const selectElement = document.getElementById(FieldId);
    const selectedValue = selectElement.value;
    const errorMessage = document.getElementById(`error-${FieldId}`);
    const iconElement = document.getElementById(`icon-${FieldId}`);
  
    // Store the default error message
    const defaultMessage = errorMessage.getAttribute("data");
  
    // If the selected value is empty or still the default placeholder option
    if (selectedValue === "") {
      if (`error-${FieldId}` != "error-nominee-dob") {
        errorMessage.innerText = "Please select an option";
      } else {
        errorMessage.innerText = "Please select dob";
      }
      selectElement.style.borderColor = "red";
      errorMessage.style.color = "red";
      errorMessage.style.fontSize = "15px";
      iconElement.innerHTML = "❌"; // Error icon
      iconElement.style.fontSize = "12px"; // error size
    } else {
      // If a valid option is selected
      selectElement.style.borderColor = "green";
      errorMessage.innerText = "";
      errorMessage.style.color = "green";
      errorMessage.style.fontSize = "15px";
      iconElement.innerHTML = "✔️"; // Success icon
      iconElement.style.fontSize = "12px"; // success size
    }
  };
  
  const validateKistiField = (FieldId) => {
    const inputElement = document.getElementById(FieldId);
    const inputValue = inputElement.value.trim();
    const errorMessageNumber = document.getElementById(`error-${FieldId}`);
    const iconElement = document.getElementById(`icon-${FieldId}`);
  
    const defaultMessage = errorMessageNumber.getAttribute("data");
  
    // If input is empty, reset to default state
    if (inputValue === "") {
      inputElement.style.borderColor = ""; // Reset to default
      errorMessageNumber.innerText = defaultMessage;
      errorMessageNumber.style.fontSize = "";
      errorMessageNumber.style.color = "";
      iconElement.innerHTML = ""; // Error icon
  
      return; // Exit the function
    }
  
    let isValid = true;
    if (inputValue.length < 19 || inputValue.length > 19) {
      isValid = false;
    }
    count = 0;
    for (let i = 0; i < inputValue.length; i++) {
      let value = inputValue[i];
      if (!((value >= 0 && value <= 9) || value == " ")) {
        isValid = false;
      }
      if (value >= "0" && value <= "9") {
        count++;
      }
    }
    if (count != 16) {
      isValid = false;
    }
    // Check if the input is not a number
    if (!isValid) {
      errorMessageNumber.innerText = "Invalid Number";
      inputElement.style.borderColor = "red";
      errorMessageNumber.style.fontSize = "15px";
      errorMessageNumber.style.color = "red";
      iconElement.innerHTML = "❌"; // Error icon
      iconElement.style.fontSize = "12px"; // error size
    } else {
      // If input is valid
      errorMessageNumber.innerText = "";
      errorMessageNumber.style.color = "green";
      inputElement.style.borderColor = "green";
      iconElement.innerHTML = "✔️"; // Success icon
      iconElement.style.fontSize = "12px"; // success size
    }
  };
  
  // if new nominee is selected:
  
  // function handleNomineeSelection() {
  //   const nomineeFields = [
  //     document.getElementById("nominee-name"),
  //     document.getElementById("nominee-mobile"),
  //     document.getElementById("nominee-national-id"),
  //     document.getElementById("nominee-dob"),
  //     document.getElementById("nominee-relation"),
  //     document.getElementById("nominee-address"),
  //   ];
  
  //   // Check which radio button is selected
  //   const newNominee = document.getElementById("newNominee").checked;
  
  //   // Enable fields if "New Nominee" is selected, disable otherwise
  //   nomineeFields.forEach((field) => {
  //     field.disabled = !newNominee;
  //   });
  // }
  
  function handleNewSelection() {
    const newFields = [
      document.getElementById("birth-nid"),
      document.getElementById("number"),
      document.getElementById("name"),
      document.getElementById("father-name"),
      document.getElementById("mother-name"),
      document.getElementById("mobile"),
      document.getElementById("relation"),
    ];
  
    // Get the selected value from the "Same As" dropdown
    const selectedValue = document.getElementById("same-as").value;
  
    // Check if "New" is selected
    const isNewSelected = selectedValue === "new";
  
    // Enable or disable fields based on the selection
    newFields.forEach((field) => {
      field.disabled = !isNewSelected;
    });
  }
  const validateNumberField = (FieldId) => {
  
      const inputElement = document.getElementById(FieldId);
      const inputValue = inputElement.value.trim();
      const errorMessageNumber = document.getElementById(`error-${FieldId}`);
      const iconElement = document.getElementById(`icon-${FieldId}`);
    
      const defaultMessage = errorMessageNumber.getAttribute("data");
      
    
      // If input is empty, reset to default state
    
      if (inputValue === "") {
        inputElement.style.borderColor = ""; // Reset to default
        errorMessageNumber.innerText = defaultMessage;
        errorMessageNumber.style.fontSize = "";
        errorMessageNumber.style.color = "";
        iconElement.innerHTML = ""; // Error icon
    
        return; // Exit the function
      }
    
      // Check if the input is not a number
      if (isNaN(inputValue) || inputValue.length > 6) {
    
        errorMessageNumber.innerText = "Invalid Number";
        inputElement.style.borderColor = "red";
        errorMessageNumber.style.fontSize = "15px";
        errorMessageNumber.style.color = "red";
        iconElement.innerHTML = "❌"; // Error icon
        iconElement.style.fontSize = "12px"; // error size
      } else {
        // If input is valid
        errorMessageNumber.innerText = "";
        errorMessageNumber.style.color = "green";
        inputElement.style.borderColor = "green";
        iconElement.innerHTML = "✔️"; // Success icon
        iconElement.style.fontSize = "12px"; // success size
      }
    };
    
  
  
    const validateAddressField = (FieldId) => {
      const inputElement = document.getElementById(FieldId);
      const inputValue = inputElement.value;
      const errorMessageAddress = document.getElementById(`error-${FieldId}`);
      const iconElement = document.getElementById(`icon-${FieldId}`);
    
      // If input is empty, reset to default state
      if (inputValue === "") {
        inputElement.style.borderColor = ""; // Reset to default
        errorMessageAddress.innerText = "";
        errorMessageAddress.style.fontSize = "";
        errorMessageAddress.style.color = "";
        iconElement.innerHTML = ""; // Error icon
        return; // Exit the function
      }
      if (inputValue.length > 200 || inputValue.length < 5) {
        errorMessageAddress.style.fontSize = "15px";
        errorMessageAddress.style.color = "red";
        errorMessageAddress.innerText =
          "Invalid. EX:  House No. 290, Purana Paltan. Dhaka – 1000";
        iconElement.innerHTML = "❌"; // Error icon
        inputElement.style.borderColor = "red";
        iconElement.style.fontSize = "12px"; // error size
      } else {
        errorMessageAddress.innerText = "";
        errorMessageAddress.style.color = "green";
        inputElement.style.borderColor = "green";
        iconElement.innerHTML = "✔️"; // Success icon
        iconElement.style.fontSize = "12px"; // success size
      }
    };