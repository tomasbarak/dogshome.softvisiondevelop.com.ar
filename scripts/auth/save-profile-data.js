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
function updateProfileDisplayName(name, surname) {
    const user = firebase.auth().currentUser;
    var displayName = name.replaceAll(' ', '') + ' ' + surname.replaceAll(' ', '');
    user.updateProfile({
        displayName: JSON.stringify({
            "nameAndSurname": {
                "name": name.replaceAll(' ', ''),
                "surname": surname.replaceAll(' ', ''),
                "displayName": displayName
            },
            "accountType": {
                "typeStr": "",
                "typeSelectionNum": ""
            }
        })
    }).then(() => {
        // Update successful
        console.log("Display Name Updated Successfully(" + user.displayName + ")")
        // ...
    }).catch((error) => {
        // An error occurred
        console.log(error);
        // ...
    });
    saveNameAndSurnameInDatabase();

    function saveNameAndSurnameInDatabase() {
        firebase.database().ref('Users/' + user.uid + "/PublicRead/").update({
            Name: name.replaceAll(' ', ''),
            Surname: surname.replaceAll(' ', '')
        }, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Success");
            }
        });
    }
}

    function saveAccType(typeNumber) {
        const user = firebase.auth().currentUser;

        const uid = user.uid;

        var typeStr;
        if (typeNumber === 1) {
            typeStr = "Adoptante";
        } else if (typeNumber === 2) {
            typeStr = "Refugio";
        } else {
            typeStr = "Rescatista";
        }
        console.log(typeStr);
        saveDatabase();

        function saveDatabase() {
            firebase.database().ref('Users/' + uid + "/PublicRead/Type").update({
                TypeNum: typeNumber,
                TypeStr: typeStr
            }, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Success");
                }
            });
        }
    }

    function uploadPhotoCloudinary(img) {
        var xhr = new XMLHttpRequest();
        const user = firebase.auth().currentUser;
        xhr.addEventListener("load", function () {
            var response = JSON.parse(xhr.responseText);
            var photoUrl = response.url;
            updateProfilePhoto(photoUrl);
            savePhotoInDatabase(photoUrl);
        });
        xhr.open('POST', 'https://coral-newt-2178.twil.io/uploadPhoto', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('p=' + encodeURIComponent(img));

        function savePhotoInDatabase(photoURL) {
            firebase.database().ref('Users/' + user.uid + "/PublicRead/").update({
                Photo: photoURL
            }, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Success");
                }
            });
        }
    }

    function saveFirstBlankData() {
        const user = firebase.auth().currentUser;
        saveEmailInDatabase();
        saveIdInDatabase();
        saveBlankPostsId();

        function saveEmailInDatabase() {
            firebase.database().ref('Users/' + user.uid + "/PublicRead/").update({
                Email: user.email
            }, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Success");
                }
            });
        }

        function saveIdInDatabase() {
            firebase.database().ref('Users/' + user.uid + "/PublicRead/").update({
                Id: user.uid
            }, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Success");
                }
            });
        }

        function saveBlankPostsId() {
            firebase.database().ref('Users/' + user.uid + "/PublicRead/PostsIds").update({
                0: "firstPost"
            }, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Success");
                }
            });
        }
    }
    function saveUserPhoneNumber(phone){
        const user = firebase.auth().currentUser;
        firebase.database().ref('Users/' + user.uid + "/PublicRead/").update({
            Phone: phone
        }, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Success");
            }
        });
    }