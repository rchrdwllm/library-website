function field() {
    //     var selectedValue = document.getElementById("person").value;
        var student = document.getElementById("student");
        var librarian = document.getElementById("librarian");
        var buttonSi =  document.getElementsByClassName(button1)
         var buttonLi =  document.getElementsById("button2");
     
    }
    
    
    function buttonS() {
        window.location.href="header.html";
    }
       
    
    function button() {
        // window.open("header.html");
        window.location.href="header.html";
        var selectedValue = document.getElementById("person").value;
        
       if ((selectedValue === "stud" && (!document.getElementById("sname").value || !document.getElementById("sid").value))
        (selectedValue === "lib" && (!document.getElementById("lname").value || !document.getElementById("lid").value))) {
        document.getElementById("error").style.display = "block";
        } 
        
        else {
       document.getElementById("error").style.display = "none";
    }
    
    }