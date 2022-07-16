const $beer = document.getElementById("beer"),
$menu = document.getElementById("menu"),
$close = document.getElementById("close"),
$menuCont = document.getElementById("menu-list"),
$rubia = document.getElementById("rubia"),
$roja = document.getElementById("roja"),
$blend = document.getElementById("blend");


window.addEventListener("scroll", ()=> {
    /*let value = window.scrollY;
    
    $beer.style.top = value * 0.6 + "px";*/
})

$menu.addEventListener("click", ()=> {
    $menuCont.classList.add("header-nav-list-center");
    $menu.classList.add("none");
    $close.classList.remove("none");

    document.addEventListener("click", e=>{
        if(!e.target.matches(".header-nav-list-a a")) return false;

        $menuCont.classList.remove("header-nav-list-center");
        $menu.classList.remove("none");
        $close.classList.add("none");
    })
})

$close.addEventListener("click", ()=> {
    $menuCont.classList.remove("header-nav-list-center");
    $menu.classList.remove("none");
    $close.classList.add("none");
})


$rubia.addEventListener("click", ()=> {
    if(window.innerWidth >= 1024) {
        const $contain = document.getElementById("beer-contain");
        $contain.classList.toggle("beer-present-extend");
        $blend.classList.toggle("none");
        $roja.classList.toggle("none");
        $contain.classList.toggle("beer-present");
        $blend.classList.toggle("beer");
        $roja.classList.toggle("beer");
    }
})

$roja.addEventListener("click", ()=> {
    if(window.innerWidth >= 1024) {
        const $contain = document.getElementById("beer-contain");
        $contain.classList.toggle("beer-present");
        $blend.classList.toggle("beer");
        $rubia.classList.toggle("beer");
        $contain.classList.toggle("beer-present-extend");
        $blend.classList.toggle("none");
        $rubia.classList.toggle("none");
    }
})

$blend.addEventListener("click", ()=> {
    if(window.innerWidth >= 1024) {
        const $contain = document.getElementById("beer-contain");
        $contain.classList.toggle("beer-present-extend");
        $rubia.classList.toggle("none");
        $roja.classList.toggle("none");
        $contain.classList.toggle("beer-present");
        $rubia.classList.toggle("beer");
        $roja.classList.toggle("beer");
    }
})