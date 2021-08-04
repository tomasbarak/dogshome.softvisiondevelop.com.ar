function reqListener() {
    var specificResponseItem = JSON.parse(this.response);
    if(specificResponseItem.success === true){
        codeExpirationCounter(specificResponseItem.seconds_to_expire);
        console.log(specificResponseItem);
        showPhoneVerificationSentMsg(specificResponseItem.message);
    }else{
        console.log(specificResponseItem);
    }
}

function verifyPhoneNumber(phone){
    var cleanedPhone = phone.replaceAll('-', '');
    cleanedPhone = cleanedPhone.replaceAll(' ', '');
    console.log("phone = " + cleanedPhone);
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://coral-newt-2178.twil.io/start?phone_number=" + cleanedPhone + "&country_code=54");
    oReq.send();
}