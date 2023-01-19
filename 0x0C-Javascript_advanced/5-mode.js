function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement("button");
    spookyButton.innerHTML = "Spooky";
    spookyButton.onclick = function () { spooky() };
    document.body.appendChild(spookyButton);

    const darkButton = document.createElement("button");
    darkButton.innerHTML = "Dark mode";
    darkButton.onclick = function () { darkMode() };
    document.body.appendChild(darkButton);

    const screamButton = document.createElement("button");
    screamButton.innerHTML = "Scream mode";
    screamButton.onclick = function () { screamMode() };
    document.body.appendChild(screamButton);
}
main();
