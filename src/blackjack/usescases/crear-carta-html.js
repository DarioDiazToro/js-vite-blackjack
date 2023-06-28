
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} retorna la imagen de la carta
 */

 export const crearCartaHtml=(carta)=>{

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta')
    
    return imgCarta
}
