// validateForm.js

// Function to validate the form
function validateForm() {
    
    var firstName = document.getElementById('first');
    var lastName = document.getElementById('lastname');
    var branch = document.querySelector('#branch');
    var batch = document.querySelector('#batch');
    var yearOfPassing = document.getElementById('yearOfPassing');
    var mobileNumber = document.getElementById('mobileNumber');
    var emailAddress = document.getElementById('emailAddress');
    var postalAddress = document.getElementById('postalAddress');
    var aboutYourself = document.getElementById('textarea');

    // Regular expressions for email and mobile number validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobileRegex = /^\d{10}$/;

    // Validation checks
    if (firstName.value.trim() === '') {
        alert('Please enter your first name');
        firstName.focus();
        return false;
    }

    if (lastName.value.trim() === '') {
        alert('Please enter your last name');
        lastName.focus();
        return false;
    }

    if (branch.value === '--Choose--') {
        alert('Please select your branch');
        branch.focus();
        return false;
    }

    if (batch.value === '--Choose--') {
        alert('Please select your batch');
        batch.focus();
        return false;
    }

    if (yearOfPassing.value.trim() === '') {
        alert('Please enter your year of passing');
        yearOfPassing.focus();
        return false;
    }

    if (!mobileRegex.test(mobileNumber.value.trim()) || mobileNumber.value.trim().length !== 10) {
        alert('Please enter a valid 10-digit mobile number');
        mobileNumber.focus();
        return false;
    }
    

    if (!emailRegex.test(emailAddress.value.trim())) {
        alert('Please enter a valid email address');
        emailAddress.focus();
        return false;
    }

    if (postalAddress.value.trim() === '') {
        alert('Please enter your postal address');
        postalAddress.focus();
        return false;
    }

    if (aboutYourself.value.trim() === '') {
        alert('Please tell us more about yourself');
        aboutYourself.focus();
        return false;
    }

   
    return true;
}

// Function to clear form fields
function clearForm() {
    document.getElementById('alumniForm').reset();
}
