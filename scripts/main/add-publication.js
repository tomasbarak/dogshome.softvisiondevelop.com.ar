function addPublications(allPublications){
    if((window.location.pathname).toString().includes("index.html")) {
        for (let key in allPublications) {
            console.log(key, allPublications[key]);
            let publicationCreatedContainer = document.createElement('div');
            publicationCreatedContainer.className = 'publication';
            publicationCreatedContainer.onclick = function (){window.location = "dog.html" + '?publication=' + allPublications[key].Id};
            //publicationCreatedContainer.style.height = (Math.random() * (330 - 270 + 1) + 270) + "px";

            let publicationContainer = document.getElementById("content-show").appendChild(publicationCreatedContainer);

            let publicationCreatedImage = document.createElement('img');
            publicationCreatedImage.className = 'publication-photo';
            publicationCreatedImage.loading = 'lazy';
            publicationCreatedImage.src = allPublications[key].Photo;

            let publicationImage = publicationContainer.appendChild(publicationCreatedImage);

            let publicationCreatedDescContainer = document.createElement('div');
            publicationCreatedDescContainer.className = 'publication-desc-cont';

            let publicationDescContainer = publicationContainer.appendChild(publicationCreatedDescContainer);

            let publicationCreatedName = document.createElement('h1');
            publicationCreatedName.className = 'publication-name';
            publicationCreatedName.innerText = allPublications[key].Name;

            let publicationName = publicationDescContainer.appendChild(publicationCreatedName);

            let publicationCreatedDesc = document.createElement('p');
            publicationCreatedDesc.className = 'publication-description';
            publicationCreatedDesc.innerText = allPublications[key].SDescription;

            let publicationDesc = publicationDescContainer.appendChild(publicationCreatedDesc);

            let publicationCreatedRefNameCont = document.createElement('div');
            publicationCreatedRefNameCont.className = 'ref-name-cont';

            let publicationRefNameCont = publicationContainer.appendChild(publicationCreatedRefNameCont);

            let publicationCreatedRefName = document.createElement('a');
            publicationCreatedRefName.innerText = allPublications[key].Refugio;

            let publicationRefName = publicationRefNameCont.appendChild(publicationCreatedRefName);

        }
        setLoading(false)
    }
}