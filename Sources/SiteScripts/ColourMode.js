// --------------------------Light--Mode---&&-----Dark--Mode-------------------------//
let DarkMode = Math.floor((Math.random() * 300) % 3);
// console.log(DarkMode);

// ----------Objects---Declaration--OverHere-------------------------------------//

let MainBody = document.getElementById("body");

// ------Nav--Bar--Section------//
let creator = document.getElementById("creator");
let navItemsUpperParts = document.getElementsByClassName(
  "upperNavItemsForClassChange"
);
let navItemsUnderlineHome = document.getElementById("navItemsUnderlineHome");
let navBarTogglerButton = document.getElementById("navBarTogglerButton");
let navBarTogglerIcon = document.getElementById("navBarTogglerIcon");
//------Dark--Mode--Button-----------//
let modeName = document.getElementsByClassName("modeName");

let moonDark = document.getElementsByClassName("moonDark");
let sunLight = document.getElementsByClassName("sunLight");
//------Dark--Mode--Button-----------//
// ------Nav--Bar--Section------//

// ------My--Name--Section------//
let helloIAMID = document.getElementById("helloIAMID");
let myNameStyle = document.getElementById("nameBox");
let whatIDO = document.getElementById("whatIDO");
let BriefAboutMe = document.getElementById("briefAboutMee");
// ------My--Name--Section------//

// ------About--Me--Section------//

let AboutMeProjectHeading = document.getElementsByClassName("AboutMeHeading");
let linesOfHeading = document.getElementsByClassName("lineOfHeading");

let paragraphAboutMe = document.getElementsByClassName("paragraphAboutMe");
let myPhotoCover = document.getElementById("myPhotoCover");
// ------About--Me--Section------//

// ------My--Projects--Section------//
let projectBoxes = document.getElementsByClassName("projectBoxes");
// ------My--Projects--Section------//

// ------My--Social--Handles--Section------//
let iconsMainFront = document.getElementsByClassName("iconsMainFront");
let simpleVerticalLine = document.getElementById("simpleVerticalLine");
// ------My--Social--Handles--Section------//

// -----Main--Footer--Section------//
let formHeadingMain = document.getElementById("formHeadingMain");
let mainFooter = document.getElementById("mainFooter");
let formElements = document.getElementsByClassName("formElements");
let classForButtonsForModeChange = document.getElementsByClassName(
  "classForButtonsForModeChange"
);
// ------Main--Footer--Section------//

// ----------Objects---Declaration---OverHere-------------------------------------//

function LightAndDarkMode() {
  if (DarkMode == 1) {
    for (let tempI = 0; tempI < modeName.length; tempI++) {
      modeName[tempI].innerHTML = "Alice";
      modeName[tempI].style.color = "#3f7ae1";
    }
    for (let tempI = 0; tempI < sunLight.length; tempI++) {
      sunLight[tempI].style.width = "0";
      sunLight[tempI].style.visibility = "hidden";
    }
    for (let tempI = 0; tempI < moonDark.length; tempI++) {
      moonDark[tempI].style.width = "16";
      moonDark[tempI].style.color = "#3f7ae1";
      moonDark[tempI].style.marginLeft = "8px";
      moonDark[tempI].style.visibility = "visible";
    }
    MainBody.style.backgroundColor = "aliceblue";
    creator.style.color = "grey";
    navBarTogglerButton.style.borderColor = "#0a192f";
    navBarTogglerButton.style.backgroundColor = "grey";
    navBarTogglerIcon.style.backgroundColor = "transpatent";
    for (let tempI = 0; tempI < navItemsUpperParts.length; tempI++) {
      navItemsUpperParts[tempI].classList.add("darkModeNAVBarItemsHoverClass");
    }
    navItemsUnderlineHome.style.backgroundColor = "#3f7ae1";

    myNameStyle.style.color = "grey";
    myNameStyle.style.borderRightColor = "black";

    whatIDO.style.color = "#3f7ae1";
    whatIDO.style.textShadow = "-2px 5px 0px #189dd533";
    BriefAboutMe.style.color = "black";

    for (let tempI = 0; tempI < AboutMeProjectHeading.length; tempI++) {
      AboutMeProjectHeading[tempI].style.color = "grey";
    }
    for (let tempI = 0; tempI < linesOfHeading.length; tempI++) {
      linesOfHeading[tempI].style.backgroundColor = "grey";
    }
    for (let tempI = 0; tempI < paragraphAboutMe.length; tempI++) {
      paragraphAboutMe[tempI].style.color = "black";
    }

    myPhotoCover.style.borderColor = "grey";
    for (let tempI = 0; tempI < projectBoxes.length; tempI++) {
      projectBoxes[tempI].style.backgroundColor = "rgb(53 53 53)";
    }

    console.log("Light Mode...1");
    DarkMode = 2;
    for (let tempI = 0; tempI < iconsMainFront.length; tempI++) {
      iconsMainFront[tempI].style.color = "grey";
    }
    simpleVerticalLine.style.backgroundColor = "grey";
    formHeadingMain.style.color = "rgb(53 53 53)";
    for (let tempI = 0; tempI < formElements.length; tempI++) {
      formElements[tempI].style.backgroundColor = "rgb(53 53 53)";
    }
    mainFooter.style.backgroundColor = "rgb(53 53 53)";

    
  } else if (DarkMode == 2) {
    for (let tempI = 0; tempI < modeName.length; tempI++) {
      modeName[tempI].innerHTML = "Pink";
      modeName[tempI].style.color = "#3f7ae1";
    }
    for (let tempI = 0; tempI < sunLight.length; tempI++) {
      sunLight[tempI].style.width = "0";
      sunLight[tempI].style.visibility = "hidden";
    }
    for (let tempI = 0; tempI < moonDark.length; tempI++) {
      moonDark[tempI].style.width = "16";
      moonDark[tempI].style.color = "#3f7ae1";
      moonDark[tempI].style.marginLeft = "8px";
      moonDark[tempI].style.visibility = "visible";
    }
    MainBody.style.backgroundColor = "#ac91ad";
    creator.style.color = "blue";
    navBarTogglerButton.style.borderColor = "#0a192f";
    navBarTogglerButton.style.backgroundColor = "grey";
    navBarTogglerIcon.style.backgroundColor = "transpatent";
    for (let tempI = 0; tempI < navItemsUpperParts.length; tempI++) {
      navItemsUpperParts[tempI].classList.add("darkModeNAVBarItemsHoverClass");
      navItemsUpperParts[tempI].style.color = "#ac09b3";
    }
    navItemsUnderlineHome.style.backgroundColor = "#3f7ae1";

    helloIAMID.style.color = "#af25c8";
    myNameStyle.style.color = "#771bb8";
    myNameStyle.style.borderRightColor = "transparent";

    whatIDO.style.color = "#ac09b3";
    whatIDO.style.textShadow = "-2px 5px 0px #4354705c, -2px 5px 5px #b983da";
    BriefAboutMe.style.color = "black";

    for (let tempI = 0; tempI < AboutMeProjectHeading.length; tempI++) {
      AboutMeProjectHeading[tempI].style.color = "#ac09b3";
    }
    for (let tempI = 0; tempI < linesOfHeading.length; tempI++) {
      linesOfHeading[tempI].style.backgroundColor = "#ac09b3";
    }
    for (let tempI = 0; tempI < paragraphAboutMe.length; tempI++) {
      paragraphAboutMe[tempI].style.color = "black";
    }

    myPhotoCover.style.borderColor = "#771bb8";
    for (let tempI = 0; tempI < projectBoxes.length; tempI++) {
      projectBoxes[tempI].style.backgroundColor = "#771bb8";
    }

    for (let tempI = 0; tempI < iconsMainFront.length; tempI++) {
      iconsMainFront[tempI].style.color = "#771bb8";
    }
    simpleVerticalLine.style.backgroundColor = "#771bb8";
    formHeadingMain.style.color = "#ac09b3";
    for (let tempI = 0; tempI < formElements.length; tempI++) {
      formElements[tempI].style.backgroundColor = "#771bb8";
    }
    for (let tempI = 0; tempI < classForButtonsForModeChange.length; tempI++) {
      classForButtonsForModeChange[tempI].style.color = "#ac09b3";
    }
    mainFooter.style.backgroundColor = "#771bb8";

    DarkMode = 3;
  } else {
    MainBody.style.backgroundColor = "#0a192f";
    creator.style.color = "aliceblue";

    helloIAMID.style.color = "#59c2e6";
    myNameStyle.style.color = "aliceblue";
    myNameStyle.style.borderRightColor = "transparent";

    whatIDO.style.color = "#8892b0";
    whatIDO.style.textShadow = "-2px 5px 0px #233554, -2px 5px 5px aliceblue";
    BriefAboutMe.style.color = "aliceblue";

    for (let tempI = 0; tempI < navItemsUpperParts.length; tempI++) {
      navItemsUpperParts[tempI].classList.remove(
        "darkModeNAVBarItemsHoverClass"
      );
      navItemsUpperParts[tempI].style.color = "grey";
    }
    for (let tempI = 0; tempI < modeName.length; tempI++) {
      modeName[tempI].innerHTML = "Blue";
      modeName[tempI].style.color = "aliceblue";
    }
    for (let tempI = 0; tempI < sunLight.length; tempI++) {
      sunLight[tempI].style.width = "16";
      sunLight[tempI].style.visibility = "visible";
    }
    for (let tempI = 0; tempI < moonDark.length; tempI++) {
      moonDark[tempI].style.width = "0";
      moonDark[tempI].style.marginLeft = "0px";
      moonDark[tempI].style.visibility = "hidden";
    }
    navItemsUnderlineHome.style.backgroundColor = "aliceblue";

    for (let tempI = 0; tempI < AboutMeProjectHeading.length; tempI++) {
      AboutMeProjectHeading[tempI].style.color = "aliceblue";
    }
    for (let tempI = 0; tempI < linesOfHeading.length; tempI++) {
      linesOfHeading[tempI].style.backgroundColor = "aliceblue";
    }
    for (let tempI = 0; tempI < paragraphAboutMe.length; tempI++) {
      paragraphAboutMe[tempI].style.color = "aliceblue";
    }

    myPhotoCover.style.borderColor = "aliceblue";
    for (let tempI = 0; tempI < projectBoxes.length; tempI++) {
      projectBoxes[tempI].style.backgroundColor = "#233554";
    }

    formHeadingMain.style.color = "#5d7aab";
    for (let tempI = 0; tempI < formElements.length; tempI++) {
      formElements[tempI].style.backgroundColor = "#1a2e4c";
    }
    mainFooter.style.backgroundColor = "#233554";

    for (let tempI = 0; tempI < iconsMainFront.length; tempI++) {
      iconsMainFront[tempI].style.color = "aliceblue";
    }
    for (let tempI = 0; tempI < classForButtonsForModeChange.length; tempI++) {
      classForButtonsForModeChange[tempI].style.color = "#8892b0";
    }
    simpleVerticalLine.style.backgroundColor = "aliceblue";

    console.log("Dark Mode...2");
    DarkMode = 1;
  }
}

// --------------------------Light--Mode---&&-----Dark--Mode-------------------------//

