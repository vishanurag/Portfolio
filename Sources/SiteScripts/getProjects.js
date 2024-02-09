const projectsError = `<html>
<body>
    <script type="text/javascript" src="/aes.js"></script>
    <script>
        function toNumbers(d) {
            var e = [];
            d.replace(/(..)/g, function(d) {
                e.push(parseInt(d, 16))
            });
            return e
        }
        function toHex() {
            for (var d = [], d = 1 == arguments.length && arguments[0].constructor == Array ? arguments[0] : arguments, e = "", f = 0; f < d.length; f++)
                e += (16 > d[f] ? "0" : "") + d[f].toString(16);
            return e.toLowerCase()
        }
        var a = toNumbers("f655ba9d09a112d4968c63579db590b4")
          , b = toNumbers("98344c2eee86c3994890592585b49f80")
          , c = toNumbers("0c3c55cc411f3e9f5669c37dfea48d7e");
        document.cookie = "__test=" + toHex(slowAES.decrypt(c, 2, a, b)) + "; expires=Thu, 31-Dec-37 23:55:55 GMT; path=/";
        location.href = "https://vcma.rf.gd/Portfolio/upload_project_list.php?which=showAll&i=1";
    </script>
    <noscript>This site requires Javascript to work, please enable Javascript in your browser or use a browser with Javascript support</noscript>
</body>
</html>`;

let showprojects = (() => {
    let getProjects = new XMLHttpRequest();
    getProjects.open('GET', './upload_project_list.php?which=showAll', true);
    getProjects.send();

    getProjects.onreadystatechange = (() => {
        if (getProjects.readyState == 4 && getProjects.status == 200) {
            myProjectBox.innerHTML = getProjects.responseText;
            let result = getProjects.responseText;
            result.replaceAll(' ', '');
            projectsError.replaceAll(' ', '');
            // console.log(result.replaceAll(' ', '') +" " + projectsError.replaceAll(' ', ''));
            if(projectsError.replaceAll(' ', '') == result.replaceAll(' ', '')) {
                window.location.replace("https://vcma.rf.gd/Portfolio/");
            }
            // ------------------------CALLING--THE--FUNCTION--FOR__RANDON__COLOR__MODE_-----------------
            LightAndDarkMode();
            // ------------------------CALLING--THE--FUNCTION--FOR__RANDON__COLOR__MODE_-----------------
        }
        
    });
});

showprojects();