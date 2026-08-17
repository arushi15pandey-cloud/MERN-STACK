const nums=[4,7,9,2,1,5,6];

for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
};

console.log('-------for of loop-------');

for(let n of nums){
    console.log(n);
}

console.log('-------for each function-------');

nums.forEach((a, b,c,d) => {console.log(a,b,c,d); });

// display all even of the array
nums.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});

