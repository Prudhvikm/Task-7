//3. Print the following details name, capital, flag using forEach function

const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){ 

    if (request.status==200)
{
    let c=JSON.parse(request.responseText)
    c.forEach((g)=>{
        console.log("Name:" + g.name.official);
        console.log("capital:" + g.capital);
        console.log("Flag:" + g.flags.svg);
})
}
    else   
{ 
    request.onerror=function()
{
    console.log("error")
}}}