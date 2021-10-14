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

function readUserData(){
    let user = firebase.auth().currentUser;
    console.log(user)
    let displayNameJSON =  JSON.parse(user.displayName);
    console.log(displayNameJSON);
    setProfileName(displayNameJSON);
    setProfileImage(user.photoURL);
}

function setProfileImage(photo){
    let profilePic = document.getElementById("profile-pic")
    let profilePicExp = document.getElementById("profile-pic-exp-menu")
    let profilePicMob = document.getElementById("profile-image-mobile")
    if(photo){
        if(profilePic) profilePic.src = photo;
        if(profilePicExp) profilePicExp.src = photo;
        if(profilePicMob) profilePicMob.src = photo;
    }else{
       if(profilePic) profilePic.src = "/images/default-user-image.png";
       if(profilePicExp) profilePicExp.src = "/images/default-user-image.png";
       if(profilePicMob) profilePicMob.src = "/images/default-user-image.png";
    }
        getPublications();
}

function setProfileName(name){
    //document.getElementById("profile-name").innerText = name + ' ' + surname;
    document.getElementById("exp-menu-name").innerText = name.nameAndSurname.displayName;
}