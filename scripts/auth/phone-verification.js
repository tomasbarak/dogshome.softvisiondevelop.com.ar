function reqListener () {
    var specificResponseItem = JSON.parse(this.response);
    console.log(specificResponseItem);
    if(specificResponseItem.success === true){

    }
}

function verifyPhoneNumber(phone){
    var cleanedPhone = phone.replaceAll('-', '');
    cleanedPhone = cleanedPhone.replaceAll(' ', '');
    console.log("phone = " + cleanedPhone);
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://coral-newt-2178.twil.io/start?phone_number=" + cleanedPhone + "&country_code=54");
    oReq.setRequestHeader("Authorization", "Basic " + btoa('ACa3013f90e4375255cb129e2516ac46dc' + ":" + 'e1c6c5b40480b1c8d327e13208725f8b'));
    oReq.send();
}