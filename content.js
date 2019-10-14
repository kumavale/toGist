
window.onload = function() {
    let cls = document.querySelectorAll(".Header-link");
    for(let i = 0, j = cls.length; i < j; ++i) {
        if(cls[i].innerText == "Explore") {
            let a    = document.createElement('a');
            let user = location.pathname.split('/')[1];

            a.innerHTML = "Gist";
            a.className = "Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15";
            a.href = "https://gist.github.com/" + user;
            cls[i].parentNode.insertBefore(a, cls[i].nextElementSibling);

            break;
        }
    }

    let bb = document.querySelectorAll(".border-bottom");
    for(let i = 0, j = bb.length; i < j; ++i) {
        if(bb[i].innerText == "Pricing ") {
            let a    = document.createElement('a');
            let li   = document.createElement("li");
            let user = location.pathname.split('/')[1];

            li.className = "border-bottom border-lg-bottom-0 mr-0 mr-lg-3";
            a.innerHTML  = "Gist";
            a.href       = "https://gist.github.com/" + user;
            a.className  = "HeaderMenu-link no-underline py-3 d-block d-lg-inline-block";
            li.appendChild(a);
            bb[i].parentNode.insertBefore(li, bb[i].nextElementSibling);

            break;
        }
    }

};

