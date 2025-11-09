const SitioInicioSeminarios = {
    ini: ()=>{

        SitioInicioSeminarios.html.topbar();
        SitioInicioSeminarios.html.sections.inicio();

    }, 
    html: {
        topbar: ()=>{
            const TopbarSiteApp = document.getElementById("TopbarSiteApp");

            const scrooll = () => {
                const scrollY = document.documentElement.scrollTop;
                if (scrollY > 0) {
                    TopbarSiteApp.classList.add("st-active");
                } else {
                    TopbarSiteApp.classList.remove("st-active");
                }
            }

            window.addEventListener("scroll", scrooll);
            scrooll();
        },
        sections: {
            inicio: ()=>{

                const Inicio = document.getElementById("Inicio");
                const slider = Inicio.querySelector('.sm-glide-inicio');

                new Glide(slider, {
                    type: 'carousel',
                    startAt: 0,
                    perView: 1,
                    autoplay: 3000,
                    gap: 0
                }).mount();
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', ()=>{

    SitioInicioSeminarios.ini();

});