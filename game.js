const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons') // Select the two div tag defined in index.html

let facemaskOption = '';
let podcastOption = '';
let tvOption = ''; // Set textNode id: 80 placeholder variables

function startGame() {
    showTextNode(1);// When game started, show the first textNode
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex); // Find the text and options with the coresponding id
    const updatedText = replacePlaceholders(textNode.text); // Call replacePlaceholders for textNode id: 80
    textElement.innerText = updatedText;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);// Remove every old option
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button); 
        } 
    }); 
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(); 
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame(); // Start the game over if any number less than 0 is returned
    }
    // Conditionals for textNode id: 80
    if (option.mask) {
        facemaskOption = option.mask
    }

    if (option.podcast) {
        podcastOption = option.podcast;
    }

    if (option.tv) {
        tvOption = option.tv;
    }
    showTextNode(nextTextNodeId); 
}

function replacePlaceholders(text) { // Use replace method to change placeholder based on user input
    return text
        .replace('{facemask}', facemaskOption)
        .replace('{podcast}', podcastOption)
        .replace('{tv}', tvOption);
}

const textNodes = [
    { id: 1, text: 'Welcome to ferret adventures, select a ferret',
        options: [
            { text: 'Loki', nextText: 2 },
            { text: 'Thor', nextText: 3 },
            { text: 'Coming soon...', nextText: 1 } ] }, // to 4
    { id: 2, text: 'You picked Loki! The cage is open, where do you want to go next?', // from id 1
        options: [
            { text: 'Leave the cage', nextText: 5 },
            { text: 'Stay in the cage', nextText: 6 } ] },
    { id: 3, text: 'You picked Thor! The cage is open, where do you want to go next?', // from id 1
    options: [
        { text: 'Leave the cage', nextText: 48 },
        { text: 'Stay in the cage', nextText: 49 } ] },
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
        { text: 'You get caught before you can hide', nextText: 5 } ] },
    { id: 10, text: 'Where do you want to hide from your owner?', //from id 9
    options: [
        { text: 'Kitchen', nextText: 11 },
        { text: 'Living Room', nextText: 13 },
        { text: 'Upstairs', nextText: 22 } ] },
    { id: 11, text: 'You run into the kitchen and hide in the fridge, you find a bag of meat in there you decide would taste good with a movie.', //from id 10
    options: [
        { text: 'Watch a movie', nextText: 12 } ] },
    { id: 12, text: 'You watch \'Ferrets Bride\', finish your bag of raw meat, and start to get tired.', //from id 11
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
        { text: 'You go downstairs and become bored', nextText: 25 } ] },
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
    { id: 37, text: 'What do you want to do with your brothers?', // from id 8
    options: [
        { text: 'Have a dance party', nextText: 40 },
        { text: 'Eat an egg', nextText: 39 },
        { text: 'Play tag', nextText: 38 } ] },
    { id: 38, text: 'The three of you play a crazy game of tag, tackling each other. After many crazy games of tag you all get tired and speedbump together.', // from id 37
    options: [
        { text: 'You become bored after playing', nextText: 47 } ] },
    { id: 39, text: 'You go grab and egg from the kitchen, and the three of you go ham on it. *nom nom nom* After licking the bowl clean and stashing it you get lots of energy from the egg.', // from id 37
    options: [
        { text: 'Play hide and seek to let out your energy', nextText: 41 } ] },
    { id: 40, text: 'You turn on the radio and play the hamster dance while doing your best war dance. You eventually get bored of dancing.', // from id 37
    options: [
        { text: 'Play hide and seek to cure boredom', nextText: 41 } ] },
    { id: 41, text: 'What role do you want to play in hide and seek?', // from ids 39 and 40
    options: [
        { text: 'The seeker', nextText: 42 },
        { text: 'The hider', nextText: 44 } ] },
    { id: 42, text: 'You look around and find Pabu under the cage. You find Thor hiding under the desk.', // from id 41
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
    { id: 48, text: 'Are you sure you want to leave? You are not sure if you are allowed to.', // from id 3
    options: [
        { text: 'Your\'re sure you want to leave', nextText: 50 },
        { text: 'Stay in the cage', nextText: 49 } ] },
    { id: 49, text: 'You stay, eat your kibble, splash in your water fountain, and take a nap for the rest of the day.', // from id 48
    options: [
        { text: 'Start over', nextText: -1 } ] },
    { id: 50, text: 'You\'re sure about leaving so you walk out of the cage, what do you want to do for the day?', // from id 48
    options: [
        { text: 'Make new friends', nextText: 51 },
        { text: 'Have a spa day', nextText: 66 } ] },
    { id: 51, text: 'Wanting to make new friends, you walk out of the room. Where do you want to make friends at?', // from id 50
    options: [
        { text: 'Make friends outside', nextText: 52 },
        { text: 'Make friends inside', nextText: 62 } ] },
    { id: 52, text: 'You walk outside through the ferret doggy door and walk down the sidewalk a bit before discovering a new friend. Who do you discover?', // from id 51
    options: [
        { text: 'A bird', nextText: 53 },
        { text: 'A bunny', nextText: 57 },
        { text: 'A fish', nextText: 59 },
        { text: 'A hooman', nextText: 61 } ] },
    { id: 53, text: 'Walking down the sidewalk you see a bird flying around the park and you carefully and slowly walk up to them to ask to be friends with them in the nicest way possible.', // from id 52
    options: [
        { text: 'Hug the bird', nextText: 54 },
        { text: 'Play with the bird', nextText: 55 } ] },
    { id: 54, text: 'You carefully stand on your back legs and hug the bird gently so your claws don\'t scratch them at all', // from id 53
    options: [
        { text: 'Finish playing with the bird', nextText: 56 } ] },
    { id: 55, text: 'You run around jumping up at the bird playing chase and dooking your heart out, with the occasional speed bump for resting of course.', // from id 53
    options: [
        { text: 'Finish playing with the bird', nextText: 56 } ] },
    { id: 56, text: 'You say gooodbye to your new birdfriend and walk off. Where do you head to next?', // from ids 54 and 55
    options: [
        { text: 'Play with someone else', nextText: 52 },
        { text: 'Start over', nextText: -1 } ] },
    { id: 57, text: 'You see a bunny in a neighbors front yard eating grash, and walk up to them. They run away at first because they think you\'re going to eat them, but once they realize you\'re a polite ferret they come over and sniff you. You walk down the sidewalk and pull out the goldfish in your pocket and offer some to your new friend.', // from id 52
    options: [
        { text: 'Finish playing with the bunny', nextText: 58 } ] },
    { id: 58, text: 'After playing a few round of uno with your new friend you say goodbye to each other', // from id 57
    options: [
        { text: 'Play with someone else', nextText: 52 },
        { text: 'Start over', nextText: -1 } ] },
    { id: 59, text: 'Eventually you reach a pond next to the sidewalk. You decide to go check it out because you\'re super thirsty. When you go down to take a sip, you see some eyes that pop out of the water that scare. You calm down and ', // from id 52
    options: [
        { text: 'fishend', nextText: 60 } ] },

    { id: 60, text: 'After splashing around in the pond for a while ', // from id 59
    options: [
        { text: 'Play with someone else', nextText: 52 },
        { text: 'Start over', nextText: -1 } ] },

    { id: 61, text: 'hooman', // from id 52
    options: [
        { text: 'outside', nextText: 52 },
        { text: 'Start over', nextText: -1 } ] },

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

    { id: 66, text: 'spa', // from id 50
    options: [
        { text: 'bath', nextText: 67 },
        { text: 'nap', nextText: 76 },
        { text: 'facemask', nextText: 77 } ] },

    { id: 67, text: 'bath', // from id 66
    options: [
        { text: 'shampoo', nextText: 68 },
        { text: 'soak', nextText: 69 } ] },

    { id: 68, text: 'shampoo', // from id 67
    options: [
        { text: 'clean', nextText: 70 } ] },

    { id: 69, text: 'soak', // from id 67
    options: [
        { text: 'clean', nextText: 70 } ] },

    { id: 70, text: 'clean', // from id 69
    options: [
        { text: 'wet', nextText: 71 },
        { text: 'dry', nextText: 74 } ] },

    { id: 71, text: 'wet', // from id 70
    options: [
        { text: 'tunnels', nextText: 72 },
        { text: 'foot massage', nextText: 73 } ] },

    { id: 72, text: 'tunnels', // from id 71
    options: [
        { text: 'dayend', nextText: 83 } ] },

    
    { id: 73, text: 'foot massage', // from ids 71 and 74
    options: [
        { text: 'dayend', nextText: 83 } ] },

    { id: 74, text: 'dry', // from id 70
    options: [
        { text: 'egg', nextText: 75 },
        { text: 'foot massage', nextText: 73 } ] },

    { id: 75, text: 'egg', // from id 74
    options: [
        { text: 'dayend', nextText: 83 } ] },

    { id: 76, text: 'nap', // from id 66
    options: [
        { text: 'bath', nextText: 67 },
        { text: 'start over', nextText: -1 } ] },

    { id: 77, text: 'facemask', // from id 66
    options: [
        { text: 'sheet mask', mask: 'sheet mask', nextText: 78 },
        { text: 'charcoal mask', mask: 'charcoal mask', nextText: 78 } ] },

    { id: 78, text: 'podcast', // from id 77
    options: [
        { text: '10 steps to do a better war dance', podcast: '10 steps to do a better war dance', nextText: 79 },
        { text: 'Acient Wardances', podcast: 'Acient Wardances', nextText: 79 },
        { text: 'Techniques to Trick your Hooman', podcast: 'Techniques to Trick your Hooman', nextText: 79 } ] },

    { id: 79, text: 'tv', // from id 78
    options: [
        { text: 'Friends', tv: 'Friends', nextText: 80 },
        { text: 'The Office', tv: 'The Office', nextText: 80 },
        { text: 'Seinfeld', tv: 'Seinfeld', nextText: 80 } ] },

    { id: 80, text: `You wear a {facemask}, while listening to {podcast} with your eyes closed. After washing your face you turn on {tv} and relax for a few hours.`, // from id 79
    options: [
        { text: 'journal', nextText: 81 },
        { text: 'checkin', nextText: 82 } ] },

    { id: 81, text: 'journal', // from id 80
    options: [
        { text: 'dayend', nextText: 83 } ] },

    { id: 82, text: 'checkin', // from id 80
    options: [
        { text: 'dayend', nextText: 83 } ] },

    { id: 83, text: 'dayend', // from ids 72, 73, 75, 81, and 82
    options: [
        { text: 'start over', nextText: -1 } ] },
]
startGame()