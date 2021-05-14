import { util } from "../Pages/utilidades"


  const tiposDeEntrada=['Vacaciones','Incapacidad'
        ,'No facturable','Permiso','Sin Asignacion','Normal'
        ,'Extra','Disponible']

export class apiPage{

    listarHorasLaboradas(fecha){
        cy.request({
            method:'GET',
            url:Cypress.env('apiUrl')+'workdone/getWorkDoneBetweenDates?startDate='
            +util.escogerFechaInicial(fecha)+'&endDate='+util.fechaDeHoy(),
            headers:{'uid': 'g8jKZO61FATsTFhq0S42Lcm1Qgp1'}
        }).as('listarHoras')
    }

    validarCodigoDeRespuesta(codigo){
        cy.get('@listarHoras').then(respuesta=>{
            cy.log('Las horas laboradas fueron '+respuesta.body.days[0].totalHours)
            expect(respuesta.status).to.equal(codigo)
        })
    }

    crearUnRegistroValido(){
        
        cy.fixture('registro.json').then(request=>{
            request.date=util.fechaDeHoy()
            request.minutes=util.enteroAleatorio(0,59)
            request.hoursType=tiposDeEntrada[util.enteroAleatorio(0,tiposDeEntrada.length)]
            request.hours=util.enteroAleatorio(0,23)
            cy.request({
                method:'POST',
                url:Cypress.env('apiUrl')+'workdone/register/',
                headers:{'uid': 'g8jKZO61FATsTFhq0S42Lcm1Qgp1'},
                body:request
            }).as('registroNuevo')
        })
    }

    validarRegistroExitoso(){
        cy.get('@registroNuevo').then(respuesta=>{
            expect(respuesta.status).to.equal(200)
        })
    }

    tomarIdDelRegistro(){
    cy.get('@listarHoras').then(respuesta=>{
        cy.wrap(respuesta.body.days[0].workDoneList[0].id).as('id')
    })
    }

    modificarUnRegistro(){
        cy.get('@id').then(id=>{
            cy.fixture('registro.json').then(request=>{
                request.date=util.fechaDeHoy()
                request.minutes=util.enteroAleatorio(0,59)
                request.hoursType=tiposDeEntrada[util.enteroAleatorio(0,tiposDeEntrada.length)]
                request.hours=util.enteroAleatorio(0,23)
            cy.request({
                method:'POST',
                url:Cypress.env('apiUrl')+'workdone/edit/'+id,
                headers:{'uid': 'g8jKZO61FATsTFhq0S42Lcm1Qgp1'},
                body:request
            }).as('registroModificado')
        })
    })
}

    validarModificacion(){  
        cy.get('@registroModificado').then(respuesta=>{
            expect(respuesta.status).to.equal(200)
        })
    }

    eliminarUnRegistro(){
        cy.get('@id').then(id=>{
            cy.request({
                method:'DELETE',
                url:Cypress.env('apiUrl')+'workdone/delete/'+id,
                headers:{'uid': 'g8jKZO61FATsTFhq0S42Lcm1Qgp1'},
            }).as('registroEliminado')
        })
    }

    validarEliminacion(){
        cy.get('@registroEliminado').then(respuesta=>{
            expect(respuesta.status).to.equal(200)
        })
    }
    //verifyAssertion.....refreshtoken........peticion de firebase con body con formato.......esto genera el idtoken .....Buscar firebase docs 
    
}
export const api=new apiPage