function searchTags() {
    var input = document.getElementById("searchBar");
    var filter = input.value.toUpperCase();
    var projects = document.getElementById("projects");
    var tagList = projects.getElementsByClassName("tagList");
    var card = projects.getElementsByClassName("card");
    for (i = 0; i < tagList.length; i++) {
        a = tagList[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}

