const players = [
    {
        firstName: "Mike",
        lastName: "Evans",
        age: 30,
        number: 13,
        position: "Receiver",
        team: "Tampa Bay",
        abilities: ["Catch", "Run", "Jump", "Complain"],
    },
    {
        firstName: "Tom",
        lastName: "Brady",
        age: 46,
        number: 12,
        position: "Quarterback",
        team: "Tampa Bay",
        abilities: ["Pass", "Run", "Scare", "Complain"],
    },
    {
        firstName: "Nick",
        lastName: "Chubb",
        age: 27,
        number: 24,
        position: "Runningback",
        team: "Cleveland Browns",
        abilities: ["Pass", "Run", "Block", "Catch"],
    },
    {
        firstName: "Justin",
        lastName: "Tucker",
        age: 33,
        number: 9,
        position: "Kicker",
        team: "Baltimore Ravens",
        abilities: ["Kick", "Jump", "Relax", "Run"],
    },
    {
        firstName: "Oddel",
        lastName: "Beckham",
        age: 30,
        number: 3,
        position: "Receiver",
        team: "Baltimore Ravens",
        abilities: ["Catch", "Run", "Throw", "Jump"],
    }
]
players.forEach((players) => console.log(players.firstName + " " + students.lastName));
players.forEach((players) => {
    console.log(players.firstName + " " + players.lastName + players.abilities.forEach((ability) => console.log(ability));
const oldestPlayer = players.filter((player)=>player.age >= 40);
console.log(oldestPlayer);