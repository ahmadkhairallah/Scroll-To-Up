const UP = document.querySelector(".up");

window.onscroll = () => {
    if (window.scrollY >= 500) {
        UP.classList.add("show");
    } else {
        UP.classList.remove("show");
    }
};

UP.onclick = () => {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    })
};

