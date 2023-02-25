const txt = document.getElementById('txt')

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

let diaMes = fecha.getDate()
let año = fecha.getFullYear();

txt.innerText =  `${diaSemana}, enero ${diaMes}, ${año}`


