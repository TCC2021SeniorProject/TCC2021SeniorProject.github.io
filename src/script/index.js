'use strict';
function appearTitle() {
    function appearTitle1() {
        let target_title_1 = document.querySelector(".header_title1");
        target_title_1.style.opacity = "1";
    }

    function appearTitle2() {
        let target_title_2 = document.querySelector(".header_title2");
        target_title_2.style.opacity = "1";
    }

    window.setTimeout(appearTitle1, 500);
    window.setTimeout(appearTitle2, 1000);
}


appearTitle();

