//Validation Function. On call, this function is called
function validation()
{
    //getting the dom elements and save them in the variables
    const username = document.getElementById('username'); 
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const c_password = document.getElementById('c_password');

    //Calling functions one after another to check the validity
    username_validation(username.value);
    email_validation(email.value);
    password_validation(password.value);
    confirm_password_validation(password.value, c_password.value);
    //End of Calling function 
    
    //Username validaion function 
    function username_validation(un)
    {
        if(un.length > 7)
        {
            username.classList.add('success');
            username.classList.replace('error','success');
        }
        else
        {
            username.classList.remove('success');
            username.classList.add('error');
            username.setAttribute('placeholder','Minimum 8 Characters!!');
        }
    }
    //End of username validation function 

    //Email field validation function  
    function email_validation(el)
    {
        if(el.includes('.') && el.includes('@'))
        {
            email.classList.add('success');
            email.classList.replace('error','success');
        }
        else
        {
            email.classList.remove('success');
            email.classList.add('error');
            email.setAttribute('placeholder','Invalid Email!!!');
        }
    }
    //End of email field validation

    //Password validation function 
    function password_validation(pass)
    {
        if(pass.length > 7)
        {
            password.classList.add('success');
            password.classList.replace('error','success');
        }
        else
        {
            password.classList.remove('success');
            password.classList.add('error');
            password.setAttribute('placeholder','Minimum 8 Character!!!');
        }
    }
    //End of password validation function 
    
    //Confirm password validation function 
    function confirm_password_validation(pass,c_pass)
    {
        if(pass == c_pass && c_pass!='')
        {
            c_password.classList.add('success');
            c_password.classList.replace('error','success');
        }
        else
        {
            c_password.classList.remove('success');
            c_password.classList.add('error');
            c_password.setAttribute('placeholder','Password does not match');
        }
    }
    //End of confirm validation function 
}