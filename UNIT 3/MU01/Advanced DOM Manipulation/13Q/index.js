const outerDiv = document.getElementById('outer');
const middleDiv = document.getElementById('middle');
const innerDiv = document.getElementById('inner');
const outerButton = document.getElementById('outer-button');
const middleButton = document.getElementById('middle-button');
const innerButton = document.getElementById('inner-button');

// Function to add event listeners for both capturing and bubbling phases
function addEventListeners(element, name) {
    // Capturing phase (top-down)
    element.addEventListener('click', () => {
        alert(`Capturing: ${name}`);
    }, true);

    // Bubbling phase (bottom-up)
    element.addEventListener('click', () => {
        alert(`Bubbling: ${name}`);
    });
}

// Add event listeners to div elements and buttons
addEventListeners(outerDiv, 'Outer Div');
addEventListeners(middleDiv, 'Middle Div');
addEventListeners(innerDiv, 'Inner Div');
addEventListeners(outerButton, 'Outer Button');
addEventListeners(middleButton, 'Middle Button');
addEventListeners(innerButton, 'Inner Button');

// Stop event propagation when clicking the innermost button
innerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Inner Button clicked and propagation stopped');
});