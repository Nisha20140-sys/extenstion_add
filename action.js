if (window.location.href == "https://my.newtonschool.co/dashboard/") {
    console.log("Full-Stack Web Development - January 2021 - alpha");
    document.getElementsByClassName("custom-toggle-btn btn");
    document.getElementsByClassName("dropdown-link-item dropdown-item")[0].click();
    //document.getElementsByClassName("slack-btn resource-btn")[0].click(); 1. skip button
}
else {
         console.log("Leaderboard");
 	 document.getElementsByClassName("navigation-menu-item ")[2].click();
}

