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
            deleteAllPublications(data);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
function deleteAllPublications(data){
    const myNode = document.getElementById("content-show");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    addPublications(data);
}
