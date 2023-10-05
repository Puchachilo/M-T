function check() 
{
    let username = document.getElementById("Username").value
    let password = document.getElementById("Password").value
    let email = document.getElementById("Email").value
    let firstname = document.getElementById("FirstName".value)
    let lastname = document.getElementById("LastName".value)
    let address = document.getElementById("Address".value)
    let method = document.getElementById("Method".value)
    let credit = document.getElementById("Credit".value)
    let terms = document.getElementById("term".value)
    let confirm = document.getElementById("Confirm".value)

    if(username == "")   {
        return showError("Enter Username")
    }
    else if (password.length < 5)     {
        return showError("Password must be more than 5 characters")
    }
    else if (!email.endsWith(".com"))    {
        return showError("invalid Email")
    }    
    else if(firstname == "")  {
        return showError("Enter First Name")
    }
    else if(lastname == "")   {
        return showError("Enter Last Name")
    }
    else if(address == "")  {
        return showError("Enter your address")
    }
    else if(method == "")  {
        return showError("Enter Payment Method")
    }
    else if(credit == "")  {
        return showError("Enter your credit card number")
    }
    /*else if (!terms){
        return showError("You must agree with our terms and agreement")
    }*/
    /*else if (password != confirm){
        return showError("Password doesn't match")
    }*/
    else {
        window.open("home.html")
    }
}
let error = document.getElementById("error")

function showError(message)
{
    error.innerHTML = message
    return false
}