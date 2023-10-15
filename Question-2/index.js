//2. Get all the countries with a population of less than 2 lakhs using Filter function

const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){ 
    if (request.status==200)
{
    let c=JSON.parse(request.responseText)
    c.filter((s)=>(s.population<200000)).map((e)=>{
    console.log(e.population, e.name.official); 
})
}
    else   
{ 
    request.onerror=function()
{
    console.log("Error")
}}}