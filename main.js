function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = h < 10 ? `0${h}` : h;
    h = m < 10 ? `0${h}` : h;
    h = s < 10 ? `0${h}` : h;

    let time = h + ":" + m + ":" + s + " " + session;
    document.querySelector(".clock").innerText = time;
    document.querySelector(".clock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
