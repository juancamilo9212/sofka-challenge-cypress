/// <reference types="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { autenticacion } from "../Pages/autenticacionPage"
import {horasTrabajadas } from "../Pages/horasTrabajadasPage"

Given ('el sofkiano visita la pagina de OurSofka',()=>{
    autenticacion.abreOurSofka()
    })

When ('el usuario da click en el {string}',(boton)=>{
horasTrabajadas.clickEnBoton(boton)
})

Then ('el usuario va a ver las horas registradas dependiendo del {string}',(boton)=>{
horasTrabajadas.seListanLasHoras(boton)
})

When ('el usuario da click en el selector de fechas',()=>{
horasTrabajadas.clickEnSelectorFechas()
})

And ('el usuario escoge un rango de fechas',()=>{
horasTrabajadas.seleccionarRangoFechas()
})

Then ('el usuario va a ver las horas registradas',()=>{
horasTrabajadas.lasHorasSonListadas()
})

When ('el usuario diligencia la informacion',()=>{
horasTrabajadas.escogeUnaFecha()
horasTrabajadas.DescribeLaActividad()
horasTrabajadas.IngresaLasHora()

})

And ('el usuario da click en el boton de adicionar',()=>{
horasTrabajadas.clickEnAdicionar()
})

Then ('el usuario ve que se crea un registro',()=>{
cy.reload()  
})

When ('el usuario da click en el boton de editar',()=>{
horasTrabajadas.clickEnEditar()
})

And ('el usuario realiza un cambio',()=>{
horasTrabajadas.realizarCambio()
})

And ('el usuario da click en guardar',()=>{
horasTrabajadas.clickEnGuardar()
})

Then ('el usuario ve que el registro fue modificado',()=>{
    cy.reload()
})

When ('el usario da click en e boton eliminar',()=>{
horasTrabajadas.clickEnEliminar()
})

And ('el usuario da click en el boton de confirmacion',()=>{
horasTrabajadas.confirmarEliminacion()
})

Then ('el usuario ve que el registro fue borrado',()=>{
    cy.reload()
})

