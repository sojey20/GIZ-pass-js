let fs = require('fs');

let data = fs.readFileSync('data.txt', "utf8");

let numbers = data.split(',');

for(let i = 0 ; i < numbers.length ; i++)
{
    numbers[i] = parseInt(numbers[i]);
}
console.log("Original numbers list: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[i] > numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[i] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)

fs.writeFile('output.txt', numbers.toString(), (err) => {   
    if (err) throw err; 
});


