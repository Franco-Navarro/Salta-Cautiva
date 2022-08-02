
//Loading modal
((d)=> {
    d.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(()=>{
            d.getElementById("load").classList.add("none");
            d.getElementById("body").style.overflowY = "auto";
        },3000);
    });
})(document);

//Background scroll
window.addEventListener("scroll", ()=> {
    const $beer = document.getElementById("beer"),
    $title = document.getElementById("title"),
    $back1 = document.getElementById("back-1"),
    $back2 = document.getElementById("back-2"),
    $back3 = document.getElementById("back-3"),
    $back4 = document.getElementById("back-4");
    let value = window.scrollY;
    $beer.style.top = value * 0.2 + "px";
    $title.style.top = value * 0.4 + "px";
    $title.style.left = value * 0.2 + "px";
    $back1.style.width = 100 + (value * 0.6) + "%";
    $back2.style.width = 100 + (value * 0.6) + "%";
    $back3.style.width = 100 + (value * 0.6) + "%";
    $back4.style.width = 100 + (value * 0.6) + "%";
});

//Menu desplegable
((d)=> {
    const $menu = d.getElementById("menu"),
    $close = d.getElementById("close"),
    $menuCont = d.getElementById("menu-list"),
    $burro = d.getElementById("burro");

    $menu.addEventListener("click", ()=> {
        $menuCont.classList.add("header-nav-list-center");
        $burro.classList.add("header-nav-list-center");
        $menu.classList.add("none");
        $close.classList.remove("none");
        
    
        d.addEventListener("click", e=>{
            if(!e.target.matches(".header-nav-list-a a")) return false;
            $menuCont.classList.remove("header-nav-list-center");
            $burro.classList.remove("header-nav-list-center");
            $menu.classList.remove("none");
            $close.classList.add("none");
        })
    })
    
    $close.addEventListener("click", ()=> {
        $menuCont.classList.remove("header-nav-list-center");
        $burro.classList.remove("header-nav-list-center");
        $menu.classList.remove("none");
        $close.classList.add("none");
    })
})(document);

//Contenido desplegables 
((d)=> {
    const $rubia = d.getElementById("rubia"),
    $roja = d.getElementById("roja"),
    $blend = d.getElementById("blend"),
    $contain = d.getElementById("beer-contain");

    $rubia.addEventListener("click", ()=> {
        if(window.innerWidth >= 1024) {
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
            $contain.classList.toggle("beer-present-extend");
            $rubia.classList.toggle("none");
            $roja.classList.toggle("none");
            $contain.classList.toggle("beer-present");
            $rubia.classList.toggle("beer");
            $roja.classList.toggle("beer");
        }
    })
})(document);
