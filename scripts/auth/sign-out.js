function signOut(){
    firebase.auth().signOut().then(() => {
        deleteAllFlags();
        window.location.href = "signin.html";
    }).catch((error) => {
        // An error happened.
    });
}

function deleteAllFlags(){
    localStorage.clear()
}