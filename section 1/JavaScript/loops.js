// for loop

for(let i=0;i< 10;i++){
    console.log(i);
}

let nums = [1,2,3,4,5,1,9];

// for of loop

for(let n of nums){
    console.log(n);
}

let a=10;

while(a<20){
    console.log(a);
    a++;
}

let b=10;
do{
    console.log(b);
    b++;
}while (b>20);


for(let i=10;i<=50;i++){
    if(i%7===0){
        console.log(i);
    }
}

// wap to print fibnoacci series

let [x,y]=[0,1];
console.log(x);
console.log(y);

for(let i=0;i<8;i++){
    z=x+y;
    console.log(z);
    [x,y]=[y,z]

}