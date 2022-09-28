import * as chistes from "./data/humorAPI";
import * as app from "./models/app"

const botonChiste = document.querySelector('.newJoke');

botonChiste.addEventListener('click',()=>{
    botonChiste.disabled = true

    chistes.obtenerChisteRandom().then(chiste =>{
        /* let palabrasClave = chiste.split(" ").slice(2,4).join(" "); */
        let palabrasClave = chiste.keywords;
        chistes.traducirKeys(palabrasClave).then(obj =>{
            console.log(obj);
            chistes.getImagenPorChiste(obj["responseData"].translatedText).then(url=>{
                app.chisteHTML(chiste.chiste,url);
                botonChiste.disabled=false;
            });    
        })
    })

})