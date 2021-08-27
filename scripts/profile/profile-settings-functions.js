function checkProfile(user){
    let uid = user.uid;
    var getData = firebase.database().ref('Users/'+ uid + '/PublicRead/');

    getData.on('value', (snapshot) => {
        const data = snapshot.val();
        //console.log(data);
        if(data !== null ){
            if(data.Finished === true){
                console.log(data);
                readUserData(user);
            }else{
                window.location = 'crear-perfil.html';
            }
        }else{
            window.location = 'crear-perfil.html';
        }

    });
}

function readUserData(user){
    console.log(user)
    setProfileName(JSON.parse(user.displayName));
    setProfileImage(user.photoURL);
}

function setProfileImage(photo){
    document.getElementById("profile-pic").src = photo;
    document.getElementById("profile-pic-exp-menu").src = photo;
    document.getElementById("profile-image-mobile").src = photo;
    getPublications();
}

function setProfileName(name){
    //document.getElementById("profile-name").innerText = name + ' ' + surname;
    document.getElementById("exp-menu-name").innerText = name.nameAndSurname.displayName;
}