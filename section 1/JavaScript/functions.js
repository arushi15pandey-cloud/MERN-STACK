function addnums(a,b){
    var c=(a+b);
    console.log(c);
}

addnums(45,89);
addnums(2,7);
// console.log(c);

// camelCase
// PascalCase
// snake_case
// kebab-case
const avgnums=function(a,b,c){
    const avg=(a+b+c)/3;
    // console.log(avg);
    return avg; // without return no value will come out of function and it will become undefined
}

const result = avgnums(4,6,8);
console.log(result);

// new in es6-arrow function

const factorial=(n)=>{
    let f=1;

    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}
let fact=factorial(6);

console.log(fact);

// write a function check if a number is prime

const checkprime=(n) => {
    let prime= true;
    for(let i=2; i<n;i++){
        if(n%i===0){
        prime=false;
        break;
        }
    }
if(prime)return true;
return false;
console.log(checkprime(45));
}
