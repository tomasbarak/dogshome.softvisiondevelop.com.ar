function sendEmailVerification(user) {
    //console.log(user);
    //se envio la verificacion
    user.sendEmailVerification().then(function (){
        document.getElementById('EmailSentTo').innerText = 'Email enviado a ' + user.email;
    }).catch(function (error){
       //ocurrio un error
    });
}