/// <reference types="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { autenticacion } from "../Pages/autenticacionPage"


Given ('el sofkiano visita la pagina de OurSofka',()=>{
autenticacion.abreOurSofka()
})

When ('el usuario se utentica como colaborador',()=>{
autenticacion.esColaborador()
})

Then ('el usuario ve el home page de OurSofka',()=>{
autenticacion.abreElHomepage()
autenticacion.visualTesting()
})