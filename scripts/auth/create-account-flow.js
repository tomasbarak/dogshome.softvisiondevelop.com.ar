var actualInstance;
var accTypeSelection;

setBackButtonVisibility();

function setInicialInstance(inicialNumber){
    if(inicialNumber !== null || inicialNumber !== undefined){
        //console.log(sessionStorage.getItem('sessionInstance'))
        if(sessionStorage.getItem('sessionInstance') !== null && sessionStorage.getItem('sessionInstance') !== undefined){
            actualInstance = Number(sessionStorage.getItem('sessionInstance'));
            //console.log(actualInstance)
        }else{
            //console.log("nashenashe")
            actualInstance = inicialNumber;
            sessionStorage.setItem('sessionInstance', inicialNumber);
        }
    }else{
        //console.log("nashenashe2")
        actualInstance = 0;
        sessionStorage.setItem('sessionInstance', '0');
    }
    //console.log(actualInstance)
    setBackButtonVisibility(Number(actualInstance))
    refreshInstances(Number(actualInstance));


}
function setBackButtonVisibility(instance){
    if(instance <= 1 || instance === undefined || instance === null){
        document.getElementById('back-button').style.display = 'none';
        console.log('nashe1');
        console.log( actualInstance );

    }else{
        document.getElementById('back-button').style.display = 'flex';
        console.log('nashe2');
        console.log( actualInstance );
    }
}
function submitInstance(){
    if(actualInstance < 2){
        console.log(actualInstance);
        switch (actualInstance){
            //email y contraseña
            case 0:
                signUp(document.getElementById('mail').value, document.getElementById('password').value, document.getElementById('password-repeat').value);
                break;
            //Nombre y apellido
            case 1:
                saveNameAndSurnameValues();
                break;
            //Tipo de cuenta
            case 2:
                saveAccountType(accTypeSelection);
                setAccTypeSelection(accTypeSelection);
                break;
            //Nombre del refugio
            case 3:
                break;
            //Foto de perfil
            case 4:
                break;
            //Telefono(s)
            case 5:
                break;
            //Descripcion corta
            case 6:
                break;
            //Descripcion larga
            case 7:
                break;
            //Sitio web
            case 8:
                break;
            //Redes sociales
            case 9:
                break;
            //Terminos y condiciones
            case 10:
                break;
        }
        actualInstance ++;
        setBackButtonVisibility(actualInstance);
        sessionStorage.setItem('sessionInstance', actualInstance);
        refreshInstances(actualInstance);
    }

}

function instanceGoBack(){
    if(actualInstance > 1){
        actualInstance --;
        setBackButtonVisibility();
        sessionStorage.setItem('sessionInstance', actualInstance);
        refreshInstances(actualInstance);
    }
}

function  setAccTypeSelection(selection){
    var accountTypesContainer = document.getElementById('account-types-container');

    var accountTypes = accountTypesContainer.getElementsByClassName('account-type-option-container');

    switch (selection){
        case 1:
            document.getElementById('adoptante').className = 'account-type-option acc-type-selected';
            document.getElementById('refugio').className = 'account-type-option acc-type-unselected';
            document.getElementById('rescatista-solo').className = 'account-type-option acc-type-unselected';
            break;
        case 2:
            document.getElementById('adoptante').className = 'account-type-option acc-type-unselected';
            document.getElementById('refugio').className = 'account-type-option acc-type-selected';
            document.getElementById('rescatista-solo').className = 'account-type-option acc-type-unselected';
            break;
        case 3:
            document.getElementById('adoptante').className = 'account-type-option acc-type-unselected';
            document.getElementById('refugio').className = 'account-type-option acc-type-unselected';
            document.getElementById('rescatista-solo').className = 'account-type-option acc-type-selected';
            break;
    }
}

function saveNameAndSurnameValues(){
    var nameInputValue = document.getElementById('name').value;
    var surnameInputValue = document.getElementById('surname').value;

    sessionStorage.setItem('sessionAccName', nameInputValue);
    sessionStorage.setItem('sessionAccSurname', surnameInputValue);
}
function saveAccountType(selection){
    sessionStorage.setItem('sessionAccType', selection);
}