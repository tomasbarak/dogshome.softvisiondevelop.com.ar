function reqListener () {
    console.log(this.responseText);
}

function verifyPhoneNumber(phone){
    phone.replace('-', '');
    phone.replace(' ', '');
    var cleanedPhone = phone.replaceAll('-', '');
    console.log("phone = " + cleanedPhone);
    var oReq = new XMLHttpRequest();
    var params = "To=%2B54" + phone + "&Channel=call"
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://coral-newt-2178.twil.io/start?phone_number=" + phone + "&country_code=54");
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.setRequestHeader("Authorization", "Basic " + btoa("ACa3013f90e4375255cb129e2516ac46dc:e1c6c5b40480b1c8d327e13208725f8b"));
    oReq.send(params);
}