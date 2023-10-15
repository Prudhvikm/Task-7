// 4.Print the total population of countries using reduce function

const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){ 
    if (request.status==200)
{
    let c=JSON.parse(request.responseText)
    b=c.reduce((a,{ population: p}) => a+=p,0)
    console.log(b)
}
    else   
{ 
    request.onerror=function()
{
    console.log("Error")
}}}
