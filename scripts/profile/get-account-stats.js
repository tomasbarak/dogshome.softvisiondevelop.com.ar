function getAccountProfile(uid){

    var getData = firebase.database().ref('Users/'+ uid + '/PublicRead');

    getData.on('value', (snapshot) => {
        const data = snapshot.val();

        document.getElementById("profile-view-image").src = data.Photo;
        document.getElementById("profile-image-mobile").src = data.Photo;

        var PostsCount = data.PostsIds.length - 1;
        console.log(uid);
        setAccountPostsQ(PostsCount);
        getAccountStats(uid);
    });
}

function setAccountStats(Stats){
    document.getElementById("profile-following").innerText = Stats.Following.length
    document.getElementById("profile-followers").innerText = Stats.Followers.length

    document.getElementById("profile-following-mobile").innerText = Stats.Following.length
    document.getElementById("profile-followers-mobile").innerText = Stats.Followers.length
}
function setAccountPostsQ(PostsCount){
    document.getElementById("profile-posts").innerText = PostsCount;

    document.getElementById("profile-posts-mobile").innerText = PostsCount;
}
function getAccountStats(uid){
    var getData = firebase.database().ref('Users/'+ uid + '/PublicWrite/Stats');

    getData.on('value', (snapshot) => {
        const data = snapshot.val();
        setAccountStats(data);
    });
}