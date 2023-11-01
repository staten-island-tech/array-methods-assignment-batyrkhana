for(i = 0; i <=7; i++) {
    console.log(i)
}
money = 100;
while(money>0){
    console.log(money);
    money--;
}
/* i is the variable where you are starting the loop
i++ means i will increase by 1
i += 2 means i will increase by 2
i -- means i will decrement by 1
for and while loops are the only ones that will show up on AP CS
for loop is iteration
selection is evaluationof if statemetns arr[i] === num
sequencing is running multiple steps
*/
function linearSearch(num, arr) {
    let found;
    for (let i=0; i < arr.length;i++) {
        if (arr[i] === num){
            found = arr[i];
            break;
        }else{
            console.log("still looking");
        }
    }
    console.log(found)
    return found; /*Returns it as a value to be used later */
}
if(!found){ /* !found means found is null, meaning it has no value */
    console.log("Sorry not found")
}
linearSearch(5,numArr)
name = "fsdf"