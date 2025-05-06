function makeTextBigger() {
    const text = document.getElementById("userInput");
    
    // Upon clicking the button, the font size of the text will toggle between 24pt and its default size.
    // Was not sure the exact instrucitons regarding this, so this was my interpretation.
    if (text.style.fontSize === "24pt") {
        text.style.fontSize = "initial";
    }
    else {
        text.style.fontSize = "24pt"
    }
}

function updateText() {
    const text = document.getElementById("userInput");
    const styleText = document.getElementById("fancy");
    const boringText = document.getElementById("boring");

    if (styleText.checked) {
        alert("FancyShmancy selected. Applying styles to the text!");
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    }
    else if (boringText.checked) {
        alert("BoringBetty selected. Removing styles from the text!");
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function makeUpper() {
    const text = document.getElementById("userInput");
    let upperText = text.value.toUpperCase();
    let sentences = upperText.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    text.value = sentences.join(". ");
}