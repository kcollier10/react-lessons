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
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return currentValue + accumulator;
}, 10);
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
    return word.length < 6;
}));
const interestingWords = words.filter(word => {
    return word.length > 5;
});
console.log(interestingWords.every(word => {
        return word.length > 5
    }
));
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];
cities.forEach(city => console.log('Have you visited ' + city + '?'));
const longCities = cities.filter(city => city.length > 7);
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");
console.log(word)
const smallerNums = nums.map(num => num - 5);
nums.every(num => num < 0);
// ---------------------------------------
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let storyWords = story.split(' ');
console.log(story.length);
let betterWords = storyWords.filter(word => {
    return !unnecessaryWords.includes(word);
});
let revisedWordLength = betterWords.length;
let reallyOveruse = 0;
let veryOveruse = 0;
let basicallyOveruse = 0;
for (word of storyWords) {
    if (word === 'really') {
        reallyOveruse += 1;
    } else if (word === 'very') {
        veryOveruse += 1;
    } else if (word === 'basically') {
        basicallyOveruse += 1;
    }
}
console.log('really: ' + reallyOveruse);
console.log('very: ' + veryOveruse);
console.log('basically: ' + basicallyOveruse);
let sentenceCount = 0;
betterWords.filter(word => {
    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        sentenceCount++;
    }
});
console.log(sentenceCount);
let totalOveruse = reallyOveruse + basicallyOveruse + veryOveruse;
console.log('Word count: ' + revisedWordLength);
console.log('Sentence count: ' + sentenceCount);
console.log('Total number of overused words: ' + totalOveruse);
console.log('Revised work: ' + betterWords.join(' '));
// ---------------------------------------
// OBJECTS
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};
spaceship.color = 'glorious gold';
spaceship.numEngines = 7;
delete spaceship['Secret Mission'];
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip = {
    retreat () {
        console.log(retreatMessage);
    },
    takeOff () {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
}
alienShip.retreat();
alienShip.takeOff();
let spaceship = {
    passengers: [{
        name: 'Lebron James'
    }],
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
let capFave = spaceship.crew.captain['favorite foods'][0];
passengers : [{name: "Lebron James"}];
let firstPassenger = spaceship.passengers[0];
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};
let greenEnergy = spaceship => {
    spaceship['Fuel Type'] = 'avocado oil';
};
let remotelyDisable = spaceship => {
    spaceship.disabled = true;
};
greenEnergy(spaceship);
remotelyDisable(spaceship);
// ---------------------------------------
let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};
for (let crewmate in spaceship.crew) {
    console.log(`${crewmate}: ${spaceship.crew[crewmate].name}`);
}
for (let crewmate in spaceship.crew) {
    console.log(`${spaceship.crew[crewmate].name}: ${spaceship.crew[crewmate].degree}`);
}
// ---------------------------------------
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};
robot.provideInfo();
const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};
robot._energyLevel = 'high';
robot.recharge();
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel () {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return 'System malfunction: cannot retrieve energy level';
        }
    }
};
console.log(robot.energyLevel);
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            return this._numOfSensors = num;
        } else {
            return 'Pass in a number that is greater than or equal to 0';
        }
    }
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors);
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }}}
const tinCan = robotFactory('P-500', true);
tinCan.beep();
function robotFactory(model, mobile){
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }}}
// DESTRUCTURED ASSIGNMENT
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};
const { functionality } = robot;
functionality.beep();
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};
const robotKeys = Object.keys(robot);
const robotEntries = Object.entries(robot);
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true});
// ---------------------------------------
// menu exercises
const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers () {
        return this._courses.appetizers;
    },
    set appetizers (appetizers) {
        return this._courses.appetizers = appetizers;
    },
    get mains () {
        return this._courses.mains;
    },
    set mains (mains) {
        return this._courses.mains = mains;
    },
    get desserts () {
        return this._courses.desserts;
    },
    set desserts (desserts) {
        return this._courses.desserts = desserts;
    },
    get courses () {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const random = Math.floor(Math.random() * dishes.length);
        return dishes[random];
    },
    generateRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
    }
};
menu.addDishToCourse('appetizers', 'chips and queso', 6.00);
menu.addDishToCourse('mains', 'green chile enchiladas', 6.00);
menu.addDishToCourse('desserts', 'sopapilla', 6.00);
// ---------------------------------------
const team = {
    _players: [
        {
            firstName: 'Lebron',
            lastName: 'James',
            age: 35
        },
        {
            firstName: 'Mia',
            lastName: 'Hamm',
            age: 45
        },
        {
            firstName: 'Tim',
            lastName: 'Duncan',
            age: 50
        }
    ],
    _games: [
        {
            opponent: 'Spurs',
            teamPoints: 400,
            opponentPoints: 7
        },
        {
            opponent: 'UT',
            teamPoints: 3,
            opponentPoints: 67
        },
        {
            opponent: 'Celtics',
            teamPoints: 600,
            opponentPoints: 7
        }
    ],
    get players () {
        return this._players;
    },
    get games () {
        return this._games;
    },
    addPlayer (firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
}
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Spurs vs Celtics', 800, 30);
team.addGame('TAMU vs UT', 6, 400);

(function () {

    "use strict";

    function climbingStairsA (totalSteps) {
        if (totalSteps <= 0) {
            return 0;
        } else if (totalSteps == 1) {
            return 1;
        } else if (totalSteps == 2) {
            return 2;
        } else if (totalSteps == 3) {
            return 3;
        } else {
            return climbingStairsA(totalSteps - 1) + climbingStairsA(totalSteps - 2);
        }
    }
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 1 + "] total stairs, is " + climbingStairsA(1) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 2 + "] total stairs, is " + climbingStairsA(2) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 3 + "] total stairs, is " + climbingStairsA(3) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 4 + "] total stairs, is " + climbingStairsA(4) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 5 + "] total stairs, is " + climbingStairsA(5) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 6 + "] total stairs, is " + climbingStairsA(6) + ".");

    function climbingStairs (totalSteps) {
        if (totalSteps <= 3) {
            return parseInt(totalSteps);
        }
        return parseInt(climbingStairs(totalSteps - 1) + climbingStairs(totalSteps - 2));
    }
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 1 + "] total stairs, is " + climbingStairs(1) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 2 + "] total stairs, is " + climbingStairs(2) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 3 + "] total stairs, is " + climbingStairs(3) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 4 + "] total stairs, is " + climbingStairs(4) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 5 + "] total stairs, is " + climbingStairs(5) + ".");
    console.log("Total number of ways Tauntaun can reach the top, based on [" + 6 + "] total stairs, is " + climbingStairs(6) + ".");

    function climbStairs (totalSteps) {
        if (totalSteps <=)
            return parseInt(climbingStairs(totalSteps - 1) + climbingStairs(totalSteps - 2));
    }

    console.log(climbStairs(1));
    console.log(climbStairs(2));
    console.log(climbStairs(3));
    console.log(climbStairs(4));
    console.log(climbStairs(5));
    console.log(climbStairs(6));

})();