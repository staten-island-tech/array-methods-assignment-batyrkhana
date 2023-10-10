const NFLPlayers = [
    {
        firstName: "Mike",
        lastName: "Evans",
        age: 30,
        Number: 13,
        Position: "Receiver",
        Team: "Tampa Bay",
        Abilities: [Catch, Run, Jump],
    },
    {
        firstName: "Tom",
        lastName: "Brady",
        age: 46,
        Number: 12,
        Position: "Quarterback",
        Team: "Tampa Bay",
        Abilities: [Throw, Run],
    },
    {
        firstName: "Nick",
        lastName: "Chubb",
        age: 27,
        Number: 24,
        Position: "Runningback",
        Team: "Cleveland Browns",
    },
    {
        firstName: "Justin",
        lastName: "Tucker",
        age: 33,
        Number: 9,
        Position: "Kicker",
        Team: "Baltimore Ravens",
        Abilities: [Kick],
    },
    {
        firstName: "Oddel",
        lastName: "Beckham",
        age: 30,
        Number: 3,
        Position: "Receiver",
        Team: "Baltimore Ravens",
    },
]

NFLPlayers.forEach((player)=>console.log(player.firstName))
