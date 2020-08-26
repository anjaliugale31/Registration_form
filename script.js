function validiate()
    {
      
        localStorage.clear();
        var Name=document.myform.name.value;
        var gender=document.myform.Gender.value;
        // var add=document.myform.Address.value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var mail=document.myform.Email_Id.value;
        var mobileformate=/^(\+\d{1,3}[- ]?)?\d{10}$/;
        var mobile=document.myform.Mobile_Number.value;
        
       
         //checking for name
        var letter=/^[a-zA-Z ]*$/;
        if(Name=="")
        {
            alert("Name Should Not Be Empty");
            return false;
        }
        else{
            if(letter.test(Name)==false)
            {
                alert("Invalid Name Formate (Alphabets Allowed)");
                return false;
                
            }
        }
        localStorage.setItem("NAME",Name);

        
        
        
        //checking for gender
        if(gender=="")
        {
            alert("Select Gender");
            document.myform.focus();
            return false;

        }
        localStorage.setItem("GENDER",gender);


        var flag=0;
        var strText = document.myform.Address.value;
        if (strText!="")
        {
          
        var strArr = new Array();
        strArr = strText.split("");
        if(strArr[0]==" ") // this is the the key part. you can do whatever you want here!
            {
                flag=1;
                
            }
        if(document.myform.Address.value=="" || flag == 1 )
            {        
                alert("shouldn't be blank or contain blank space at the Begining!!");
                document.myform.Address.value="";
                // document.myform.Address.value.focus();
            return false;
            }
        }
        

         if(!((strText.length)>2))
        {
            alert("Address length should not be Less Than 2 /Empty not Allowed");
           document.myform.focus();
            return false;
        }
        if(strText.length>50)
        {
            alert("Address Length Excesseds Limit else Enter Short Address");
            return false;
        }
     
        localStorage.setItem("ADD",strText);


        //checking for mail id
        
        if(mail==" ")
        {
            alert("Enter Mail ID");
            return false;
        }
        else{
            if(mailformat.test(mail)==false )
            {
                alert("Invalid Mail");
                return false;
            }
        }
        localStorage.setItem("MAIL",mail);


        //checking mobile number
        if(mobile.length<10)
        {
            alert("10 Digits Allowed In Mobile Number");
            document.myform.focus();
            return false;
        }
        else{
            if(mobileformate.test(mobile)==false)
            {
                alert("Mobile Number Should Not Be Alphabets");

            }
        }
        localStorage.setItem("MOBILE",mobile);

        
        //other eduction details
       
        var oedu=document.myform.other_education.value;
        if(oedu=="")
        {
            return true;
        }
        if(letter.test(oedu)==false)
            {
                alert("Invalid Meantion Skill");
                return false;
                
            }
        localStorage.setItem("oEDU",oedu);
        
        //year
        var year=document.myform.other_year.value;
        if(year=="")
        {
            return true;
        }
     
        var text = /^[0-9]+$/;
        if (year != 0) 
        {
            if ((year != "") && (!text.test(year))) 
                {
                alert("Please Enter Numeric Values For Year Only");
                return false;
                }

            if (year.length != 4) 
            {
                alert("Year is not proper. Please check");
                return false;
            }
             var current_year=new Date().getFullYear();
            if((year < 1920) || (year > current_year))
                {
                    alert("Year should be in range 1920 to current year");
                    return false;
                }
       
        }
   
    localStorage.setItem("oYEAR",year);
    //percentage
    var per=document.myform.other_per.value;
    if(per=="")
    {
        return true;
    }
    var x = parseFloat(per); 

    if (isNaN(x) || x <= 0 || x > 100) 
    { 
     alert("Percentage Value Is Out Of Range ! Or Should Not be Empty");
     return false;
    }
    else
    {
     var decimalSeparator=".";
     var val=""+x; 
     if(val.indexOf(decimalSeparator)<val.length-3)
     {
        alert("Avoid Too Much Decimal !!");
        return false;
     } 
    } 
        localStorage.setItem("oPER",per);
        //additional Skill
        // var askill=document.myform.a_skill.value;
        // localStorage.setItem("ASKILL",askill);


        //hobies
        var hobi=document.myform.hobbies.value;
        if(hobi=="")
        {
            return true;
        }
       var reg=  /(,[a-zA-Z][a-zA-Z0-9]*|[a-zA-Z][a-zA-Z0-9]*,)/;
       if(reg.test(hobi)==false)
       {
           alert("Hobbies Should be comma Seperated String Else Should Be in valid Format");
           return false;
       }
       localStorage.setItem("HOBI",hobi);

       //url
       alert("hi");
       var url=document.myform.picture.value;
        if(url=="")
       {
           alert("You Have to Give URL!");
           return false;
       }
       var reg=/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/;
        if(reg.test(url)==false)
        {
            alert("URL Should Ends With JPG,PNG,JPEG");
            return false;
        }
      
        localStorage.setItem("PHOTO",url);
        
}

//education
var count = 1;

function deleteRow(row) 
{
  alert("Recently Added Deleted");
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('POITable').deleteRow(i);
    count --;
}
  
    function saveValues(row)
    {
        alert("Value :"+count);
        var xb=document.getElementById("oneselect1").value
        if(xb=="")
            {
                alert("select one");
                return false;
            }
        // localStorage.setItem("course" + count,xb);
            alert("Select Stream:"+xb);

            var x = document.getElementById('POITable');
            var new_row = x.rows[count].cloneNode(true);

        // var inp1 = new_row.cells[0].getElementsByTagName('select')[0];
    // // e.options[e.selectedIndex].value
    // alert(JSON.stringify(inp1.text));
    // localStorage.setItem("course" + count,inp1.value);
  
   
        var inp2 = new_row.cells[1].getElementsByTagName('input')[0];
        alert("Percentage:"+inp2.value);
    // localStorage.setItem("per" + count,inp2.value);
    // inp1.value = '';
   
    // localStorage.setItem("per1",inp1);
    

        var inp3 = new_row.cells[2].getElementsByTagName('input')[0];
        alert("Year:"+inp3.value);
    // localStorage.setItem("year"+ count,inp3.value);
    // inp2.value = '';
    // localStorage.setItem("year1",inp2);


    // x.appendChild(new_row);
    }
  
  function insRow() 
{
    
    // var xb=document.getElementById("oneselect1").value
    // localStorage.setItem("skill1",xb);
    // alert(xb);

    var x = document.getElementById('POITable');
    var new_row = x.rows[1].cloneNode(true);
    // alert(JSON.stringify(new_row.cells[0]));

    // var select1 = new_row.cells[0].getElementsByTagName('select')[0];

    // select1.id = "oneselect" + count;
  
   
    var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
    // alert(inp1.value);
    // localStorage.setItem("per1",inp1.value);
    inp1.value = '';
    
    // localStorage.setItem("per1",inp1);
    
     var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
    // alert(inp2.value);
    // localStorage.setItem("year1",inp2.value);
    inp2.value = '';
    // localStorage.setItem("year1",inp2);
    
    x.appendChild(new_row);
    count ++;
}
// function deleteRowskill(row) 
// {
//     var i = row.parentNode.parentNode.rowIndex;
//     document.getElementById('POITableskill').deleteRow(i);
// }
  
//skill
function insRowskill() 
{
    console.log('hi');
    var x = document.getElementById('POITableskill');
    var new_row = x.rows[1].cloneNode(true);
    var len = x.rows.length;
    new_row.cells[0].innerHTML = len;
  
    var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
    inp1.id += len;
    inp1.value = '';
  
    var inp2 = new_row.cells[2].getElementsByTagName('select')[0];
    inp2.id += len;
    inp2.value = '';
    if(inp1=="")
    {
      alert("skill?");
      return false;
    }
    x.appendChild(new_row);
  }

  function deleteRowskill1(row) 
  {
    alert("recently added delete;");
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('POITableskill').deleteRow(i);
    count--;
  }

  function saveValuesskill(row)
  {
    alert(count);
    var xb=document.getElementById("oneselect1").value
    // localStorage.setItem("Rate" + count,xb);
    alert("Rate:"+xb);
    var inp2 = new_row.cells[1].getElementsByTagName('input')[0];
    alert("Skill"+inp2.value);

    var x = document.getElementById('POITableskill');
    var new_row = x.rows[count].cloneNode(true);

    
    // localStorage.setItem("Skill" + count,inp1.value);

}


// function insRowskill() 
// {
// var x = document.getElementById('POITableskill');
// var new_row = x.rows[1].cloneNode(true);
// var len = x.rows.length;
// new_row.cells[0].innerHTML = len;

// var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
// inp1.id += len;
// inp1.value = '';

// var inp2 = new_row.cells[2].getElementsByTagName('select')[0];
// inp2.id += len;
// inp2.value = '';

// x.appendChild(new_row);
// count++;
// }