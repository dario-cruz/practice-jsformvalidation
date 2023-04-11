// Define all needed elements from page or form.
const formElement = document.querySelector('#page-form')
const inputLastName = document.querySelector('#lname-input')
const inputFirstName = document.querySelector('#fname-input')
const inputEmail = document.querySelector('#email-input')
const serviceSelect = document.querySelector('#service-select')
const inputCountry = document.querySelector('#country-input')
const inputZip = document.querySelector('#zip-input')
const inputPass = document.querySelector('#pass-input')
const inputPassConf = document.querySelector('#pass-confirm')
const modalDiv = document.querySelector('div.modal')

// Live check first and last name input and through error if pattern is not matched.
inputFirstName.addEventListener('input', (e) => {
    if (inputFirstName.validity.patternMismatch) {
        inputFirstName.setCustomValidity('Names may only consist of letters and needed Punctuation.')
    } else {
        inputFirstName.setCustomValidity('')
    }
})
inputLastName.addEventListener('input', (e) => {
    if(inputLastName.validity.patternMismatch) {
        inputLastName.setCustomValidity('Names may only consist of letters and needed Punctuation.')
    } else {
        inputLastName.setCustomValidity('')
    }
})

// Check that the zip code is only 5 digits long if not throw error.
inputZip.addEventListener('input', (e) => {
    if(inputZip.validity.patternMismatch) {
        inputZip.setCustomValidity('5 Digit Zip code only.')
    } else {
        inputZip.setCustomValidity('')
    }
})

// Throw error if the password values do not maatch.
inputPass.addEventListener('input', (e) => {
    if (inputPass.value !== inputPassConf.value) {
        inputPass.setCustomValidity('Passwords do not match!')
    } else {
        inputPass.setCustomValidity('')
    }
})
inputPassConf.addEventListener('input', (e) => {
    if(inputPassConf.value !== inputPass.value) {
        inputPassConf.setCustomValidity('Passwords do not match!')
    } else {
        inputPassConf.setCustomValidity('')
    }
})

// Create event for when the user submits the correct information.
formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    // Change the visibility of modal and content on successful submit.
    modalDiv.classList.remove('hidden')
    modalDiv.classList.add('visible')

    // Reset all form elements. 
    inputFirstName.value = ''
    inputLastName.value = ''
    inputEmail.value = ''
    serviceSelect.value = ''
    inputCountry.value = ''
    inputZip.valaue = ''
    inputPass.value = ''
    inputPassConf.value = ''
})

// One click of span element close the congratz modal.
