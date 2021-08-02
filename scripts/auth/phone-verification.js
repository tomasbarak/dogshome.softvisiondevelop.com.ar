function reqListener () {
    console.log(this.responseText);
}

function verifyPhoneNumber(phone){
    phone.replace('-', '');
    phone.replace(' ', '');
    var cleanedPhone = phone.replaceAll('-', '');
    console.log("phone = " + cleanedPhone);
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://dogshome-8339.twil.io/sendSMS?phone_number=" + phone + "&country_code=54");
    oReq.send();
}