function changeTheme(){
    const favIconTag = document.querySelector('link[rel="shortcut icon"]'),
    logoNexti = document.querySelector("#logo-NexTI-header"),
    PATH_FAVICON = "resources/favicons/favicons-white/favicon.ico",
    PATH_LOGO = "resources/logos-NexTI/Logo-NexTI-white.png";

    logoNexti.setAttribute("src",PATH_LOGO)
    favIconTag.setAttribute("href",PATH_FAVICON)
}



window.onload = ()=>{
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    isDarkMode?changeTheme():false
}