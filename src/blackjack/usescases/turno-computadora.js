import {pedirCarta,valorCarta,crearCartaHtml} from "./";


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement}  puntosHTML puntos html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas 
 *  @param {Array<string>} deck
 */

export const turnoComputadora = (puntosMinimos, puntosHtml, divCartasComputadora, deck =[]) => {

    if(!puntosMinimos) throw new Error("puntosMinimos son necesarios")
    if(!puntosHtml) throw Error("Argumento puntosHtml es necesario")

    let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHtml.innerText = puntosComputadora

    // creaCarta
    const imgCarta = crearCartaHtml(carta)
    divCartasComputadora.append(imgCarta)


    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};