/// <reference types="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { api } from "../Pages/apiPage"

Given ('un usuario quiere ver las horas laboradas',()=>{
cy.log('El usuario desea ver las horas registradas')    
})

When ('el usuario envia la peticion al back end segun la {string}',(fecha)=>{
api.listarHorasLaboradas(fecha)
})

Then ('el usuario vera un {int} de respuesta',(codigo)=>{
api.validarCodigoDeRespuesta(codigo)
})

Given ('un usuario desea crear un registro',()=>{
cy.log('El usuario desea crear un registro') 
})

When ('el usuario envia la peticion POST valida',()=>{
api.crearUnRegistroValido()
})

Then ('el usuario vera el registro creado con exito',()=>{
api.validarRegistroExitoso()
})

Given ('un usuario desea modificar un registro',()=>{
cy.log('El usuario desea modificar un registro') 
api.listarHorasLaboradas('Hoy')
})

When ('el usuario envia la peticion POST para editar',()=>{
api.tomarIdDelRegistro()
api.modificarUnRegistro()
})

Then ('el usuario vera el registro modificado con exito',()=>{
api.validarModificacion()
})

Given ('un usuario desea eliminar un registro',()=>{
cy.log('El usuario desea eliminar un registro')
api.listarHorasLaboradas('Hoy')
})

When ('el usuario envia la peticion DELETE para eliminar',()=>{
api.tomarIdDelRegistro()
api.eliminarUnRegistro()
})

Then ('el usuario vera el registro eliminado con exito',()=>{
api.validarEliminacion()
})