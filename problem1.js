/*You supervise a small parking lot which has parking spaces.

Yesterday, you recorded which parking spaces were occupied by cars and which were empty.

Today, you recorded the same information.
How many of the parking spaces were occupied both yesterday and today?
Input Specification
The first line of input contains the integer . The second and third lines of input contain characters
each. The second line of input records the information about yesterday's parking spaces, and the third line of input
records the information about today's parking spaces. Each of these characters will either be C to indicate an
occupied space or . to indicate it was an empty parking space.
Output Specification
Output the number of parking spaces which were occupied yesterday and today.
Sample Input 1

5
CC..C
.CC..

Sample Output 1

1

Explanation for Sample Output 1

Only the second parking space from the left was occupied yesterday and today.

Sample Input 2

Time limit: 3.0s Memory limit: 256M

N

N (1 ≤ N ≤ 100) N

2N

Page 2 of 2

7
CCCCCCC
C.C.C.C

Sample Output 2

4

Explanation for Sample Output 2
The first, third, fifth, and seventh parking spaces were occupied yesterday and today.
*/

/*

Plan
go through the array 
compare 2 arrays if spaces are matching
look at position
log the output*/

let integer = prompt("Please enter an integer N (1<=N<=100)")
let yesterday = prompt("Enter parking spaces for day 1")
let today = prompt("Enter parking spaces for day 2")

function findParking(integer, yesterday, today) {
    let occupied = 0;
    for (let i=0; i < integer;i++) {
        if(yesterday[i] == "C" && yesterday[i] === today[i]) {
            occupied += 1;
        }
        console.log(occupied)
    }
}

/*
solution
function spaces(s,y,t) {
    let total = 0;
    for(let i = 0; i <= s; i++) {
        if(y[i]==="C" && t[0] === "C"){
            total++;
        }
    }
    console.log(total);
}
*/