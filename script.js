let timerLoop = setInterval(function() {
    let page_view_time = document.getElementById("time-container");
    page_view_time = page_view_time + 1;
}, 1000);

timerLoop();