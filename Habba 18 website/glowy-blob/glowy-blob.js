var doms = document.getElementsById("glowy-b");

var selected = 0;

for (var x = 0; x < doms.length; x++) {
    if (window.CP.shouldStopExecution(2)) { break; }
    for (var i = 0; i < doms[x].children.length; i++) {
        if (window.CP.shouldStopExecution(1)) { break; }
        doms[x].children[i].addEventListener("mousedown", function(e) {
            selected = this;
        })
    }
    window.CP.exitedLoop(1);

}
window.CP.exitedLoop(2);


window.addEventListener("mouseup", function(e) {
    selected.style.animation = "bounceback 1s ease";
    selected.style.animationFillMode = "forwards";
    var lala = selected;
    selected = null;

    setTimeout(function() {
        lala.style.animation = "";
        lala.style.animationFillMode = "";
        lala.style.left = "";
        lala.style.top = "";
    }, 1000)

})

window.addEventListener("mousemove", function(e) {
    if (selected == null || !selected) return;
    selected.style.left = (e.clientX - (selected.getBoundingClientRect().width / 2) - window.innerWidth / 2) + "px"
    selected.style.top = (e.clientY - (selected.getBoundingClientRect().height / 2) - window.innerHeight / 2) + "px"
    selected.style.animation = 0;
})