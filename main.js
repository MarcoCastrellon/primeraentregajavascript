let nota1 = Number( prompt("Ingrese su nota"));
let nota2 = Number( prompt("Ingrese su nota"));
let nota3 = Number( prompt("Ingrese su nota"));

class cuatrimestre {
    constructor (nota1, nota2, nota3) {
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
    }

    promediar () {
        const resultado = Math.round( (this.nota1 + this.nota2 + this.nota3) / 3 );
        if (resultado >= 7) {
            document.write(`Usted aprobo el cuatrimestre con un promedio de ${resultado}`)
        } else if (resultado < 7) {
            document.write(`Usted desaprobo el cuatrimestre con un promedio de ${resultado}`)
        }else {
            document.write(`Usted desaprobo el cuatrimestre con un promedio de ${resultado}`)
        }
    }
}


const notaCuatrimestre = []

 notaCuatrimestre.push(new cuatrimestre(nota1, nota2, nota3))
console.log(notaCuatrimestre)

 for( const total of notaCuatrimestre ) {
     total.promediar()
    
 }

 const beca = notaCuatrimestre.forEach(item => {
    resultado = (item.nota1 + item.nota2 + item.nota3) / 3;

    if (resultado >=9) {
        document.write(`<br> Gano una beca por su premedio de ${resultado}`)
    }
 })