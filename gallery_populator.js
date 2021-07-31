fetch('projects.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (projectList) {
        appendData(projectList);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(projectList) {

    var projects = document.getElementById("projects");

    for (var i = 0; i < projectList.length; i++) {
        
        var card = document.createElement("div");
        card.classList.add("card");

        var onImageClickOpenURL = "https://github.com/VePink/"+ projectList[i].GithubId
        if (projectList[i].onImageClickOpenURL != "") {
            onImageClickOpenURL = projectList[i].onImageClickOpenURL
        }

        card.innerHTML = 
        `
        <h3 class="card-title">`+ projectList[i].title + ` ` +
            `<svg>
                <use xlink:href=`+ projectList[i].projectIcon +`></use>
            </svg>
        </h3>
        
        <li class="tagList"><a href="#">`+ projectList[i].tagList + `</a></li>
        
        <img class="projectImage" src="https://raw.githubusercontent.com/VePink/`+ projectList[i].GithubId +`/main/images/thumbnail.png" 
            onclick="location.href='`+ onImageClickOpenURL +`';" style="cursor: pointer;">
        <p class="card-description">`+ projectList[i].description +`</p>
        
        <div id= "sourceCodeResultPlaceholder"></div>
        <div id= "resultToolPlaceholder"></div>
        <div id= "resultDatasetPlaceholder"></div>
        <div id= "resultWebsitePlaceholder"></div>
        `
        projects.appendChild(card);


        var sourceCodeResultPlaceholder = document.getElementById("sourceCodeResultPlaceholder");
        if (projectList[i].sourceCodeLanguage == "") {
            sourceCodeResultPlaceholder.remove()
        }
        else {
            sourceCodeResultPlaceholder.outerHTML =
            `<a href="https://github.com/VePink/`+ projectList[i].GithubId +`" target="_blank" class="button">
                source
                <svg>
                    <use xlink:href="#`+ projectList[i].sourceCodeLanguage +`Icon"></use>
                </svg>
            </a>`
        }

        var resultToolPlaceholder = document.getElementById("resultToolPlaceholder");
        if (projectList[i].resultEXEToolName == "") {
            resultToolPlaceholder.remove()
        }
        else {
            resultToolPlaceholder.outerHTML =
            `<a href="https://github.com/VePink/`+ projectList[i].GithubId +`/blob/main/dist/`+ projectList[i].resultEXEToolName+`.exe" target="_blank" class="button"> 
                tool
                <svg>
                    <use xlink:href="#EXEIcon"></use>
                </svg>
            </a>`
        }

        var resultDatasetPlaceholder = document.getElementById("resultDatasetPlaceholder");
        if (projectList[i].resultDatasetExtension == "") {
            resultDatasetPlaceholder.remove()
        }
        else {
            resultDatasetPlaceholder.outerHTML =
            `<a href="https://github.com/VePink/`+ projectList[i].GithubId +`/tree/main/Output" target="_blank" class="button">
                dataset
                <svg>
                    <use xlink:href="#`+ projectList[i].resultDatasetExtension +`Icon"></use>
                </svg>
            </a>`
        }

        var resultWebsitePlaceholder = document.getElementById("resultWebsitePlaceholder");
        if (projectList[i].resultWebsiteURL == "") {
            resultWebsitePlaceholder.remove()
        }
        else {
            resultWebsitePlaceholder.outerHTML =
            `<a href="`+ projectList[i].resultWebsiteURL +`" target="_blank" class="button">
                website
                <svg>
                    <use xlink:href="#WebsiteIcon"></use>
                </svg>
            </a>`
        }
    }
}
