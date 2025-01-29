// Define a function to select elements using XPath
function selectElement(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Find the email input field and set its value
var emailInput = selectElement('//*[@id="identifierId"]');
if (emailInput) {
    emailInput.value = 'stellarbyte@fortbendfuture.dev';
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));
} else {
    console.error('Email input field not found!');
}

// Click the next button
var nextButton = selectElement('//*[@id="identifierNext"]/div/button/span');
if (nextButton) {
    nextButton.click();
} else {
    console.error('Next button not found!');
}

// Set a timeout to fill the password field and click its next button
setTimeout(function() {
    var passwordInput = selectElement('//*[@id="password"]/div[1]/div/div[1]/input');
    if (passwordInput) {
        passwordInput.value = 'Haris123@';
        passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
        console.error('Password input field not found!');
    }

    var passwordNextButton = selectElement('//*[@id="passwordNext"]/div/button/span');
    if (passwordNextButton) {
        passwordNextButton.click();
    } else {
        console.error('Password next button not found!');
    }
}, 9000);


// Set a timeout to fill the recovery email field and click its next button
setTimeout(function() {
    // Find the element for next button in recovery email section using XPath
    var understandNextButton = document.evaluate('//*[@id="confirm"]',
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (understandNextButton) {
        understandNextButton.click();
    } else {
        console.error('Recovery email next button not found!');
    }
}, 2000); // Assuming the delay for the recovery email section is 15000 milliseconds
