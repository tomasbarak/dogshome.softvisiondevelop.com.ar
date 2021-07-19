function addPublications(allPublications){
    for (let key in allPublications) {
        console.log(key, allPublications[key]);
        var publicationCreatedContainer = document.createElement('div');
        publicationCreatedContainer.className = 'publication';
        publicationCreatedContainer.onclick = function (){window.location = "dog.html" + '?publication=' + allPublications[key].Id};
        //publicationCreatedContainer.style.height = (Math.random() * (330 - 270 + 1) + 270) + "px";

        var publicationContainer = document.getElementById("content-show").appendChild(publicationCreatedContainer);

        var publicationCreatedImage = document.createElement('img');
        publicationCreatedImage.className = 'publication-photo';
        publicationCreatedImage.loading = 'lazy';
        publicationCreatedImage.src = allPublications[key].Photo;

        var publicationImage = publicationContainer.appendChild(publicationCreatedImage);

        var publicationCreatedDescContainer = document.createElement('div');
        publicationCreatedDescContainer.className = 'publication-desc-cont';

        var publicationDescContainer = publicationContainer.appendChild(publicationCreatedDescContainer);

        var publicationCreatedName = document.createElement('h1');
        publicationCreatedName.className = 'publication-name';
        publicationCreatedName.innerText = allPublications[key].Name;

        var publicationName = publicationDescContainer.appendChild(publicationCreatedName);

        var publicationCreatedDesc = document.createElement('p');
        publicationCreatedDesc.className = 'publication-description';
        publicationCreatedDesc.innerText = allPublications[key].SDescription;

        var publicationDesc = publicationDescContainer.appendChild(publicationCreatedDesc);

        var publicationCreatedRefNameCont = document.createElement('div');
        publicationCreatedRefNameCont.className = 'ref-name-cont';

        var publicationRefNameCont = publicationContainer.appendChild(publicationCreatedRefNameCont);

        var publicationCreatedRefName = document.createElement('a');
        publicationCreatedRefName.innerText = allPublications[key].Refugio;

        var publicationRefName = publicationRefNameCont.appendChild(publicationCreatedRefName);

    }
    setLoading(false)
}