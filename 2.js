let arr=[2,4,6]
function high(arr,call)
{
for(let v of arr)
{
    call(v)
    
}
}
high(arr,one)
high(arr,two)
high(arr,three)
function one(arr)
{
 
    console.log(arr*arr);
    
}
function two(arr)
{
  
    console.log(arr*arr*arr);
    

}
function three(arr)
{
    console.log(arr+1);
    
}

