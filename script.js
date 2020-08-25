

function validiate()
    {
      
        localStorage.clear();
        var Name=document.myform.name.value;
        var gender=document.myform.Gender.value;
        var add=document.myform.Address.value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var mail=document.myform.Email_Id.value;
        var mobileformate=/^(\+\d{1,3}[- ]?)?\d{10}$/;
        var mobile=document.myform.Mobile_Number.value;
        var hobi=document.myform.hobbies.value;
       
         //checking for name
        var letter=/^[a-zA-Z ]*$/;
        if(Name=="")
        {
            alert("Name Should Not Be NULL");
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


        //checking for address

        
    
        if(add=="")
        {
            alert("Address Required");
            document.myform.focus();
            return false;
        }
        if(add.length>50)
        {
            alert(" Address Length <50 Characters");
            document.myform.focus();
            return false;
        }
        
        // else
        // {
        //     if(addReg.test(add)==false)
        //     {
        //         alert("Give Addres in Proper format");
        //         return false;
        //     }
        // }
        if(!((add.length)>2))
        {
            alert("Address legth <2 /Empty not Allowed");
            document.myform.focus();
            return false;
        }
     
        localStorage.setItem("ADD",add);


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
                alert("Mobile Number Should Not Be In Alphanumeric Formate");

            }
        }
        localStorage.setItem("MOBILE",mobile);


        // var select1=document.getElementById("oneselect").value;
        // localStorage.setItem("ones",select1);

        
        //hobbies 
        regEx = /^[a-zA-Z]{1,20},[a-zA-Z]{1,20}$/;
        var hobbi=document.myform.hobbies.value;
        var hobi=hobbi.split(" ");
        // if(regEx.test(hobbi)==false)
        // {
        //     alert("Hobbies should be comma seprated");
        // }
        if(letter.test(hobi)==false)
        {
            alert("Do Not Use Alphanumeric Characters For Hobbies !");
            return false;
        }

        localStorage.setItem("HOBI",hobi);

        //photo
        var pho=document.myform.photo.value;
        var mat="(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)";
        if(pho=="")
        {
            alert("You Have To Give URL ");
            return false;
        }
        if(mat.test(pho)==false)
        {
            alert("end with ");
            return false;   
        }
        localStorage.setItem("PHO",pho);
        
}

//
var count = 1;

function deleteRow(row) {
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
  
  function insRow() {
    
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
function deleteRowskill(row) 
{
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('POITableskill').deleteRow(i);
}
  
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

  function saveValues(row){
    alert(count);
    var xb=document.getElementById("oneselect1").value
    // localStorage.setItem("Rate" + count,xb);
    alert("Rate:"+xb);
    var inp2 = new_row.cells[1].getElementsByTagName('input')[0];
    alert("Skill"+inp2.value);

    var x = document.getElementById('POITable');
    var new_row = x.rows[count].cloneNode(true);

    
    // localStorage.setItem("Skill" + count,inp1.value);

}


function insRowskill() 
{
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

x.appendChild(new_row);
count++;
}