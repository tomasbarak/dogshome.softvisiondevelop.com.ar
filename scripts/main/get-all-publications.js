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
    var elements = document.getElementsByClassName('publication');
    var counter = 0;
    if(elements.length > 0){
        while(counter < e){
            console.log('a');
            elements[i].parentNode.removeChild(elements[i]);
        }
    }
    addPublications(data);
}
