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