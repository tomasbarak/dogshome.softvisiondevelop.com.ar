function readUserData(uid){
    var getData = firebase.database().ref('Users/'+ uid + '/PublicRead');

    getData.on('value', (snapshot) => {
        const data = snapshot.val();
        //console.log(data);
        if(data !== null){
            console.log(data);
            localStorage.setItem("userDataName", data.Name);
            localStorage.setItem("userDataSurname", data.Surname);
            localStorage.setItem("userDataImage", data.Photo);
            useData(data);
            getPublications();
        }else{
            window.location = 'crear-perfil.html';
        }

    });
}

function useData(data){
    setProfileImage(data.Photo);
    setProfileName(data.Name, data.Surname);
}

function setProfileImage(photo){
    document.getElementById("profile-pic").src = photo;
    document.getElementById("profile-pic-exp-menu").src = photo;
    document.getElementById("profile-image-mobile").src = photo;

}

function setProfileName(name, surname){
    //document.getElementById("profile-name").innerText = name + ' ' + surname;
    document.getElementById("exp-menu-name").innerText = name + ' ' + surname;

    setLoading(false);
}