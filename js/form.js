(function(){
    var form = document.getElementById('form');
    var names = form.names, 
        email = form.email,
        sex = form.sex,
        agree = form.agree,
        error = document.getElementById("error");

    function validateName(e){
        if(names.value == '' || names.value == null){
            console.log('Por favor completa el nombre');
            error.style.display='block';
            error.innerHTML +=  '<li> por favor completa el nombre </li>';
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
    }
    function validateEmail(e){
        if(email.value == '' || email.value == null){
            console.log('Por favor completa el correo electrónico');
            error.style.display='block';
            error.innerHTML +=  '<li> por favor completa el correo electrónico </li>';
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
    }

    function validateSex(e){
        if(sex.value == '' || sex.value == null ){
            console.log('Por favor completa el sexo');
            error.style.display='block';
            error.innerHTML +=  '<li> por favor completa el sexo </li>';
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
    }

    function validateAgree(e){
        if(agree.checked == false ){
            console.log('Por favor acepte los términos');
            error.style.display='block';
            error.innerHTML +=  '<li> por favor acepte los términos </li>';
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
    }

    function validateForm(e){
        error.innerHTML = '';
        validateName(e);
        validateEmail(e);
        validateSex(e);
        validateAgree(e);
    }

    form.addEventListener('submit',validateForm);
}())