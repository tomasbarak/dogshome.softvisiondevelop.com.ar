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

function verifyCode(code){
    var cleanedPhone = sessionStorage.getItem("sessionAccPhoneNum").replaceAll('-', '');
    cleanedPhone = cleanedPhone.replaceAll(' ', '');
    console.log("phone = " + cleanedPhone);
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://coral-newt-2178.twil.io/check?phone_number=" + cleanedPhone + "&country_code=54&verification_code=" + code);
    oReq.send();
}
function getVerificationCode(){
    var verificationCode = ""
    var digit1 = document.getElementById('digit-1').value.toString();
    var digit2 = document.getElementById('digit-2').value.toString();
    var digit3 = document.getElementById('digit-3').value.toString();
    var digit4 = document.getElementById('digit-4').value.toString();
    var digit5 = document.getElementById('digit-5').value.toString();
    var digit6 = document.getElementById('digit-6').value.toString();
    verificationCode = digit1 + digit2 + digit3 + digit4 + digit5 + digit6;
    console.log(verificationCode);
    verifyCode(verificationCode);
}