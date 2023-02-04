//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt')

//creamos un objeto de fecha
let fecha = new Date();

let numDiaSemana = fecha.getDay()
console.log( numDiaSemana)
let diaSemana =""

if( numDiaSemana == 0){
    diaSemana = 'domingo'
}
else if( numDiaSemana == 1){
    diaSemana = 'lunes'
}
else if( numDiaSemana == 2 ){
    diaSemana = 'martes'
}
else if( numDiaSemana == 3 ){
    diaSemana = 'miercoles'
}
else if( numDiaSemana == 4 ){
    diaSemana = 'jueves'
}
else if( numDiaSemana == 5 ){
    diaSemana = 'viernes'
}
else{
    diaSemana = 'sabado'
}


//obtenemos el numero del dia del mes
let diaMes = fecha.getDate()

//obtenemos el numero del año actual
let año = fecha.getFullYear();

//mostramos texto en el span (variante interpolacion)
txt.innerText =  `${diaSemana}, enero ${diaMes}, ${año}`

// ${ nombreVariable }
