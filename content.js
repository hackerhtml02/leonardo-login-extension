setTimeout(() => {
    let button = document.evaluate(
        "//*[@id='root']/div/div/div[1]/div[3]/button[1]", 
        document, 
        null, 
        XPathResult.FIRST_ORDERED_NODE_TYPE, 
        null
    ).singleNodeValue;

    if (button) {
        button.click();
        console.log("Button clicked successfully!");
    } else {
        console.log("Button not found!");
    }
}, 3000);

setTimeout(function() {
    var element = document.evaluate('//*[@id="root"]/div/div[2]/button/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.click();
    } else {
        console.log("Element not found");
    }
}, 5000);

setTimeout(function() {
    var element = document.evaluate('//*[text()="Start creating"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.click();
    } else {
        console.log("Element not found");
    }
}, 10000);

