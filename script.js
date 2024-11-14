// Timer for page view
const page_view_time = document.getElementById("time-container");
let view_time = 0;

setInterval(function() {
    page_view_time.innerHTML = view_time;
    view_time++;
}, 1000)

const light_mode_but = document.getElementById("light-mode-button");
const dark_mode_but = document.getElementById("dark-mode-button");

// Dark mode but
dark_mode_but.addEventListener("click", event => {
    dark_mode_but.style.display = "none";
    light_mode_but.style.display = "initial";

    document.body.style.backgroundColor = "#0d1117";
    document.body.style.color = "#f0f6fc";
    document.getElementById("nav").style.borderBottom = "1px solid #f0f6fc";
    document.getElementById("about-me").style.borderBottom = "1px solid #f0f6fc";
    document.getElementById("project-skills").style.borderBottom = "1px solid #f0f6fc";
    

    document.getElementById("nav-link1").style.color = "#f0f6fc";
    document.getElementById("nav-link2").style.color = "#f0f6fc";
    document.getElementById("portrait").style.border = "none";
})

// Light mode but
light_mode_but.addEventListener("click", event => {
    dark_mode_but.style.display = "initial";
    light_mode_but.style.display = "none";

    document.body.style.backgroundColor = "#f0f6fc";
    document.body.style.color = "#0d1117";
    document.getElementById("nav").style.borderBottom = "1px solid #0d1117";
    
    document.getElementById("nav-link1").style.color = "#0d1117";
    document.getElementById("nav-link2").style.color = "#0d1117";

    document.getElementById("about-me").style.borderBottom = "1px solid black";
    document.getElementById("project-skills").style.borderBottom = "1px solid #0d1117";

    document.getElementById("portrait").style.border = "1px solid #0d1117";
    document.getElementById("portrait").style.borderRadius = "50%";
});

