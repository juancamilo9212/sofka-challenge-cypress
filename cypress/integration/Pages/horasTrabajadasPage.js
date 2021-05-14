import { util } from "../Pages/utilidades"

function simularDataBotones(peticion,fecha){

    cy.server()
    cy.route('GET',Cypress.env('apiUrl')
    +'workdone/getWorkDoneBetweenDates?startDate='
    +fecha+'&endDate='+util.fechaDeHoy(),peticion)
    cy.reload()

}

export class horasTrabajadasPage{

    clickEnBoton(boton){
    cy.contains(boton).click()
    }

    seListanLasHoras(boton){
    var archivo
    switch(boton){
    case('Hoy'):archivo='horas.json'
    break
    case('Esta semana'):archivo='horas2.json'
    break
    case('Este mes'):archivo='horas2.json'
    }
    cy.fixture(archivo).then(peticion=>{
    const fechaInicial=util.escogerFechaInicial(boton)
    //peticion.date=fechaInicial
    simularDataBotones(peticion,fechaInicial)
    cy.get('table').should('be.visible')
})
    }

    clickEnSelectorFechas(){
    cy.get('#datePickerSelect').click()
    }

    seleccionarRangoFechas(){
    const hoy=new Date()
    const diaHoy=hoy.getDate()
    const diaInicial=util.EscogerFechaAleatoria()   
    cy.get('[role="grid"]').find('[role="gridcell"]')
    .then(dia=>{
        cy.wrap(dia).contains(diaInicial).click({force:true})
        cy.wrap(dia).contains(diaHoy).click({force:true})
    })
    }

    lasHorasSonListadas(){
    const fechaInicial=util.escogerFechaInicial('Esta semana')
    simularDataBotones('horas2.json',fechaInicial)
    cy.get('table').should('be.visible')
    }

    escogeUnaFecha(){
    let fecha=util.diaDeHoy()
    cy.get('#date-group').find('[class="input-group-append"]').click()
    cy.get('[role="grid"]').contains(fecha).click()
    
    }

    DescribeLaActividad(){
    cy.get('#description').type('Test automatizados')
    }

    IngresaLasHora(){
    cy.get('#hours').find('[placeholder="HH"]').type(util.enteroAleatorio(1,23))
    cy.get('#hours').find('[placeholder="MM"]').type(util.enteroAleatorio(1,59))
    }

   clickEnAdicionar(){
    cy.get('#time-group').find('[type="submit"]').click({force:true})
    cy.wait(3000)
   }

   clickEnEditar(){
    cy.get('.id-Delete').find('span').eq(0).click()
   }

   realizarCambio(){
    cy.get('#descriptionEdit').clear().type('Pruebas de API con Postman')
   }

   clickEnGuardar(){
    cy.contains('Guardar').click()
    cy.wait(3000)
   }

   clickEnEliminar(){
    cy.get('.id-Delete').find('span').eq(1).click()
    
   }

   confirmarEliminacion(){
    cy.contains('Eliminar').click()
    cy.wait(3000)
   }

}

export const horasTrabajadas=new horasTrabajadasPage