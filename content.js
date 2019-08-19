
window.onload = function() {
    var cls = document.querySelectorAll(".Header-link");

    for(let i=0, j=cls.length; i<j; ++i) {
        if(cls[i].innerText == "Explore") {
            let a = document.createElement('a');
            let user = location.pathname.split('/')[1];
            a.innerHTML = "Gist";
            a.className = "Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15";
            a.href = "https://gist.github.com/" + user;
            cls[i].parentNode.insertBefore(a, cls[i].nextElementSibling);
            break;
        }
    }

};

