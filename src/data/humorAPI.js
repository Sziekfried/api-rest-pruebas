const urlJokesRandom = "https://api.humorapi.com/jokes/random?";
const apiKey = "d27913e5fece4499bcec539129a829d9"

const urlImagesJoke = "https://source.unsplash.com/random/?"
import { chistes } from "./jokes";

const urlTraductor = "https://api.mymemory.translated.net/get?"
const traduccion = "es|en"
/**
 * 
 * @returns {string} Retorna un chiste
 */
const obtenerChisteRandom = async () => {
  try {
    let response = await fetch(`${urlJokesRandom}api-key=${apiKey}`, {
        method: "GET",
      });
      if (response.ok){
        return await response.json()
      }else{
        throw 'Error al obtener Chiste'
      }
  } catch (error) {
    let nuevoChiste = obtenerChisteLocal(chistes)
    return nuevoChiste
  }
};
/**
 * 
 * @param {string} keys palabras clave del chiste para buscar imagenes relacionadas
 * @returns {string} url de la imagen encontrada por UNSPLASH
 */
const getImagenPorChiste = async(keys) => {
    console.log(keys);
    let res = await fetch (`${urlImagesJoke}${keys}`,{
        method:"GET"
    })
    console.log(res);
    let url = res.url;
    return url
}


/**
 * 
 * @param {Object[]} listaChistesLocales chistes almacenados de manera local en caso de que la Api remota falle
 * @returns {Object} retorna un chiste aleatorio de la lista de chistes local
 */
const obtenerChisteLocal = (listaChistesLocales) => {
    let indice = Math.floor(Math.random()*listaChistesLocales.length)
    return listaChistesLocales[indice];
}


const traducirKeys = async(palabrasEspañol) =>{
    let res = await fetch(`${urlTraductor}q=${palabrasEspañol}&langpair=${traduccion}`,{
        method:"GET"
    })
    return await res.json();
}
export {
    obtenerChisteRandom,
    traducirKeys,
    getImagenPorChiste
}


