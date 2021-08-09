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
function updateProfilePhoto(){
    const user = firebase.auth().currentUser;

    user.updateProfile({
        photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
        // Update successful
        console.log("success")
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
        displayName: displayName
    }).then(() => {
        // Update successful
        console.log("success")
        // ...
    }).catch((error) => {
        // An error occurred
        console.log(error);
        // ...
    });
}