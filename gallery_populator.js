fetch('projects.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(projectList) {
        appendData(projectList);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

function appendData(projectList) {

    var projects = document.getElementById("projects");

    for (var i = 0; i < projectList.length; i++) {

        var card = document.createElement("div");
        card.classList.add("card");

        var onImageClickOpenURL = "https://github.com/VePink/" + projectList[i].GithubId
        if (projectList[i].onImageClickOpenURL != "") {
            onImageClickOpenURL = projectList[i].onImageClickOpenURL
        }

        card.innerHTML =
            `
        <h3 class="card-title">` + projectList[i].title + ` ` +
            `<svg>
                <use xlink:href=` + projectList[i].projectIcon + `></use>
            </svg>
        </h3>
        
        <li class="tagList"><a href="#">` + projectList[i].tagList + `</a></li>
        
        <img class="projectImage" src="https://raw.githubusercontent.com/VePink/` + projectList[i].GithubId + `/main/images/thumbnail.webp" 
            alt="` + projectList[i].title + `project thumbnail"
            onclick="location.href='` + onImageClickOpenURL + `';" style="cursor: pointer;">
        <p class="card-description" lang="en">` + projectList[i].description + `</p>
        
        <div id= "sourceCodeResultPlaceholder"></div>
        <div id= "resultToolPlaceholder"></div>
        <div id= "resultDatasetPlaceholder"></div>
        <div id= "resultWebsitePlaceholder"></div>
        `
        projects.appendChild(card);


        var sourceCodeResultPlaceholder = document.getElementById("sourceCodeResultPlaceholder");
        if (projectList[i].sourceCodeLanguage == "") {
            sourceCodeResultPlaceholder.remove()
        } else {
            sourceCodeResultPlaceholder.outerHTML =
                `<a href="https://github.com/VePink/` + projectList[i].GithubId + `" target="_blank" class="button" rel="noopener">
                source
                <svg>
                    <use xlink:href="#` + projectList[i].sourceCodeLanguage + `_technology_icon"></use>
                </svg>
            </a>`
        }

        var resultToolPlaceholder = document.getElementById("resultToolPlaceholder");
        if (projectList[i].resultEXEToolName == "") {
            resultToolPlaceholder.remove()
        } else {
            resultToolPlaceholder.outerHTML =
                `<a href="https://github.com/VePink/` + projectList[i].GithubId + `/blob/main/dist/` + projectList[i].resultEXEToolName + `.exe" target="_blank" class="button" rel="noopener"> 
                tool
                <svg>
                    <use xlink:href="#EXE_file_icon"></use>
                </svg>
            </a>`
        }

        var resultDatasetPlaceholder = document.getElementById("resultDatasetPlaceholder");
        if (projectList[i].resultDatasetExtension == "") {
            resultDatasetPlaceholder.remove()
        } else {
            resultDatasetPlaceholder.outerHTML =
                `<a href="https://github.com/VePink/` + projectList[i].GithubId + `/tree/main/Output" target="_blank" class="button" rel="noopener">
                dataset
                <svg>
                    <use xlink:href="#` + projectList[i].resultDatasetExtension + `_file_icon"></use>
                </svg>
            </a>`
        }

        var resultWebsitePlaceholder = document.getElementById("resultWebsitePlaceholder");
        if (projectList[i].resultWebsiteURL == "") {
            resultWebsitePlaceholder.remove()
        } else {
            resultWebsitePlaceholder.outerHTML =
                `<a href="` + projectList[i].resultWebsiteURL + `" target="_blank" class="button" rel="noopener">
                website
                <svg>
                    <use xlink:href="#Website_icon"></use>
                </svg>
            </a>`
        }
    }
}