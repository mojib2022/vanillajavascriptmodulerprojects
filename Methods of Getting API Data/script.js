
const demo = document.getElementById('demo');

//This is XMLHttpRequest
function loadDoc()
{
    const Xhttp = new XMLHttpRequest();
    const url = 'data.json';

    Xhttp.open("GET", url);
    Xhttp.send();

    Xhttp.onload = (e)=>
    {
        var emp =  JSON.parse(Xhttp.responseText);
        var employees = emp.employees;
        var table = "<table class='table table-dark table-hover'></tr><th>First Name</th><th>Last Name</th><th>Position</th><th>Salary</th></tr>";
        for(let i=0; i< employees.length; i++){
         table += "<tr><td>"+employees[i].firstName+"</td><td>"+employees[i].lastName
         +"</td><td>"+employees[i].position+"</td><td>"+employees[i].salary+"</td></tr>";
        }
       table += "</table>";
       demo.innerHTML = table;
    }
}

//End of the XMLHttpRequest

// This is Fetch Method

function loadDataFetch(){
fetch("data.json")
.then(response=>{
    if(!response.ok){
        throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
})
.then(data=>{
    var employees = data.employees;
    var table = "<table class='table  table-hover'></tr><th>First Name</th><th>Last Name</th><th>Position</th><th>Salary</th></tr>";
    for(let i=0; i< employees.length; i++)
    {
         table += "<tr><td>"+employees[i].firstName+"</td><td>"+employees[i].lastName
         +"</td><td>"+employees[i].position+"</td><td>"+employees[i].salary+"</td></tr>";
    }
    table += "</table>";
    document.getElementById('fetch').innerHTML = table;
})
.catch(error=>console.log(error))
}

//End of The Fetch Method


//Axios Method 

function loadAxios(){
   
    axios.get("data.json")
    .then(response=>{
        var employees = response.data.employees;
        var table = "<table class='table table-dark table-hover'></tr><th>First Name</th><th>Last Name</th><th>Position</th><th>Salary</th></tr>";
        for(let i=0; i< employees.length; i++)
        {
             table += "<tr><td>"+employees[i].firstName+"</td><td>"+employees[i].lastName
             +"</td><td>"+employees[i].position+"</td><td>"+employees[i].salary+"</td></tr>";
        }
        table += "</table>";
        document.getElementById('axios').innerHTML = table;
    })
    
    .catch(error=>{
        if(error.response){
            console.log(error.response);
        }
        else{
            console.log(error.message)
        }
    })
    }

//End of Axios Method 

//Super Agent Method

function loadSuperAgent(){
    superagent.get('data.json')
    .then(response=>{
        var employees = response.body.employees;
        var table = "<table class='table table-hover'></tr><th>First Name</th><th>Last Name</th><th>Position</th><th>Salary</th></tr>";
        for(let i=0; i< employees.length; i++)
        {
             table += "<tr><td>"+employees[i].firstName+"</td><td>"+employees[i].lastName
             +"</td><td>"+employees[i].position+"</td><td>"+employees[i].salary+"</td></tr>";
        }
        table += "</table>";
        document.getElementById('superAgent').innerHTML = table;
    })
    .catch(error => {
        if(error.response){
            console.log(error.status)
        }
        else{
            console.log(error.message)
        }
    })
}
//End of Super Agent Method