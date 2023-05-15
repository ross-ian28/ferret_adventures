// Grab the two div tag defined in index.html
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
function startGame() {
    showTextNode(1);
}
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button); } }) }
function showOption(option) {
    return option.requiredState == null || option.requiredState(); }
function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    showTextNode(nextTextNodeId); }
const textNodes = [
    { id: 1, text: 'Welcome to ferret adventures, select a ferret',
        options: [
            { text: 'Loki', nextText: 2 },
            { text: 'Thor', nextText: 3 },
            { text: 'Pabu', nextText: 4 } ] },
    { id: 2, text: 'You picked Loki! The cage is open, where do you want to go next?',
        options: [
            { text: 'Leave the cage', nextText: 5 },
            { text: 'Stay in the cage', nextText: 6 } ] },
    { id: 5, text: 'You leave the cage, where do you want to explore next?',
        options: [
            { text: 'Explore the house', nextText: 7 },
            { text: 'Explore the bedroom', nextText: 8 } ] },
    { id: 6, text: 'You leave the cage, why would you miss out on an adventure. Where do you want to explore next?',
        options: [
            { text: 'Explore the house', nextText: 7 },
            { text: 'Explore the bedroom', nextText: 8 } ] },
    { id: 7, text: 'You leave the cage, why would you miss out on an adventure. Where do you want to explore next?',
        options: [
            { text: 'Explore the house', nextText: 7 },
            { text: 'Explore the bedroom', nextText: 8 } ] },
]
startGame()