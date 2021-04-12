// file to store small code projects from lessons

let userName = '';
let userQuestion = "Will I learn React?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
userName ? console.log('Hello!') : console.log(`Hello, ${userName}!`)
switch(randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'Sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Broken!';
        break;
}
// ---------------------------------------
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnersAge = 16;
if (runnersAge < 18) {
    console.log(`Your race time is at 12:30pm. Your race number is ${raceNumber}.`);
} else if (earlyRegistration && runnersAge > 18) {
    raceNumber += 1000;
    console.log(raceNumber);
} else if (runnersAge >= 18 && earlyRegistration) {
    console.log(`Your race time is 9:30am. Your race number is ${raceNumber}.`);
} else if (!earlyRegistration && runnersAge >= 18) {
    console.log(`Your race time is 11:00am. Your race number is ${raceNumber}.`);
} else {
    console.log('You have not registered!');
}
// ---------------------------------------
const getUserChoice = userInput => {
    userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('User did not input valid choice.')
    }
}
const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 1:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'error';
            break;
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb') {
        return 'User typed the secret word!! User wins!';
    } else if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Paper covers rock. Computer wins!';
        } else {
            return 'Rock beats scissors. User wins!';
        }
    } else if (userChoice === 'paper') {
        if(computerChoice === 'rock') {
            return 'Paper covers rock. User wins!'
        } else {
            return 'Scissors cut paper. Computer wins!'
        }
    } else if (userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'Rock beats scissors. Computer wins!';
        } else {
            return 'Scissors cut paper. User wins!';
        }
    }
}
const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice('scissors');
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
// ---------------------------------------
const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 6;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 9;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 8;
            break;
        case 'sunday':
            return 6;
            break;
        default:
            return 'Incorrect day.'
            break;
    }
}
const getActualSleepHours = () => {
    let sum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return sum;
}
const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours *= 7;
}
const calculateSleepDebt = () => {
    let actual = getActualSleepHours();
    let ideal = getIdealSleepHours();
    if (actual === ideal) {
        return "You got the perfect amount of sleep!";
    } else if (actual > ideal) {
        return 'Good morning, sleepy head!';
    } else if (actual < ideal) {
        return 'Get some sleep tonight!';
    }
}
calculateSleepDebt();
// ---------------------------------------
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.slice(',').join(' '));
// ---------------------------------------
const bobsFollowers = ['Jack', 'Linda', 'Maya', 'Nicole'];
const tinasFollowers = ['Maya', 'Lucas', 'Jack'];
let mutualFollowers = [];
for (let b = 0; b < bobsFollowers.length; b++) {
    for (let t = 0; t < tinasFollowers.length; t++) {
        if (bobsFollowers[b] === tinasFollowers[t]) {
            mutualFollowers.push(tinasFollowers[t]);
            console.log(mutualFollowers);
        }
    }
}
// ---------------------------------------
// LOOP EXAMPLES
const bobsFollowers = ['Jack', 'Linda', 'Maya', 'Nicole'];
const tinasFollowers = ['Maya', 'Lucas', 'Jack'];
let mutualFollowers = [];
for (let b = 0; b < bobsFollowers.length; b++) {
    for (let t = 0; t < tinasFollowers.length; t++) {
        if (bobsFollowers[b] === tinasFollowers[t]) {
            mutualFollowers.push(tinasFollowers[t]);
            console.log(mutualFollowers);
        }
    }
}
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}
let cupsOfSugarNeeded = 1.5;
let cupsAdded = 0;
do {
    cupsAdded++;
    console.log(cupsAdded);
} while (cupsOfSugarNeeded > cupsAdded)
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] == 'Notorious B.I.G.') {
        break;
    }
}
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}
console.log("And if you don't know, now you know.");
console.log("And if you don't know, now you know.");
let input = "Hello I am a whale".toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
let bucket = [];
for (let i = 0; i < input.length; i++) {
    for (let v = 0; v < vowels.length; v++) {
        if (input[i] === vowels[v]) {
            bucket.push(vowels[v]);
        }
    }
    if (input[i] === 'e') {
        bucket.push(input[i]);
    } else if (input[i] === 'u') {
        bucket.push(input[i] * 2)
    }
}
console.log(bucket.join('').toUpperCase());
// ---------------------------------------
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};
const addTwo = num => num + 2;
const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
const checkConsistentOutput = (func, val) => {
    let test1 = func(val);
    let test2 = func(val);
    if (test1 === test2) {
        return test1;
    } else {
        return 'This function returned inconsistent results';
    }
};
checkConsistentOutput(addTwo, 7);
console.log(checkConsistentOutput(addTwo, 7));
// ---------------------------------------
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
    return number * number;
});
console.log(squareNumbers);
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});
console.log(onlyNumbers);

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(function(fruit) {
    console.log('I want to eat a ' + fruit);
});

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => animal[0])
console.log(secretMessage.join(''));
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => number / 100);
// ---------------------------------------
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(number => {
    return number < 250;
});
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
});
// ---------------------------------------
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
});
const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's';
});
// ---------------------------------------
