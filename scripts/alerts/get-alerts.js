function get_all_alerts(map){
    const dbRef = firebase.database().ref();
    dbRef.child("Alerts").get().then((snapshot) => {
        if (snapshot.exists()) {
            var data = snapshot.val();
            add_markers(map, data);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}

function add_markers(map, alertItems){
    for(let key in alertItems){
        var marker = L.marker([alertItems[key].Coordinates.lat, alertItems[key].Coordinates.lon]).addTo(map);
        marker.bindPopup("<div class='alertCont'><img src='' alt='logo' class='alertImage' id='alertImage'><a id='alertName' style='color: black; font-size: 8pt'>alerts.Name</a></div>").openPopup();
        document.getElementById("alertImage").id = alertItems[key].Id + "Image";
        document.getElementById("alertName").id = alertItems[key].Id + "Name";
        document.getElementById(alertItems[key].Id + "Image").src = alertItems[key].Photo;
        document.getElementById(alertItems[key].Id + "Name").innerText = alertItems[key].Name;
        console.log(alertItems);
    }
}