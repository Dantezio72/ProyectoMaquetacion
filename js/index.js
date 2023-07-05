// MANA

const isla = document.querySelector('#isla')
const pantano = document.querySelector('#pantano')
const montaña = document.querySelector('#montaña')
const bosque = document.querySelector('#bosque')
const llanura = document.querySelector('#llanura')

pantano.style.display = 'none'
montaña.style.display = 'none'
bosque.style.display = 'none'
llanura.style.display = 'none'

function showHide(escenarios)
{
    if( escenarios == 'pantano'){
        isla.style.display = 'none'
        pantano.style.display = 'flex'
        montaña.style.display = 'none'
        bosque.style.display = 'none'
        llanura.style.display = 'none'
    }
    else if( escenarios == 'montaña' ){
        isla.style.display = 'none'
        pantano.style.display = 'none'
        montaña.style.display = 'flex'
        bosque.style.display = 'none'
        llanura.style.display = 'none'
    }
    else if( escenarios == 'bosque' ){
        isla.style.display = 'none'
        pantano.style.display = 'none'
        montaña.style.display = 'none'
        bosque.style.display = 'flex'
        llanura.style.display = 'none'
    }
    else if( escenarios == 'llanura' ){
        isla.style.display = 'none'
        pantano.style.display = 'none'
        montaña.style.display = 'none'
        bosque.style.display = 'none'
        llanura.style.display = 'flex'
    }
    else if( escenarios == 'isla' ){
        isla.style.display = 'flex'
        pantano.style.display = 'none'
        montaña.style.display = 'none'
        bosque.style.display = 'none'
        llanura.style.display = 'none'
    }
}

// PLANESWALKER

const nissa = document.querySelector('#nissa')
const chandra = document.querySelector('#chandra')
const arlinn = document.querySelector('#arlinn')
const ugin = document.querySelector('#ugin')

chandra.style.display = 'none'
arlinn.style.display = 'none'
ugin.style.display = 'none'

function ocultarMostrar(planeswalker)
{
    if(planeswalker == 'chandra'){
        nissa.style.display = 'none'
        chandra.style.display = 'flex'
        arlinn.style.display = 'none'
        ugin.style.display = 'none'
    }
    else if( planeswalker == 'arlinn' ){
        nissa.style.display = 'none'
        chandra.style.display = 'none'
        arlinn.style.display = 'flex'
        ugin.style.display = 'none'
    }
    else if( planeswalker == 'ugin' ){
        nissa.style.display = 'none'
        chandra.style.display = 'none'
        arlinn.style.display = 'none'
        ugin.style.display = 'flex'
    }
    else if( planeswalker == 'nissa' ){
        nissa.style.display = 'flex'
        chandra.style.display = 'none'
        arlinn.style.display = 'none'
        ugin.style.display = 'none'
    }
}