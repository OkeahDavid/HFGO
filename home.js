function typeOut(element, text, duration) {
    let charIndex = 0;

    function typeChar() {
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
            setTimeout(typeChar, duration);
        } else {
            // Add cursor animation once typing is complete
            let cursorSpan = document.createElement('span');
            cursorSpan.textContent = '|';
            cursorSpan.className = 'cursor';
            element.appendChild(cursorSpan);
        }
    }

    typeChar();
}
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for welcome text
    const welcomeTextElement = document.getElementById('welcomeText');
    typeOut(welcomeTextElement, "Welcome Home", 100);

    // Update footer year
    const year = new Date().getFullYear();
    document.querySelector(".u-footer").textContent = `©${year} God's Family Church`;
});

