function saveProfileData(){
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    }, (error) => {
        if (error) {
            // The write failed...
        } else {
            // Data saved successfully!
        }
    });
}
function updateProfilePhoto(photo){
    const user = firebase.auth().currentUser;

    user.updateProfile({
        photoURL: photo
    }).then(() => {
        // Update successful
        console.log("Profile Image Updated Successfully(URL: " + user.photoURL + ")")
        // ...
    }).catch((error) => {
        // An error occurred
        console.log(error);
        // ...
    });
}
function updateProfileDisplayName(name, surname){
    const user = firebase.auth().currentUser;
    var displayName = name.replaceAll(' ', '') + ' ' + surname.replaceAll(' ', '');
    user.updateProfile({
        displayName: JSON.stringify({
            "name": name.replaceAll(' ', ''),
            "surname": surname.replaceAll(' ', ''),
            "displayName": displayName
        })
    }).then(() => {
        // Update successful
        console.log("Display Name Updated Successfully("+user.displayName+")")
        // ...
    }).catch((error) => {
        // An error occurred
        console.log(error);
        // ...
    });
}

function uploadPhotoCloudinary(img){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function (){
        var response = JSON.parse(xhr.responseText);
        var photoUrl = response.url;
        updateProfilePhoto(photoUrl);
    });
    xhr.open('POST', 'https://coral-newt-2178.twil.io/uploadPhoto', true);
    xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    xhr.send('p=' + encodeURIComponent(img));
}