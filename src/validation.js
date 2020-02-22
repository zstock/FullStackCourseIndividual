    
    var divs = new Array();
    divs[0] = document.getElementById("fname-error");
    divs[1] = document.getElementById("lname-error");
    divs[2] = document.getElementById("email-error");
    divs[3] = document.getElementById("msg-error");

    var errorMsg = new Array();
    errorMsg[0] = "<span style='color:red'>Please enter your first name.</span>";
    errorMsg[1] = "<span style='color:red'>Please enter your last name.</span>";
    errorMsg[2] = "<span style='color:red'>Please enter a valid email address.</span>";
    errorMsg[3] = "<span style='color:red'>Please enter a message to send to me!</span>";

    let validMsg = "<span style='color:green'>OK!</span>";

    var errors = new Array(4);
    for(i = 0; i < errors.length; i++){errors[i]=true;}
    function CheckForEmpty(id, index)
    {            
        if(document.getElementById(id).value == "")
        {
            divs[index].innerHTML = errorMsg[index];
            errors[index] = true;
        }
        else
        {
            divs[index].innerHTML = validMsg;
            errors[index] = false;
        }
    }

    function CheckEmail()
    {
        if (!document.getElementById("email").value.includes('@'))
        {
            divs[2].innerHTML = errorMsg[2];
            errors[2] = true;
        }
        else
        {
            divs[2].innerHTML = validMsg;
            errors[2] = false;
        }
    }

    function Submit()
    {
        for (i = 0; i < errors.length; i++)
        {
            if(errors[i])
            {
                document.getElementById("resultMsg").innerHTML = "<span style='color:red'>Please make sure all the above information is valid!</span>";
                return;//No need to keep searching. We already found an error, which makes the form invalid for submission.
            }
        }
        //If we reach this point at all then no errors were found, so we do not need to explicitly check the errors array for false.
        document.getElementById("resultMsg").innerHTML = "<span style='color:green'>Message Sent!</span>";

    }

    
    