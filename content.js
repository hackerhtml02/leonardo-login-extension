var buttons = document.querySelectorAll('.VfPpkd-dgl2Hf-ppHlrf-sM5MNb button');
buttons.forEach(function(button) {
    if (button.innerText.trim() === "Lanjutkan") {
        button.click();
        console.log("Button clicked!");
    }
});
