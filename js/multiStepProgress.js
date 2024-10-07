document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multi-step-form');
    const formSteps = document.querySelectorAll('.form-step');
    const progress = document.getElementById('progress');
    const progressSteps = document.querySelectorAll('.progress-step');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    let currentStep = 0;

    /**
     * Updates the visibility of form steps, progress bar, and button states.
     */
    function updateFormSteps() {
        // Show/hide form steps
        formSteps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });

        // Update progress steps
        progressSteps.forEach((step, index) => {
            step.classList.toggle('active', index <= currentStep);
        });

        // Update progress bar width
        progress.style.width = ((currentStep) / (formSteps.length - 1)) * 100 + '%';

        // Update buttons
        prevBtn.disabled = currentStep === 0;
        if (currentStep === formSteps.length - 1) {
            nextBtn.textContent = 'Submit';
        } else {
            nextBtn.textContent = 'Next';
        }
    }

    /**
     * Validates the current form step.
     * @returns {boolean} True if the step is valid, false otherwise.
     */
    function validateStep() {
        // const currentFormStep = formSteps[currentStep];
        // const inputs = currentFormStep.querySelectorAll('input[required], textarea[required], select[required]');
        // let valid = true;

        // inputs.forEach(input => {
        //     if (!input.value.trim()) {
        //         valid = false;
        //         input.classList.add('invalid');
        //     } else {
        //         input.classList.remove('invalid');
        //     }

        //     // Additional validation can be added here (e.g., specific formats)
        // });

        return true;
    }

    /**
     * Handles the "Next" button click.
     */
    nextBtn.addEventListener('click', function () {
        if (validateStep()) {
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                updateFormSteps();
            } else {
                // Submit the form
                form.submit();
                // Alternatively, you can handle the submission via AJAX
                // alert('Form Submitted!');
            }
        } else {
            alert('Please fill all required fields.');
        }
    });

    /**
     * Handles the "Previous" button click.
     */
    prevBtn.addEventListener('click', function () {
        if (currentStep > 0) {
            currentStep--;
            updateFormSteps();
        }
    });

    /**
     * Prevents actual form submission for demonstration purposes.
     */
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form Submitted Successfully!');
        // Here you can add your form submission logic (e.g., AJAX request)
    });

    // Initialize the form
    updateFormSteps();
});
