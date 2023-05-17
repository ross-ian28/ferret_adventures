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

    { id: 2, text: 'You picked Loki! The cage is open, where do you want to go next?', // from id 1
        options: [
            { text: 'Leave the cage', nextText: 5 },
            { text: 'Stay in the cage', nextText: 6 } ] },

    { id: 5, text: 'You leave the cage, where do you want to explore next?', // from id 2
        options: [
            { text: 'Explore the house', nextText: 7 },
            { text: 'Explore the bedroom', nextText: 8 } ] },

    { id: 6, text: 'You leave the cage, why would you miss out on an adventure. Where do you want to explore next?', // from id 2
        options: [
            { text: 'Explore the house', nextText: 7 },
            { text: 'Explore the bedroom', nextText: 8 } ] },

    { id: 7, text: 'outroom', //from ids 5 and 6
        options: [
            { text: 'outhide', nextText: 9 } ] },

    { id: 8, text: 'inroom', // from id 6
    options: [
        { text: 'brothers', nextText: 37 },
        { text: 'byself', nextText: 26 } ] },

    { id: 9, text: 'outhide', //from id 7
    options: [
        { text: 'Explore', nextText: 10 },
        { text: 'Back to beginning', nextText: 2 } ] },

    { id: 10, text: 'explore', //from id 9
    options: [
        { text: 'Kitchen', nextText: 11 },
        { text: 'Living Room', nextText: 13 },
        { text: 'Upstairs', nextText: 22 } ] },

    { id: 11, text: 'kitchen', //from id 10
    options: [
        { text: 'Movie', nextText: 12 } ] },
    
    { id: 12, text: 'Movie', //from id 11
    options: [
        { text: 'Outend', nextText: 25 } ] },

    { id: 13, text: 'Living Room', //from id 10
    options: [
        { text: 'Poker', nextText: 14 },
        { text: 'Tag', nextText: 17 }, ] },

    { id: 14, text: 'Poker', //from id 13
    options: [
        { text: 'Win', nextText: 15 },
        { text: 'Loss', nextText: 16 }, ] },
    
    { id: 15, text: 'PokerWin', //from id 14
    options: [
        { text: 'Outend', nextText: 25 } ] },

    { id: 16, text: 'PokerLoss', //from id 14
    options: [
        { text: 'Outend', nextText: 25 } ] },
    
    { id: 17, text: 'Tag', //from id 13
    options: [
        { text: 'TagWin', nextText: 18 },
        { text: 'TagLoss', nextText: 21 }, ] },

    { id: 18, text: 'TagWin', //from id 17
    options: [
        { text: 'dance', nextText: 19 },
        { text: 'egg', nextText: 20 }, ] },

    { id: 19, text: 'dance', //from id 18
    options: [
        { text: 'Outend', nextText: 25 } ] },

    { id: 20, text: 'egg', //from id 18
    options: [
        { text: 'Outend', nextText: 25 } ] },

    { id: 21, text: 'TagLoss', //from id 17
    options: [
        { text: 'Outend', nextText: 25 } ] },

    { id: 22, text: 'Upstairs', //from id 10
    options: [
        { text: 'pig', nextText: 23 },
        { text: 'room', nextText: 24 }, ] },

    { id: 23, text: 'pig', //from id 22
    options: [
        { text: 'Outroom', nextText: 23 } ] },

    { id: 24, text: 'room', //from id 22
    options: [
        { text: 'pig', nextText: 23 },
        { text: 'room', nextText: 24 }, ] },

    { id: 25, text: 'Outroom', //from ids 12, 15, 16, 19, 20, and 21 
    options: [
        { text: 'Inroom', nextText: 8 },
        { text: 'Start over', nextText: -1 }, ] },
    
    { id: 26, text: 'byself', // from id 8
    options: [
        { text: 'shower', nextText: 27 },
        { text: 'cage', nextText: 30 } ] },
    
    { id: 27, text: 'shower', // from id 26
    options: [
        { text: 'wet play', nextText: 28 },
        { text: 'dry play', nextText: 29 } ] },

    { id: 28, text: 'wet play', // from id 27
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 29, text: 'dry play', // from id 27
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 30, text: 'cage', // from id 26
    options: [
        { text: 'in end caught', nextText: 47 },
        { text: 'top cage', nextText: 31 } ] },

    { id: 31, text: 'top cage', // from id 30
    options: [
        { text: 'crown', nextText: 32 },
        { text: 'car', nextText: 33 },
        { text: 'plushie', nextText: 34 } ] },

    
    { id: 32, text: 'crown', // from id 31
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 33, text: 'car', // from id 31
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 34, text: 'plushie', // from id 31
    options: [
        { text: 'win tug', nextText: 35 },
        { text: 'loose tug', nextText: 36 } ] },

    { id: 35, text: 'win tug', // from id 34
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 36, text: 'loose tug', // from id 34
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 37, text: 'brothers', // from id 8
    options: [
        { text: 'dance', nextText: 40 },
        { text: 'egg', nextText: 39 },
        { text: 'tag', nextText: 38 } ] },

    { id: 38, text: 'tag', // from id 37
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 39, text: 'egg', // from id 37
    options: [
        { text: 'hidenseek', nextText: 41 } ] },
    
    { id: 40, text: 'dance', // from id 37
    options: [
        { text: 'hidenseek', nextText: 41 } ] },

    { id: 41, text: 'hidenseek', // from ids 39 and 40
    options: [
        { text: 'seeker', nextText: 42 },
        { text: 'hider', nextText: 44 } ] },
    
    { id: 42, text: 'seeker', // from id 41
    options: [
        { text: 'foundall', nextText: 43 } ] },

    { id: 43, text: 'foundall', // from id 42
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 44, text: 'hider', // from id 41
    options: [
        { text: 'good hide', nextText: 45 },
        { text: 'bad hide', nextText: 46 } ] },

    { id: 45, text: 'good hide', // from id 44
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 46, text: 'bad hide', // from id 44
    options: [
        { text: 'in end', nextText: 47 } ] },

    { id: 47, text: 'in end', // from ids 28, 29, 30, 32, 33, 35, 36, 38, 43, 45, and 46
    options: [
        { text: 'outroom', nextText: 7 },
        { text: 'start over', nextText: -1 } ] },
]
startGame()