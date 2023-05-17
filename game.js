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
            { text: 'Coming soon...', nextText: 4 } ] },

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

    { id: 7, text: 'You walk out the door running from your owner down the hallway.', //from ids 5 and 6
        options: [
            { text: 'Play hide and seek', nextText: 9 } ] },

    { id: 8, text: 'You decide to explore the room you\'re already in, who will you play with in there?', // from id 6
    options: [
        { text: 'With your brothers', nextText: 37 },
        { text: 'By yourself', nextText: 26 } ] },

    { id: 9, text: 'While running from your owner it becomes clear they want to play hide and seek.', //from id 7
    options: [
        { text: 'Get away to hide', nextText: 10 },
        { text: 'You get caught before you can hide', nextText: 2 } ] },

    { id: 10, text: 'Where do you want to hide from your owner?', //from id 9
    options: [
        { text: 'Kitchen', nextText: 11 },
        { text: 'Living Room', nextText: 13 },
        { text: 'Upstairs', nextText: 22 } ] },

    { id: 11, text: 'You run into the kitchen and hide in the fridge, you find a bag of meat in there you decide would taste good with a movie.', //from id 10
    options: [
        { text: 'Watch a movie', nextText: 12 } ] },
    
    { id: 12, text: 'You watch a movie, finish your bag of raw meat, and start to get tired.', //from id 11
    options: [
        { text: 'You become bored', nextText: 25 } ] },

    { id: 13, text: 'Headig into the living room you find a cat sitting out on the couch, they invite you to play a game?', //from id 10
    options: [
        { text: 'Play poker', nextText: 14 },
        { text: 'Play tag', nextText: 17 }, ] },

    { id: 14, text: 'The cat takes out their deck of cards and deals them out.', //from id 13
    options: [
        { text: 'You win', nextText: 15 },
        { text: 'You lose', nextText: 16 }, ] },
    
    { id: 15, text: 'You celebrate your win with a war dance and stashing the cards under the couch.', //from id 14
    options: [
        { text: 'You become bored', nextText: 25 } ] },

    { id: 16, text: 'You\'re sure that the cat cheated, but you dont have any proof. So you get mad and stomp away.', //from id 14
    options: [
        { text: 'You become bored', nextText: 25 } ] },
    
    { id: 17, text: 'The cat jumps down and runs after you, so you dash away so they can\'t catch you.', //from id 13
    options: [
        { text: 'You get away', nextText: 18 },
        { text: 'You get tagged', nextText: 21 }, ] },

    { id: 18, text: 'The cat gives up after 15 minutes of chasing you without being able to catch you.', //from id 17
    options: [
        { text: 'Celebrate with a war dance', nextText: 19 },
        { text: 'Celebrate with a victory egg', nextText: 20 }, ] },

    { id: 19, text: 'You whip out your most elaborate war dance in celibration around the cat who couldn\'t tag you.', //from id 18
    options: [
        { text: 'You become bored', nextText: 25 } ] },

    { id: 20, text: 'You grab an egg from the fridge and go to town on it.', //from id 18
    options: [
        { text: 'You become bored', nextText: 25 } ] },

    { id: 21, text: 'The cat ends up taging you after a hard fought battle, and you get mad and storm off.', //from id 17
    options: [
        { text: 'You become bored', nextText: 25 } ] },

    { id: 22, text: 'You run up the stairs, where do you want to explore next?', //from id 10
    options: [
        { text: 'Explore the cage in the loft', nextText: 23 },
        { text: 'Check the room by the top of stairs', nextText: 24 }, ] },

    { id: 23, text: 'The cage turns out to be housing a guinea pig that you run around and play with, unitl you accidently bite them and get in trouble.', //from id 22
    options: [
        { text: 'You go downstairs and become bored', nextText: 23 } ] },

    { id: 24, text: 'You walk into the room and sniff anything new you can find, after lots of sniffing you get caught and run downstairs.', //from id 22
    options: [
        { text: 'You become bored', nextText: 25 } ] },

    { id: 25, text: 'After so much playing you start to get bored, what will you do next?', //from ids 12, 15, 16, 19, 20, 21, and 24
    options: [
        { text: 'Go into the bedroom', nextText: 8 },
        { text: 'Start over', nextText: -1 }, ] },
    
    { id: 26, text: 'What would you like to do by yourself?', // from id 8
    options: [
        { text: 'Turn on the shower', nextText: 27 },
        { text: 'Climb up the cage', nextText: 30 } ] },
    
    { id: 27, text: 'You jump up to turn the handle and wait for the water to warm up, then run around in the water and lick it off the shower floor.', // from id 26
    options: [
        { text: 'Skip the towel', nextText: 28 },
        { text: 'Dry off with a towel', nextText: 29 } ] },

    { id: 28, text: 'You run around wet, war dancing everywhere. After quite a few mintues of this you start to calm down.', // from id 27
    options: [
        { text: 'You become bored', nextText: 47 } ] },

    { id: 29, text: 'You rub yourself on the towel and roll around in the rice dig box to dry yourself off and throw rice everywhere for a bit.', // from id 27
    options: [
        { text: 'You become bored', nextText: 47 } ] },

    { id: 30, text: 'You look up at the cage and start to climb your way up using the vertical bars.', // from id 26
    options: [
        { text: 'You get spotted and put back', nextText: 47 },
        { text: 'You make it to the top of the cage', nextText: 31 } ] },

    { id: 31, text: 'You make it to the top of the cage and find a treasure chest, whats in it?', // from id 30
    options: [
        { text: 'A feret crown', nextText: 32 },
        { text: 'A car', nextText: 33 },
        { text: 'A plushie', nextText: 34 } ] },

    
    { id: 32, text: 'You open the chest and put on the crown. You feel the powers of the ferret queen rush into you. Ferrets swarm the room being draw to your powers. You take off the crown and jump down to get away from the swarm.', // from id 31
    options: [
        { text: 'After all that excitment you become bored', nextText: 47 } ] },

    { id: 33, text: 'You open the chest and take out the car, which grows to ferret size after taken out. You drive it off the cage and do donuts around the room. After driving and doing tricks for hours you eventually park the car under the bed.', // from id 31
    options: [
        { text: 'After lots of driving you become bored', nextText: 47 } ] },

    { id: 34, text: 'You take the plushie out of the chest and slide down the cage with it in your mouth. Pabu comes up to try and take it from you.', // from id 31
    options: [
        { text: 'You win the tug war', nextText: 35 },
        { text: 'You loose the tug war', nextText: 36 } ] },

    { id: 35, text: 'You run away with your new toy and stash it before Pabu can get to it. You hide with it under the bed satisfied with your work.', // from id 34
    options: [
        { text: 'After all that hard work you become bored', nextText: 47 } ] },

    { id: 36, text: 'Pabu grabs the plushie and you run after him wrestling him to the ground and taking the plushie back. You stash it under the bed and speedbump until Pabu has left.', // from id 34
    options: [
        { text: 'You become bored after all that work', nextText: 47 } ] },

    { id: 37, text: 'What do you want to do with your brothers', // from id 8
    options: [
        { text: 'Have a dance party', nextText: 40 },
        { text: 'Eat an egg', nextText: 39 },
        { text: 'Play tag', nextText: 38 } ] },

    { id: 38, text: 'The three of you play a crazy game of tag, tackling each other. After many crazy games of tag you all get tired and speedbump together.', // from id 37
    options: [
        { text: 'You become bored after playing', nextText: 47 } ] },

    { id: 39, text: 'You go grab and egg from the kitche, and the three of you go ham on it. *nom nom nom* After licking the bowl clean and stashing it you get lots of energy from the egg.', // from id 37
    options: [
        { text: 'Play hide and seek to let out your energy', nextText: 41 } ] },
    
    { id: 40, text: 'You turn on the radio and play the hamster dance while doing your best war dance. You eventually get bored of dancing.', // from id 37
    options: [
        { text: 'Play hide and seek to cure boredom', nextText: 41 } ] },

    { id: 41, text: 'What role do you want to play in hide and seek?', // from ids 39 and 40
    options: [
        { text: 'The seeker', nextText: 42 },
        { text: 'The hider', nextText: 44 } ] },
    
    { id: 42, text: 'You look around and find Pabu under the cage. You find THor hiding under the desk.', // from id 41
    options: [
        { text: 'End hide and seek game', nextText: 43 } ] },

    { id: 43, text: 'You find everyone and Pabu and Thor walk out angry becuase they lost.', // from id 42
    options: [
        { text: 'All that searching made you bored', nextText: 47 } ] },

    { id: 44, text: 'You quickly run under the couch and hide, do you get found?', // from id 41
    options: [
        { text: 'You aren\'t found', nextText: 45 },
        { text: 'You are found', nextText: 46 } ] },

    { id: 45, text: 'Eventually Pabu and Thor give up and you walk out, everyone is exahusted from looking for you and speedbump to rest.', // from id 44
    options: [
        { text: 'You become bored', nextText: 47 } ] },

    { id: 46, text: 'Oh no! Pabu found you under the couch. After a few more rounds Thor and Pabu walk off to do something else.', // from id 44
    options: [
        { text: 'You become bored', nextText: 47 } ] },

    { id: 47, text: 'You become bored after playing for so long. What do you want to do next?', // from ids 28, 29, 30, 32, 33, 35, 36, 38, 43, 45, and 46
    options: [
        { text: 'Explore outside the bedroom', nextText: 7 },
        { text: 'Start over', nextText: -1 } ] },

    { id: 48, text: 'leave', // from id 3
    options: [
        { text: 'stay', nextText: 49 },
        { text: 'leave2', nextText: 50 } ] },
    
    { id: 49, text: 'stay', // from id 48
    options: [
        { text: 'start over', nextText: -1 } ] },

    { id: 50, text: 'leave2', // from id 48
    options: [
        { text: 'friends', nextText: 51 },
        { text: 'spa', nextText: 66 } ] },

    { id: 51, text: 'friends', // from id 50
    options: [
        { text: 'outside', nextText: 52 },
        { text: 'inside', nextText: 62 } ] },

    { id: 52, text: 'outside', // from id 51
    options: [
        { text: 'bird', nextText: 53 },
        { text: 'bunny', nextText: 57 },
        { text: 'fish', nextText: 59 },
        { text: 'hooman', nextText: 61 } ] },

    { id: 53, text: 'bird', // from id 52
    options: [
        { text: 'hug', nextText: 54 },
        { text: 'play', nextText: 55 } ] },
    
    { id: 54, text: 'hug', // from id 53
    options: [
        { text: 'birdend', nextText: 56 } ] },

    { id: 55, text: 'play', // from id 53
    options: [
        { text: 'birdend', nextText: 56 } ] },

    { id: 56, text: 'birdend', // from ids 54 and 55
    options: [
        { text: 'outside', nextText: 52 },
        { text: 'startover', nextText: -1 } ] },

    { id: 57, text: 'bunny', // from id 52
    options: [
        { text: 'bunnyend', nextText: 58 } ] },

    { id: 58, text: 'bunnyend', // from id 57
    options: [
        { text: 'outside', nextText: 52 },
        { text: 'start over', nextText: -1 } ] },

    { id: 59, text: 'fish', // from id 52
    options: [
        { text: 'fishend', nextText: 60 } ] },

    { id: 60, text: 'fishend', // from id 59
    options: [
        { text: 'outside', nextText: 52 },
        { text: 'start over', nextText: -1 } ] },

    { id: 61, text: 'hooman', // from id 52
    options: [
        { text: 'outside', nextText: 52 },
        { text: 'start over', nextText: -1 } ] },

    { id: 62, text: 'inside', // from id 51
    options: [
        { text: 'cat', nextText: 63 },
        { text: 'dog', nextText: 64 },
        { text: 'piggie', nextText: 65 } ] },

    { id: 63, text: 'cat', // from id 62
    options: [
        { text: 'start over', nextText: -1 } ] },

    { id: 64, text: 'dog', // from id 62
    options: [
        { text: 'start over', nextText: -1 } ] },

    { id: 65, text: 'piggie', // from id 62
    options: [
        { text: 'start over', nextText: -1 } ] },
]
startGame()