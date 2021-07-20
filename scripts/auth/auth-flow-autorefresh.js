function refreshInstances(instance){
    //console.log(instance)
    switch(instance){
        case undefined:

            setInstanceVisibility('email-and-password');
            break;
        case 0:
            setInstanceVisibility('email-and-password');
            break;
        //Nombre y apellido
        case 1:
            setInstanceVisibility('name-and-surname');
            setInstanceLabel('Ingresá tu nombre');
            break;
        //Tipo de cuenta
        case 2:
            console.log('instance 2')
            setInstanceVisibility('account-type');
            setInstanceLabel('Elegí el tipo de cuenta');
            break;
        //Nombre del refugio
        case 3:
            setInstanceVisibility('name-ref');
            setInstanceLabel('Ingrese el nombre para su refugio ');
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
    //console.log(Number(instance))

}

function setInstanceVisibility(instanceIdName){
    console.log(instanceIdName);

    var allInstances = document.getElementsByClassName('signup-instance');
    for(let key in allInstances){
        //console.log(allInstances[key].id);
        if(allInstances[key].id !== undefined){
            if(allInstances[key].id === instanceIdName){
                //console.log(allInstances[key]);
                allInstances[key].style.display = 'flex';
            }else{
                //console.log(allInstances[key]);
                allInstances[key].style.display = 'none';
            }
        }
    }
}
function setInstanceLabel(text){
    var instanceLabel = document.getElementById('instance-label');

    instanceLabel.innerText = text;
}