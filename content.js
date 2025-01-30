var element = document.evaluate('/html/body/main/div/div[2]/div/div[1]/div[3]/div[1]/button[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (element) {
    element.click();
} else {
    console.log('Element not found');
}
