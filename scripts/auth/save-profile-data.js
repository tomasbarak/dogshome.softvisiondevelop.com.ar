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
function updateProfile(){
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: "Jane Q. User",
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