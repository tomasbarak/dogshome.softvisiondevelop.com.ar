function reqListener () {
    console.log(this.responseText);
}

function verifyPhoneNumber(phone){
    phone.replace('-', '');
    phone.replace(' ', '');
    var cleanedPhone = phone.replaceAll('-', '');
    console.log("phone = " + cleanedPhone);
    var oReq = new XMLHttpRequest();
    var params = "To=%2B54" + phone + "&Channel=sms"
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://verify.twilio.com/v2/Services/VA6552277c71e5ce483c433ff38faf1f1a/Verifications");
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.setRequestHeader("Authorization", "Basic " + btoa("ACa3013f90e4375255cb129e2516ac46dc:8f3ba63938f023a0ac6e04e2aa7dc4e0"));
    oReq.send(params);
}