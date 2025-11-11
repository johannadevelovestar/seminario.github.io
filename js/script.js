const SitioInicioSeminarios = {
    ini: ()=>{

        SitioInicioSeminarios.html.topbar();
        SitioInicioSeminarios.html.sections.inicio();
        SitioInicioSeminarios.html.galeria();

    }, 
    html: {
        topbar: ()=>{
            const TopbarSiteApp = document.getElementById("TopbarSiteApp");
            const TopbarLinks = TopbarSiteApp.querySelector('.sm-topbar-links');

            const toggleLinks = TopbarSiteApp.querySelector('.sm-toggle-links');
            toggleLinks.addEventListener("click", ()=>{
                TopbarLinks.classList.toggle("st-active");
            });

            const rrLinks = TopbarLinks.querySelectorAll(".nav-link");
            rrLinks.forEach(link=>{
                link.addEventListener("click", ()=>{
                    TopbarLinks.classList.remove("st-active");
                });
            });

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
        }, 
        galeria: ()=> {
            
            const lightbox = (img)=>{

                const rrLightbox = document.querySelectorAll('.sm-lightbox-app');
                rrLightbox.forEach(lightbox=>lightbox.remove());

                const lightbox = document.createElement("div");
                lightbox.classList.add("sm-lightbox-app");

                lightbox.innerHTML = `
                <div class="sm-backdrop-lightbox">
                    <button class="sm-close-lightbox">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="sm-lightbox-container">
                    <img src="${img.src}">
                </div>`;
                
                document.body.append(lightbox);

                const backdrop  = lightbox.querySelector(".sm-backdrop-lightbox");
                const close = lightbox.querySelector(".sm-close-lightbox");

                backdrop.addEventListener("click", ()=>{
                    lightbox.remove();
                });

                close.addEventListener("click", ()=>{
                    lightbox.remove();
                });
            }
            
            const rrImages = document.querySelectorAll(`img[data-action="sm-show-lightbox"]`);
            console.log(rrImages);
            rrImages.forEach(img=>{
                img.addEventListener("click", ()=>{
                    lightbox(img);
                });
            });
        }
    }
}

window.addEventListener('DOMContentLoaded', ()=>{

    SitioInicioSeminarios.ini();

});