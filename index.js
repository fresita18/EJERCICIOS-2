let primerJugador = true
let listaCasillas=[]

function devolverCasilla(row, col) {
    const pos = (row * 3) + col
    return listaCasillas[pos]
}
function crearCasillas(){
    for(let i=0; i< 3; i++){
        for(let i=0; i<3; j++){
            
                listaCasillas.push({
                    simbolo : null,
                    showSymbol : false})
        }
       
    }
}
function ponerSimbolosEnLasCasillas(){
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++ )
        {
            const but = document.getElementById(i+"_"+j)
            const casillas = devolverCasilla(i,j)
            if(casillas.showSymbol)
            {
                btn.innerHTML =casilla["simbolo"];
                (casilla["simbolo"]=="X")? btn.setAttribute("style", "backgorund-color: pink"):
                btn.setAttribute("style", "backgorund-color: blue light")
            }
            else
            btn.innerHTML = "UL"
        }
    }
}
let termino = false;
function casillaOnclick(row,col){
    if(termino) return;

    constcasilla1 = devolverCasilla(row,col);
    if(casilla1.showSymbol) return;
    if(primerJugador)
    {
        casilla1.simbolo ="X"
        casilla1.showSymbol =true;
        primerJugador = false; 
    } else{
        casilla1.simbolo = "O"
        casilla1.showSymbol = true;
        primerJugador = true;
    }
    ponerSimbolosEnLasCasillas()
    verificarGanador()
}
function secuenciaGanador(status) {
    termino = true;

    let mensaje = (!status)? "El ganador es el jugador " + ((!PrimerJugador)? "1":"2") : "Empate";
    const result = document.createElement("div");
    result.innerHTML = mensaje;
    result.setAttribute("class", "card")
    root.appendChild(result);
}

function Completo() {
    for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(!devolverCasilla(i,j).showSymbol) return false;
        }
    }
    return true;
}

function verificarGanador() {
    // caso diagonales
    let g = true;
    for(let i = 0; i<3; i++){
        let esNull = (devolverCasilla(i,i).simbolo == null && devolverCasilla(i,i).simbolo == null)
        g = devolverCasilla(i,i).simbolo == devolverCasilla(i+1,i+1).simbolo && !esNull
        if(!g) break;
        if(g && i == 1) {secuenciaGanador(0); return;}
    }

    g = true;
    for(let i = 0; i<2; i++){
        let esNull = (devolverCasilla(0+i,2-i).simbolo == null && devolverCasilla(1+i,1-i).simbolo == null)
        g = devolverCasilla(0+i,2-i).simbolo == devolverCasilla(1+i,1-i).simbolo && !esNull
        if(!g) break;
        if(g && i == 1) {secuenciaGanador(0); return;}
    }

    // caso horizontal
    g = true;
    for(let row = 0; row<3; row++){
        for(let col = 0; col<2; col++){
            let esNull = (devolverCasilla(row,col).simbolo == null && devolverCasilla(row,col).simbolo == null);
            g = devolverCasilla(row,col).simbolo == devolverCasilla(row,col+1).simbolo && !esNull;
            if(!g) break;
            if(g && col == 1) {secuenciaGanador(0); return;}
        }
    }
    

    // caso vertical
    g = true;
    for(let col = 0; col<3; col++){
        for(let row = 0; row<2; row++){
            let esNull = (devolverCasilla(row,col).simbolo == null && devolverCasilla(row+1,col).simbolo == null)
            g = devolverCasilla(row,col).simbolo == devolverCasilla(row+1,col).simbolo && !esNull
            if(!g) break;
            if(g && row == 1) {secuenciaGanador(0); return;}
        }
    }

    if(esCompleto()) {
        secuenciaGanador(1);
    }
}

const root = document.getElementsByTagName("body")[0];
function main(){
    crearCasillas();
    ponerSimbolosEnLasCasillas();
}

main()