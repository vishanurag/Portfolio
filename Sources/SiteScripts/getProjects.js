let showprojects = (() => {
    let getProjects = new XMLHttpRequest();
    getProjects.open('GET', './upload_project_list.php?which=showAll', true);
    getProjects.send();

    getProjects.onreadystatechange = (() => {
        if (getProjects.readyState == 4 && getProjects.status == 200) {
            myProjectBox.innerHTML = getProjects.responseText;
            // ------------------------CALLING--THE--FUNCTION--FOR__RANDON__COLOR__MODE_-----------------
            LightAndDarkMode();
            // ------------------------CALLING--THE--FUNCTION--FOR__RANDON__COLOR__MODE_-----------------
        }
    });
});

showprojects();