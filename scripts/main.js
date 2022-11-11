const btn_anime_texte = document.querySelectorAll(".btn");
const texte_anime = document.querySelector(".texte-anime");

let time = 4_000;

let slide = 0;
btn_anime_texte[slide].classList.add("active");

let animation = setInterval(anime,time);

btn_anime_texte.forEach(btn =>{
    btn.addEventListener("click",() =>{
        slide = parseInt(btn.getAttribute("data-texte"));
        clearInterval(animation);

        animation = setInterval(anime,time);

        texte_anime.style.transform = `rotateX(${90 * slide}deg)`;
        for(let i = 0; i < btn_anime_texte.length; i++){
            let anime = btn_anime_texte[i];
            anime.classList.remove("active");
        }
        btn.classList.add("active");
    })
})

function anime() {

    slide += 1;
        if(slide > btn_anime_texte.length - 1){
            slide = 0;
        }
        for(let i = 0; i < btn_anime_texte.length; i++){
            let anime = btn_anime_texte[i];
            anime.classList.remove("active");
        }
        texte_anime.style.transform = `rotateX(${90 * slide}deg)`;
        btn_anime_texte[slide].classList.add("active");
    
}