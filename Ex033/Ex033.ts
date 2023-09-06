let numbers =[1,2,3,4,5,6,7,8,9];
for (let brokenNums of numbers)
if (brokenNums<2)
{
    console.log (`${brokenNums}st`)
}

else if  (brokenNums>1 && brokenNums<3)
{
    console.log (`${brokenNums}nd`)
}
else if  (brokenNums>2 && brokenNums<4)
{
    console.log (`${brokenNums}rd`)
}
else  
{
    console.log (`${brokenNums}th`)
};




