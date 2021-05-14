export class utilidades{

    diaDeHoy(){
    var dia
    const now=new Date()
    dia=now.getDate()/*+'/'+(now.getMonth()+2)+'/'+now.getFullYear()*/
    return dia
    }
    
    fechaDeHoy(){
        const hoy=new Date().getTime()
        return hoy
   }


   EscogerFechaAleatoria(){
    const hoy=new Date()
    var diaAleatorio=this.enteroAleatorio(1,10)
    let dia=this.restarDias(hoy,diaAleatorio)
    return dia
   }

   restarDias(fecha,dias) {
    var resultado = new Date(fecha);
    resultado.setDate(resultado.getDate() - dias);
    return resultado.getDate()
  }
   
   adicionarDias(fecha,dias) {
       var resultado = new Date(fecha);
       resultado.setDate(resultado.getDate() - dias);
       return resultado.getTime()
     }
   
     escogerFechaInicial(fecha){
       let fechainicial
       let hoy
       switch(fecha){
           case('Hoy'):fechainicial=this.fechaDeHoy()
           break
           case('Esta semana'):
           hoy=new Date()
           hoy.getDate()
           fechainicial=this.adicionarDias(hoy,7)
           break
           case('Este mes'):
           hoy=new Date()
           hoy.getDate()
           fechainicial=this.adicionarDias(hoy,30)
           break
       }
       return fechainicial
   }
   
   enteroAleatorio(min, max) {
       return Math.floor(Math.random() * (max - min)) + min;
     }
}
export const util=new utilidades