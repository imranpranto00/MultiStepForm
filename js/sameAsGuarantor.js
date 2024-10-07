function handleNomineeSelection() {
    const nomineeFields = [
        document.getElementById("nominee-name"),
        document.getElementById("nominee-mobile"),
        document.getElementById("nominee-national-id"),
        document.getElementById("nominee-dob"),
        document.getElementById("nominee-relation"),
        document.getElementById("nominee-address"),
    ];

    // Get the values from the first and second guarantors
    const firstGuarantorName = document.getElementById("first-guarantor-name").value;
    const firstGuarantorMobile = document.getElementById("first-guarantor-mobile").value;
    const firstGuarantorNationalId = document.getElementById("first-guarantor-national-id").value;
    const firstGuarantorRelationship = document.getElementById("first-guarantor-relation").value;
    const firstGuarantorAddress = document.getElementById("first-guarantor-address").value;

    const secondGuarantorName = document.getElementById("second-guarantor-name").value;
    const secondGuarantorMobile = document.getElementById("second-guarantor-mobile").value;
    const secondGuarantorNationalId = document.getElementById("second-guarantor-national-id").value;
    const secondGuarantorRelationship = document.getElementById("second-guarantor-relation").value;
    const secondGuarantorAddress = document.getElementById("second-guarantor-address").value;

    // Check which radio button is selected
    const sameAsFirstGuarantor = document.getElementById("sameAsFirstGuarantor").checked;
    const sameAsSecondGuarantor = document.getElementById("sameAsSecondGuarantor").checked;
    const newNominee = document.getElementById("newNominee").checked;

    nomineeFields.forEach((field) => {
        const iconElement = document.getElementById(`icon-${field.id}`);
        // Reset icon to default state
        if (iconElement) {
            iconElement.innerHTML = ""; // Reset the error icon
        }
    });


    if (sameAsFirstGuarantor) {
        // Fill fields with first guarantor's data and disable them
        nomineeFields[0].value = firstGuarantorName; // Name
        nomineeFields[1].value = firstGuarantorMobile; // Mobile
        nomineeFields[2].value = firstGuarantorNationalId; // National ID
        nomineeFields[3].value = ''; // DOB (manual input)
        nomineeFields[4].value = firstGuarantorRelationship; // Relation (manual input)
        nomineeFields[5].value = firstGuarantorAddress; // Address (manual input)
        nomineeFields.forEach(field => field.disabled = true);
        nomineeFields[3].disabled = false; // Enable DOB for manual input
        // nomineeFields[4].disabled = false; // Enable relation for manual input
        // nomineeFields[5].disabled = false; // Enable address for manual input
    } else if (sameAsSecondGuarantor) {
        // Fill fields with second guarantor's data and disable them
        nomineeFields[0].value = secondGuarantorName; // Name
        nomineeFields[1].value = secondGuarantorMobile; // Mobile
        nomineeFields[2].value = secondGuarantorNationalId; // National ID
        nomineeFields[3].value = ''; // DOB (manual input)
        nomineeFields[4].value = secondGuarantorRelationship; // Relation (manual input)
        nomineeFields[5].value = secondGuarantorAddress; // Address (manual input)
        nomineeFields.forEach(field => field.disabled = true);
        nomineeFields[3].disabled = false; // Enable DOB for manual input
        // nomineeFields[4].disabled = false; // Enable relation for manual input
        // nomineeFields[5].disabled = false; // Enable address for manual input
    } else if (newNominee) {
        // Enable all fields for manual input
        nomineeFields.forEach(field => {
            field.disabled = false;
            field.value = ''; // Clear all fields for new input
            field.style.borderColor = ''; // Reset to default background color
            field.style.color = ''; // Reset to default text color
// Reset icon to default state
const iconElement = document.getElementById(`icon-${field.id}`);
if (iconElement) {
    iconElement.innerHTML = ""; // Reset the error icon
}
        });
    } else {
        // If no option is selected, disable all fields
        nomineeFields.forEach(field => {
            field.disabled = true;
            field.value = ''; // Clear all fields if disabled
            // Reset icon to default state
            const iconElement = document.getElementById(`icon-${field.id}`);
            if (iconElement) {
                iconElement.innerHTML = ""; // Reset the error icon
            }
         
        });
    }
}
