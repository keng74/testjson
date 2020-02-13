//alert('hi');

document.write("<h1>Qualifies for driving</h1>");


var mydata = JSON.parse(data);

document.write("<div>");
for(var i=0; i<= mydata.length-1; i++){
    
    document.write("<p>" + mydata[i].name + "</p>");
    document.write("<p>" + mydata[i].age + "</p>");   
    
}
document.write("</div>");


 document.write("<div>");

    for(var j=0; j<= setdata.employees.length -1; j++){
        
        
        document.write("<p>"+ setdata.employees[j].firstName + "  " + setdata.employees[j].lastName +"</p>");
    }
    document.write("</div>");   
    
