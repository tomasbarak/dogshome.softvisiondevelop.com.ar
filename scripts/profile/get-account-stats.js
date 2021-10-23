function getAccountProfile(uid) {

    var getData = firebase.database().ref('Users/' + uid + '/PublicRead');

    getData.get().then((snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.Photo) {
                document.getElementById("profile-view-image").src = data.Photo;
                document.getElementById("profile-image-mobile").src = data.Photo;
            } else {
                document.getElementById("profile-view-image").src = "/images/default-user-image.png";
                document.getElementById("profile-image-mobile").src = "/images/default-user-image.png";
            }
            let PostsCount = 0;
            if (data.PostsIds) {
                PostsCount = data.PostsIds.length
            } else {
                PostsCount = 0;
            }
            console.log(uid);
            setAccountPostsQ(PostsCount);
            console.log(data)
            if (data.SocialMedia) {
                let InstagramLink = document.getElementById("instagram-link");
                let Facebooklink = document.getElementById("facebook-link");
                let TwitterLink = document.getElementById("twitter-link");

                let InstagramLinkCont = document.getElementById("instagram-link-cont");
                let FacebooklinkCont = document.getElementById("facebook-link-cont");
                let TwitterLinkCont = document.getElementById("twitter-link-cont");
                if (data.SocialMedia.Instagram) {
                    let IGUser = data.SocialMedia.Instagram;
                    InstagramLink.href = "https://instagram.com/" + IGUser;
                    InstagramLinkCont.classList.remove('link-no-visible')
                }
                if (data.SocialMedia.Facebook) {
                    let FBUser = data.SocialMedia.Facebook;
                    Facebooklink.href = "https://facebook.com/" + FBUser;
                    FacebooklinkCont.classList.remove('link-no-visible')
                }
                if (data.SocialMedia.Twitter) {
                    let TWUser = data.SocialMedia.Twitter;
                    TwitterLink.href = "https://twitter.com/" + TWUser;
                    TwitterLinkCont.classList.remove('link-no-visible')
                }
            }
            if (data.ShortDescription) {
                let ShortDescriptionText = data.ShortDescription;
                let shortDescCont = document.getElementById('short-desc')
                shortDescCont.innerText = ShortDescriptionText;
            }
            if (data.PostsIds) {
                console.log(data.PostsIds)
                addMyPublications(data.PostsIds);
            }
            if (data.Type) {
                if (data.Type !== 1) {
                    let socialNetCont = document.getElementById('social-media-info');
                    socialNetCont.classList.remove('link-no-visible');

                    let postsShowCont = document.getElementById('content-show');
                    postsShowCont.classList.remove('link-no-visible')
                    if (data.RefName) {
                        document.getElementById("my-account-name-text").innerText = data.RefName;
                        document.getElementById('exp-menu-name').innerText = data.RefName;
                        document.getElementById("my-account-name-text-desk").innerText = data.RefName;
                    }
                }
            }
        }
        getAccountStats(uid);
    });
}

function addMyPublications(PostsIds) {
    let swappedPostsIds = {};
    for (let key in PostsIds) {
        swappedPostsIds[PostsIds[key]] = key;
    }
    const dbRef = firebase.database().ref();
    dbRef.child("Publications").get().then((snapshot) => {
        if (snapshot.exists()) {
            let publications = snapshot.val();
            for (let key in publications) {
                if (key in swappedPostsIds) {
                    console.log(key, publications[key]);
                    let publicationCreatedContainer = document.createElement('div');
                    publicationCreatedContainer.className = 'publication';
                    publicationCreatedContainer.onclick = function () {
                        window.location = "dog.html" + '?publication=' + publications[key].Id
                    };
                    //publicationCreatedContainer.style.height = (Math.random() * (330 - 270 + 1) + 270) + "px";

                    let publicationContainer = document.getElementById("content-show").appendChild(publicationCreatedContainer);

                    let publicationCreatedImage = document.createElement('img');
                    publicationCreatedImage.className = 'publication-photo';
                    publicationCreatedImage.loading = 'lazy';
                    publicationCreatedImage.src = publications[key].Photo;

                    let publicationImage = publicationContainer.appendChild(publicationCreatedImage);

                    let publicationCreatedDescContainer = document.createElement('div');
                    publicationCreatedDescContainer.className = 'publication-desc-cont';

                    let publicationDescContainer = publicationContainer.appendChild(publicationCreatedDescContainer);

                    let publicationCreatedName = document.createElement('h1');
                    publicationCreatedName.className = 'publication-name';
                    publicationCreatedName.innerText = publications[key].Name;

                    let publicationName = publicationDescContainer.appendChild(publicationCreatedName);

                    let publicationCreatedDesc = document.createElement('p');
                    publicationCreatedDesc.className = 'publication-description';
                    publicationCreatedDesc.innerText = publications[key].SDescription;

                    let publicationDesc = publicationDescContainer.appendChild(publicationCreatedDesc);

                    let publicationCreatedRefNameCont = document.createElement('div');
                    publicationCreatedRefNameCont.className = 'ref-name-cont';

                    let publicationRefNameCont = publicationContainer.appendChild(publicationCreatedRefNameCont);

                    let publicationCreatedRefName = document.createElement('a');
                    publicationCreatedRefName.innerText = publications[key].Refugio;

                    let publicationRefName = publicationRefNameCont.appendChild(publicationCreatedRefName);

                }
            }
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

function setAccountStats(Stats) {
    if (Stats != null) {
        if (Stats.Following) {
            document.getElementById("profile-following").innerText = Stats.Following.length
        }
        if (Stats.Following) {
            document.getElementById("profile-following-mobile").innerText = Stats.Following.length
        }
        if (Stats.Followers) {
            document.getElementById("profile-followers").innerText = Stats.Followers.length
        }
        if (Stats.Followers) {
            document.getElementById("profile-followers-mobile").innerText = Stats.Followers.length
        }
    } else {
        document.getElementById("profile-following").innerText = '0'
        document.getElementById("profile-following-mobile").innerText = '0'
        document.getElementById("profile-followers-mobile").innerText = '0'
        document.getElementById("profile-followers").innerText = '0'
    }
}

function setAccountPostsQ(PostsCount) {
    document.getElementById("profile-posts").innerText = PostsCount;

    document.getElementById("profile-posts-mobile").innerText = PostsCount;
}

function getAccountStats(uid) {
    var getData = firebase.database().ref('Users/' + uid + '/PublicWrite/Stats');

    getData.on('value', (snapshot) => {
        const data = snapshot.val();
        setAccountStats(data);
    });
}