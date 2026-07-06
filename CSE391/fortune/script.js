// Fortune messages
const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "A beautiful opportunity is waiting for you.",
    "Your hard work will soon bring good results.",
    "Success begins with believing in yourself.",
    "Something wonderful is about to happen.",
    "A small step today can create a better tomorrow.",
    "Your creativity will lead you toward success.",
    "Patience will bring you the answer you are looking for.",
    "A new friendship will bring happiness into your life.",
    "Do not fear failure because it is part of success.",
    "Your kindness will return to you in unexpected ways.",
    "A positive attitude will create positive results."
];

// Select HTML elements
const fortuneBox = document.getElementById("fortuneBox");
const fortuneText = document.getElementById("fortuneText");
const themeButtons = document.querySelectorAll(".theme-button");

// Four complete themes
const themes = [
    {
        name: "Green Theme",
        fontColor: "#100f0f",
        backgroundColor: "#13a827",
        borderColor: "#be1b19",
        fontSize: "20px",
        fontFamily: "Arial, sans-serif"
    },

    {
        name: "Yellow Theme",
        fontColor: "#5d09c3",
        backgroundColor: "#eb800f",
        borderColor: "#050403",
        fontSize: "22px",
        fontFamily: "Georgia, serif"
    },

    {
        name: "Blue Theme",
        fontColor: "#0d47a1",
        backgroundColor: "#bbdefb",
        borderColor: "#1976d2",
        fontSize: "19px",
        fontFamily: "'Courier New', monospace"
    },

    {
        name: "Orange Theme",
        fontColor: "#7f0000",
        backgroundColor: "#ffe0b2",
        borderColor: "#ef6c00",
        fontSize: "21px",
        fontFamily: "'Trebuchet MS', sans-serif"
    }
];

// Display a random fortune
function displayRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);

    fortuneText.textContent = fortunes[randomIndex];
}

// Apply one complete theme
function applyTheme(themeIndex) {
    const selectedTheme = themes[themeIndex];

    fortuneBox.style.color =
        selectedTheme.fontColor;

    fortuneBox.style.backgroundColor =
        selectedTheme.backgroundColor;

    fortuneBox.style.borderColor =
        selectedTheme.borderColor;

    fortuneBox.style.fontSize =
        selectedTheme.fontSize;

    fortuneBox.style.fontFamily =
        selectedTheme.fontFamily;

    // Save selected theme in localStorage
    localStorage.setItem("selectedTheme", themeIndex);
}

// Add click event to every theme button
themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const themeIndex = Number(button.dataset.theme);

        applyTheme(themeIndex);
    });
});

// Load the previously selected theme
function loadSavedTheme() {
    const savedTheme = localStorage.getItem("selectedTheme");

    if (savedTheme !== null) {
        applyTheme(Number(savedTheme));
    } else {
        // Use the first theme by default
        applyTheme(0);
    }
}

// Run when the page loads
displayRandomFortune();
loadSavedTheme();