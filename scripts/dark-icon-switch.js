function changeTheme(){
    const favIconTag = document.querySelector('link[rel="shortcut icon"]'),
    logoNexti = document.querySelector("#logo-NexTI-header"),
    PATH_FAVICON = "resources/favicons/favicons-white/favicon.ico",
    PATH_LOGO = "resources/logos-NexTI/Logo-NexTI-white.png";

    logoNexti.setAttribute("src",PATH_LOGO)
    favIconTag.setAttribute("href",PATH_FAVICON)
}



window.onload = (e)=>{
    const URL = new window.URL(document.URL)
    if(URL.hash){
        URL.hash = ""
        // console.log(URL.hash)
        // console.log(URL)
        window.location.href = URL.href
    }
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(isDarkMode)
    isDarkMode?changeTheme():false
}