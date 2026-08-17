const nums=[3,5,9,2,4,8,1];

const evenNums=nums.filter((n) => {return n% 2===0});

console.log(evenNums);

const prices=[300,450,210,1400,2800];

const price=prices.filter((n)=>{return n>500 && n<2000});

console.log(price);

const sqrnum= nums.map(n => {return n**2});
console.log(sqrnum);

// add 18% gst to prices array

const gstprice= prices.map(p=> p*1.18);
console.log(gstprice);