// Question 73
function AssignAndUpdateValue() {
    let num:number = 14;
    console.log(`The value before update is ${num}`);
    num = 15;
    console.log(`The value after update is ${num}`);
}
AssignAndUpdateValue();

// Question 74
function SwapValue(){
    let a=5;
    let b=10;
    console.log(`Value before swapping \na = ${a} \n b = ${b}`);
    [a,b] = [b,a];
    console.log(`Value after swapping \na = ${a} \n b = ${b}`);
}
SwapValue();

// Question 75
function AssignmentOperator(){
    let x:number =4;
    x += 2;
    console.log(`Addition of number is ${x}`);
    x -= 2;
    console.log(`Subtraction of number is ${x}`);
    x *= 2;
    console.log(`Multiplication of number is ${x}`);
    x /= 2;
    console.log(`Division of number is ${x}`);
}

AssignmentOperator();