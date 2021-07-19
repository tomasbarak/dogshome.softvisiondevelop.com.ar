function getPublications(){
    /*var getData = firebase.database().ref('Publications/');
    getData.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        addPublications(data);
    });*/
    const dbRef = firebase.database().ref();
    dbRef.child("Publications").get().then((snapshot) => {
        if (snapshot.exists()) {
            var data = snapshot.val();
            console.log(data);
            addPublications(data);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

