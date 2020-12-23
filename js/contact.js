function scrollwindow(a, b) {
    window.scrollTo(a, b);
}

let btn_a = document.querySelectorAll("a.btn_a");
// console.log(btn_a);
btn_a.forEach(function (value, item) {
    value.addEventListener("click", function (e) {
        e.preventDefault();
        // console.log("hi");
        let outer_div = value.closest("div");
        // console.log(outer_div);
        let inner_ul = outer_div.querySelector("ul");
        // console.log(inner_ul);
        let inner_p = outer_div.querySelectorAll("p");
        // console.log(inner_p);
        if (inner_ul.classList.contains("-on")) {
            inner_ul.classList.remove("-on");
        } else {
            inner_ul.classList.add("-on");
        }
        inner_p.forEach(function (value, item) {
            if (value.classList.contains("-on")) {
                value.classList.remove("-on");
            } else {
                value.classList.add("-on");
            }
        });
    });
});