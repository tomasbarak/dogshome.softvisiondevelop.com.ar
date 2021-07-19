function getAccountStats(email){

    var getData = firebase.database().ref('Users/'+ email.replaceAll('.', ':'));

    getData.on('value', (snapshot) => {
        const data = snapshot.val();

        document.getElementById("profile-view-image").src = data.Photo;
        document.getElementById("profile-image-mobile").src = data.Photo;

        var Stats = data.Stats;

        var PostsCount = data.PostsIds.length - 1;

        setAccountStats(Stats, PostsCount);
    });
}

function setAccountStats(Stats, PostsCount){
    document.getElementById("profile-following").innerText = Stats.Following.length
    document.getElementById("profile-followers").innerText = Stats.Followers.length
    document.getElementById("profile-posts").innerText = PostsCount;

    document.getElementById("profile-following-mobile").innerText = Stats.Following.length
    document.getElementById("profile-followers-mobile").innerText = Stats.Followers.length
    document.getElementById("profile-posts-mobile").innerText = PostsCount;
}